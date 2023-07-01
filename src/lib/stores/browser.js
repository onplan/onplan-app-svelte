/**
 * Client browser states:
 *
 * - isOnline
 * - isActuallyOnline
 */

import { readable, writable } from 'svelte/store';
import { browser } from '$app/environment';

// "isActuallyOnline" store writable initialization
const { subscribe, set: setIsActuallyOnline } = writable(true);

/**
 * True if connected to wifi/data AND have real internet connection via http checking.
 * READONLY
 *
 */
const isActuallyOnline = {
	// convert writable store to a custom store
	// to restrict updating state from any part of the app.
	subscribe,

	/**
	 * Utility function for checking/updating the latest state of "isActuallyOnline" by triggering a server endpoint
	 * Downside: this function will be slow if invoked syncronously with slow internet connection or if the server is slow
	 *
	 * @returns {boolean} - True if has real internet connection
	 */
	reCheck: async () => {
		if (!browser) return false;

		const realOnline = await fetch(`/api/check-online-status?${new Date().getTime()}`, {
			mode: 'no-cors'
		})
			.then(() => true) // successful request -> response connection , means internet is available
			.catch(() => false); // no real internet, something went wrong, server is down

		// Update isActuallyOnline
		setIsActuallyOnline(realOnline);

		return realOnline;
	}
};

// Initial checking for real internet connection
// no need to await since we will not use the returned value
isActuallyOnline.reCheck();

/**
 * True if connected to wifi/data REGARDLESS if have real internet connection.
 * READONLY
 *
 */
const isOnline = readable(true, function start(set) {
	if (browser) {
		// try to make it true
		window.addEventListener('online', () => {
			set(true);
			isActuallyOnline.reCheck();
		});
		window.addEventListener('offline', () => {
			set(false);
			setIsActuallyOnline(false);
		});
	}
});

export { isOnline, isActuallyOnline };
