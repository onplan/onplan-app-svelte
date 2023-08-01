import { derived, writable } from 'svelte/store';
import { swCommunicator, SW_ACTIONS } from '$lib/utils/sw-communicator';

/**
 * Cache storage name.
 */
const cacheName = writable(null);

/**
 * Offline assets files and  metadata from service worker thread.
 *
 */
const offlineAssets = writable({
	files: [
		// {
		// 	path: '...',
		// 	isCached: false
		// }
	],
	metadata: {
		total: 0,
		cached_total: 0,
		cached_percentage: '0',
		canGoOffline: false
	}
});

/**
 * True if user can go offline safely.
 *
 * It depends to `Offline assets` if already cached 100% by the service worker.
 * If `Offline assets` not cached properly, allowing `Offline mode` feature will run amok
 */
const canGoOffline = derived(
	offlineAssets,
	($offlineAssets) => $offlineAssets?.metadata?.canGoOffline || false,
	false
);

// Listen to SW latest info and update stores
swCommunicator.on(SW_ACTIONS.getOfflineAssetsInfo, (data) => {
	// console.log('received latest offline assets info......');
	cacheName.set(data.cacheName);
	offlineAssets.set(data.offlineAssets);
});

/**
 * Request the latest info from service worker.
 *
 * This will update `offlineAssets` store value
 */
const requestOfflineLatestInfo = () => {
	swCommunicator.requestToSw(SW_ACTIONS.getOfflineAssetsInfo);
};

offlineAssets.subscribe((latest) => {
	// console.log(`canGoOffline: ${latest?.metadata?.canGoOffline}`);
	const cannot = !latest?.metadata?.canGoOffline;

	if (cannot) {
		// Re-request if `canGoOffline` is false
		setTimeout(requestOfflineLatestInfo, 2000);
	}
});

// Initial offline info req
requestOfflineLatestInfo();

export {
	// Stores/States
	cacheName,
	offlineAssets,
	canGoOffline,

	// Util functions
	requestOfflineLatestInfo
};
