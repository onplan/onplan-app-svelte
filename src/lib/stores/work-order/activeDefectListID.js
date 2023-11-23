import { get, readonly, writable } from 'svelte/store';

/*
 * Active Outstanding defect ID in the list
 *
 * Writtable store
 *
 * PRIVATE
 */
const _activeDefectListID = writable(null);
// const _activeDefectListID = writable(213); // temp with  value

/**
 * Set active Defect ID  `activeDefectListID`
 *
 * @param {null | number} - Defect ID
 */
const setActiveDefectId = (id) => {
	if (typeof id === 'number' || id === null) {
		_activeDefectListID.set(id);
	} else {
		console.error(`setActiveId: Allow only Defect ID(number) or null`);
	}
};

/**
 * Toggle active Defect ID `activeDefectListID`
 *
 * If current active Defect id is same as the `id` param, set to null
 *
 * @param {null | number} id - Defect ID
 */
const toggleActiveDefectId = (id) => {
	const currentActiveId = get(_activeDefectListID);
	if (currentActiveId === id) {
		setActiveDefectId(null);
	} else {
		setActiveDefectId(id);
	}
};

/**
 * Active OutstandingDefect ID in the list
 *
 * READONLY
 */
const activeDefectListID = readonly(_activeDefectListID);

export { activeDefectListID, setActiveDefectId, toggleActiveDefectId };
