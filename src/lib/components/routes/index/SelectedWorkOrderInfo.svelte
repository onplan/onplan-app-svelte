<script>
	import { activeWOListID } from '$lib/stores/work-order/activeWOListID';
	let windowWidth = 0;

	$: hasActiveWO = Boolean($activeWOListID);

	$: displayFullWidth = windowWidth < 992 && hasActiveWO;
	// $: console.log('windowWidth: ', windowWidth);
	$: console.log('displayFullWidth: ', displayFullWidth);
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="workOrderDisplayCard" class="" class:displayFullWidth>
	<div id="workOrderListBtn" class="w-100 cursor-pointer d-block d-lg-none">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class="text-primary d-md-inline"
			on:click={() => {
				hasActiveWO = false;
			}}>&lt; Work Orders</span
		>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="container-fluid"
		on:click={() => {
			hasActiveWO = true;
		}}
	>
		<div class="mb-5">activeWOListID : {$activeWOListID}</div>
		<span class=" float-end">rightz</span>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">33</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">rightz</div>
		<div class="my-5">last</div>
		<div class="my-5">rightz</div>
	</div>
</div>

<style>
	#workOrderDisplayCard {
		height: calc(100%);
		padding-bottom: 10rem;

		box-shadow: none;
		/* width: 100%; */
		border-radius: 0;
		border: none;
		position: fixed;
		/* height: calc(100vh - 184px); */
		border-left-style: solid !important;
		border-left-width: 1px !important;
		border-left-color: #ddd !important;
		background-color: white !important;
		overflow-y: auto;
		overflow-x: hidden;
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 1) 4%,
			rgba(239, 239, 239, 1) 60%,
			rgba(255, 255, 255, 1) 96%
		);
		width: inherit;
	}

	#workOrderListBtn {
		border-bottom: #ddd solid 1px;
		padding: 10px 10px 10px;
		background-color: #f6f6f6;
	}

	.displayFullWidth {
		top: 60px;
		left: 0px;
		height: calc(100% - 110px);
		z-index: 1030;
		width: 100%;
		animation: 0.3s display-in-full-width-transition;
	}

	@keyframes display-in-full-width-transition {
		from {
			top: 100%;
		}
		to {
			top: 60px;
		}
	}
</style>
