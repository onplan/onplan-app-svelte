<script>
	import RecommendedActionDot from '$lib/components/render/RecommendedActionDot.svelte';
	import authUser from '$lib/stores/authUser';
	import { outstandingDefectLists } from '$lib/stores/work-order/outstandingDefectLists';
	import { WOLists } from '$lib/stores/work-order/workorderLists';
	import { asDate, textTruncate } from '$lib/utils';
	import { ListGroup, ListGroupItem } from 'sveltestrap';

	// console.log('WOListszz: ', $WOLists);

	$: console.log('outstandingDefectLists: ', $outstandingDefectLists);
</script>

<!--
  @component

  Outstanding defect Lists

  Contains all viewable defects based on the filter settings
-->
<div style="min-height: 100vh !important;">
	<ListGroup flush class="mt-md-1">
		{#each $outstandingDefectLists as defect}
			<ListGroupItem action>
				{@const completedBy = $WOLists
					.map((wo) => wo.users)
					.flat(1)
					.find((user) => user.id === Number(defect.workOrderStep?.completedBy))}

				<div style="min-height: 60px">
					<div style="padding-left:6px; padding-bottom: 4px;">
						<RecommendedActionDot recommendedActionName={defect.recommendedAction.name} />
						<span class="float-end me-3" style="color: #aaa">
							<small> {asDate(defect.reportedDate)} </small>
						</span>
					</div>
					<div class="me-3" style="padding-left: 24px; font-weight: 500; margin-top: -3px;">
						<strong>{defect.name}</strong>
						{#if !defect.id || defect.id < 0}
							<br />
							<i class="bi bi-exclamation-circle text-danger nav-icon me-2" />
							<b class="text-danger h7">
								This work order has changes not saved to cloud and this defect cannot be edited.
							</b>
						{/if}
					</div>
					<div class="me-3" style="padding-left: 24px; line-height: 1.1">
						<small>
							{defect.longDescription}
							{textTruncate(defect.workOrderStep?.instructions?.replace(/<[^>]*>/g, ''), 100)}
						</small>
					</div>
					<div class="ps-4 mt-2">
						<span title="Work Order number">
							{defect?.workOrderNumber || ''}
						</span>

						<!-- CONTINUE THIS PART! -->
						{#if completedBy}
							{@const completedByText =
								$authUser.id === completedBy.id
									? `Completed by you (${completedBy.firstName} ${completedBy.lastName})`
									: `Completed by: ${completedBy.firstName} ${completedBy.lastName}`}

							<span
								title={completedByText}
								class={`float-end ${
									$authUser.id === completedBy.id
										? 'defect-completed-by-login-user'
										: 'badge text-bg-light'
								}`}
							>
								{textTruncate(completedByText, 50)}
							</span>
							<br />
						{/if}
					</div>
					<div class="pr-4 mt-1 clearfix">
						<small class={`float-end defect-type-${defect.type.id}-text-color`}>
							{defect.type.name}
						</small>
					</div>
				</div>
			</ListGroupItem>
		{:else}
			<p class="text-center mt-3">No defects to display</p>
		{/each}
	</ListGroup>
</div>

<style>
	.defect-completed-by-login-user {
		color: #307dff;
		margin-right: 10px;
		font-weight: 500;
	}

	tr.selected .defect-completed-by-login-user {
		color: white !important;
	}

	.badge {
		padding: 6px 10px 6px 10px !important;
	}

	/* Type 1 = 'defect':  */
	.defect-type-1-text-color {
		color: #f44336;
	}

	/* Type 2 = 'failure':  */
	.defect-type-2-text-color {
		color: #f77268;
	}

	/* Type 7 = 'disapproval':  */
	.defect-type-7-text-color {
		color: orange;
	}
</style>
