import { derived } from 'svelte/store';
import { WOLists } from './workorderLists';

/**
 * Array of all defects from filtered Work Orders
 *
 */
const outstandingDefectLists = derived(WOLists, ($WOLists) =>
	$WOLists
		.map((wo) => wo.workOrderSteps)
		.flat()
		.map((step) => step.defects)
		.filter((defects) => defects.length)
		.flat()
);

export { outstandingDefectLists };
