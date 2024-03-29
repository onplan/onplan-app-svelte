<script>
	import { DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem, Input } from 'sveltestrap';

	import Select from 'svelte-select';
	import { WORK_ORDER_STATUS } from '$lib/utils/constants';
	import filterFieldsSetting from '$lib/stores/work-order/filterFieldsSetting';
	import { get } from 'svelte/store';
	import { loadWorkOrders } from '$lib/stores/work-order/workorderLists';

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	// Todo: Options should come from cached Asset lists
	let assetItems = [
		{ value: 0, label: 'All' },
		{ value: 1, label: 'Truck 1' },
		{ value: 2, label: 'Truck 2' },
		{ value: 3, label: 'Truck 3' }
	];
	const statusItems = Object.entries(WORK_ORDER_STATUS).map(([value, label]) => ({
		value,
		label
	}));

	// Fields value holder
	let _myJobsFilter, _assetFilter, _statusFilter, _scheduledFromDate, _scheduledToDate;

	// When opening filter dropdown , update the filter fields values from `filterFieldsSetting` store
	$: if (isOpen) {
		// get the latest `filterFieldsSetting` store value, non-reactive
		const ffs = get(filterFieldsSetting);

		_myJobsFilter = ffs.myJobsFilter;
		_assetFilter = assetItems.find((el) => el.value === ffs.assetFilter) || {
			value: 0,
			label: 'All'
		};
		_statusFilter = ffs.statusFilter.map((status) => statusItems.find((el) => el.value === status));
		_scheduledFromDate = ffs.scheduledFromDate;
		_scheduledToDate = ffs.scheduledToDate;
	}

	let noFilter = false;
	let filterLabel = '';

	// Update `filterLabel` when `$filterFieldsSetting` store changes
	$: {
		const { assetFilter, statusFilter, scheduledToDate, scheduledFromDate, myJobsFilter } =
			$filterFieldsSetting;

		const appliedFilters = [];

		if (assetFilter > 0) {
			appliedFilters.push('Asset');
		}

		if (statusFilter?.length) {
			appliedFilters.push('Status');
		}

		if (scheduledToDate) {
			appliedFilters.push('To Date');
		}

		if (scheduledFromDate) {
			appliedFilters.push('From Date');
		}

		if (myJobsFilter) {
			appliedFilters.push('My Jobs');
		}

		noFilter = false;
		filterLabel = 'Multiple';

		if (appliedFilters?.length === 1) {
			filterLabel = appliedFilters[0];
		} else if (appliedFilters?.length === 0) {
			noFilter = true;
			filterLabel = 'No Filter';
		}
	}

	function clearDates() {
		_scheduledFromDate = '';
		_scheduledToDate = '';
	}

	function applyFilter() {
		// Save new filter values to `$filterFieldsSetting` store
		$filterFieldsSetting = {
			myJobsFilter: _myJobsFilter,
			// only save the value
			assetFilter: _assetFilter?.value,
			// only save the values
			statusFilter: _statusFilter?.length ? _statusFilter.map((el) => el.value) : [],
			scheduledFromDate: _scheduledFromDate,
			scheduledToDate: _scheduledToDate
		};

		toggle();

		// Trigger loadWorkOrders after updating filter switches
		loadWorkOrders();
	}
</script>

<div id="workOrdersFilterHolder">
	<ButtonDropdown {isOpen} {toggle} class="dropdown" style="display: contents;">
		<DropdownToggle tag="span" class="cursor-pointer">
			<div class="text-center text-primary" class:text-secondary={noFilter}>
				<i class="bi bi-filter fs-3" />
				<br />
				<div class="filter-status">{filterLabel}</div>
			</div>
		</DropdownToggle>
		<DropdownMenu class="pb-3">
			<div class="fw-bold container">
				Filters
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span class="float-end cursor-pointer" on:click={toggle}>
					<i class="bi bi-x fs-5" />
				</span>
			</div>

			<DropdownItem divider />

			<div class="container mt-3 w-100">
				<Input type="switch" label="My Jobs" bind:checked={_myJobsFilter} />

				<label for="assetsDropDown" class="mt-3">Asset:</label>
				<Select
					id="assetsDropDown"
					items={assetItems}
					searchable
					clearable={false}
					bind:value={_assetFilter}
				/>

				<label for="statusDropDown" class="mt-3">Status:</label>
				<Select
					id="statusDropDown"
					items={statusItems}
					searchable
					clearable={true}
					multiple
					bind:value={_statusFilter}
				/>

				<div class="row mt-4">
					<div class="col-12 col-md-6">
						<label for="scheduledFromDate" class="mt-4zz">Scheduled From:</label>
						<input
							type="date"
							autocomplete="off"
							id="scheduledFromDate"
							placeholder="YYYY-MM-DD"
							class="form-control bg-light"
							bind:value={_scheduledFromDate}
						/>
					</div>
					<div class="col-12 col-md-6">
						<label for="scheduledToDate" class="mt-2 mt-md-0">Scheduled To:</label>
						<input
							type="date"
							autocomplete="off"
							id="scheduledToDate"
							placeholder="YYYY-MM-DD"
							class="form-control bg-light"
							bind:value={_scheduledToDate}
						/>
						<button
							type="button"
							class="btn btn-outline-secondary btn-sm rounded-5 float-end mt-2"
							style="--bs-btn-font-size: .6rem;"
							on:click={clearDates}
						>
							<i class="bi bi-calendar-x" />
							CLEAR DATES
						</button>
					</div>
				</div>

				<center class="mt-3">
					<button
						type="button"
						class="btn btn-success btn-sm rounded-5 px-5"
						on:click={applyFilter}
					>
						Apply
					</button>
				</center>
			</div>
		</DropdownMenu>
	</ButtonDropdown>
</div>

<style>
	.filter-status {
		font-size: 10px;
	}

	/* Dropdown fields depending on the screensize */
	@media screen and (max-width: 576px) {
		#workOrdersFilterHolder :global(.dropdown-menu) {
			--bs-dropdown-menu-width: 93%;
		}
	}
	@media (min-width: 576px) {
		#workOrdersFilterHolder :global(.dropdown-menu) {
			--bs-dropdown-menu-width: 70%;
		}
	}

	@media (min-width: 768px) {
		#workOrdersFilterHolder :global(.dropdown-menu) {
			--bs-dropdown-menu-width: 60%;
		}
	}
</style>
