<script>
	import PieProgress from '$lib/components/PieProgress.svelte';
	import { ListGroup, ListGroupItem } from 'sveltestrap';

	import { WOLists, isLoadingWOLists } from '$lib/stores/work-order/workorderLists';
	import { asDate, toastFeatureNotAvaiable } from '$lib/utils';

	import WorkOrderStatus from '$lib/components/render/WorkOrderStatus.svelte';
	import WorkOrderClass from '$lib/utils/class/WorkOrderClass';
	import filterFieldsSetting from '$lib/stores/work-order/filterFieldsSetting';
	import { isWorkingOffline } from '$lib/stores/connectivity';
	import { toggleActiveId, activeWOListID } from '$lib/stores/work-order/activeWOListID';
	import { WORK_ORDER_STATUS } from '$lib/utils/constants';

	let filteredWOsInfo = '';
	// Update `filteredWOsInfo` when `$filterFieldsSetting` store changes
	$: {
		let infoMessage = '';

		if (!$isWorkingOffline) {
			const ffs = $filterFieldsSetting;

			infoMessage += ffs.statusFilter?.map((status) => WORK_ORDER_STATUS[status]).join(' / ');
			infoMessage += ffs.myJobsFilter ? ' jobs' : ' from other crews';
		} else {
			infoMessage = 'saved on device';
		}

		filteredWOsInfo = `Showing ${$WOLists.length} ${infoMessage}`;
	}
</script>

<!--
  @component

  Work Order Lists

  Contains all viewable WOs based on the filter settings
-->
<div style="min-height: 100vh !important;">
	<ListGroup flush class="mt-md-1">
		{#each $WOLists as wo (wo.id)}
			{@const woData = new WorkOrderClass(wo)}
			{@const {
				totaStepsCount,
				p1DefectsCount,
				p2DefectsCount,
				p3DefectsCount,
				completedStepsCount
			} = woData.getStepsCountDetails()}
			{@const woIsActive = $activeWOListID === wo.id}

			<ListGroupItem action active={woIsActive} on:click={() => toggleActiveId(wo.id)}>
				<div class="work-order mt-2">
					<div class="clearfix" style="height: 40px;">
						<WorkOrderStatus
							status={wo.status}
							completionMode={wo?.customer?.isWorkOrderFinalisationRequired}
						/>

						<p class="float-end">
							<span class="wo-date">
								<i class="bi bi-clock" />
								<small> {asDate(woData.getDisplayDate())} </small>
							</span>
							<PieProgress percentage={wo.progress.percent} statusColor={woData.getStatusColor()} />
						</p>
					</div>

					<p class="wo-title my-0">{wo.workOrderNumber}</p>

					<div>{woData.getTaskDetails()}</div>

					<div class="mt-1">
						<i class="bi bi-gear-fill text-muted" />
						<strong>{wo.customerAssetList.assetFloc}</strong>
						- {wo.customerAssetList.assetName}
					</div>

					<div class="clearfix mt-1">
						<div class="badge bg-secondary bg-opacity-25 text-dark rounded-1 mt-1">
							{wo.modelNumber}
						</div>
						<div class="float-end mt-1">
							<small class=""> {wo.customer.customerSite} </small>
						</div>
					</div>

					<div class="clearfix mt-1">
						<div class="float-start">
							<i class="bi bi-check-square-fill text-success bg-white" />
							<small class="ms-1">{completedStepsCount}/{totaStepsCount}</small>

							<span class="ms-2 badge rounded-pill bg-danger p1to3">P1</span>
							<small class="ms-1">{p1DefectsCount}</small>

							<span class="ms-2 badge rounded-pill bg-warning p1to3">P2</span>
							<small class="ms-1">{p2DefectsCount}</small>

							<span class="ms-2 badge rounded-pill bg-secondary p1to3">P3</span>
							<small class="ms-1">{p3DefectsCount}</small>
						</div>
						<div class="float-end">
							<!--  `wo.saved` wont exist if saved, or will with saved = 1 temporary ('saved' does not get returned from server) -->
							{#if wo.saved !== null && Number(wo.saved) === 0}
								<!-- WO Not Synced -->
								<i class="bi bi-cloud-slash text-danger" />
							{:else}
								<!-- WO Synced to server-->
								<i class="bi bi-cloud-check-fill text-success text-opacity-75" />
							{/if}
						</div>
					</div>
				</div>
			</ListGroupItem>
		{:else}
			<p class="text-center mt-3">No matching records found</p>
		{/each}
	</ListGroup>

	<div class="text-center border-top mt-2 py-4 px-3">
		<p>{filteredWOsInfo}</p>

		<!-- Todo: Make this `Load More` functional -->
		<button
			type="button"
			class="btn btn-primary btn-sm mx-auto px-3"
			style="--bs-btn-border-radius: 1rem;"
			disabled={$isWorkingOffline}
			on:click={toastFeatureNotAvaiable}
		>
			{$isWorkingOffline ? 'Go online to load more work orders' : 'Load More'}
		</button>
	</div>
</div>

<style>
	.wo-date {
		position: relative;
		right: -38px;
		top: -20px;
		font-weight: 400;
		size: 10px;
		font-size: 80%;
	}

	.wo-title {
		font-size: 12px;
		font-weight: bold;
		color: #307dff;
	}

	:global(li.active) .wo-title {
		color: #d7e7f0;
	}

	.p1to3 {
		font-size: 10px;
		padding: 3px 5px 2px 5px !important;
	}
</style>
