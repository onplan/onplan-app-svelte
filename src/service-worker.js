/**
 * Read more about Service workers implementation in Svelte:
 * https://kit.svelte.dev/docs/service-workers
 *
 * or
 *
 * Watch "SvelteKit | Service Worker" YT tutorial
 * https://www.youtube.com/watch?v=kVBJKSU7sw8
 *
 */

/// <reference types="@sveltejs/kit" />
import { build, files, version, prerendered } from '$service-worker';
import { SW_ACTIONS, CHANNEL_NAME } from '$lib/utils/sw-communicator';

// Cache storage name
// TODO: concat onplan app release version here...
const CACHE_NAME = `onplan-cache-${version}`;

/**
 * Cache all files the app needs in order to work offline
 *
 */
const OFFLINE_ASSETS = [
	...build, // the app itself (files generated like js,css,etc produced at built time)
	...files, // everything in `static`
	...prerendered // app pages
];

/**
 * Path/Files not to cached
 *
 */
const DONT_CACHE_URLS = [
	'/api/check-online-status'
	// ...
];

/************	Service worker Listeners	*************/

self.addEventListener('install', (event) => {
	console.log('[Service Worker] Installed');

	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE_NAME);
		await cache.addAll(OFFLINE_ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE_NAME) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE_NAME);

		/**
		 * For `OFFLINE_ASSETS` files always be served from the cache if exists
		 *
		 * CACHING STRATEGY: `Cache first, falling back to network`
		 */
		if (OFFLINE_ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname, { ignoreSearch: true });
		}

		/**
		 * For everything else (non-OFFLINE_ASSETS files), try the network first, but fall back to the cache if we're offline
		 *
		 * CACHING STRATEGY: `Cache first, falling back to network`
		 */
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				// Do not cache `DONT_CACHE_URLS` pathnames
				if (!DONT_CACHE_URLS.find((url) => event.request.url.includes(url))) {
					cache.put(event.request, response.clone());
				}
			}

			return response;
		} catch {
			return cache.match(event.request, { ignoreSearch: true });
		}
	}

	event.respondWith(respond());
});

/************	Communicate with the Main thread	*************/

const channel = new BroadcastChannel(CHANNEL_NAME);

/**
 * Listen to Client/Main thread messages
 *
 */
channel.addEventListener('message', async (event) => {
	const {
		data: { fromSW, actionName, payload: requestPayload }
	} = event;

	// message req should be from browser
	if (!fromSW) {
		if (SW_ACTIONS[actionName]) {
			// Trigger Action function
			ACTION_FUNCTIONS[actionName](requestPayload);
		} else {
			console.error(`SW: Action "${actionName}" does not exists`);
		}
	}
});

const sendToMainThread = ({ actionName, payload }) => {
	channel.postMessage({
		fromSW: true,
		actionName,
		payload
	});
};

const ACTION_FUNCTIONS = {
	/**
	 * Return the OFFLINE_ASSETS data
	 *
	 */
	// TODO: throttle?
	async [SW_ACTIONS.getOfflineAssetsInfo]() {
		const cache = await caches.open(CACHE_NAME);

		const total = OFFLINE_ASSETS.length;
		let cached_total = 0;

		// map files to know if each is cached
		const files = await Promise.all(
			OFFLINE_ASSETS.map(async (path) => {
				const isCached = Boolean(await cache.match(path));
				if (isCached) {
					cached_total++;
				}

				return {
					path,
					isCached
				};
			})
		);

		const cached_percentage = ((cached_total / total) * 100).toFixed(2);

		// add metadata to the `offlineAssets` array object
		const metadata = {
			total,
			cached_total,
			cached_percentage,
			canGoOffline: total > 0 && total === cached_total
		};

		sendToMainThread({
			actionName: SW_ACTIONS.getOfflineAssetsInfo,
			payload: {
				cacheName: CACHE_NAME,
				offlineAssets: {
					files,
					metadata
				}
			}
		});
	}
};
