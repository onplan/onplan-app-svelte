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

	// Reload the App
	// Once reloaded, this will start a new SW session and will cache needed asset files for offline mode.
	window.location.reload();
};
