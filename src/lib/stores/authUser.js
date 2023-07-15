/**
 * Authenticated user store
 *
 */

import { writable } from 'svelte/store';

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
	},

	/**
	 * Logout user. Delete auth user data.
	 */
	logout: () => set(null)
};

export default authUser;
