import { dbIsReady, dexieDb } from '$lib/stores/dexieDb';
import { get, writable, readonly } from 'svelte/store';
import { isWorkingOffline } from '../connectivity';
import sampleWoLists from '$lib/temp/sampleWoLists';
import { filterWorkOrders } from '$lib/utils/wo-filters';

/**
 * Work Order Lists (Writable)
 *
 * Filtered WO lists from cached(Indexed db) / server.
 *
 * Pivate Writtable store - should only be updated inside this module file
 * (dont allow other parts of the app to update this store)
 */
const _WOLists = writable([], (set) => {
	// Set the value from cached WOs from the Indexed db on initialization
	if (get(dbIsReady)) {
		const $dexieDb = get(dexieDb);
		$dexieDb.workOrders.toArray().then(async (cachedWOLists) => {
			set(await filterWorkOrders(cachedWOLists));
		});
	} else {
		console.error(`dexieDb is not ready, cannot initialize 'WOLists' store`);
	}
});

/**
 * Updated to true if loading/fetching of WO lists is ongoing.
 *
 * Pivate Writable store
 */
const _isLoadingWOLists = writable(false);

/**
 * Load Work Orders.
 *
 * If Online: 	Fetch work orders from `builder` server using ajax.
 * If Offline:	Pull from cache(Indexed db).
 *
 * This also filter WOs based on filter settings and store the final WO lists in `_WOLists`/`WOLists` store.
 *
 * Utility function
 *
 * @returns {Promise<void>}
 */
const loadWorkOrders = async () => {
	try {
		// Avoid `loadWorkOrders` called many times
		if (get(_isLoadingWOLists)) {
			// alert('Already have ongoing loadWorkOrders...');
			return;
		}

		_isLoadingWOLists.set(true);
		let __newWOLists = [];
		const $dexieDb = get(dexieDb);

		if (get(isWorkingOffline)) {
			// OFFLINE mode, update `WOListsWritable` from Indexed db cached

			__newWOLists = await $dexieDb.workOrders.toArray();

			console.warn('fetched from Indexed db: Offline mode');
		} else {
			// ONLINE mode, update `WOListsWritable` from server via ajax

			// TODO: Continue for Online mode
			// if(shouldUpdateWorkOrders()) {
			//  ajax call here...
			//  __newWOLists = woListsFromServer; // ....;
			// } else {
			// }

			// Todo: TEMP code for testing (to be removed after testing)
			__newWOLists = sampleWoLists;

			// Update Indexed db with the updated work order lists
			$dexieDb.workOrders.bulkPut(__newWOLists);

			console.warn('fetched from sample data: Online mode');
		}

		// Delay for testing
		// await new Promise((r) => setTimeout(r, 5000));

		// Set the `_WOLists` store with filtered new lists
		_WOLists.set(await filterWorkOrders(__newWOLists));

		_isLoadingWOLists.set(false);
	} catch (error) {
		console.error({
			context: 'loadWorkOrders',
			error
		});
	}
};

// Make `writable` stores to become `readonly` to disable other modules to update Private writable store values

/**
 * Work Order Lists
 *
 * Filtered WO lists from cached(Indexed db) / server
 *
 * Update the lists by calling `loadWorkOrders()` utility function.
 *
 * Readonly
 */
const WOLists = readonly(_WOLists);

/**
 * True if loading/fetching of WO lists is ongoing
 *
 */
const isLoadingWOLists = readonly(_isLoadingWOLists);

export { WOLists, isLoadingWOLists, loadWorkOrders };
