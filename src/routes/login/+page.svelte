<script>
	// @ts-nocheck

	import { Icon, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
	import { fade } from 'svelte/transition';
	import { isOnline, isActuallyOnline } from '$lib/stores/browser';
	import { nukeAppCache } from '$lib/utils';
	let email = '';
	let password = '';

	let passwordVisible = false;
	const togglePassword = () => (passwordVisible = !passwordVisible);

	/**
	 * Page needed state
	 * - is auth
	 * - isWebGL
	 *
	 */

	$: console.log(`${$isOnline} - ${$isActuallyOnline}`);
	// console.log(browserStates);
</script>

<!-- <svelte:window bind:online /> -->
<svelte:head>
	<title>OnPlan KrackOn: Work Management App</title>
	<style>
		body {
			font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			color: #6c7177;
			background-image: url(./media/img/onplan-background.jpg);
			background-position: left top;
			background-repeat: repeat-y;
			background-size: 150%;
			background-color: #000 !important;
		}
	</style>

	<!-- TODO: to inspect/translated to svelte 1 by 1 -->
	<!-- <script src="js/installserviceworker.js"></script>
    <script src="js/vendor/jquery.min.js"></script>
    <script src="appconfig.js"></script>
    <script src="js/vendor/dexiedb/dexie.js"></script>
    <script src="js/vendor/sweetalert2.all.min.js"></script>
    <script src="js/vendor/bootstrap-material/popper.js"></script>
    <script src="js/vendor/bootstrap-material/boostrap-material-design.js"></script>
    <script src="js/caching.js"></script>
    <script src="js/constants.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/installbutton.js"></script>
    <script src="js/login.js"></script> -->
</svelte:head>

<div class="container-fluid">
	<ButtonDropdown class="mt-3" style="display: list-item;">
		<DropdownToggle tag="div" class="float-end" style="cursor: pointer;">
			<Icon name="three-dots-vertical" class="text-white fs-3" />
		</DropdownToggle>
		<DropdownMenu class="p-2">
			<DropdownItem on:click={nukeAppCache}>
				<Icon name="trash-fill" /> Clear Cache
			</DropdownItem>
			<DropdownItem class="mt-2">
				<Icon name="plus-circle-fill" /> Add to home screen
			</DropdownItem>
		</DropdownMenu>
	</ButtonDropdown>

	<div class="login-container col-sm-12 col-md-7 col-lg-4 mt-5">
		<!-- Logo -->
		<div class="pb-4">
			<img src="media/img/onplan-reverse.png" width="200px" alt="Onplan logo" />
		</div>

		<!-- Form -->
		<div class="form-floating mb-3">
			<input
				type="email"
				name="email"
				class="form-control"
				id="floatingInput"
				placeholder="name@example.com"
				bind:value={email}
			/>
			<label for="floatingInput">Email address</label>
		</div>
		<div class="form-floating">
			<input
				class="form-control"
				id="floatingPassword"
				placeholder="Password"
				type={passwordVisible ? 'text' : 'password'}
				name="password"
				value={password}
				on:input={(e) => (password = e?.target?.value)}
			/>
			<label for="floatingPassword">Password</label>
			<div style="position: relative;">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span class="input-group-addon" id="inlineCheckbox2" on:click={togglePassword}>
					<Icon
						name={passwordVisible ? 'eye-slash-fill' : 'eye-fill'}
						class="text-secondary fs-3"
					/>
				</span>
			</div>
		</div>

		<div class="form-group pt-4 pb-1">
			<div class="d-grid mb-3">
				<button
					class="btn btn-danger"
					type="button"
					disabled={!(email && password) || !$isActuallyOnline}
				>
					Login
				</button>
			</div>
			{#if !$isActuallyOnline}
				<p transition:fade>To login, please go online.</p>
			{/if}
			<div class="text-danger">Your browser does not support WebGL, 3D images may not load</div>
			<!-- CONTINUE HERE.... -->
		</div>
	</div>

	<!-- <div
		id="maintenance-container"
		class="col-sm-12 col-md-7 col-lg-4 col-centered"
		style="display: none"
	>
		<div class="pb-4"><img src="media/img/onplan-reverse.png" width="200px" /></div>
		<h1 style="color: white; text-align: right">Maintenance in progress</h1>
		<h3 style="text-align: right">We apologize for any inconvenience.</h3>
		<button onClick="window.location.reload()" class="btn float-right login-button">Refresh</button>
	</div> -->
</div>

<style>
	.login-container {
		margin-top: 10vh;
		padding: 24px 24px 36px 24px;
		float: none;
		margin: 0 auto;
	}

	#inlineCheckbox2 {
		display: block !important;
		position: absolute;
		bottom: 5px;
		right: 4px;
		cursor: default;
	}
</style>
