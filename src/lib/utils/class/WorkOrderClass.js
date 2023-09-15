import {
	DEFECT_PRIORITY,
	WORK_ORDER_COMPLETION_MODE,
	WORK_ORDER_STATUS,
	WORK_ORDER_STEP_STATUS
} from '../constants';

/**
 * Class that have methods for extracting data from a Work Order object
 *
 */
export default class WorkOrderClass {
	/**
	 * Initialization
	 *
	 * Class that have methods for extracting data from a Work Order object
	 *
	 * @param {WorkOrderType} wo - Work order object
	 */
	constructor(wo) {
		// if (!wo) {
		// 	throw Error('WorkOrderClass: workorder parameter is required.');
		// }
		/**
		 * Work order object
		 *
		 * @type {WorkOrderType}
		 */
		this.wo = wo;
	}

	/**
	 * Get work order display Date  based on WO's status
	 *
	 * Show scheduled date for not started, start date for in progress and completed date for completed and approved.
	 *
	 * @returns {string} Date time to use
	 */
	getDisplayDate() {
		const wo = this.wo; // reference, make it shorter

		let displayDate;

		switch (wo.status) {
			case WORK_ORDER_STATUS.notStarted:
				displayDate = wo.scheduledAt;

				break;
			case WORK_ORDER_STATUS.inProgress:
				if (wo.startedAt) {
					displayDate = wo.startedAt;
				} else {
					displayDate = wo.scheduledAt;
				}

				break;
			case WORK_ORDER_STATUS.complete:
			case WORK_ORDER_STATUS.approved:
				if (wo.completedAt) {
					displayDate = wo.completedAt;
				} else {
					displayDate = wo.scheduledAt;
				}

				break;
			default:
				displayDate = wo.scheduledAt;

				break;
		}

		return displayDate;
	}

	/**
	 * Get work order status color based on WO's status
	 *
	 * @returns {string} Color
	 */
	getStatusColor() {
		let statusColor = '#ededed';

		switch (this.wo.status) {
			case WORK_ORDER_STATUS.notStarted:
				statusColor = '#ffc107'; // status colors to use

				break;
			case WORK_ORDER_STATUS.inProgress:
				statusColor = '#ffc107'; // status colors to use

				break;
			case WORK_ORDER_STATUS.complete:
			case WORK_ORDER_STATUS.approved:
				statusColor = '#4CAF52'; // status colors to use

				break;
			default:
				statusColor = '#ffc107'; // status colors to use

				break;
		}

		return statusColor;
	}

	/**
	 * Get work order status color class based on WO's status
	 *
	 * @returns {string} Color class
	 */
	getStatusColorClass() {
		let statusColorClass = '';

		switch (this.wo.status) {
			case WORK_ORDER_STATUS.inProgress:
				statusColorClass = 'warning';
				break;
			case WORK_ORDER_STATUS.approved:
				statusColorClass = 'success';
				break;
			case WORK_ORDER_STATUS.complete:
				statusColorClass = 'success';
				break;
			case WORK_ORDER_STATUS.awaitingApproval:
				statusColorClass = 'warning';
				break;
			case WORK_ORDER_STATUS.disapproved:
				statusColorClass = 'danger';

				break;
			default:
				statusColorClass = 'success';

				break;
		}

		return statusColorClass;
	}

	/**
	 * Get work order start button Label based on WO's status
	 *
	 * @returns {string} Label
	 */
	getStartBtnLabel() {
		const wo = this.wo; // reference, make it shorter
		let label = '';

		switch (wo.status) {
			case WORK_ORDER_STATUS.inProgress:
				label = 'Continue Work Order';
				break;
			case WORK_ORDER_STATUS.approved:
				label =
					wo.customer.isWorkOrderFinalisationRequired === WORK_ORDER_COMPLETION_MODE.finalization
						? 'Finalized'
						: 'Approved';
				break;
			case WORK_ORDER_STATUS.complete:
				label = 'Complete';
				break;
			case WORK_ORDER_STATUS.awaitingApproval:
				label =
					wo.customer.isWorkOrderFinalisationRequired === WORK_ORDER_COMPLETION_MODE.finalization
						? 'Awaiting Finalization'
						: 'Awaiting Approval';
				break;
			case WORK_ORDER_STATUS.disapproved:
				label =
					wo.customer.isWorkOrderFinalisationRequired === WORK_ORDER_COMPLETION_MODE.finalization
						? 'Draft'
						: 'Disapproved';
				break;
			default:
				label = 'Start Work Order';
				break;
		}

		return label;
	}

