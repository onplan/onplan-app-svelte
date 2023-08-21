/**
 * Work orders filter Fields Setting
 *
 */

import { writable } from 'svelte/store';
import { DEFAULT_FILTER_FIELDS_SETTING } from '$lib/utils/constants';

const FILTER_FIELDS_SETTING_KEY = 'filterFieldsSetting';

/**
 * Filter Fields Setting.
 *
 * Object that contains Switches states for `myJobsFilter`, `assetFilter`, `statusFilter`, `scheduledFromDate` and `scheduledToDate`
 *
 * Writtable store
 */
const filterFieldsSetting = writable(DEFAULT_FILTER_FIELDS_SETTING, (set) => {
	// Initialization
	let persistedSetting = localStorage.getItem(FILTER_FIELDS_SETTING_KEY);
	if (persistedSetting) {
		set(JSON.parse(persistedSetting));
	}
});

// Update localstorage once updated (User applied new filters)
filterFieldsSetting.subscribe((newSettings) => {
	if (newSettings) {
		// console.log('New filterFieldsSetting: ', newSettings);
		localStorage.setItem(FILTER_FIELDS_SETTING_KEY, JSON.stringify(newSettings));
	}
});

export default filterFieldsSetting;
