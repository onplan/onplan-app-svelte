<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	// Props passed by `svelte-notifications'
	export let notification = {};
	export let onRemove = null;
	export let withoutStyles = false;

	let bIcon = '';
	let textColor = '';

	const { type, boostrapIcon, heading, headingRight, description } = notification;

	switch (type?.toLowerCase()) {
		case 'success':
			bIcon = 'bi-check-circle-fill';
			textColor = 'text-success';
			break;

		case 'info':
			bIcon = 'bi-info-circle-fill';
			textColor = 'text-primary';

			break;
		case 'warning':
			bIcon = 'bi-exclamation-circle-fill';
			textColor = 'text-warning';

			break;
		case 'error':
			bIcon = 'bi-exclamation-triangle-fill';
			textColor = 'text-danger';

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
	class="toast show m-1"
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
