<script>
	import authUser from '$lib/stores/authUser';
	import { cacheName, offlineAssets, canGoOffline, requestOfflineLatestInfo } from '$lib/stores/sw';
	import { nukeAppCache } from '$lib/utils';
	import { onMount } from 'svelte';
	$: console.log(`> 👉 offlineAssets `, $offlineAssets);

	/**
	 * @type {{path: string, isCached: boolean}[]}
	 *
	 */
	let files = [];

	$: percentage = $offlineAssets?.metadata?.cached_percentage;
	$: total = $offlineAssets?.metadata?.total;
	$: cached_total = $offlineAssets?.metadata?.cached_total;
	$: files = $offlineAssets?.files || [];

	const nukez = async (cacheName) => {
		nukeAppCache();
	};

	$: {
		if ($canGoOffline) {
			console.log('ALL DOWNLOADED!');
		} else {
			setTimeout(requestOfflineLatestInfo, 100);
		}
	}

	onMount(() => {
		console.log('MOunted  11111');
		if (!$authUser) {
			return;
		}
		console.log('MOunted  22222');
	});
</script>

<h1 class="text-center mt-5">Index/Work Order lists Page</h1>

<br />
<br />
<div class="container">
	<p>
		<strong>cacheName</strong> : {$cacheName}
	</p>

	<p>
		<strong>
			canGoOffline :
			<span class={$canGoOffline ? 'text-success' : 'text-danger'}>{$canGoOffline} </span>
		</strong>
	</p>

	<p>
		<strong>
			percentage :
			<span class={$canGoOffline ? 'text-success' : 'text-danger'}>{percentage} </span>
		</strong>
	</p>

	<button class="btn btn-danger" on:click={() => nukez($cacheName)}>NUKE?</button>

	<h3>Lists of files ({cached_total}/{total})</h3>

	<ol>
		{#each files as { path, isCached }, index (index)}
			<li class={isCached ? 'text-success' : 'text-secondary'}>{path}</li>
		{/each}
	</ol>
</div>
