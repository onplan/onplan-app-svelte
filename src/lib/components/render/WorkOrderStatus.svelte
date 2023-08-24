<script>
	import { WORK_ORDER_COMPLETION_MODE, WORK_ORDER_STATUS } from '$lib/utils/constants';

	export let status;
	export let completionMode;

	let awaitingText = 'AWAITING APPROVAL';
	let completedText = 'APPROVED';
	let deniedText = 'DISAPPROVED';

	if (completionMode === WORK_ORDER_COMPLETION_MODE.finalization) {
		awaitingText = 'AWAITING FINALISATION';
		completedText = 'FINALIZED';
		deniedText = 'DRAFT';
	}
</script>

{#if status === WORK_ORDER_STATUS.notStarted}
	<div class="badge rounded-pill badge-default text-dark">NOT STARTED</div>
{:else if status === WORK_ORDER_STATUS.inProgress}
	<div class="badge rounded-pill badge-warning">IN PROGRESS</div>
{:else if status === WORK_ORDER_STATUS.complete}
	<span class="badge rounded-pill badge-success">COMPLETE</span>
{:else if status === WORK_ORDER_STATUS.disapproved}
	<span class="badge rounded-pill badge-danger">{deniedText}</span>
{:else if status === WORK_ORDER_STATUS.awaitingApproval}
	<span class="badge rounded-pill badge-warning">{awaitingText}</span>
{:else if status === WORK_ORDER_STATUS.approved}
	<span class="badge rounded-pill badge-success">{completedText}</span>
{:else}
	<span class="badge rounded-pill badge-warning">{awaitingText}</span>
{/if}

<style>
	.badge-default {
		background-color: #ddd;
	}

	.badge-danger {
		background-color: rgba(244, 67, 54) !important;
		color: #fff;
	}

	.badge-warning {
		background-color: rgba(255, 179, 0) !important;
		color: #fff;
	}

	.badge-success {
		background-color: rgba(76, 175, 82) !important;
		color: #fff;
	}
</style>
