<script>
	import {
		activeIndexPageTab,
		changeToWorkordersTab,
		changeToOutstandingDefectTab
	} from '$lib/stores/activeIndexPageTab';
	import { INDEX_PAGE_TABS } from '$lib/utils/constants';
	import { Icon } from 'sveltestrap';

	$: console.log('activeIndexPageTab: ', $activeIndexPageTab);
</script>

<!--
  @component

  Index Page Bottom Navigation
-->
<nav class="navbar fixed-bottom py-0 border-top bg-white" style="height: 50px;">
	<div class="row w-100 h-100 pt-2 mx-0 text-center bg-secondary bg-opacity-10">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class={`col-6 ${
				$activeIndexPageTab === INDEX_PAGE_TABS.workorders
					? 'text-primary'
					: 'cursor-pointer text-secondary text-opacity-75'
			}`}
			on:click={changeToWorkordersTab}
		>
			<Icon name="clipboard-check-fill" class="fs-5" />
			<span class="d-none d-md-inline-block d-lg-inline-block">
				{INDEX_PAGE_TABS.workorders}
			</span>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class={`col-6 ${
				$activeIndexPageTab === INDEX_PAGE_TABS.outstanding_defects
					? 'text-primary'
					: 'cursor-pointer text-secondary text-opacity-75'
			}`}
			on:click={changeToOutstandingDefectTab}
		>
			<Icon name="exclamation-octagon-fill" class="fs-5" />
			<span class="d-none d-md-inline-block d-lg-inline-block">
				{INDEX_PAGE_TABS.outstanding_defects}
			</span>
			<span class="notify-badge" style="display: inline;">21</span>
		</div>
	</div>
</nav>

<style>
	.notify-badge {
		display: none;
		color: white;
		font-size: 10px;
		background: red;
		padding: 2px 6px;
		position: absolute;
		text-align: center;
		border-radius: 14px 14px 14px 14px;
	}
</style>
