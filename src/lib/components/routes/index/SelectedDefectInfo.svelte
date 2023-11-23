<script>
	import { activeDefectListID } from '$lib/stores/work-order/activeDefectListID';

	// your script goes here
</script>

<div id="defectDisplayCard">
	<p class="text-center text-secondary" style="position: relative; top:15vh;">
		<i class="bi bi-hand-index" />
		<!-- Select a defect -->
		Selected defect ID: {$activeDefectListID}
	</p>
	<!-- CONTINUE HERE. -->
</div>

<style>
	#defectDisplayCard {
		height: calc(100%);
		padding-bottom: 10rem;

		box-shadow: none;
		/* width: 100%; */
		border-radius: 0;
		border: none;
		position: fixed;
		/* height: calc(100vh - 184px); */
		border-left-style: solid !important;
		border-left-width: 1px !important;
		border-left-color: #ddd !important;
		background-color: white !important;
		overflow-y: auto;
		overflow-x: hidden;
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 1) 4%,
			rgba(239, 239, 239, 1) 60%,
			rgba(255, 255, 255, 1) 96%
		);
		width: inherit;
	}
</style>
