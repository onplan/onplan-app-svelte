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

/**
 * Default Filter fields selected values
 */
export const DEFAULT_FILTER_FIELDS_SETTING = {
	myJobsFilter: true,
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
