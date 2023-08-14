// Lookup tables data API calls

import apiRequest from '$lib/utils/apiRequest';

const loadPriority = async () => {
	const priorityRequest = await apiRequest('defectpriority/getAll');

	if (!priorityRequest.result) {
		throw new Error(priorityRequest.message);
	}

	return priorityRequest.data;
};

const loadRecommendedAction = async () => {
	const recommendedActionRequest = await apiRequest('defectrecommendedaction/getAll');

	if (!recommendedActionRequest.result) {
		throw new Error(recommendedActionRequest.message);
	}

	return recommendedActionRequest.data;
};

const loadStatus = async () => {
	const statusRequest = await apiRequest('defectstatus/getAll');

	if (!statusRequest.result) {
		throw new Error(statusRequest.message);
	}

	return statusRequest.data;
};

const loadCrackStatus = async () => {
	const statusRequest = await apiRequest('defectcrackstatus/getAll');

	if (!statusRequest.result) {
		throw new Error(statusRequest.message);
	}

	return statusRequest.data;
};

export { loadPriority, loadRecommendedAction, loadStatus, loadCrackStatus };
