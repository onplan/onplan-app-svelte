<script>
	/**
	 * @type{number} - 1 to 100
	 *
	 */
	export let percentage;
	export let statusColor;
</script>

<span>
	<div class="pie no-round" style="--p:100;--c:#eee;--b:4px; top: -7px; right: -43px;" />
	<div
		class="pie no-round"
		style="--p:{percentage};--c:{statusColor};--b:4px; top: -7px; right: -4px;"
	/>
</span>

<style>
	.pie {
		--p: 0; /** default to 0% */
		--b: 22px;
		--c: darkred;
		--w: 25px;

		width: var(--w);
		aspect-ratio: 1;
		position: relative;
		display: inline-grid;
		margin: 5px;
		place-content: center;
		font-size: 25px;
		font-weight: bold;
		font-family: sans-serif;
	}
	.pie:before,
	.pie:after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.pie:before {
		inset: 0;
		background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
			conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
		-webkit-mask: radial-gradient(
			farthest-side,
			#0000 calc(99% - var(--b)),
			#000 calc(100% - var(--b))
		);
		mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
	}
	.pie:after {
		inset: calc(50% - var(--b) / 2);
		background: var(--c);
		transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2));
	}
	.no-round:before {
		background-size: 0 0, auto;
	}
	.no-round:after {
		content: none;
	}
</style>
