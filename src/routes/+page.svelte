<script>
	/**
	 * Index/Work Orders Page
	 *
	 */

	import { Icon, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import PieProgress from '$lib/components/PieProgress.svelte';

	import authUser from '$lib/stores/authUser';
	import { onMount } from 'svelte';

	onMount(() => {
		// If not authenticated, do not continue
		if (!$authUser) {
			return;
		}
	});
</script>

<div>
	<!-- Top Navbar -->
	<nav class="navbar fixed-top bg-light border-bottom">
		<!-- Header, wifi icon, profile icon -->
		<div class="container-fluid my-1">
			<div class="float-start">
				<h2 class="ms-2">Work Orders</h2>
			</div>
			<div class="float-end">
				<Icon name="wifi" class="fs-3 fw-bold text-success me-2" />
				<Icon name="person" class="fs-3 fw-bold text-primary" />
			</div>
		</div>

		<!-- WO filter, Search input, delete, edit, add WO icons -->
		<div class="row container-fluid m-0 px-1">
			<div class="col-md-1 col-sm-2 col-2 bg-light">
				<div class="text-center text-primary">
					<Icon name="filter" class="fs-3" />
					<br />
					<div class="filter-status">Status</div>
				</div>
			</div>

			<div class="col-md-6 col-sm-4 col-8 bg-light">
				<div class="input-group input-group-sm">
					<span class="input-group-text">
						<Icon name="search" />
					</span>
					<input type="text" class="form-control bg-light shadow-none" />
				</div>
			</div>
			<!-- <div class="col-md-4 col-sm-3 col-2 p-0 phone-workorder-menu mt-1"></div> -->
			<div class="col-md-5 col-sm-6 col-2 p-0 bg-light">
				<div class="text-center d-sm-none">
					<Icon name="three-dots" class="fs-3 " />
				</div>
				<div class="d-none d-sm-block">
					<div class="mt-1 me-md-2">
						<span class="me-2 text-success">
							Last Updated 12:58 19 Jul
							<Icon name="arrow-repeat " class="fs-6" />
						</span>
						<span class="float-end">
							<button class="btn border-0 px-1 px-md-2 px-1 px-lg-3 py-0 disabled">
								<Icon name="trash3-fill " class="fs-5" />
							</button>
							<button class="btn border-0 px-1 px-md-2 px-2 px-lg-3 py-0">
								<Icon name="pencil-fill " class="fs-5" />
							</button>
							<button class="btn border-0 px-1 px-md-2 px-1 px-lg-3 py-0">
								<Icon name="plus-circle-fill " class="fs-5" />
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Bottom Navbar -->
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

	<div class="main-content pt-md-3">
		<!-- Work Order lists -->
		<ListGroup flush>
			<ListGroupItem class="">
				<div class="work-order">
					<div class="clearfix" style="height: 40px;">
						<span class="badge rounded-pill bg-danger float-start"> DISAPPROVED </span>

						<p class="float-end">
							<span class="wo-date">
								<Icon name="clock" />
								<small> 25 Apr 2023 </small>
							</span>
							<PieProgress percentage={75} />
						</p>
					</div>

					<p class="wo-title my-0">testing flag</p>
					<div>750 Hours Welder Inspection - 750HR</div>

					<div class="mt-1">
						<Icon name="gear-fill" class="text-muted" />
						<strong>HT521</strong>
						- Komatsu 930E-4 Haul Truck
					</div>

					<div class="clearfix mt-1">
						<div class="badge bg-secondary bg-opacity-25 text-dark rounded-1 mt-1">930E-4</div>
						<div class="float-end mt-1">
							<small class="">Fording River</small>
						</div>
					</div>

					<div class="clearfix mt-1">
						<div class="float-start">
							<Icon name="check-square-fill" class="text-success text-opacity-75" />
							<small class="ms-1">2/3</small>

							<span class="ms-2 badge rounded-pill bg-danger p1to3">P1</span>
							<small class="ms-1">0</small>

							<span class="ms-2 badge rounded-pill bg-warning p1to3">P2</span>
							<small class="ms-1">0</small>

							<span class="ms-2 badge rounded-pill bg-secondary p1to3">P3</span>
							<small class="ms-1">0</small>
						</div>
						<div class="float-end">
							<Icon name="cloud-check-fill" class="text-success text-opacity-75" />
						</div>
					</div>
				</div>
			</ListGroupItem>
		</ListGroup>

		<!-- <p>testt 22</p>
		<p>testt 33</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p>
		<p>testt</p> -->
	</div>
</div>

<style>
	.main-content {
		margin-top: 8rem !important;
	}

	.filter-status {
		font-size: 10px;
		text-align: center;
		white-space: nowrap;
	}

	.disabled {
		opacity: 0.3;
	}

	.wo-date {
		position: relative;
		right: -38px;
		top: -20px;
		font-weight: 400;
		size: 10px;
		font-size: 80%;
	}

	.wo-title {
		font-size: 12px;
		font-weight: bold;
		color: #307dff;
	}

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

	.p1to3 {
		font-size: 10px;
		padding: 3px 5px 2px 5px !important;
	}
</style>
