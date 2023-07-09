<script>
	import { cacheName, offlineAssets, canGoOffline, requestOfflineLatestInfo } from '$lib/stores/sw';
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
		await caches.open(cacheName).then((cache) => {
			cache.keys().then((keys) => {
				for (const key of keys) {
					cache.delete(key);
				}
			});
		});

		// Clear serviceworker after cache manual delete risk bug: "The FetchEvent for "http:xxx" resulted in a network error response: an object that was not a Response was passed to respondWith()."
		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();

			// returns installed service workers
			if (registrations.length) {
				for (const registration of registrations) {
					registration.unregister();
				}
			}
		}

		if (confirm('Reload app?')) {
			location.reload();
		}
	};

	$: {
		if ($canGoOffline) {
			console.log('ALL DOWNLOADED!');
		} else {
			setTimeout(requestOfflineLatestInfo, 500);
		}
	}

	// onMount(() => {
	// 	// alert('index mounted!');
	// 	// navigator.serviceWorker.addEventListener('message', (event) => {
	// 	// 	// event is a MessageEvent object
	// 	// 	// console.log(`The service worker sent me a message 222: ${event.data}`);
	// 	// 	console.log(event.data);
	// 	// });
	// });
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
