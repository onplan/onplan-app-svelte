<script>
	import WorkOrdersFilterDropdown from '$lib/components/routes/index/WorkOrdersFilterDropdown.svelte';
</script>

<!-- WO filter, Search input, delete, edit, add WO icons -->
<div
	id="work-order-lists-controller"
	class="row container-fluid m-0 px-1 pb-2 border-bottom bg-light"
>
	<div class="col-md-1 col-sm-2 col-2">
		<WorkOrdersFilterDropdown />
	</div>

	<div class="col-md-6 col-sm-4 col-8">
		<div class="input-group input-group-sm mt-3">
			<span class="input-group-text">
				<i class="bi bi-search" />
			</span>
			<input type="text" class="form-control shadow-none" />
		</div>
	</div>

	<div class="col-md-5 col-sm-6 col-2 p-0 mt-3">
		<div class="text-center d-sm-none">
			<i class="bi bi-three-dots fs-3" />
		</div>
		<div class="d-none d-sm-block">
			<div class="mt-1 me-md-2">
				<span class="me-2 text-success">
					Last Updated 12:58 19 Jul
					<i class="bi bi-arrow-repeat fs-6" />
				</span>
				<span class="float-end">
					<button class="btn border-0 px-1 px-md-2 px-1 px-lg-3 py-0 disabled">
						<i class="bi bi-trash3-fill fs-5" />
					</button>
					<button class="btn border-0 px-1 px-md-2 px-2 px-lg-3 py-0">
						<i class="bi bi-pencil-fill fs-5" />
					</button>
					<button class="btn border-0 px-1 px-md-2 px-1 px-lg-3 py-0">
						<i class="bi bi-plus-circle-fill fs-5" />
					</button>
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	#work-order-lists-controller {
		position: fixed;
		top: 60px;
		z-index: 1000;
		width: 100vw;
		left: 0;
		background-color: #fff;
	}

	.disabled {
		opacity: 0.3;
	}
</style>