	/**
	 * Get task details
	 *
	 * @returns {string} Task details
	 */
	getTaskDetails() {
		const wo = this.wo; // reference
		let taskDetails = wo.workOrderDescription;

		/**
		 * This is a legacy work around so we don’t have a million
		 * work orders on app showing as “Task Name here - Task Name here”
		 */
		if (wo.taskName?.toLowerCase().trim() !== wo.workOrderDescription?.toLowerCase().trim()) {
			taskDetails = `${wo.taskName} - ${wo.workOrderDescription}`;
		}

		return taskDetails;
	}

	/**
	 * Return WO's steps details count
	 *
	 * @returns {{
	 * 	totaStepsCount : Number,
	 * 	p1DefectsCount: Number,
	 * 	p2DefectsCount: Number,
	 * 	p3DefectsCount: Number,
	 * 	notDoneStepsCount: Number,
	 * 	notStartedStepsCount: Number,
	 * 	inProgressStepsCount: Number,
	 * 	completedStepsCount: Number,
	 * 	remainingSteps: Number
	 * }} Steps count details object
	 *
	 */
	getStepsCountDetails() {
		// return this.wo?.workOrderSteps?.length || 0;
		const wo = this.wo; // reference

		const totaStepsCount = wo.workOrderSteps.length;
		let p1DefectsCount = 0;
		let p2DefectsCount = 0;
		let p3DefectsCount = 0;

		let notDoneStepsCount = 0;
		let notStartedStepsCount = 0;
		let inProgressStepsCount = 0;
		let completedStepsCount = 0;

		for (let i = 0; i < totaStepsCount; i += 1) {
			for (let j = 0; j < wo.workOrderSteps[i].defects.length; j += 1) {
				const { id } = wo.workOrderSteps[i].defects[j].priority;

				switch (id) {
					case DEFECT_PRIORITY.urgent:
						p1DefectsCount += 1;
						break;
					case DEFECT_PRIORITY.high:
						p2DefectsCount += 1;
						break;
					default:
						p3DefectsCount += 1;
						break;
				}
			}

			switch (wo.workOrderSteps[i].status) {
				case WORK_ORDER_STEP_STATUS.notDone:
					notDoneStepsCount += 1;
					break;

				case WORK_ORDER_STEP_STATUS.notStarted:
					notStartedStepsCount += 1;
					break;

				case WORK_ORDER_STEP_STATUS.inProgress:
					inProgressStepsCount += 1;
					break;

				case WORK_ORDER_STEP_STATUS.complete:
					completedStepsCount += 1;
					break;
			}
		}

		const remainingSteps = totaStepsCount - completedStepsCount - notDoneStepsCount;

		return {
			totaStepsCount,

			p1DefectsCount,
			p2DefectsCount,
			p3DefectsCount,

			notDoneStepsCount,
			notStartedStepsCount,
			inProgressStepsCount,
			completedStepsCount,

			remainingSteps
		};
	}

	/**
	 * Get estimated duration
	 *
	 * @returns {number} duration in hours
	 */
	getEstDuration() {
		return parseInt(this.wo.duration, 10);
	}

	/**
	 * Get actual duration
	 *
	 * @returns {number | null} duration in hours
	 */
	getActDuration() {
		if (this.hasStarted()) {
			const completedAt = this.wo.completedAt ? new Date(this.wo.completedAt) : new Date();
			const startedAt = new Date(this.wo.startedAt);

			let duration = parseInt(((completedAt - startedAt) / 1000 / 3600) * 10, 10) / 10;

			// Don't show decimal places above 100
			if (duration >= 100) {
				duration = parseInt(duration, 10);
			}

			return duration;
		} else {
			return null;
		}
	}

	/**
	 * Returns true if workorder already started.
	 * Based on the `startedAt` property
	 *
	 * @returns {boolean}
	 */
	hasStarted() {
		return this.wo.startedAt !== null;
	}

	/**
	 * Returns true if workorder already completed.
	 * Based on the `completedAt` property , Not by `status`
	 *
	 * @returns {boolean}
	 */
	hasCompleted() {
		return this.wo.completedAt !== null;
	}

	// /**
	//  * Description here..
	//  *
	//  * @returns {___} __
	//  */
	// get__() {

	// }
}

/**
 * @typedef {Object} WorkOrderType
 * @property {string} status - Current status:  `Approved`, `Awaiting Approval`, `Awaiting Markup`, `Complete`, `Disapproved`, `In Progress`, `Not Started`, `Incomplete`
 * @property {string} scheduledAt - Datetime WO is scheduled
 * @property {string | null} startedAt - Datetime WO started
 * @property {string | null} completedAt - Datetome WO completed/approved
 * @property {object[]} workOrderSteps - Array of steps object from different WO's operations.
 *
 *
 */
// TODO: Continue all the elements types/structure
