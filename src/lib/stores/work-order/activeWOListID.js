import { get, readonly, writable } from 'svelte/store';

/*
 * Active Work order ID in the list
 *
 * Writtable store
 *
 * PRIVATE
 */
const _activeWOListID = writable(null);

/**
 * Set active Work order ID  `activeWOListID`
 *
 * @param {null | number} - Work order ID
 */
const setActiveId = (id) => {
	if (typeof id === 'number' || id === null) {
		_activeWOListID.set(id);
	} else {
		console.error(`setActiveId: Allow only Work Order ID(number) or null`);
	}
};

/**
 * Toggle active Work order ID `activeWOListID`
 *
 * If current active WO id is same as the `id` param, set to null
 *
 * @param {null | number} id - Work order ID
 */
const toggleActiveId = (id) => {
	const currentActiveId = get(_activeWOListID);
	if (currentActiveId === id) {
		setActiveId(null);
	} else {
		setActiveId(id);
	}
};

/**
 * Active Work order ID in the list
 *
 * READONLY
 */
const activeWOListID = readonly(_activeWOListID);

export { activeWOListID, setActiveId, toggleActiveId };
