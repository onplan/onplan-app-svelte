<script>
	/**
	 * APP ROOT LAYOUT
	 *
	 */

	//  Global css
	import '$lib/assets/root.css';
	import '$lib/assets/global.css';
	import '$lib/assets/toast-notification.css';

	import ToastWrapper from '$lib/components/toast-notification/ToastWrapper.svelte';
</script>

<!-- ROOT LAYOUT -->
<!-- <nav>
	<a href="/">Work order page</a>
	<a href="/login">login</a>
	<a href="/workorder">workorder</a>
	<a href="/workorder">workorder</a>
	<a href="/debug/caching">D-Caching</a>
</nav> -->

<ToastWrapper>
	<!-- Main Content -->
	<slot />
</ToastWrapper>
