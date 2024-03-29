/**
 * Client browser connectivity states:
 *
 * - isOnline,
 * - isActuallyOnline
 * - isWorkingOffline
 * - workingOfflineSince
 * - workingOfflineSinceTimer
 * ...
 */

import { readable, writable, derived, get } from 'svelte/store';
import { toast, closeToast } from '$lib/utils/toast-notification';

const ONLINE_TOAST_ID = 'online-mode';
const OFFLINE_TOAST_ID = 'offline-mode';

// Todo: Add the ff: state for more meaningful states
// `wantToWorkOffline` - True if user explicitly click `Work Offline`, and not because internet connection is gone.

/** ---------------------	`workingOfflineSince`, `workingOfflineSinceTimer  and `isWorkingOffline` store  initialization ---------------------*/

const WORKING_OFFLINE_SINCE_KEY = 'workingOfflineSince';
let workingOfflineSinceTimerInterval = null;

let persistedWOS = localStorage.getItem(WORKING_OFFLINE_SINCE_KEY);

/**
 * Timestamp of `start of working offline`, `null` if user is working Online
 */
const workingOfflineSince = writable(persistedWOS ? JSON.parse(persistedWOS) : null);

/**
 * Distance between `start of working offline timestamp` and `current timestamp`
 *
 * Format: `dd:hh:mm:ss`
 *
 * READONLY
 */
const workingOfflineSinceTimer = derived(
	workingOfflineSince,
	($workingOfflineSince, set) => {
		// clear the currently running Timer
		clearInterval(workingOfflineSinceTimerInterval);
		workingOfflineSinceTimerInterval = null;

		// Run Timer
		if ($workingOfflineSince) {
			workingOfflineSinceTimerInterval = setInterval(() => {
				// Get todays date and time
				const now = new Date().getTime();

				// Find the distance between now an the count down date
				const distance = now - $workingOfflineSince;

				// Time calculations for days, hours, minutes and seconds
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);

				// prettier-ignore
				set(`${days > 0 ? `${days}d` : ''} ${hours > 9 ? `${hours}` : `0${hours}`}:${minutes > 9 ? `${minutes}` : `0${minutes}`}:${seconds > 9 ? `${seconds}` : `0${seconds}`}`);
			}, 1000);
		} else {
			set(null);
		}
	},
	false
);

/**
 * True if user is working offline.
 *
 * Automatically becomes true if user's internet connection was gone/unstable [`isActuallyOnline` = false]
 * This is dependent to `workingOfflineSince` store value.
 *
 * READONLY
 */
const isWorkingOffline = derived(workingOfflineSince, ($workingOfflineSince) =>
	Boolean($workingOfflineSince)
);

/**
 * Set the App to Offline mode.
 *
 */
const workOffline = (internetGone = false) => {
	if (!get(isWorkingOffline)) {
		const now = Date.now();
		localStorage.setItem(WORKING_OFFLINE_SINCE_KEY, JSON.stringify(now));
		workingOfflineSince.set(now);

		toast({
			heading: 'You are working Offline now',
			id: OFFLINE_TOAST_ID,
			description:
				internetGone === true
					? 'There is no internet connection. Check your wifi/data connection.'
					: null,
			type: 'error',
			position: 'bottom-right',
			boostrapIcon: 'bi-cloud-slash',
			removeAfter: internetGone === true ? 10000 : 5000
		});

		// Force to close Online toast if floating
		closeToast(ONLINE_TOAST_ID);
	}
};

/**
 * Set App to Online mode.
 *
 * Deletes saved `workingOfflineSince` data in the localstorage
 */
const workOnline = () => {
	clearWorkingOfflineSince();

	toast({
		heading: 'You are working Online now',
		id: ONLINE_TOAST_ID,
		type: 'success',
		position: 'bottom-right',
		boostrapIcon: 'bi-cloud-fill',
		removeAfter: 5000
	});

	// Force to close Offline toast if floating
	closeToast(OFFLINE_TOAST_ID);
};

const clearWorkingOfflineSince = () => {
	workingOfflineSince.set(null);
	localStorage.removeItem(WORKING_OFFLINE_SINCE_KEY);
};

/** ---------------------	`isOnline` and `isActuallyOnline` store initialization ---------------------*/

const isOnlineDefaultValue = window.navigator.onLine;
const isActuallyOnlineDefaultValue = isOnlineDefaultValue;

/**
 * `_isActuallyOnline` Writtable store for the `isActuallyOnline` Custom store preparation
 *
 */
const _isActuallyOnline = writable(isActuallyOnlineDefaultValue);

/**
 * True if connected to wifi/data AND have real internet connection via http checking.
 *
 * READONLY
 */
const isActuallyOnline = {
	// convert writable store to a custom store
	// to restrict updating state from any part of the app.
	subscribe: _isActuallyOnline.subscribe,

	/**
	 * Utility function for checking/updating the latest state of "isActuallyOnline" by triggering a server endpoint
	 * Downside: this function will be slow if invoked syncronously with slow internet connection or if the server is slow
	 *
	 * @returns {Promise<boolean>} - True if has real internet connection
	 */
	reCheck: async () => {
		const realOnline = await fetch(`/api/check-online-status?${new Date().getTime()}`, {
			mode: 'no-cors'
		})
			.then(() => true) // successful request -> response connection , means internet is available
			.catch(() => false); // no real internet, something went wrong, server is down

		// Update isActuallyOnline
		_isActuallyOnline.set(realOnline);

		return realOnline;
	}
};

isActuallyOnline.subscribe((newIsActuallyOnline) => {
	// Force the user to Work Offline if disconnected to internet
	if (!newIsActuallyOnline) {
		workOffline(true);
	}
});

if (isOnlineDefaultValue) {
	// Initial checking for real internet connection
	// no need to await since we will not use the returned value
	isActuallyOnline.reCheck();
}

/**
 * True if connected to wifi/data REGARDLESS if have real internet connection.
 *
 * READONLY
 */
const isOnline = readable(isOnlineDefaultValue, function start(set) {
	// try to make it true
	window.addEventListener('online', () => {
		set(true);
		isActuallyOnline.reCheck();
	});
	window.addEventListener('offline', () => {
		set(false);
		_isActuallyOnline.set(false);
	});
});

export {
	// Stores/States
	isOnline,
	isActuallyOnline,
	isWorkingOffline,
	// Offline info ...
	workingOfflineSince,
	workingOfflineSinceTimer,

	// Util functions ...
	workOffline,
	workOnline,
	clearWorkingOfflineSince
};
