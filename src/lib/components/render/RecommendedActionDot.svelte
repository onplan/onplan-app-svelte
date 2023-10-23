<script>
	export let recommendedActionName;
</script>

{#if recommendedActionName === 'Do Nothing'}
	<span class="small-dot dot-primary" />
{:else if recommendedActionName === 'No Action'}
	<span class="small-dot dot-primary" />
{:else if recommendedActionName === 'Monitor'}
	<span class="small-dot dot-warning" />
{:else if recommendedActionName === 'Repair'}
	<span class="small-dot dot-danger" />
{:else}
	{recommendedActionName}
{/if}

<style>
	.small-dot {
		margin-right: 8px;
		margin-top: 7px;
		float: left;
		color: #fff;
		height: 8px;
		width: 8px;
		border-radius: 8px;
	}

	.dot-danger {
		background-color: #f44336;
	}

	.dot-primary {
		background-color: #307dff;
	}

	.dot-warning {
		background-color: #ffb300;
	}
</style>
