<script>
	import { activeWOListID } from '$lib/stores/work-order/activeWOListID';
	import { WOLists } from '$lib/stores/work-order/workorderLists';
	import samplePPE from '$lib/temp/samplePPE'; // to be deleted
	let windowWidth = 0;

	$: workOrderData = $WOLists.find((wo) => wo.id === $activeWOListID) || {};
	$: hasActiveWO = Boolean($activeWOListID);

	$: displayFullWidth = windowWidth < 992 && hasActiveWO;
	// $: console.log('windowWidth: ', windowWidth);
	$: console.log('displayFullWidth: ', displayFullWidth);

	let startBtnWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="workOrderDisplayCard" class="" class:displayFullWidth>
	<div id="workOrderListBtn" class="w-100 cursor-pointer d-block d-lg-none">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class="text-primary d-md-inline"
			on:click={() => {
				hasActiveWO = false;
			}}>&lt; Work Orders</span
		>
	</div>

	<div class="container-fluid mt-3">
		<div class="card-body" style="overflow:auto">
			<div class="clearfix mb-4 pr-3 px-15px">
				<div class="float-start" style="width: 100px">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						class="img-thumbnail p-0 shadow"
						src="https://placebear.com/g/100/100"
						width="80px"
						height="80px"
					/>
				</div>
				<div
					class="float-end"
					style="display: flex; justify-content: space-between; width: calc(100% - 100px);"
				>
					<!-- <div style="max-width: calc(100vw - 205px);"> -->
					<div>
						<h4 class="card-title mb-1">fefe</h4>
						<h6 class="card-title">Testing Onplan 7000</h6>
					</div>
					<div
						style=" display: flex;
									flex-direction: column;
									flex-wrap: wrap-reverse;
									align-content: flex-end;
									justify-content: space-between;
								"
					>
						<div class="float-end text-center">
							<!-- Report button -->
							<button
								type="button"
								class="btn btn-outline-secondary btn-sm px-3"
								style="--bs-btn-border-radius: 1rem;"
							>
								<i class="bi bi-download" />
								<span class="d-none d-md-inline-block">Report</span>
							</button>
						</div>
						<div class="badge rounded-pill bg-danger float-end mt-2">Breakdown</div>
					</div>
				</div>
				<div
					class="badge rounded-1 bg-secondary bg-opacity-25 border-radius-0 text-black float-start mt-2"
				>
					Komatsu 930E-4 Haul Truck
				</div>
			</div>

			<!-- WO Progress and Start Button-->
			<div class="w-100 clearfix mb-2 px-15px" style="padding-left: 2px">
				<div class="float-start mt-1" style:width={`calc(100% - ${startBtnWidth + 20}px)`}>
					<div class="progress mt-2 mb-3 mr-3" style="height: 10px;">
						<div
							class="progress-bar bg-success"
							role="progressbar"
							style="width: 75%;"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
				<div class="float-end">
					<button class="btn btn-sm btn-success" bind:offsetWidth={startBtnWidth}>
						Approved
					</button>
				</div>
			</div>

			<!-- WO details -->
			<div class="row">
				<!-- Total Steps-->
				<div class="col-sm-4 col-12 mb-4 px-15px">
					<div class="infoCard text-center">
						<i class="bi bi-shield-fill-check fs-4 text-primary" />
						<div class="fw-bold" style="font-size: 13px">Total Steps</div>
						<div class="cleardiv">
							<div class="infoCardValue">2</div>
							<div class="infoCardHeading">100% Complete</div>
						</div>
					</div>
				</div>

				<!-- Step Completion details -->
				<div class="col-sm-8 col-12 mb-4 px-15px">
					<div class="infoCard">
						<i class="bi bi-star-fill fs-4 text-primary" />
						<div class="fw-bold pb-1" style="font-size: 13px">Step Completion</div>
						<div class="cleardiv">
							<div class="float-start">
								<div class="infoCardSmallText mb-2">
									<i class="bi bi-check-square-fill text-success" />
									<strong>1</strong> Completed
								</div>
								<div class="infoCardSmallText">
									<i class="bi bi-x-square-fill text-danger" />
									<strong>1</strong> Not done
								</div>
							</div>
							<div class="float-end">
								<div class="infoCardSmallText">
									<i class="bi bi-dash-circle-fill text-secondary" />
									<strong>0</strong> Remaining
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Schedule -->
				<div class="col-12 mb-4 px-15px">
					<div class="infoCard" style="height: 100%">
						<i class="bi bi-clock fs-4 text-primary" />
						<div class="fw-bold pb-1" style="font-size: 13px">Schedule</div>
						<div class="row">
							<div class="col-sm-3 col-6 mb-4">
								<div class="infoCardValue mt-2">
									1
									<span class="text-xxsmall"> Hrs</span>
								</div>
								<div class="infoCardHeading">Est. Duration</div>
							</div>
							<div class="col-sm-3 col-6 mb-4">
								<div class="infoCardValue text-danger mt-2">
									2658
									<span class="text-xxsmall"> Hrs</span>
								</div>
								<div class="infoCardHeading">Act. Duration</div>
							</div>
							<div class="col-sm-3 col-6 mb-4">
								<div class="infoCardTime text-success">17:40</div>
								<div class="infoCardDate">04 May 2023</div>
								<div class="infoCardHeading">Start Time</div>
							</div>
							<div class="col-sm-3 col-6 mb-4">
								<div class="infoCardTime">12:00</div>
								<div class="infoCardDate">23 Aug 2023</div>
								<div class="infoCardHeading">End Time</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Crew / userList -->
				<div class="col-12 mb-4 px-15px">
					<div class="mt-2">
						<div class="clearfix">
							<h5 class="float-start card-title">Crew</h5>
							<button class="btn float-end" style="margin-top: -8px">
								<i class="bi bi-pencil-square fs-5" />
							</button>
						</div>
						<div class="card">
							<div class="card-body">
								<ul class="list-group list-group-flush">
									{#each ['Shane Mackay', 'Sriram Raman', 'William Lopez'] as crew}
										<li class="list-group-item px-0 d-flex align-items-center py-0">
											<i class="bi bi-person-circle fs-3 text-primary" />
											<span class="ms-3">{crew}</span>
										</li>
									{:else}
										<p class="mt-2 d-flex align-items-center justify-content-center">
											<i class="bi bi-x-circle fs-3 text-danger" />
											<span class="ms-2"> No Crew assigned to this Work Order</span>
										</p>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- documentList -->
				<!--TODO:  TO BE ADDED -->

				<!-- PPE Requirements/ ppeList -->
				<!-- TODO: this is hidden if no PPEs -->
				<div class="col-12 mb-4 px-15px">
					<div class="mt-2">
						<div class="clearfix">
							<h5 class="float-start card-title">PPE Requirements</h5>
						</div>
						<div class="card mt-2">
							<div class="card-body">
								<div class="row">
									{#each samplePPE as ppe}
										<div class="col-12 col-md-6">
											<div class="my-1">
												<img src={ppe.ppeImage} width="34px" />
												<span class="ms-3">{ppe.ppedescription}</span>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Hazards and Controls / hazardsList -->
				<!-- TODO: this is hidden if no H & C -->
				<div class="col-12 mb-4 px-15px">
					<div class="mt-2">
						<div class="clearfix">
							<h5 class="float-start card-title">Hazards and Controls</h5>
						</div>
						<div class="card mt-2">
							<div class="card-body">
								<div class="row">
									<div class="col-12 mb-3">
										<!-- svelte-ignore a11y-missing-attribute -->
										<img
											src="https://qa.asseton-tech.com/img/advices/doc-warning.png"
											width="34px"
											class="float-start"
										/>
										<p class="float-end" style="width: calc(100% - 50px)">
											<strong>Dust.</strong>
											<span>Wear a dust mask appropriate to the task being undertaken</span>
										</p>
									</div>

									<div class="col-12 mb-3">
										<!-- svelte-ignore a11y-missing-attribute -->
										<img
											src="https://qa.asseton-tech.com/img/advices/doc-warning.png"
											width="34px"
											class="float-start"
										/>
										<p class="float-end" style="width: calc(100% - 50px)">
											<strong>Excessive Noise.</strong>
											<span>
												Wear correct hearing protection and communicate to effected work parties.
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Tools and Equipment / toolsList -->
				<div class="col-12 mb-4 px-15px">
					<div class="mt-2">
						<div class="clearfix">
							<h5 class="float-start card-title">Tools and Equipment</h5>
						</div>
						<div class="card mt-2">
							<div class="card-body">
								<div class="row">
									<div class="col-12 mb-2">
										<i class="bi bi-tools fs-3" />
										<p class="float-end" style="width: calc(100% - 50px)">
											<strong>Tunnel-specific handled radio</strong>
											<span>
												Intrinsically safe - Next to MX4 station, upper floor of braaker shop (× 1)
											</span>
										</p>
									</div>

									<div class="col-12 mb-2">
										<i class="bi bi-tools fs-3" />
										<p class="float-end" style="width: calc(100% - 50px)">
											<strong>MX4</strong>
											<span> Upper floor of breaker shop (× 1) </span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- partsList -->
				<!--TODO:  TO BE ADDED -->

				<!-- defectList -->
				<!--TODO:  TO BE ADDED -->
			</div>
		</div>
	</div>
</div>

<style>
	#workOrderDisplayCard {
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

	#workOrderListBtn {
		border-bottom: #ddd solid 1px;
		padding: 10px 10px 10px;
		background-color: #f6f6f6;
	}

	.displayFullWidth {
		top: 60px;
		left: 0px;
		height: calc(100% - 110px);
		z-index: 1030;
		width: 100%;
		animation: 0.3s display-in-full-width-transition---zzzzz;
	}

	@keyframes display-in-full-width-transition {
		from {
			top: 100%;
		}
		to {
			top: 60px;
		}
	}

	.px-15px {
		padding-right: 15px !important;
		padding-left: 15px !important;
	}

	.infoCard {
		text-align: center;
		padding: 16px 24px 16px 24px;
		background-color: #fff;
		/* margin: auto !important; */
		width: 100%;
		height: 140px;
		border-radius: 10px;
		box-shadow: 3px 3px 10px 2px #ccc;
		-webkit-box-shadow: 3px 3px 10px 2px #ccc;
	}

	.infoCardHeading {
		color: #aaa;
		font-size: 12px;
		text-align: center;
	}

	.infoCardValue {
		text-align: center;
		font-size: 24px;
	}

	.infoCardDate {
		text-align: center;
		font-size: 10px;
	}

	.infoCardTime {
		text-align: center;
		font-size: 24px;
	}

	.infoCardSmallText {
		font-size: 12px;
		text-align: left;
	}

	.text-xxsmall {
		font-size: 50%;
		font-weight: 400;
	}
</style>
