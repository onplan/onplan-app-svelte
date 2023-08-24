<script>
	import PieProgress from '$lib/components/PieProgress.svelte';
	import { ListGroup, ListGroupItem } from 'sveltestrap';

	import { WOLists, isLoadingWOLists } from '$lib/stores/work-order/workorderLists';
	import { asDate } from '$lib/utils';

	import WorkOrderStatus from '$lib/components/render/WorkOrderStatus.svelte';
	import WorkOrderClass from '$lib/utils/class/WorkOrderClass';
</script>

<!--
  @component

  Work Order Lists

  Contains all viewable WOs based on the filter settings
-->
<ListGroup flush class="mt-md-1">
	<!-- CONTINUE HERE ....... -->
	{#each $WOLists as wo (wo.id)}
		{@const woData = new WorkOrderClass(wo)}
		{@const {
			totaStepsCount,
			p1DefectsCount,
			p2DefectsCount,
			p3DefectsCount,
			completedStepsCount
		} = woData.getStepsCountDetails()}

		<ListGroupItem>
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
						<i class="bi bi-check-square-fill text-success text-opacity-75" />
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
		<!-- content here -->
	{/each}
</ListGroup>

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

	.p1to3 {
		font-size: 10px;
		padding: 3px 5px 2px 5px !important;
	}
</style>
