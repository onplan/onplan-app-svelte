<script>
	import { activeWOListID } from '$lib/stores/work-order/activeWOListID';
	import { WOLists } from '$lib/stores/work-order/workorderLists';
	import samplePPE from '$lib/temp/samplePPE'; // to be deleted
	import { asDate, asTime, textTruncate, toastFeatureNotAvaiable } from '$lib/utils';
	import WorkOrderClass from '$lib/utils/class/WorkOrderClass';
	let windowWidth = 0;

	$: wo = $WOLists.find((wo) => wo.id === $activeWOListID) || null;
	$: woData = wo ? new WorkOrderClass(wo) : null;
	$: hasActiveWO = Boolean($activeWOListID);

	$: displayFullWidth = windowWidth < 992 && hasActiveWO;
	// $: console.log('windowWidth: ', windowWidth);
	$: console.log('activeWOListID: ', $activeWOListID);
	$: console.log('wo: ', wo);

	// $: console.log('windowWidth: ', windowWidth);

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
		{#if wo}
			{@const statusColorClass = woData.getStatusColorClass()}
			{@const startBtnLabel = woData.getStartBtnLabel()}
			{@const {
				totaStepsCount,
				notDoneStepsCount,
				notStartedStepsCount,
				inProgressStepsCount,
				remainingSteps,
				completedStepsCount
			} = woData.getStepsCountDetails()}

			<!-- Data preparations for printing-->

			{@const woHasStarted = woData.hasStarted()}
			{@const woHasCompleted = woData.hasCompleted()}

			{@const estDuration = woData.getEstDuration()}
			{@const actDuration = woData.getActDuration()}

			{@const startTime = woHasStarted ? asTime(wo.startedAt) : '-'}
			{@const startDate = woHasStarted ? asDate(wo.startedAt) : '&nbsp;'}

			{@const endTime = woHasCompleted ? asTime(wo.completedAt) : '-'}
			{@const endDate = woHasCompleted ? asDate(wo.completedAt) : '&nbsp;'}

			<div class="card-body" style="overflow:auto">
				<div class="clearfix mb-4 pr-3 px-15px">
					<div class="float-start" style="width: 100px">
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- TODO: make src dynamic -->
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
						<div class="w-75">
							<h4 class="card-title mb-1">{wo.workOrderNumber}</h4>
							<h6 class="card-title">
								{wo.taskName}
								{wo.workOrderDescription}
							</h6>
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
									on:click={toastFeatureNotAvaiable}
								>
									<i class="bi bi-download" />
									<span class="d-none d-md-inline-block">Report</span>
								</button>
							</div>
							<div
								class="badge rounded-pill float-end mt-2 bg-primary"
								class:bg-danger={wo.workOrderType.type === 'Breakdown'}
							>
								{wo.workOrderType.type}
							</div>
						</div>
					</div>
					<div
						class="badge rounded-1 bg-secondary bg-opacity-25 border-radius-0 text-black float-start mt-2"
					>
						{textTruncate(wo.customerAssetList.assetName, 40)}
					</div>
				</div>

				<!-- WO Progress and Start Button-->
				<div class="w-100 clearfix mb-2 px-15px" style="padding-left: 2px">
					<div class="float-start mt-1" style:width={`calc(100% - ${startBtnWidth + 20}px)`}>
						<div class="progress mt-2 mb-3 mr-3" style="height: 10px;">
							<div
								class={`progress-bar bg-${statusColorClass}`}
								role="progressbar"
								style={`width: ${wo.progress.percent}%;`}
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="float-end">
						<button class={`btn btn-sm btn-${statusColorClass}`} bind:offsetWidth={startBtnWidth}>
							{startBtnLabel}
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
								<div class="infoCardValue">
									{totaStepsCount}
								</div>
								<div class="infoCardHeading">
									{wo.progress.percent}% Complete
								</div>
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
										<strong>{completedStepsCount}</strong> Completed
									</div>
									<div class="infoCardSmallText">
										<i class="bi bi-x-square-fill text-danger" />
										<strong>{notDoneStepsCount}</strong> Not done
									</div>
								</div>
								<div class="float-end">
									<div class="infoCardSmallText">
										<i class="bi bi-dash-circle-fill text-secondary" />
										<strong>{remainingSteps}</strong> Remaining
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- CONTINUE HERE... -->
					<!-- Schedule -->
					<div class="col-12 mb-4 px-15px">
						<div class="infoCard" style="height: 100%">
							<i class="bi bi-clock fs-4 text-primary" />
							<div class="fw-bold pb-1" style="font-size: 13px">Schedule</div>
							<div class="row">
								<!-- Estimated Duration -->
								<div class="col-sm-3 col-6 mb-4">
									<div class="infoCardValue mt-2">
										{#if estDuration}
											<span>
												{estDuration}
												<span class="text-xxsmall"> Hrs</span>
											</span>
										{:else}
											-
										{/if}
									</div>
									<div class="infoCardHeading">Est. Duration</div>
								</div>

								<!-- Actual Duration -->
								<div class="col-sm-3 col-6 mb-4">
									<div class="infoCardValue mt-2">
										{#if actDuration}
											{@const isWarning =
												actDuration > estDuration &&
												(actDuration - estDuration) / estDuration <= 0.25}

											{@const isDanger =
												actDuration > estDuration &&
												!(actDuration - estDuration) / estDuration <= 0.25}

											<span class:text-warning={isWarning} class:text-danger={isDanger}>
												{actDuration}
												<span class="text-xxsmall"> Hrs</span>
											</span>
										{:else}
											-
										{/if}
									</div>
									<div class="infoCardHeading">Act. Duration</div>
								</div>

								<!-- Start Time -->
								<div class="col-sm-3 col-6 mb-4">
									<div class="infoCardTime text-success">{startTime}</div>
									<div class="infoCardDate">{@html startDate}</div>
									<div class="infoCardHeading">Start Time</div>
								</div>

								<!-- End Time -->
								<div class="col-sm-3 col-6 mb-4">
									<div class="infoCardTime">{endTime}</div>
									<div class="infoCardDate">{@html endDate}</div>
									<div class="infoCardHeading">End Time</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Crew / userList -->
					<div class="col-12 mb-4 px-15px">
						<div class="mt-2">
							<div class="clearfix">
								<h5 class="float-start card-title">
									Crew
									<small class="fw-light">({wo?.users?.length || 0})</small>
								</h5>
								<button
									class="btn float-end"
									style="margin-top: -8px"
									on:click={toastFeatureNotAvaiable}
								>
									<i class="bi bi-pencil-square fs-5" />
								</button>
							</div>
							<div class="card">
								<div class="card-body">
									<ul class="list-group list-group-flush">
										{#each wo?.users as crew}
											<li class="list-group-item px-0 d-flex align-items-center py-0">
												<i class="bi bi-person-circle fs-3 text-primary" />
												<span class="ms-3">{crew.firstName} {crew.lastName}</span>
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

					<!-- PPE Requirements/ ppeList (Hidden if no PPEs)-->
					{#if wo?.workOrderPpe?.length}
						<div class="col-12 mb-4 px-15px">
							<div class="mt-2">
								<div class="clearfix">
									<h5 class="float-start card-title">
										PPE Requirements
										<small class="fw-light">({wo?.workOrderPpe?.length})</small>
									</h5>
								</div>
								<div class="card mt-2">
									<div class="card-body">
										<div class="row">
											{#each wo?.workOrderPpe as woPpe}
												{@const ppeDescription = woPpe.ppe.ppedescription.replace('and', '&amp;')}
												<!-- TODO: Base URL should be from `PUBLIC_ADVANTAGEURL` env var, hard coded for testing-->
												<!-- TODO: `ppeImg` should be base64 like: => const ppeBase64Image = await getCachedPpeIcon(ppeReference.ppe.ppeImage.replace('http:', 'https:'), ppeId);-->
												{@const ppeImg = `https://qa.asseton-tech.com${woPpe.ppe.ppeImage}`}

												<div class="col-12 col-md-6">
													<div class="my-1">
														<!-- svelte-ignore a11y-missing-attribute -->
														<img src={ppeImg} width="34px" />
														<span class="ms-3">{@html ppeDescription}</span>
													</div>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}

					<!-- Hazards and Controls / hazardsList (Hidden if no H & C) -->
					{#if wo?.workOrderHazards?.length}
						<div class="col-12 mb-4 px-15px">
							<div class="mt-2">
								<div class="clearfix">
									<h5 class="float-start card-title">
										Hazards and Controls
										<small class="fw-light">({wo?.workOrderHazards?.length})</small>
									</h5>
								</div>
								<div class="card mt-2">
									<div class="card-body">
										<div class="row">
											{#each wo?.workOrderHazards as hazard}
												<!-- TODO: Base URL should be from `PUBLIC_ADVANTAGEURL` env var, hard coded for testing-->
												{@const ppeImg = `https://qa.asseton-tech.com${hazard.icon}`}

												<!-- Remove repeated hazard name at the front of the some hazard templates - error in legacy data -->
												{@const hazardTemplate =
													hazard.template.substring(0, hazard.name.length) === hazard.name
														? hazard.template.substring(hazard.name.length + 2)
														: hazard.template}

												<div class="col-12 mb-3">
													<!-- svelte-ignore a11y-missing-attribute -->
													<img src={ppeImg} width="34px" class="float-start" />
													<p class="float-end" style="width: calc(100% - 50px)">
														<strong>{hazard.name}.</strong>
														<span>{hazardTemplate}</span>
													</p>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}

					<!-- Tools and Equipment / toolsList -->
					{#if wo?.workOrderTools?.length}
						<div class="col-12 mb-4 px-15px">
							<div class="mt-2">
								<div class="clearfix">
									<h5 class="float-start card-title">
										Tools and Equipment
										<small class="fw-light">({wo?.workOrderTools?.length})</small>
									</h5>
								</div>
								<div class="card mt-2">
									<div class="card-body">
										<div class="row">
											{#each wo?.workOrderTools as woTool}
												<div class="col-12 mb-2">
													<i class="bi bi-tools ms-2 fs-4" />
													<p class="float-end" style="width: calc(100% - 50px)">
														{#if woTool.tool.manufacturerToolNumber === '-'}
															<strong>{woTool.tool.description}</strong>
															<span> (× {woTool.quantity}) </span>
														{:else}
															<strong>{woTool.tool.manufacturerToolNumber}.</strong>
															<span>
																{woTool.tool.description} (× {woTool.quantity})
															</span>
														{/if}
													</p>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}

					<!-- partsList -->
					<!--TODO:  TO BE ADDED -->

					<!-- defectList -->
					<!--TODO:  TO BE ADDED -->

					<div class="container text-center" style="margin-bottom: 50px;">
						<button class={`btn btn-sm btn-${statusColorClass}`}>
							{startBtnLabel}
						</button>
					</div>
				</div>
			</div>
		{:else}
			<p class="text-center">
				<i class="bi bi-hand-index" />
				Select a work order
			</p>
		{/if}
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
