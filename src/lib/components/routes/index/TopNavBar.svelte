<script>
	import { DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem } from 'sveltestrap';

	import {
		isOnline,
		isActuallyOnline,
		workingOfflineSinceTimer,
		isWorkingOffline,
		workOffline,
		workOnline
	} from '$lib/stores/connectivity';
	import { canGoOffline, offlineAssets } from '$lib/stores/sw';

	import { fade } from 'svelte/transition';
	import authUser from '$lib/stores/authUser';
	import installPWA from '$lib/utils/installPWA';

	$: console.log(`isOnline: ${$isOnline} - isActuallyOnline: ${$isActuallyOnline}`);
	// $: console.log(`workingOfflineSinceTimer: ${$workingOfflineSinceTimer}`); // Run every second
	$: console.log(`authUser: `, $authUser);
</script>

<!--
  @component

  Index Page Top Navigation
-->
<nav class="navbar fixed-top bg-light" style="z-index: 1031;">
	<!-- Header, wifi icon, profile icon -->
	<div class="container-fluid my-1">
		<div class="float-start">
			<h2 class="ms-2">Work Orders</h2>
		</div>
		<div class="float-end">
			{#if $isWorkingOffline && $workingOfflineSinceTimer}
				<!-- Offline Since Timer -->
				<button
					id="workOrderOfflineTimer"
					type="button"
					class="btn btn-danger d-none d-sm-inline-block"
					disabled={!$isActuallyOnline}
					on:click={workOnline}
					transition:fade
				>
					Offline {$workingOfflineSinceTimer}
				</button>
			{/if}

			{#key `${$isActuallyOnline}+${$isWorkingOffline}`}
				<!-- Wifi Icon for Online/Offline mode -->
				<i
					class="bi bi-wifi fs-3 fw-bold me-2"
					class:text-success={$isOnline && $isActuallyOnline && !$isWorkingOffline}
					class:text-danger={(!$isOnline && !$isActuallyOnline) || $isWorkingOffline}
					class:text-warning={$isOnline && !$isActuallyOnline}
					in:fade={{ delay: 300 }}
				/>
			{/key}

			<ButtonDropdown style="display: contents;">
				<DropdownToggle tag="span" class="">
					<i class="bi bi-person fs-3 fw-bold cursor-pointer text-primary" />
				</DropdownToggle>
				<DropdownMenu class="p-2">
					<DropdownItem class="py-2" disabled={$isWorkingOffline}>
						<i class="bi di-bi bi-person" />
						Profile
					</DropdownItem>
					<DropdownItem class="py-2" on:click={authUser.logout} disabled={$isWorkingOffline}>
						<i
							class="bi di-bi bi-arrow-right"
							class:bi-arrow-right={!$isWorkingOffline}
							class:bi-arrow-clockwise={$isWorkingOffline}
						/>
						{#if $isWorkingOffline}
							Cannot logout - App Offline
						{:else}
							Logout
						{/if}
					</DropdownItem>
					<DropdownItem
						class="py-2"
						disabled={!$canGoOffline || !$isActuallyOnline}
						on:click={$isWorkingOffline ? workOnline : workOffline}
					>
						<i
							class="bi di-bi"
							class:bi-cloud-fill={$isWorkingOffline}
							class:bi-cloud-slash={!$isWorkingOffline}
						/>

						{#if $canGoOffline}
							{#if $isWorkingOffline}
								Work Online
								{#if !$isActuallyOnline}
									- No Internet
								{/if}
							{:else}
								Work Offline
							{/if}
						{:else}
							<!-- Not all offline files are cached locally,  -->
							Offline Mode Not Ready
							<small class="text-success">
								<i class="bi bi-download" />
								{$offlineAssets?.metadata?.cached_percentage}%
							</small>
						{/if}
					</DropdownItem>
					<DropdownItem class="py-2" on:click={() => window.location.reload()}>
						<i class="bi di-bi bi-arrow-clockwise" />
						Reload screen
					</DropdownItem>
					<DropdownItem class="py-2">
						<i class="bi di-bi bi-gear-fill" />
						Settings
					</DropdownItem>
					<DropdownItem class="py-2" on:click={installPWA}>
						<i class="bi di-bi bi-plus-circle-fill" />
						Add to home screen
					</DropdownItem>
					<div class="dropdown-header text-muted">
						<div id="userCompanyName" class="d-inline-block">
							{$authUser?.companyName}
						</div>
						<!-- Todo: make version dynamic -->
						<div id="appVersion" class="float-end small" style="margin-top:3px">v3.1.79</div>
					</div>
				</DropdownMenu>
			</ButtonDropdown>
		</div>
	</div>
</nav>

<style>
	/* dropdown items bootstrap icons */
	.di-bi {
		font-size: 1.25rem;
		margin-right: 0.25rem;
	}

	#workOrderOfflineTimer {
		--bs-btn-border-radius: 1rem;
		--bs-btn-padding-y: 0.05rem;
		--bs-btn-padding-x: 0.5rem;
		--bs-btn-font-size: 0.85rem;
		margin-top: -0.5rem;
		margin-right: 0.8rem;
	}
</style>
