import { INDEX_PAGE_TABS } from '$lib/utils/constants';
import { readonly, writable } from 'svelte/store';

/*
 * Active tab in the index page
 *
 * Writtable store
 *
 * PRIVATE
 */
const _activeIndexPageTab = writable(INDEX_PAGE_TABS.workorders);

/**
 * Change tab to `workorders`
 *
 */
const changeToWorkordersTab = () => {
	_activeIndexPageTab.set(INDEX_PAGE_TABS.workorders);
};

/**
 * Change tab to `outstanding_defects`
 *
 */
const changeToOutstandingDefectTab = () => {
	_activeIndexPageTab.set(INDEX_PAGE_TABS.outstanding_defects);
};

/**
 * Active tab in the index page.
 * `workorders` or `outstanding_defects`
 *
 * READONLY
 */
const activeIndexPageTab = readonly(_activeIndexPageTab);

export { activeIndexPageTab, changeToWorkordersTab, changeToOutstandingDefectTab };
