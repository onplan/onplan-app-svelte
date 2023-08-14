import { dbIsReady, dexieDb } from '$lib/stores/dexieDb';
import { derived } from 'svelte/store';
import { isActuallyOnline } from '$lib/stores/connectivity';
import {
	loadPriority,
	loadRecommendedAction,
	loadStatus,
	loadCrackStatus
} from '$lib/api-calls/lookUpTables';
import sameLookupTablesData from '$lib/temp/sameLookupTablesData'; // TODO: TO BE DELETED, only for testing

const LOOK_UP_TABLES_IS_LOADED_KEY = 'lookUpTablesIsLoaded';

/**
 * True if Lookuptables data is cached in dexieDb
 */
let lookUpTablesIsLoaded = Boolean(window.localStorage.getItem(LOOK_UP_TABLES_IS_LOADED_KEY));

/**
 * Svelte store that holds all data from `lookupTables` IndexedDB Object
 *
 */
const lookUpTables = derived(
	// Dependent in the following store values
	[dbIsReady, dexieDb, isActuallyOnline],
	async ([$dbIsReady, $dexieDb, $isActuallyOnline], set) => {
		if ($dbIsReady) {
			const lookupData = $dexieDb.lookupTables ? await $dexieDb.lookupTables.toArray() : [];

			if (lookUpTablesIsLoaded && lookupData.length) {
				// Set the store value using the cached data from dexieDb
				set(lookupData);
			} else {
				// Fetch fresh lookupData from server if online
				if ($isActuallyOnline) {
					// TODO: uncomment when using real server
					// // Do api calls in parallel for better performance
					// const [priorities, recommendedAction, status, crackStatus] = await Promise.all([
					// 	loadPriority(),
					// 	loadRecommendedAction(),
					// 	loadStatus(),
					// 	loadCrackStatus()
					// ]);

					// const freshLookupData = [
					// 	{ id: 1, name: 'priorities', data: priorities },
					// 	{ id: 2, name: 'recommendedAction', data: recommendedAction },
					// 	{ id: 3, name: 'status', data: status },
					// 	{ id: 4, name: 'crackStatus', data: crackStatus }
					// ];

					// TODO: Only for testing, delete after
					const freshLookupData = JSON.parse(JSON.stringify(sameLookupTablesData));

					// Set the store value
					set(freshLookupData);

					// Replace the lookupTables of latest data
					// ids are arbitrary, its only being used to replace the data if this function is called multiple times
					$dexieDb.lookupTables.bulkPut(freshLookupData);

					// Update flags
					lookUpTablesIsLoaded = true;
					window.localStorage.setItem(LOOK_UP_TABLES_IS_LOADED_KEY, 1);
				}
			}
		} else {
			set([]);
		}
	},
	[] // store default value
);

/**
 * Defect priorities
 */
const priorities = derived(
	lookUpTables,
	($lookUpTables) => $lookUpTables?.find((data) => data.name === 'priorities')?.data || []
);

/**
 * Defect recommended actions
 */
const recommendedActions = derived(
	lookUpTables,
	($lookUpTables) => $lookUpTables?.find((data) => data.name === 'recommendedAction')?.data || []
);

/**
 * Defect statuses
 */
const statuses = derived(
	lookUpTables,
	($lookUpTables) => $lookUpTables?.find((data) => data.name === 'status')?.data || []
);

/**
 * Defect crack statuses
 */
const crackStatuses = derived(
	lookUpTables,
	($lookUpTables) => $lookUpTables?.find((data) => data.name === 'crackStatus')?.data || []
);

export { lookUpTables, priorities, recommendedActions, statuses, crackStatuses };
