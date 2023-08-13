/**
 * Authenticated user store
 *
 */

import { writable } from 'svelte/store';

import { clearWorkingOfflineSince } from '$lib/stores/connectivity';
import { toast } from '$lib/utils/toast-notification';

const AUTH_USER_KEY = 'advantageLoggedInUser';

let persistedUser = localStorage.getItem(AUTH_USER_KEY);

// create a `writtable store` for the `Custom store`
const { subscribe, set } = writable(persistedUser ? JSON.parse(persistedUser) : null);

// Update localstorage once authUser store is updated
subscribe((authUser) => {
	localStorage.setItem(AUTH_USER_KEY, authUser ? JSON.stringify(authUser) : '');
});

/**
 * Authenticated Advantage user data.
 * If the store value is `null`, the user is `guest`.
 *
 * [ This is a `Custom store` ]
 *
 * ```js
 *
 * // How to use in component
 *
 * if($authUser) {
 * 	// Authenticated user
 * } else {
 * 	// Guest user
 * }
 *
 * // Login user
 * authUser.login(userData);
 *
 * // Logout user
 * authUser.logout();
 *
 * ```
 *
 */
const authUser = {
	subscribe,

	/**
	 * Login and save authenticated user data
	 *
	 * @param {object} newUserData
	 */
	login: (newUserData) => {
		if (!newUserData) {
			throw new Error('Cannot login empty user data');
		}
		set(newUserData);

		// Welcome message
		toast({
			heading: 'Your now logged in',
			description: `Welcome back ${newUserData?.displayName || ''} !`,
			type: 'success',
			position: 'bottom-right',
			boostrapIcon: 'bi-person-check-fill',
			removeAfter: 8000
		});
	},

	/**
	 * Logout user.
	 *
	 * Delete auth user data locally.
	 */
	logout: () => {
		clearWorkingOfflineSince();
		set(null);
	}
};

export default authUser;
