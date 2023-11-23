export const WORK_ORDER_STATUS = {
	approved: 'Approved',
	awaitingApproval: 'Awaiting Approval',
	awaiting_markup: 'Awaiting Markup',
	complete: 'Complete',
	disapproved: 'Disapproved',
	inProgress: 'In Progress',
	notStarted: 'Not Started',
	incomplete: 'Incomplete'
};

export const WORK_ORDER_STEP_STATUS = {
	complete: 'Complete',
	inProgress: 'In Progress',
	notStarted: 'Not Started',
	notDone: 'Not Done'
};

export const WORK_ORDER_COMPLETION_MODE = {
	approval: 1, // 1 is regular Approval mode
	finalization: 2 // 2 is Annotation Mode.
};

export const DEFECT_PRIORITY = {
	urgent: 1,
	high: 2,
	medium: 3,
	low: 4
};

export const MONTH_NAMES = [
	{ id: 1, MM: 'Jan', MMM: 'January' },
	{ id: 2, MM: 'Feb', MMM: 'February' },
	{ id: 3, MM: 'Mar', MMM: 'March' },
	{ id: 4, MM: 'Apr', MMM: 'April' },
	{ id: 5, MM: 'May', MMM: 'May' },
	{ id: 6, MM: 'Jun', MMM: 'June' },
	{ id: 7, MM: 'Jul', MMM: 'July' },
	{ id: 8, MM: 'Aug', MMM: 'August' },
	{ id: 9, MM: 'Sep', MMM: 'Spetember' },
	{ id: 10, MM: 'Oct', MMM: 'October' },
	{ id: 11, MM: 'Nov', MMM: 'November' },
	{ id: 12, MM: 'Dec', MMM: 'December' }
];

/**
 * Default Filter fields selected values
 */
export const DEFAULT_FILTER_FIELDS_SETTING = {
	myJobsFilter: false, // TODO: return to true
	assetFilter: 0,
	statusFilter: ['notStarted', 'inProgress', 'disapproved'],
	scheduledFromDate: null,
	scheduledToDate: null
};

/**
 * Application path names
 *
 */
export const APP_PATHNAMES = {
	index: '/',
	login: '/login',
	workorder: '/workorder',
	profile: '/profile'
};

export const INDEX_PAGE_TABS = {
	workorders: 'Work Orders',
	outstanding_defects: 'Outstanding Defects'
};
