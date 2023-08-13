<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	// Props passed by `svelte-notifications'
	export let notification = {};
	export let onRemove = null;
	export let withoutStyles = false;

	let bIcon = '';
	let textColor = '';
	let borderColor = '';

	const { type, boostrapIcon, heading, headingRight, description } = notification;

	switch (type?.toLowerCase()) {
		case 'success':
			bIcon = 'bi-check-circle-fill';
			textColor = 'text-success';
			borderColor = 'border-success';
			break;

		case 'info':
			bIcon = 'bi-info-circle-fill';
			textColor = 'text-primary';
			borderColor = 'border-primary';

			break;
		case 'warning':
			bIcon = 'bi-exclamation-circle-fill';
			textColor = 'text-warning';
			borderColor = 'border-warning';

			break;
		case 'error':
			bIcon = 'bi-exclamation-triangle-fill';
			textColor = 'text-danger';
			borderColor = 'border-danger';

			break;

		default:
			bIcon = 'bi-info-square';
			break;
	}

	// use the passed `boostrapIcon` props if provided
	bIcon = boostrapIcon || bIcon;
</script>

<!--
  @component
  Toast notification template

  Based on Bootstrap 5 toast : https://getbootstrap.com/docs/5.2/components/toasts/
-->
<div
	class={`toast show m-1 ${borderColor}`}
	role="alert"
	aria-live="assertive"
	aria-atomic="true"
	transition:fly={{ duration: 300, x: 100, easing: quintOut }}
>
	<div class="toast-header">
		<!-- <img src="..." class="rounded me-2" alt="..." /> -->
		<i class={`bi ${bIcon} ${textColor}`} />
		<strong class="ms-2 me-auto">{heading || ''}</strong>
		{#if headingRight}
			<small>{headingRight}</small>
		{/if}

		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="toast"
			aria-label="Close"
			on:click={onRemove}
		/>
	</div>
	{#if description}
		<div class="toast-body">{description}</div>
	{/if}
</div>

<style>
	:global(.toast) {
		--bs-toast-bg: rgba(255, 255, 255, 1);
		border-width: 0.7px;
	}
</style>
