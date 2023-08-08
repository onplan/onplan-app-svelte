<script>
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import PieProgress from '$lib/components/PieProgress.svelte';
</script>

<ListGroup flush class="mt-md-1">
	{#each 'test test test test'.split('') as name, index (index)}
		<ListGroupItem>
			<div class="work-order mt-2">
				<div class="clearfix" style="height: 40px;">
					<span class="badge rounded-pill bg-danger float-start"> DISAPPROVED </span>

					<p class="float-end">
						<span class="wo-date">
							<i class="bi bi-clock" />
							<small> 25 Apr 2023 </small>
						</span>
						<PieProgress percentage={75} />
					</p>
				</div>

				<p class="wo-title my-0">testing flag</p>
				<div>750 Hours Welder Inspection - 750HR</div>

				<div class="mt-1">
					<i class="bi bi-gear-fill text-muted" />
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
						<i class="bi bi-check-square-fill text-success text-opacity-75" />
						<small class="ms-1">2/3</small>

						<span class="ms-2 badge rounded-pill bg-danger p1to3">P1</span>
						<small class="ms-1">0</small>

						<span class="ms-2 badge rounded-pill bg-warning p1to3">P2</span>
						<small class="ms-1">0</small>

						<span class="ms-2 badge rounded-pill bg-secondary p1to3">P3</span>
						<small class="ms-1">0</small>
					</div>
					<div class="float-end">
						<i class="bi bi-cloud-check-fill text-success text-opacity-75" />
					</div>
				</div>
			</div>
		</ListGroupItem>
		<!-- content here -->
	{/each}
</ListGroup>

<style>
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

	.p1to3 {
		font-size: 10px;
		padding: 3px 5px 2px 5px !important;
	}
</style>
