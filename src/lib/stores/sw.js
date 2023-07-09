import { derived, writable } from 'svelte/store';
import { swCommunicator, SW_ACTIONS } from '$lib/utils/sw-communicator';

const cacheName = writable(null);

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

const canGoOffline = derived(
	offlineAssets,
	($offlineAssets) => $offlineAssets?.metadata?.canGoOffline || false,
	false
);

// Listen to SW latest info and update stores
swCommunicator.on(SW_ACTIONS.getOfflineAssetsInfo, (data) => {
	cacheName.set(data.cacheName);
	offlineAssets.set(data.offlineAssets);
});

// helper function
const requestOfflineLatestInfo = () => {
	swCommunicator.requestToSw(SW_ACTIONS.getOfflineAssetsInfo);
};

requestOfflineLatestInfo();

export {
	// Stores
	cacheName,
	offlineAssets,
	canGoOffline,

	// helper functions
	requestOfflineLatestInfo
};
