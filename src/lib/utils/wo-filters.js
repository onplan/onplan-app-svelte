import authUser from '$lib/stores/authUser';
import filterFieldsSetting from '$lib/stores/work-order/filterFieldsSetting';
import { get } from 'svelte/store';
import { WORK_ORDER_STATUS } from './constants';

/**
 * Filter down work orders to ones the user is assigned to
 *
 * @param {Object} workOrder current work order to run filter on
 * @returns {boolean} true if user is assigned to work order, else false
 */
const filterIsAssignedJob = (workOrders, ignoreFilter = false) => {
	const ffs = get(filterFieldsSetting);
	const _authUser = get(authUser);

	if (ffs.myJobsFilter || ignoreFilter) {
		return workOrders.users.some((user) => user.id === _authUser.id);
	}

	return true;
};

/**
 * Filter down work orders based on selected Asset
 *
 * @param {Object} workOrder current work order to run filter on
 * @returns {boolean} true if no selected  Asset Id in filter OR if the selected asset filter id is equal to the current WO asset ID
 */
const filterAssets = (currentWorkOrder) => {
	const ffs = get(filterFieldsSetting);
	const selectedAssetId = ffs.assetFilter;

	if (Number(selectedAssetId) === 0 || typeof selectedAssetId === 'undefined') {
		return true;
	}

	return currentWorkOrder.customerAssetList.id === Number(selectedAssetId);
};

/**
 * Filter down work orders based on the status
 *
 * @param {Object} workOrder current work order to run filter on
 * @returns {boolean} true if work order status is within the selected statuses in the WO filter, else false
 */
const filterStatus = (currentWorkOrder) => {
	const ffs = get(filterFieldsSetting);
	const selectedStatuses = ffs.statusFilter;

	if (!selectedStatuses.length) {
		return true;
	}

	return selectedStatuses.find((status) => currentWorkOrder.status === WORK_ORDER_STATUS[status]);
};

/**
 * Filter down work orders based on scheduled date
 *
 * @param {Object} workOrder current work order to run filter on
 * @returns {boolean} true if work order scheduledAt is within the scheduled TO and FROM dates
 */
const filterDates = (currentWorkOrder) => {
	const ffs = get(filterFieldsSetting);

	const scheduledTo = ffs.scheduledToDate; // string
	const scheduledFrom = ffs.scheduledFromDate; // string
	const scheduledToDate = new Date(scheduledTo);
	const scheduledFromDate = new Date(scheduledFrom);
	const currentWorkOrderDate = new Date(currentWorkOrder.scheduledAt);

	const isSameDay = (dateToCheck) =>
		dateToCheck.getDate() === currentWorkOrderDate.getDate() &&
		dateToCheck.getMonth() === currentWorkOrderDate.getMonth() &&
		dateToCheck.getFullYear() === currentWorkOrderDate.getFullYear();

	// if (scheduledTo === '' && scheduledFrom === '') {
	if (!scheduledTo && !scheduledFrom) {
		return true;
	}

	if (scheduledTo === '') {
		return currentWorkOrderDate > scheduledFromDate || isSameDay(scheduledFromDate);
	}

	if (scheduledFrom === '') {
		return currentWorkOrderDate < scheduledToDate || isSameDay(scheduledToDate);
	}

	return (
		(currentWorkOrderDate > scheduledFromDate || isSameDay(scheduledToDate)) &&
		(currentWorkOrderDate < scheduledToDate || isSameDay(scheduledToDate))
	);
};

/**
 * Filter work order using all filter switches
 *
 * @param {Array} workOrders Array of work orders to filter
 * @returns {Promise<Array>} Filtered work orders
 */
const filterWorkOrders = async (workOrders) => {
	const filters = [filterDates, filterAssets, filterStatus, filterIsAssignedJob];

	if (typeof workOrders?.length === 'undefined') {
		throw new Error('filterWorkOrders(): workOrders parameter is required');
	}

	/**
	 * @dev this is a spicy way of doing allWorkOrders.filter().filter().....
	 * NOTE: we manually pass workorders into the filters, to preserve other parameters of the filter
	 */
	const filteredWorkOrders = filters.reduce(
		(accumulator, currentFilter) => accumulator.filter((workorder) => currentFilter(workorder)),
		workOrders
	);

	return filteredWorkOrders;
};

export { filterDates, filterAssets, filterStatus, filterIsAssignedJob, filterWorkOrders };
