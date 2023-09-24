<script>
	/**
	 * Index/Work Orders Page
	 *
	 */

	import TopNavBar from '$lib/components/routes/index/TopNavBar.svelte';
	import BottomNavBar from '$lib/components/routes/index/BottomNavBar.svelte';
	import WorkOrdersController from '$lib/components/routes/index/WorkOrdersController.svelte';
	import WorkOrdersLists from '$lib/components/routes/index/WorkOrdersLists.svelte';
	import SelectedWorkOrderInfo from '$lib/components/routes/index/SelectedWorkOrderInfo.svelte';

	import authUser from '$lib/stores/authUser';
	import { onMount } from 'svelte';
	import { INDEX_PAGE_TABS } from '$lib/utils/constants';
	import { activeIndexPageTab } from '$lib/stores/activeIndexPageTab';
	onMount(() => {
		// If not authenticated, do not continue
		if (!$authUser) {
			return;
		}
	});
</script>

<div>
	<TopNavBar />
	<BottomNavBar />

	<div class="main-content">
		<WorkOrdersController />
		<div class="row">
			{#if $activeIndexPageTab === INDEX_PAGE_TABS.workorders}
				<!-- Work order lists -->
				<div class="col-md-12 col-lg-5 col-12">
					<WorkOrdersLists />
				</div>
				<div class="col-md-12 col-lg-7 col-12">
					<SelectedWorkOrderInfo />
				</div>
			{:else}
				<!-- Outstanding defect lists -->
				<h1>Outstanding defect ....</h1>
			{/if}
		</div>
	</div>
</div>

<style>
	.main-content {
		margin-top: 8rem !important;
		margin-bottom: 4rem !important;
	}
</style>
