import Dexie from 'dexie';
import { derived } from 'svelte/store';
import authUser from '$lib/stores/authUser';

const DEXIE_VERSION = 1;
const SCHEMA_DEFINITION = {
	workOrders: 'id, customerAssetList, strategyTask, status, workOrderSteps, updatedAt', // * = https://dexie.org/docs/MultiEntry-Index
	lookupTables: 'id, name, data'
};

// App cannot continue with browser without indexedDB support
if (!('indexedDB' in window)) {
	console.error(
		"This system doesn't support IndexedDB - Please update your the OS on your device."
	);
}

/**
 * This store will hold the Dexie db instance
 * The db name will depend on the Logged in user's company name
 *
 */
const dexieDb = derived(authUser, ($authUser, set) => {
	if ($authUser) {
		if (!$authUser.companyName) {
			throw new Error('Logged in user have no `companyName`');
		}

		// Create Indexed DB database and assign it to store
		const db = new Dexie($authUser.companyName);
		db.version(DEXIE_VERSION).stores(SCHEMA_DEFINITION);
		set(db);
		// console.log('dexxe:', $authUser);
	} else {
		set(null);
	}
});

/**
 * Value is true if the `dexieDb` store is ready to use
 */
const dbIsReady = derived(dexieDb, ($dexieDb) => $dexieDb instanceof Dexie);

export { dexieDb, dbIsReady };
