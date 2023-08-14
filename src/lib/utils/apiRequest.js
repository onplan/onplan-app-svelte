import { get } from 'svelte/store';
import { isActuallyOnline, workOffline } from '$lib/stores/connectivity';
import { PUBLIC_ADVANTAGEURL } from '$env/static/public';
import { apiRequestCount } from '$lib/stores/auxiliary';
import { toast } from './toast-notification';
import authUser from '$lib/stores/authUser';

const skippedRequests = [];

/**
 * Builder is in maintenance mode
 */
const maintenanceMode = () => {
	workOffline();

	// Notify user
	toast({
		id: 'server-maintenance-mode',
		position: 'bottom-right',
		heading: 'Server Maintenance',
		description: `
			Our servers are currently down for maintenance. 
			<br>The App has been placed into offline mode.
			<br>Please try to reconnect in a few minutes.
		`,
		type: 'info'
	});
};

/**
 * Builder is in bad gateway mode
 */
const badGatewayMode = () => {
	workOffline();

	// Notify user
	toast({
		id: 'server-bad-gateway',
		position: 'bottom-right',
		heading: 'Bad Gateway',
		description: `
			Unable to reach OnPlan servers. 
			<br>The App has been placed into Offline mode.
			<br>Please try to reconnect in a few minutes.
		`,
		type: 'info'
	});
};

/**
 * Send AJAX request to Builder server
 *
 * @param {string} requestUri -  Builder server api path
 * @param {Object} variables - Body variables
 * @returns {Promise<Object>} - Reponse
 */
const apiRequest = async (requestUri, variables) => {
	const body = JSON.stringify({
		data: variables
	});

	let result = {};

	try {
		// Get the current `isActuallyOnline` store state
		const isOnline = get(isActuallyOnline);

		if (isOnline) {
			apiRequestCount.increment();
			const response = await fetch(`${PUBLIC_ADVANTAGEURL}/api/appauth/data/${requestUri}`, {
				method: 'post',
				credentials: 'include', // important - 3d files = omit, regular api calls = include
				headers: {
					'Content-Type': 'application/json'
				},
				body
			});

			if (response.status === 503) {
				maintenanceMode();
				return response;
			}

			if (response.status === 502) {
				badGatewayMode();
				return response;
			}

			// Unauthorized
			if (response.status === 401) {
				console.error(`apiRequest.js: Unauthorized`);

				// Force logout and redirect to login page
				authUser.logout();
				return;
			}

			const apiResponse = await response.json();

			if (!!apiResponse.data && !!apiResponse.data.result) {
				console.error(`apiRequest.js: `, apiResponse);

				// Something bad happened - likely not logged in
				window.localStorage.setItem('advantageLastResponseError', JSON.stringify(apiResponse));

				// Force logout and redirect to login page
				authUser.logout();
				return;
			}

			if (
				apiResponse.message !== null &&
				apiResponse.message.toLowerCase().indexOf('login') !== -1
			) {
				console.error(`apiRequest.js: `, apiResponse);

				// Messages like 'App login has expired. Please log back in', 'login error' etc. Not great but it works well enough for now.
				window.localStorage.setItem('advantageLastResponseError', JSON.stringify(apiResponse));

				// Force logout and redirect to login page
				authUser.logout();
				return;
			}

			result = apiResponse;
		} else {
			skippedRequests.push({
				url: requestUri,
				variables
			});
		}
	} catch (err) {
		console.error('apiRequest.js Catched Error: ', err);
	} finally {
		apiRequestCount.decrement();
	}

	return result;
};

export default apiRequest;
