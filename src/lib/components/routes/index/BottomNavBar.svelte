<script>
	import { Icon } from 'sveltestrap';
</script>

<!--
  @component

  Index Page Bottom Navigation
-->
<nav class="navbar fixed-bottom py-0 border-top bg-white" style="height: 50px;">
	<div class="row w-100 h-100 pt-2 mx-0 text-center bg-secondary bg-opacity-10">
		<div class="col-6 text-primary">
			<Icon name="clipboard-check-fill" class="fs-5" />
			<span class="d-none d-md-inline-block d-lg-inline-block">Work Orders</span>
		</div>
		<div class="col-6 text-secondary text-opacity-75">
			<Icon name="exclamation-octagon-fill" class="fs-5" />
			<span class="d-none d-md-inline-block d-lg-inline-block">Outstanding Defects</span>
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
