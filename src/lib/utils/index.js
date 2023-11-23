/**
 *
 * Utility functions
 *
 * Export named functions that are reusable.
 *
 * As much as posible write your function as `Pure Function` and not as `Impure Function` to avoid bugs
 * Read more: https://www.geeksforgeeks.org/understanding-the-difference-between-pure-and-impure-functions-in-javascript/
 *
 *
 * Usage example: import { nukeAppCache } from '$lib/utils'
 *
 */

import { cacheName } from '$lib/stores/sw';
import { get } from 'svelte/store';
import { MONTH_NAMES } from './constants';
import { toast } from './toast-notification';

/**
 * Clear applicaion cache,
 * Unregister active service worker
 * and reload the App
 *
 */
export const nukeAppCache = async () => {
	const appCacheName = get(cacheName);

	console.info('Nuking App cache.....');
	await caches.open(appCacheName).then((cache) => {
		cache.keys().then((keys) => {
			for (const key of keys) {
				cache.delete(key);
			}
		});
	});

	console.info('Unregistering SW .....');
	// Clear serviceworker after cache manual delete risk bug: "The FetchEvent for "http:xxx" resulted in a network error response: an object that was not a Response was passed to respondWith()."
	if ('serviceWorker' in navigator) {
		const registrations = await navigator.serviceWorker.getRegistrations();

		// returns installed service workers
		if (registrations.length) {
			for (const registration of registrations) {
				/**
				 * SW quirks: unregistering a SW will ultimately fail if
				 * the Browser have atleast one opened tab that has same domain name with the App.
				 * (E.g. `www.appDomain.com/workorder`, `www.appDomain.com/some/resources/logo.png`)
				 *
				 * If unregistering fails, and when the app reloads. Offline ASSETS will not be re-cached.
				 *
				 */
				registration.unregister();
			}
		}
	}

	// TODO: Add deleting/clearing of local caches

	// Reload the App
	// Once reloaded, this will start a new SW session and will cache needed asset files for offline mode.
	window.location.reload();
};

/**
 * Format Datetime to Date
 *
 * @param {string} dateTime
 * @returns {string} Formatted date E.g.: `03 Sep 2021`
 */
export const asDate = (dateTime) => {
	if (dateTime) {
		const jsDate = dateTime.split(/[- T]/);
		const month = MONTH_NAMES[parseInt(jsDate[1] - 1, 10)];

		return `${jsDate[2]} ${month.MM} ${jsDate[0]}`;
	}

	return '';
};

/**
 * Format Datetime to time
 *
 * @param {string} dateTime
 * @returns  {string} Formatted time E.g.: `06:14`
 */
export const asTime = (dateTime) => {
	if (dateTime) {
		const jsTime = [];
		jsTime.push(dateTime.substr(11, 2));
		jsTime.push(dateTime.substr(14, 2));

		return `${jsTime[0]}:${jsTime[1]}`;
	}

	return '';
};

/**
 * Function to truncate text if length is too long to display
 *
 * @param {string} str String to truncate
 * @param {number} length Length
 * @param {string} ending Ending text
 * @returns {string} Truncated version
 */
export const textTruncate = (str, length = 100, ending = '...') => {
	if (str && str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	}

	return str;
};

/**
 * TEMP function
 */
export const toastFeatureNotAvaiable = () => {
	toast({
		heading: 'To do Feature',
		description: `This feature still not added to App.`,
		type: 'info',
		position: 'top-right',
		removeAfter: 3000
	});
};

// /**
//  * Return true if user can fetch latest WO lists from the server
//  *
//  */
// export const shouldUpdateWorkOrders = () => {
// 	if (!isInitialWorkOrderLoad) {
// 		return true;
// 	}

// 	isInitialWorkOrderLoad = false;

// 	const justLoggedIn = document.referrer.includes('/login.html');

// 	if (justLoggedIn) {
// 		return true;
// 	}

// 	const now = Number(new Date());
// 	const tenMinutes = 1000 * 60 * 10;
// 	const lastIndexLoad = Number(localStorage.getItem(LAST_INDEX_LOAD));

// 	if (!lastIndexLoad || now > lastIndexLoad + tenMinutes) {
// 		preSelectWorkOrder(true); // what is preSelectWorkOrder ?

// 		return true;
// 	}

// 	preSelectWorkOrder(false);

// 	return false;
// }
