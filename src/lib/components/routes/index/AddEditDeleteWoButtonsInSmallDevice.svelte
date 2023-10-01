<script>
	import { toastFeatureNotAvaiable } from '$lib/utils';
	import { DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem } from 'sveltestrap';
</script>

<ButtonDropdown style="display: contents;">
	<DropdownToggle tag="span" class="">
		<div class="text-center d-sm-none">
			<i class="bi bi-three-dots fs-3" />
		</div>
	</DropdownToggle>
	<DropdownMenu class="p-2">
		<DropdownItem class="py-2" on:click={toastFeatureNotAvaiable}>
			<i class="bi di-bi bi-arrow-clockwise" />
			Refresh
		</DropdownItem>
		<DropdownItem class="py-2" on:click={toastFeatureNotAvaiable}>
			<i class="bi di-bi bi-plus-circle-fill" />
			Add Work Order
		</DropdownItem>
		<DropdownItem class="py-2" on:click={toastFeatureNotAvaiable}>
			<i class="bi di-bi bi-pencil-fill" />
			Edit Work Order
		</DropdownItem>
		<DropdownItem class="py-2" on:click={toastFeatureNotAvaiable}>
			<i class="bi di-bi bi-trash3-fill" />
			Delete Work Order
		</DropdownItem>
	</DropdownMenu>
</ButtonDropdown>

<style>
	/* your styles go here */
</style>
