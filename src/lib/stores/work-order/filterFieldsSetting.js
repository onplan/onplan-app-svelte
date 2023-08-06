/**
 * Work orders filter Fields Setting
 *
 */

import { writable } from 'svelte/store';
import { DEFAULT_FILTER_FIELDS_SETTING } from '$lib/utils/constants';

const FILTER_FIELDS_SETTING_KEY = 'filterFieldsSetting';

let persistedSetting = localStorage.getItem(FILTER_FIELDS_SETTING_KEY);

// create a `writtable store`
const filterFieldsSetting = writable(
	persistedSetting ? JSON.parse(persistedSetting) : DEFAULT_FILTER_FIELDS_SETTING
);

// Update localstorage once updated (User applied new filters)
filterFieldsSetting.subscribe((newSettings) => {
	if (newSettings) {
		// console.log('New filterFieldsSetting: ', newSettings);
		localStorage.setItem(FILTER_FIELDS_SETTING_KEY, JSON.stringify(newSettings));
	}
});

export default filterFieldsSetting;
