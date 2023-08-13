import { writable, derived } from 'svelte/store';

// `apiRequestCount` writable, to be use for custom store
const { subscribe: subscribeReqCount, set: setReqCount, update: updateReqCount } = writable(0);

/**
 * Number of ongoing api requests within the app.
 *
 * [Custom store]
 */
const apiRequestCount = {
	subscribe: subscribeReqCount,
	increment: () => updateReqCount((count) => count + 1),
	decrement: () => updateReqCount((count) => count - 1),
	reset: () => setReqCount(0)
};

/**
 * True if have 1 or more api Requests ongoing
 *
 * Can be use to show a spinner in a component
 */
const haveOngoingRequest = derived(apiRequestCount, ($apiRequestCount) => $apiRequestCount > 0);

export { apiRequestCount, haveOngoingRequest };
