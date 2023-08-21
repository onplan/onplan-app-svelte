export default [
	{
		id: 213,
		workOrderNumber: 'EVO - 5/26/2022 - test3',
		workOrderDescription: 'Daily Millwright RC Conv Check',
		createdAt: '2022-05-27 03:00:31',
		createdBy: 97,
		updatedAt: '2023-06-01 16:28:37',
		updatedBy: 128,
		scheduledAt: '2022-05-25 10:00:00',
		googleMapStepDateTime: null,
		status: 'Approved',
		startedAt: '2022-05-27 06:14:01',
		completedAt: '2023-06-01 16:27:58',
		workOrderComponentCode: '',
		workOrderHazards: [
			{
				id: 54,
				icon: '/img/advices/doc-warning.png',
				name: 'Dust',
				template: 'Dust. Wear a dust mask appropriate to the task being undertaken',
				createdAt: '2019-04-02T07:02:15.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			},
			{
				id: 55,
				icon: '/img/advices/doc-warning.png',
				name: 'Excessive Noise',
				template:
					'Excessive Noise. Wear correct hearing protection and communicate to effected work parties.',
				createdAt: '2019-04-02T07:03:42.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			},
			{
				id: 24,
				icon: '/img/advices/doc-warning.png',
				name: 'Slips, Trips and Falls',
				template:
					'Slips, Trips and Falls. Ensure good housekeeping at all times and clean up spills immediately should they occur.',
				createdAt: '2017-09-12T20:08:38.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			}
		],
		workOrderSkills: [
			{
				id: 42,
				skill: {
					id: 3,
					createdAt: '2020-03-12T05:12:10.000Z',
					createdBy: 4,
					updatedAt: '2020-03-12T05:12:10.000Z',
					updatedBy: null,
					description: 'Mechanic',
					shortDescription: null
				},
				duration: 24,
				quantity: 1,
				createdAt: '2022-04-14T04:20:29.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:20:29.000Z',
				updatedBy: null
			},
			{
				id: 43,
				skill: {
					id: 2,
					createdAt: '2020-03-12T00:37:30.000Z',
					createdBy: 4,
					updatedAt: '2020-03-12T00:37:30.000Z',
					updatedBy: null,
					description: 'Electrician',
					shortDescription: null
				},
				duration: 24,
				quantity: 1,
				createdAt: '2022-04-14T04:20:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:20:48.000Z',
				updatedBy: null
			}
		],
		workOrderTools: [
			{
				id: 6018,
				tool: {
					id: 1020,
					createdAt: '2018-08-09T16:54:50.000Z',
					createdBy: null,
					toolImage: '/img/NoPicAvailable.png',
					updatedAt: '2022-02-18T10:10:50.000Z',
					updatedBy: null,
					description: 'Flashlight',
					manufacturerToolNumber: '-'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:52:54.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:52:54.000Z',
				updatedBy: null
			},
			{
				id: 6019,
				tool: {
					id: 1596,
					createdAt: '2022-04-08T15:54:25.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:54:25.000Z',
					updatedBy: null,
					description: 'intrinsically safe - Next to MX4 station, upper floor of braaker shop',
					manufacturerToolNumber: 'Tunnel-specific handled radio'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:54:25.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:54:25.000Z',
				updatedBy: null
			},
			{
				id: 6020,
				tool: {
					id: 1597,
					createdAt: '2022-04-08T15:54:57.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:54:57.000Z',
					updatedBy: null,
					description: 'Upper floor of breaker shop',
					manufacturerToolNumber: 'MX4'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:54:57.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:54:57.000Z',
				updatedBy: null
			},
			{
				id: 6021,
				tool: {
					id: 1598,
					createdAt: '2022-04-08T15:55:33.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:55:33.000Z',
					updatedBy: null,
					description: '-',
					manufacturerToolNumber: 'Flagging tape'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:55:34.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:55:34.000Z',
				updatedBy: null
			}
		],
		workOrderParts: [],
		workOrderProcedures: [],
		workOrderPermits: [
			{
				id: 1247,
				permit: {
					id: 6,
					createdAt: '2018-01-10T20:26:03.000Z',
					createdBy: null,
					permitUrl: null,
					updatedAt: '2019-03-30T02:38:31.000Z',
					updatedBy: null,
					description: 'Confined Space Entry'
				},
				createdAt: '2022-04-11T22:33:54.000Z',
				createdBy: 97,
				updatedAt: '2022-04-11T22:33:54.000Z',
				updatedBy: null
			},
			{
				id: 1248,
				permit: {
					id: 4,
					createdAt: '2018-01-10T20:25:55.000Z',
					createdBy: null,
					permitUrl: null,
					updatedAt: '2019-03-30T02:38:31.000Z',
					updatedBy: null,
					description: 'Work Isolation'
				},
				createdAt: '2022-04-11T22:35:04.000Z',
				createdBy: 97,
				updatedAt: '2022-04-11T22:35:04.000Z',
				updatedBy: null
			}
		],
		workOrderPpe: [
			{
				id: 13775,
				ppe: {
					id: 10,
					ppeImage: '/img/ppe/ppe_insulated_boots.jpg',
					createdAt: '2018-08-23T20:27:10.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Electrically Insulated Boots'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13776,
				ppe: {
					id: 1,
					ppeImage: '/img/ppe/ppe_eye_protection.png',
					createdAt: '2017-08-19T18:20:57.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Eye Protection'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13777,
				ppe: {
					id: 8,
					ppeImage: '/img/ppe/ppe_ear_protection.png',
					createdAt: '2017-08-19T18:23:30.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Hearing Protection'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13778,
				ppe: {
					id: 4,
					ppeImage: '/img/ppe/ppe_long_sleeve_shirt.jpg',
					createdAt: '2017-08-19T18:21:32.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Long Sleeve Shirt and Trousers'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13779,
				ppe: {
					id: 7,
					ppeImage: '/img/ppe/ppe_head_protection.png',
					createdAt: '2017-08-19T18:22:15.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Hard Hat'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13780,
				ppe: {
					id: 11,
					ppeImage: '/img/ppe/ppe_hand_protection.png',
					createdAt: '2019-07-29T00:43:02.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Protective Gloves'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13781,
				ppe: {
					id: 6,
					ppeImage: '/img/ppe/ppe_hi_vis.png',
					createdAt: '2017-08-19T18:22:06.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Reflective Vest or Clothing'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13782,
				ppe: {
					id: 3,
					ppeImage: '/img/ppe/ppe_foot_protection.png',
					createdAt: '2017-08-19T18:21:09.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Steel Toe Boots'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			}
		],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: 'Raw Coal Conveyor ',
		serialNumberPrefix: 'CONV025E',
		modelClass: 'Conveyor',
		taskName: 'Daily Millwright RC Conv Check',
		taskType: 'Inspect',
		approvedDate: '2023-06-01 06:28:20',
		actionedBy: null,
		duration: '2',
		aiEstimatedDuration: 0,
		stepLimitHistory: {},
		reportLink: 'uat-tecktest-job-report-EVO-5262022-test3-RC-Conveyor-Teck-42823-pm-gvn.pdf',
		defectReportLink:
			'defects-uat-tecktest-job-report-EVO-5262022-test3-RC-Conveyor-Teck-42831-pm-zyj.pdf',
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 6559,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:55',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:14:06',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13044',
				uniqueJobOperationId: 'oo2ft',
				stepNumber: '103209',
				order: 0,
				images: '[]',
				instructions:
					'<ol><li data-list="ordered"><span></span>General inspection to identify immediate and potential repairs required, as well as severity of issues.</li><li data-list="ordered"><span></span>Create Work Orders for all issues identified during inspection.</li><li data-list="ordered"><span></span>Flag concerns with ribbon if safe to do so</li></ol>',
				stepLimitData: null,
				title: 'Job Scope',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6560,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:55',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:14:08',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '12910',
				uniqueJobOperationId: '2n41j',
				stepNumber: '102536',
				order: 1,
				images: '[]',
				instructions:
					'<p>Access to the conveyor requires entry into controlled areas. The following are the requirements, </p><p><br /></p><ul><li data-list="bullet"><span></span>Notify control room prior to entering tunnel</li><li data-list="bullet"><span></span>Notify control room when entering tube so that belt tonnage can be reduced to 500 tph.</li><li data-list="bullet"><span></span>Notify control room when inspection is complete</li></ul><p><br /></p><p>Do you Acknowledge to comply with these as it is required?</p>',
				stepLimitData: null,
				title: 'REQUIREMENTS',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6561,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:55',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:21:15',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13058',
				uniqueJobOperationId: '786g7',
				stepNumber: '103277',
				order: 2,
				images: '[]',
				instructions:
					'<p>Allowable belt tracking deviation +/- 4" - Deviation Limit</p><ol><li data-list="ordered"><span></span>If greater than allowable deviation, please record the actual deviation as defect</li><li data-list="ordered"><span></span>If less than allowable deviation, please record the actual deviation</li></ol>',
				stepLimitData: {
					id: 1599,
					data: {
						isRendered: true,
						limitValues: {
							text: '3',
							isCompleted: false,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Deviation limit',
					operator: null,
					createdAt: '2022-05-26T15:27:39.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:28:30.000Z',
					updatedBy: 97,
					isRequired: 0,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 15,
						data: null,
						name: 'Textbox',
						createdAt: '2020-12-04T10:22:14.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:14.000Z',
						updatedBy: null,
						description: 'textbox',
						orderNumber: 11,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Specifications/Informations',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6562,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:55',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:21:16',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13058',
				uniqueJobOperationId: '786g7',
				stepNumber: '103278',
				order: 3,
				images: '[]',
				instructions:
					'<p>Allowable temperature difference between pulley bearings 10 Degree Celsius</p><ol><li data-list="ordered"><span></span>If greater than allowable temperature, please record the actual temperature as defect</li><li data-list="ordered"><span></span>If less than allowable temperature, please record the actual temperature</li></ol><p><br /></p>',
				stepLimitData: {
					id: 1600,
					data: {
						isRendered: true,
						limitValues: {
							text: '8',
							isCompleted: false,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Temperature',
					operator: null,
					createdAt: '2022-05-26T15:28:48.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:29:39.000Z',
					updatedBy: 97,
					isRequired: 0,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 15,
						data: null,
						name: 'Textbox',
						createdAt: '2020-12-04T10:22:14.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:14.000Z',
						updatedBy: null,
						description: 'textbox',
						orderNumber: 11,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Specifications/Informations',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6563,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:56',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:14:55',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13059',
				uniqueJobOperationId: 'vblxe',
				stepNumber: '103279',
				order: 4,
				images: '["/upload/image-1653580025583-rdcgu.jpeg"]',
				instructions:
					'<p>Tail Pulley</p>\n<ul><li data-list="bullet"><span></span>Observe belt tracking.  It should be centered on the pulley.</li></ul><p>.  </p>\n',
				stepLimitData: {
					id: 1261,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tail Pulley Observation',
					operator: null,
					createdAt: '2022-05-09T23:19:07.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:30:48.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Tail Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6564,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:56',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:34:04',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13059',
				uniqueJobOperationId: 'vblxe',
				stepNumber: '103692',
				order: 5,
				images: '["/upload/image-1653580095664-p78ms.png"]',
				instructions:
					'<p>Tail Pulley</p><ul><li data-list="bullet"><span></span>Inspect tail pulley for material buildup</li></ul>',
				stepLimitData: {
					id: 1262,
					data: {
						isRendered: true,
						limitValues: {
							pass: false,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tail Pulley Inspect',
					operator: null,
					createdAt: '2022-05-09T23:19:10.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:31:11.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Tail Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 608,
						name: 'Tail pulley damaged',
						defectNumber: '',
						longDescription: 'Crack on it',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2022-05-27 06:35:56',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-05-27 06:35:56',
						updatedAt: '2022-05-27 06:35:56',
						updatedBy: null,
						createdBy: {
							id: 97,
							createdAt: '2022-02-01 05:07:01',
							createdBy: 82,
							updatedAt: '2022-05-20 08:01:47',
							updatedBy: 60,
							firstName: 'Sriram',
							lastName: 'Raman',
							active: 1,
							email: 'Sriram.raman.test@teck.com ',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 2,
							name: 'Failure',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6564,
							createdAt: '2022-05-27 03:00:31',
							createdBy: 97,
							updatedAt: '2022-05-27 06:35:56',
							updatedBy: 97,
							completedAt: '2022-05-27 06:34:04',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13059',
							uniqueJobOperationId: 'vblxe',
							stepNumber: '103692',
							order: 5,
							images: '["/upload/image-1653580095664-p78ms.png"]',
							instructions:
								'<p>Tail Pulley</p><ul><li data-list="bullet"><span></span>Inspect tail pulley for material buildup</li></ul>',
							stepLimitData: {
								id: 1262,
								data: {
									isRendered: true,
									limitValues: {
										pass: false,
										isLimitComplete: true
									}
								},
								file: null,
								name: 'EVO RC Conveyor - Tail Pulley Inspect',
								operator: null,
								createdAt: '2022-05-09T23:19:10.000Z',
								createdBy: 95,
								isDynamic: 0,
								updatedAt: '2022-05-26T15:31:11.000Z',
								updatedBy: 97,
								isRequired: 1,
								description: null,
								positionCode: null,
								isUtilisation: 0,
								limitCategory: {
									id: 9,
									data: null,
									name: 'Pass / Fail',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'passfail',
									orderNumber: 4,
									isTableLimit: 1
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Conveyor Tail Inspection',
							advices: [],
							completedBy: 97,
							isNested: 0
						},
						crack: null
					}
				]
			},
			{
				id: 6565,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:56',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:15:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13060',
				uniqueJobOperationId: '9wiqi',
				stepNumber: '103280',
				order: 6,
				images: '["/upload/image-1653580209111-6ecu3.jpeg"]',
				instructions:
					'<p>Snub Pulley</p><ul><li data-list="bullet"><span></span>Observe belt tracking.  It should be centered on the pulley.</li></ul><p><br /></p>',
				stepLimitData: {
					id: 1267,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Snub Pulley Observation',
					operator: null,
					createdAt: '2022-05-10T15:12:39.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:31:55.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Snub Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6566,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:56',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:24:48',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13060',
				uniqueJobOperationId: '9wiqi',
				stepNumber: '103699',
				order: 7,
				images: '["/upload/image-1653580402648-trh9x.png"]',
				instructions:
					'<p>Snub Pulley</p><ul><li data-list="bullet"><span></span>Inspect pulley for material buildup.</li></ul><p><br /></p>',
				stepLimitData: {
					id: 1268,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Snub Pulley Inspect',
					operator: null,
					createdAt: '2022-05-10T15:12:43.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:32:17.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Snub Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6567,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:56',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:24:54',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103281',
				order: 8,
				images: '["/upload/image-1653580503273-jbp2d.png"]',
				instructions:
					'<p>Scrappers</p><ul><li data-list="bullet"><span></span>Check all scrapers for effectiveness. It should be just touching belt. Make WO for any abnormalities, or if less than 1" remaining</li></ul>',
				stepLimitData: {
					id: 1269,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Scrappers Check',
					operator: null,
					createdAt: '2022-05-10T15:43:52.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:32:54.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6568,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:35:04',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103694',
				order: 9,
				images: '[]',
				instructions:
					'<p>Scrappers</p>\n<ul><li data-list="bullet"><span></span>Hose and clean all scrapers</li></ul>',
				stepLimitData: {
					id: 1270,
					data: {
						isRendered: true,
						limitValues: {
							pass: false,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Clean Scrappers ',
					operator: null,
					createdAt: '2022-05-10T15:44:03.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:33:14.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 609,
						name: 'Scrapper needs to be replaced ',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2022-05-27 06:35:56',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-05-27 06:35:56',
						updatedAt: '2022-05-27 06:35:56',
						updatedBy: null,
						createdBy: {
							id: 97,
							createdAt: '2022-02-01 05:07:01',
							createdBy: 82,
							updatedAt: '2022-05-20 08:01:47',
							updatedBy: 60,
							firstName: 'Sriram',
							lastName: 'Raman',
							active: 1,
							email: 'Sriram.raman.test@teck.com ',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 2,
							name: 'Failure',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6568,
							createdAt: '2022-05-27 03:00:31',
							createdBy: 97,
							updatedAt: '2022-05-27 06:35:57',
							updatedBy: 97,
							completedAt: '2022-05-27 06:35:04',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13061',
							uniqueJobOperationId: 'os0j4',
							stepNumber: '103694',
							order: 9,
							images: '[]',
							instructions:
								'<p>Scrappers</p>\n<ul><li data-list="bullet"><span></span>Hose and clean all scrapers</li></ul>',
							stepLimitData: {
								id: 1270,
								data: {
									isRendered: true,
									limitValues: {
										pass: false,
										isLimitComplete: true
									}
								},
								file: null,
								name: 'EVO RC Conveyor - Clean Scrappers ',
								operator: null,
								createdAt: '2022-05-10T15:44:03.000Z',
								createdBy: 97,
								isDynamic: 0,
								updatedAt: '2022-05-26T15:33:14.000Z',
								updatedBy: 97,
								isRequired: 1,
								description: null,
								positionCode: null,
								isUtilisation: 0,
								limitCategory: {
									id: 9,
									data: null,
									name: 'Pass / Fail',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'passfail',
									orderNumber: 4,
									isTableLimit: 1
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Conveyor Inspection',
							advices: [],
							completedBy: 97,
							isNested: 0
						},
						crack: null
					}
				]
			},
			{
				id: 6569,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:17:11',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103695',
				order: 10,
				images: '["/upload/image-1653580879202-2x6a4.jpeg"]',
				instructions:
					'<p>Suspension Cables</p><ul><li data-list="bullet"><span></span>Visually inspect</li></ul>',
				stepLimitData: {
					id: 1271,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Suspension Cables Inspect',
					operator: null,
					createdAt: '2022-05-10T15:44:12.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:33:33.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6570,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:17:18',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103696',
				order: 11,
				images: '["/upload/image-1653580972370-wsf0r.jpeg"]',
				instructions:
					'<p>Belt</p><ul><li data-list="bullet"><span></span>Observe belt tracking. It should be centered on the tail pulley and the idlers. Report areas where mis-tracking is observed.</li></ul>',
				stepLimitData: {
					id: 1272,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Belt Tracking Observation',
					operator: null,
					createdAt: '2022-05-10T15:44:27.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:03.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6571,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:17:16',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103697',
				order: 12,
				images: '["/upload/image-1653581152000-krktj.jpeg"]',
				instructions:
					'<p>Belt</p><ul><li data-list="bullet"><span></span>Observe the profile of the material load on the belt. It should be centered in the middle of the belt.</li></ul>',
				stepLimitData: {
					id: 1273,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Material Observation on Belt',
					operator: null,
					createdAt: '2022-05-10T15:44:34.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:29.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6572,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:18:05',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103698',
				order: 13,
				images: '["/upload/image-1653581189384-3c1th.png"]',
				instructions:
					'<p>Idler rollers</p><ul><li data-list="bullet"><span></span>Inspect for noisy or failing idlers, or idlers with loose/missing bolts. If seized idlers are found, notify your supervisor immediately. Ensure you are familiar with Idler changeout job plan in this situation.</li></ul><p><br /></p><p>Please see the video for noise - reference</p><p><a target="_blank" href="https://teckresources.sharepoint.com/:v:/r/sites/Digital_PM_Automation/Shared%20Documents/Conveyor/20220511_100917.mp4?csf=1&amp;web=1&amp;e=PTaO2Z">20220511_100917.mp4</a></p>',
				stepLimitData: {
					id: 1274,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Idler Rollers',
					operator: null,
					createdAt: '2022-05-10T15:44:41.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:42.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6573,
				createdAt: '2022-05-27 03:00:31',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:18:09',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'os0j4',
				stepNumber: '103700',
				order: 14,
				images: '["/upload/image-1653581312526-rcqs2.png"]',
				instructions:
					'<p>Idler rollers</p><ul><li data-list="bullet"><span></span>If Idlers are found noisy/or with loose/missing bolts, please list the frame numbers of the problem idlers in the "Comments" section at the end of this check-sheet and flag the idler location with flagging tape. If the exact idler cannot be clearly identified, comment on approx. idler frame so that maintenance can check idlers in the area.</li></ul>',
				stepLimitData: {
					id: 1274,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Idler Rollers',
					operator: null,
					createdAt: '2022-05-10T15:44:41.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:42.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6574,
				createdAt: '2022-05-27 03:00:32',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:18:13',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13062',
				uniqueJobOperationId: 'y3hj4',
				stepNumber: '103282',
				order: 15,
				images: '["/upload/image-1652144975819-h9box.png"]',
				instructions:
					'<p>Pull Cords</p><ul><li data-list="bullet"><span></span>Make sure there are no broken cords</li></ul>',
				stepLimitData: {
					id: 1266,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Pull Cords',
					operator: null,
					createdAt: '2022-05-10T01:08:38.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:35:27.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Electrical Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6575,
				createdAt: '2022-05-27 03:00:32',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:57',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:18:16',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13063',
				uniqueJobOperationId: 'xqysy',
				stepNumber: '103283',
				order: 16,
				images: '["/upload/image-1652144820646gjafk.png"]',
				instructions: '<p>Inspect tunnel for cleanliness. Look for any coal buildup.</p>',
				stepLimitData: {
					id: 1265,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tunnel Inspection',
					operator: null,
					createdAt: '2022-05-10T00:33:09.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:35:47.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Tube Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6576,
				createdAt: '2022-05-27 03:00:32',
				createdBy: 97,
				updatedAt: '2023-06-01 16:27:56',
				updatedBy: {
					id: 128,
					firstName: 'dan',
					lastName: 'g'
				},
				completedAt: '2023-06-01 16:27:55',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.11552,
						long: 152.9970688
					}
				},
				jobOperationNumber: '13064',
				uniqueJobOperationId: 'j3i2b',
				stepNumber: '103284',
				order: 17,
				images: '["/upload/image-16521427598591r03x.png"]',
				instructions: '<p>Inspect the Head Pulley for material buildup</p>',
				stepLimitData: {
					id: 1263,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Inspect Head Pulley',
					operator: null,
					createdAt: '2022-05-09T23:27:55.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:36:13.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: 'Head Pulley - Material Buildup',
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Head Inspection',
				advices: [],
				completedBy: 128,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 856,
						name: '33',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2023-06-01 16:26:22',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-06-01 16:26:22',
						updatedAt: '2023-06-01 16:27:56',
						updatedBy: 128,
						createdBy: {
							id: 128,
							createdAt: '2023-06-01 12:15:26',
							createdBy: 108,
							updatedAt: '2023-06-01 13:33:08',
							updatedBy: 128,
							firstName: 'dan',
							lastName: 'g',
							active: 1,
							email: 'dang@onplan.tech',
							mobilePhone: '2',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 7,
							name: 'Disapproval',
							createdAt: '2023-04-27 10:47:35',
							createdBy: null,
							updatedAt: '2023-04-27 10:47:35',
							updatedBy: null
						},
						status: {
							id: 2,
							name: 'Complete',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 1,
							name: 'P1 - Urgent (24 Hours)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6576,
							createdAt: '2022-05-27 03:00:32',
							createdBy: 97,
							updatedAt: '2023-06-01 16:27:56',
							updatedBy: 128,
							completedAt: '2023-06-01 16:27:55',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-27.11552,"long":152.9970688}}',
							jobOperationNumber: '13064',
							uniqueJobOperationId: 'j3i2b',
							stepNumber: '103284',
							order: 17,
							images: '["/upload/image-16521427598591r03x.png"]',
							instructions: '<p>Inspect the Head Pulley for material buildup</p>',
							stepLimitData: {
								id: 1263,
								data: {
									isRendered: true,
									limitValues: {
										pass: true,
										isLimitComplete: true
									}
								},
								file: null,
								name: 'EVO RC Conveyor - Inspect Head Pulley',
								operator: null,
								createdAt: '2022-05-09T23:27:55.000Z',
								createdBy: 60,
								isDynamic: 0,
								updatedAt: '2022-05-26T15:36:13.000Z',
								updatedBy: 97,
								isRequired: 1,
								description: 'Head Pulley - Material Buildup',
								positionCode: null,
								isUtilisation: 0,
								limitCategory: {
									id: 9,
									data: null,
									name: 'Pass / Fail',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'passfail',
									orderNumber: 4,
									isTableLimit: 1
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Conveyor Head Inspection',
							advices: [],
							completedBy: 128,
							isNested: 0
						},
						crack: null
					}
				]
			},
			{
				id: 6577,
				createdAt: '2022-05-27 03:00:32',
				createdBy: 97,
				updatedAt: '2022-05-27 06:35:58',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 06:20:40',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13064',
				uniqueJobOperationId: 'j3i2b',
				stepNumber: '103693',
				order: 18,
				images: '["/upload/image-16521426631330s2f8.png"]',
				instructions:
					'<p>Observe belt tracking on the Head Pulley. It should be centered on the pulley.</p>',
				stepLimitData: {
					id: 1264,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Belt Tracking on Head Pulley',
					operator: null,
					createdAt: '2022-05-10T00:04:48.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:36:40.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Head Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 5510,
			createdAt: '2022-04-09 01:51:21',
			createdBy: 95,
			updatedAt: '2022-07-22 06:07:22',
			updatedBy: 95,
			lastBuiltAt: '2022-07-22 06:07:22',
			notes: '',
			componentCode: '',
			context: 'Standard',
			counter: '24',
			name: 'Daily Millwright RC Conv Check',
			position: 'Raw Coal',
			frequency: 0,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: null,
			functionalFailure: null,
			documentGrouping: null,
			externalId: ''
		},
		customer: {
			id: 27,
			createdAt: '2021-06-17 14:33:14',
			createdBy: 26,
			updatedAt: '2022-05-03 03:44:32',
			updatedBy: 95,
			code: '',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: '',
			customerSite: 'Teck Sandbox',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: '',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-162390439139024hed.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 0,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 0,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 300,
			createdAt: '2022-04-12 05:01:17',
			createdBy: 97,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 95,
			assetName: 'RC - Conveyor',
			serialNumber: '',
			assetFloc: '0001',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2022-04-11 10:00:00',
			startUtilisation: 1,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 27,
				createdAt: '2021-06-17 14:33:14',
				createdBy: 26,
				updatedAt: '2022-05-03 03:44:32',
				updatedBy: 95,
				code: '',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: '',
				customerSite: 'Teck Sandbox',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: '',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-162390439139024hed.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 0,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 0,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 118,
				createdAt: '2022-04-09 01:44:57',
				createdBy: 95,
				updatedAt: '2022-05-04 09:45:04',
				updatedBy: 26,
				class: 'Conveyor',
				modelNumber: 'Raw Coal Conveyor ',
				serialNumberPrefix: 'CONV025E',
				isTemplate: 0,
				image: '/upload/image-1649432806936cfrov.jpg',
				life: 0,
				utilisation: 0,
				documentGrouping: [],
				taskGrouping: 'strategyTaskSystemId',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 12,
					createdAt: '2018-07-02 05:00:35',
					createdBy: null,
					updatedAt: '2020-03-12 10:59:04',
					updatedBy: 4,
					name: 'Process Plant'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 60,
				createdAt: '2021-07-24 06:53:25',
				createdBy: 27,
				updatedAt: '2022-06-07 09:09:52',
				updatedBy: 26,
				firstName: 'Shane',
				lastName: 'Mackay',
				active: 1,
				email: 'shane.mackay.test@teck.com',
				mobilePhone: '',
				workPhone: '2503206804',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			},
			{
				id: 95,
				createdAt: '2022-02-01 05:03:18',
				createdBy: 82,
				updatedAt: '2022-03-18 01:58:17',
				updatedBy: 60,
				firstName: 'William',
				lastName: 'Lopez',
				active: 1,
				email: 'william.lopez.test@teck.com',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			},
			{
				id: 97,
				createdAt: '2022-02-01 05:07:01',
				createdBy: 82,
				updatedAt: '2022-05-20 08:01:47',
				updatedBy: 60,
				firstName: 'Sriram',
				lastName: 'Raman',
				active: 1,
				email: 'Sriram.raman.test@teck.com ',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 100,
			total: '19 / 19'
		}
	},
	{
		id: 288,
		workOrderNumber: 'Tsetin Offline ',
		workOrderDescription: '750Hr',
		createdAt: '2023-04-26 14:04:21',
		createdBy: 108,
		updatedAt: '2023-07-12 09:09:37',
		updatedBy: 127,
		scheduledAt: '2023-04-26 10:00:00',
		googleMapStepDateTime: null,
		status: 'Awaiting Approval',
		startedAt: '2023-04-26 14:11:05',
		completedAt: '2023-07-12 09:09:32',
		workOrderComponentCode: '750HR',
		workOrderHazards: [],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [
			{
				id: 5845,
				createdAt: '2022-03-04 14:19:32',
				createdBy: 87,
				procedure: {
					id: 74,
					createdAt: '2022-03-04 14:18:52',
					createdBy: 87,
					updatedAt: '2022-03-04 14:18:52',
					updatedBy: null,
					description: '930E TEST UPLOAD DOCUMENT',
					procedureUrl: '/upload/file-1646367512102cowrg.docx',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-09 05:23:30',
						createdBy: null,
						updatedAt: '2019-03-30 12:38:40',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04 14:19:32',
				updatedBy: null
			},
			{
				id: 5846,
				createdAt: '2022-03-04 14:20:28',
				createdBy: 87,
				procedure: {
					id: 73,
					createdAt: '2021-09-15 07:02:03',
					createdBy: 54,
					updatedAt: '2021-09-15 07:02:03',
					updatedBy: null,
					description: 'CAT 793F Off Highway Truck - HEI (LCO)',
					procedureUrl: '/upload/file-16316533127660dzo5.pdf',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-09 05:23:30',
						createdBy: null,
						updatedAt: '2019-03-30 12:38:40',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04 14:20:28',
				updatedBy: null
			}
		],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: [],
		workOrderExtraOperations: null,
		modelNumber: '930E-4',
		serialNumberPrefix: '',
		modelClass: 'Haul Truck',
		taskName: '750 Hours Welder  Inspection',
		taskType: 'Inspect',
		approvedDate: '2023-04-27 02:27:38',
		actionedBy: null,
		duration: '1',
		aiEstimatedDuration: 26451502,
		stepLimitHistory: {
			155: [],
			159: [],
			163: [],
			165: [],
			169: [],
			171: [],
			227: [
				{
					data: '{"limitValues": {"signature": "/upload/limit-image-1625756647752h8r3y.png", "timestamp": 1625756579839, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			435: [
				{
					data: '{"limitValues": {"chosenOption": 0, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			436: [
				{
					data: '{"limitValues": {"chosenOption": 1, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			437: [
				{
					data: '{"limitValues": {"text": "Broken internal component of pump. Does not operate.", "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			438: [
				{
					data: '{"limitValues": {"text": "Replace the fuel pump.", "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			439: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448qkek7.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			440: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448oa2gp.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			441: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448t6gi8.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589464fqla2.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589464oi217.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-163245158946459qhn.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			442: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448tb94n.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			443: [
				{
					data: '{"limitValues": {"chosenOption": "13", "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			444: [
				{
					data: '{"limitValues": {"text": "Fuel Pump", "isLimitComplete": true}}',
					completedAt: '2021-11-26 15:59:27'
				}
			],
			611: [],
			617: [],
			618: [],
			622: [],
			623: [],
			624: [],
			625: [],
			626: [],
			639: [],
			648: [],
			652: [],
			659: [],
			662: [],
			686: [
				{
					data: '{"isRendered": true, "limitValues": {"pass": true, "isLimitComplete": true}}',
					completedAt: '2022-06-21 03:21:04'
				}
			],
			690: [],
			698: [],
			709: [],
			710: [],
			727: [],
			734: [],
			743: [
				{
					data: '{"isRendered": true, "limitValues": {"isLimitComplete": false}}',
					completedAt: '2022-06-21 03:21:49'
				}
			],
			744: [],
			1598: [],
			2900: [],
			2901: [
				{
					data: '{"cameraInit": {"width": 1.1547005383792517, "height": 1.1547005383792517, "origin": {"x": 0, "y": 0, "z": 0}, "position": {"x": 31.232122050732016, "y": 10.960952873369257, "z": 33.1279865352116}, "quaternion": {"w": 0.9229371823924464, "x": -0.10953177310343748, "y": 0.3664672539852595, "z": 0.04349137609701934}}, "numberOfPhotos": 0, "inspectionImage": "/upload/image-1682411390971nsuxm.krackon.png"}',
					completedAt: '2023-04-25 18:39:26'
				},
				{
					data: '{"cameraInit": {"width": 1.1547005383792517, "height": 1.1547005383792517, "origin": {"x": 0, "y": 0, "z": 0}, "position": {"x": 31.232122050732016, "y": 10.960952873369257, "z": 33.1279865352116}, "quaternion": {"w": 0.9229371823924464, "x": -0.10953177310343748, "y": 0.3664672539852595, "z": 0.04349137609701934}}, "numberOfPhotos": 0, "inspectionImage": "/upload/image-1682411390971nsuxm.krackon.png"}',
					completedAt: '2023-04-25 18:39:18'
				},
				{
					data: '{"cameraInit": {"width": 1.1547005383792517, "height": 1.1547005383792517, "origin": {"x": 0, "y": 0, "z": 0}, "position": {"x": 31.232122050732016, "y": 10.960952873369257, "z": 33.1279865352116}, "quaternion": {"w": 0.9229371823924464, "x": -0.10953177310343748, "y": 0.3664672539852595, "z": 0.04349137609701934}}, "numberOfPhotos": 0, "inspectionImage": "/upload/image-1682411390971nsuxm.krackon.png"}',
					completedAt: '2023-04-25 18:34:55'
				},
				{
					data: '{"cameraInit": {"width": 1.1547005383792517, "height": 1.1547005383792517, "origin": {"x": 0, "y": 0, "z": 0}, "position": {"x": 31.232122050732016, "y": 10.960952873369257, "z": 33.1279865352116}, "quaternion": {"w": 0.9229371823924464, "x": -0.10953177310343748, "y": 0.3664672539852595, "z": 0.04349137609701934}}, "numberOfPhotos": 0, "inspectionImage": "/upload/image-1682411390971nsuxm.krackon.png"}',
					completedAt: '2023-04-25 18:33:18'
				}
			]
		},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 8054,
				createdAt: '2023-04-26 14:04:21',
				createdBy: 108,
				updatedAt: '2023-07-12 09:09:35',
				updatedBy: {
					id: 127,
					firstName: 'Test 3',
					lastName: '3'
				},
				completedAt: '2023-07-12 09:09:29',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13790',
				uniqueJobOperationId: 'bizmc',
				stepNumber: '105131',
				order: 0,
				images: '["/upload/image-1682410182094uyvjx.krackon.png"]',
				instructions: '',
				stepLimitData: {
					id: 2900,
					data: {
						cameraInit: {
							width: 1.1547005383792517,
							height: 1.1547005383792517,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 19.684026486920835,
								y: 6.908134078460244,
								z: 20.878893959181944
							},
							quaternion: {
								w: 0.9229371823924464,
								x: -0.10953177310343748,
								y: 0.3664672539852595,
								z: 0.04349137609701934
							}
						},
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1682410182094uyvjx.krackon.png'
					},
					file: {
						id: 136,
						name: 'test',
						size: '407156',
						active: 1,
						filepath: '/upload/file-1682410143268z14om.glb',
						createdAt: '2023-04-25 18:09:10',
						createdBy: 108,
						extension: 'glb',
						updatedAt: '2023-04-25 18:09:10',
						updatedBy: null,
						description: 'Testing',
						fileCategory: {
							id: 1,
							name: 'Structural Inspection 3D Model',
							createdAt: '2017-07-05 04:17:38',
							createdBy: null,
							updatedAt: '2021-03-25 18:07:03',
							updatedBy: null
						}
					},
					name: '2023/04/25 6:06pm',
					operator: null,
					createdAt: '2023-04-25 18:06:55',
					createdBy: 108,
					isDynamic: 0,
					updatedAt: '2023-04-25 18:09:42',
					updatedBy: 108,
					isRequired: 0,
					description: '',
					positionCode: {
						id: 88,
						code: '4100_BOOM',
						createdAt: '2022-05-07 09:12:01',
						createdBy: null,
						updatedAt: '2022-05-07 09:12:01',
						updatedBy: null,
						description: ''
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Inspection - Crack',
						createdAt: '2020-12-04 20:22:11',
						createdBy: null,
						updatedAt: '2022-08-20 10:07:15',
						updatedBy: null,
						description: 'inspection-crack',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Test',
				advices: [],
				completedBy: 127,
				isNested: 0,
				file: {
					id: 136,
					createdAt: '2023-04-25 18:09:10',
					createdBy: 108,
					updatedAt: '2023-04-25 18:09:10',
					updatedBy: null,
					name: 'test',
					description: 'Testing',
					filepath: '/upload/file-1682410143268z14om.glb',
					size: '407156',
					extension: 'glb',
					active: 1,
					fileCategory: {
						id: 1,
						createdAt: '2017-07-05 04:17:38',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 3D Model'
					}
				},
				attachedDefect: null,
				defects: [
					{
						id: 712,
						name: 'Make it not started',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2023-04-27 12:27:33',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-04-27 12:27:33',
						updatedAt: '2023-07-12 09:09:35',
						updatedBy: 127,
						createdBy: {
							id: 108,
							createdAt: '2022-05-27 08:39:24',
							createdBy: 26,
							updatedAt: '2023-05-26 07:42:44',
							updatedBy: 123,
							firstName: 'User2',
							lastName: 'Test',
							active: 1,
							email: 'user2@onplan.tech',
							mobilePhone: '+61413353368',
							workPhone: 'dwdwqdw',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 7,
							name: 'Disapproval',
							createdAt: '2023-04-27 10:47:35',
							createdBy: null,
							updatedAt: '2023-04-27 10:47:35',
							updatedBy: null
						},
						status: {
							id: 2,
							name: 'Complete',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 1,
							name: 'P1 - Urgent (24 Hours)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 8054,
							createdAt: '2023-04-26 14:04:21',
							createdBy: 108,
							updatedAt: '2023-07-12 09:09:35',
							updatedBy: 127,
							completedAt: '2023-07-12 09:09:29',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13790',
							uniqueJobOperationId: 'bizmc',
							stepNumber: '105131',
							order: 0,
							images: '["/upload/image-1682410182094uyvjx.krackon.png"]',
							instructions: '',
							stepLimitData: {
								id: 2900,
								data: {
									cameraInit: {
										width: 1.1547005383792517,
										height: 1.1547005383792517,
										origin: {
											x: 0,
											y: 0,
											z: 0
										},
										position: {
											x: 19.684026486920835,
											y: 6.908134078460244,
											z: 20.878893959181944
										},
										quaternion: {
											w: 0.9229371823924464,
											x: -0.10953177310343748,
											y: 0.3664672539852595,
											z: 0.04349137609701934
										}
									},
									numberOfPhotos: 0,
									inspectionImage: '/upload/image-1682410182094uyvjx.krackon.png'
								},
								file: {
									id: 136,
									name: 'test',
									size: '407156',
									active: 1,
									filepath: '/upload/file-1682410143268z14om.glb',
									createdAt: '2023-04-25 18:09:10',
									createdBy: 108,
									extension: 'glb',
									updatedAt: '2023-04-25 18:09:10',
									updatedBy: null,
									description: 'Testing',
									fileCategory: {
										id: 1,
										name: 'Structural Inspection 3D Model',
										createdAt: '2017-07-05 04:17:38',
										createdBy: null,
										updatedAt: '2021-03-25 18:07:03',
										updatedBy: null
									}
								},
								name: '2023/04/25 6:06pm',
								operator: null,
								createdAt: '2023-04-25 18:06:55',
								createdBy: 108,
								isDynamic: 0,
								updatedAt: '2023-04-25 18:09:42',
								updatedBy: 108,
								isRequired: 0,
								description: '',
								positionCode: {
									id: 88,
									code: '4100_BOOM',
									createdAt: '2022-05-07 09:12:01',
									createdBy: null,
									updatedAt: '2022-05-07 09:12:01',
									updatedBy: null,
									description: ''
								},
								isUtilisation: 0,
								limitCategory: {
									id: 3,
									data: null,
									name: 'Inspection - Crack',
									createdAt: '2020-12-04 20:22:11',
									createdBy: null,
									updatedAt: '2022-08-20 10:07:15',
									updatedBy: null,
									description: 'inspection-crack',
									orderNumber: 9,
									isTableLimit: 0
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Test',
							advices: [],
							completedBy: 127,
							isNested: 0
						},
						crack: null
					},
					{
						id: 879,
						name: 'disapproved Defect',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -27.4699341,
							long: 153.0029962
						},
						images: [
							{
								data: '/upload/krackOn-image-1689116973914j2vtk.jpg',
								text: 'Inspection - Crack',
								isCrack: 1,
								geoLocation: {
									lat: -27.4699341,
									long: 153.0029962
								}
							}
						],
						reportedDate: '2023-07-12 09:09:34',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-07-12 09:09:34',
						updatedAt: '2023-07-12 09:09:34',
						updatedBy: null,
						createdBy: {
							id: 127,
							createdAt: '2023-06-01 11:10:25',
							createdBy: 108,
							updatedAt: '2023-06-01 11:10:42',
							updatedBy: 108,
							firstName: 'Test 3',
							lastName: '3',
							active: 1,
							email: 'user3@onplan.tech',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						status: {
							id: 2,
							name: 'Complete',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 8054,
							createdAt: '2023-04-26 14:04:21',
							createdBy: 108,
							updatedAt: '2023-07-12 09:09:35',
							updatedBy: 127,
							completedAt: '2023-07-12 09:09:29',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13790',
							uniqueJobOperationId: 'bizmc',
							stepNumber: '105131',
							order: 0,
							images: '["/upload/image-1682410182094uyvjx.krackon.png"]',
							instructions: '',
							stepLimitData: {
								id: 2900,
								data: {
									cameraInit: {
										width: 1.1547005383792517,
										height: 1.1547005383792517,
										origin: {
											x: 0,
											y: 0,
											z: 0
										},
										position: {
											x: 19.684026486920835,
											y: 6.908134078460244,
											z: 20.878893959181944
										},
										quaternion: {
											w: 0.9229371823924464,
											x: -0.10953177310343748,
											y: 0.3664672539852595,
											z: 0.04349137609701934
										}
									},
									numberOfPhotos: 0,
									inspectionImage: '/upload/image-1682410182094uyvjx.krackon.png'
								},
								file: {
									id: 136,
									name: 'test',
									size: '407156',
									active: 1,
									filepath: '/upload/file-1682410143268z14om.glb',
									createdAt: '2023-04-25 18:09:10',
									createdBy: 108,
									extension: 'glb',
									updatedAt: '2023-04-25 18:09:10',
									updatedBy: null,
									description: 'Testing',
									fileCategory: {
										id: 1,
										name: 'Structural Inspection 3D Model',
										createdAt: '2017-07-05 04:17:38',
										createdBy: null,
										updatedAt: '2021-03-25 18:07:03',
										updatedBy: null
									}
								},
								name: '2023/04/25 6:06pm',
								operator: null,
								createdAt: '2023-04-25 18:06:55',
								createdBy: 108,
								isDynamic: 0,
								updatedAt: '2023-04-25 18:09:42',
								updatedBy: 108,
								isRequired: 0,
								description: '',
								positionCode: {
									id: 88,
									code: '4100_BOOM',
									createdAt: '2022-05-07 09:12:01',
									createdBy: null,
									updatedAt: '2022-05-07 09:12:01',
									updatedBy: null,
									description: ''
								},
								isUtilisation: 0,
								limitCategory: {
									id: 3,
									data: null,
									name: 'Inspection - Crack',
									createdAt: '2020-12-04 20:22:11',
									createdBy: null,
									updatedAt: '2022-08-20 10:07:15',
									updatedBy: null,
									description: 'inspection-crack',
									orderNumber: 9,
									isTableLimit: 0
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Test',
							advices: [],
							completedBy: 127,
							isNested: 0
						},
						crack: {
							id: 509,
							name: 'disapproved Defect',
							sequenceNumber: 8,
							notes: '',
							length: 2,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [
								[3.2488271457641495, -0.1004288681865484, -1.0686976509093142],
								[5.9153562645849735, 0.8353929104100444, 1.7596961610947428]
							],
							images: [
								{
									data: '/upload/krackOn-image-1689116973945p7h7g.jpg',
									text: 'Inspection - Crack',
									isCrack: 1,
									geoLocation: {
										lat: -27.4699341,
										long: 153.0029962
									}
								}
							],
							dateRecorded: '2023-07-12 09:08:21',
							severity: {
								text: '',
								colour: '#'
							},
							createdAt: '2023-07-12 09:09:33',
							createdBy: 127,
							customerNote: null,
							updatedAt: '2023-07-12 09:09:33',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 1,
								name: 'Repair',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						}
					}
				],
				previousDefects: [
					{
						id: 695,
						name: 't',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -27.4748416,
							long: 153.026543
						},
						images: [
							{
								data: '/upload/krackOn-image-1682411512709v2ene.jpg',
								text: 'Inspection - Crack',
								isCrack: 1,
								geoLocation: {
									lat: -27.4748416,
									long: 153.026543
								}
							},
							{
								data: '/upload/krackOn-image-1682411513268w8kym.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -27.4748416,
									long: 153.026543
								},
								dataOriginal: null
							}
						],
						reportedDate: '2023-04-25 18:31:55',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-04-25 18:31:55',
						updatedAt: '2023-04-25 19:57:24',
						updatedBy: 108,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 454,
							name: 't',
							sequenceNumber: 7,
							notes: '',
							length: 1,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [
								[-1.0462046447362638, 0.7113918600576312, -1.6875137016691362],
								[1.6203244740845597, 1.647213638654224, 1.1408801103349209]
							],
							images: [
								{
									data: '/upload/krackOn-image-1682411512709v2ene.jpg',
									text: 'Inspection - Crack',
									isCrack: 1,
									geoLocation: {
										lat: -27.4748416,
										long: 153.026543
									}
								},
								{
									data: '/upload/krackOn-image-1682411513268w8kym.jpg',
									text: 'Photo 1',
									isCrack: null,
									location: {
										lat: -27.4748416,
										long: 153.026543
									},
									dataOriginal: null
								}
							],
							dateRecorded: '2023-04-25 18:31:40',
							severity: {
								text: '',
								colour: '#'
							},
							createdAt: '2023-04-25 18:31:55',
							createdBy: 108,
							customerNote: null,
							updatedAt: '2023-04-25 18:31:55',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: [
								{
									id: 455,
									name: 'test',
									sequenceNumber: 7,
									notes: '',
									length: 12,
									width: null,
									depth: null,
									leakRate: null,
									temperature: null,
									crackCoords: [
										[-1.0462046447362638, 0.7113918600576312, -1.6875137016691362],
										[1.6203244740845597, 1.647213638654224, 1.1408801103349209]
									],
									images: [
										{
											data: 'https://qa.asseton-tech.com/upload/krackOn-image-1682411512709v2ene.jpg',
											text: 'Inspection - Crack',
											isCrack: 1,
											location: {
												lat: -1,
												long: -1
											},
											dataOriginal: null
										},
										{
											data: 'https://qa.asseton-tech.com/upload/krackOn-image-1682411513268w8kym.jpg',
											text: 'Photo 1',
											isCrack: null,
											location: {
												lat: -27.4748416,
												long: 153.026543
											},
											dataOriginal: null
										}
									],
									dateRecorded: '2023-04-25 19:57:10',
									severity: {
										text: '',
										colour: '#'
									},
									createdAt: '2023-04-25 19:57:24',
									createdBy: 108,
									customerNote: null,
									updatedAt: '2023-04-25 19:57:24',
									updatedBy: null,
									status: {
										id: 2,
										name: 'Increased'
									},
									recommendedAction: {
										id: 2,
										name: 'Monitor',
										createdAt: '2021-09-18 08:19:13',
										createdBy: null,
										updatedAt: '2021-09-18 08:19:13',
										updatedBy: null
									},
									priority: {
										id: 3,
										name: 'P3 - Medium (30 days)',
										createdAt: '2021-09-18 08:19:13',
										createdBy: null,
										updatedAt: '2021-09-18 08:19:13',
										updatedBy: null
									},
									workOrderStep: {
										id: 8051,
										createdAt: '2023-04-25 19:56:29',
										createdBy: 108,
										updatedAt: '2023-06-01 16:26:58',
										updatedBy: 128,
										completedAt: '2023-06-01 16:26:55',
										status: 'Complete',
										data: '{"completeLocation":{"lat":-27.11552,"long":152.9970688}}',
										jobOperationNumber: '13790',
										uniqueJobOperationId: 'xqqd9',
										stepNumber: '105131',
										order: 0,
										images: '["/upload/image-1682410182094uyvjx.krackon.png"]',
										instructions: '',
										stepLimitData: {
											id: 2900,
											data: {
												cameraInit: {
													width: 1.1547005383792517,
													height: 1.1547005383792517,
													origin: {
														x: 0,
														y: 0,
														z: 0
													},
													position: {
														x: 19.684026486920835,
														y: 6.908134078460244,
														z: 20.878893959181944
													},
													quaternion: {
														w: 0.9229371823924464,
														x: -0.10953177310343748,
														y: 0.3664672539852595,
														z: 0.04349137609701934
													}
												},
												numberOfPhotos: 0,
												inspectionImage: '/upload/image-1682410182094uyvjx.krackon.png'
											},
											file: {
												id: 136,
												name: 'test',
												size: '407156',
												active: 1,
												filepath: '/upload/file-1682410143268z14om.glb',
												createdAt: '2023-04-25 18:09:10',
												createdBy: 108,
												extension: 'glb',
												updatedAt: '2023-04-25 18:09:10',
												updatedBy: null,
												description: 'Testing',
												fileCategory: {
													id: 1,
													name: 'Structural Inspection 3D Model',
													createdAt: '2017-07-05 04:17:38',
													createdBy: null,
													updatedAt: '2021-03-25 18:07:03',
													updatedBy: null
												}
											},
											name: '2023/04/25 6:06pm',
											operator: null,
											createdAt: '2023-04-25 18:06:55',
											createdBy: 108,
											isDynamic: 0,
											updatedAt: '2023-04-25 18:09:42',
											updatedBy: 108,
											isRequired: 0,
											description: '',
											positionCode: {
												id: 88,
												code: '4100_BOOM',
												createdAt: '2022-05-07 09:12:01',
												createdBy: null,
												updatedAt: '2022-05-07 09:12:01',
												updatedBy: null,
												description: ''
											},
											isUtilisation: 0,
											limitCategory: {
												id: 3,
												data: null,
												name: 'Inspection - Crack',
												createdAt: '2020-12-04 20:22:11',
												createdBy: null,
												updatedAt: '2022-08-20 10:07:15',
												updatedBy: null,
												description: 'inspection-crack',
												orderNumber: 9,
												isTableLimit: 0
											},
											isTableTemplate: 0,
											stepLimitCondition: null
										},
										title: 'Test',
										advices: [],
										completedBy: 128,
										isNested: 0
									}
								}
							]
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'inspection-crack'
								}
							}
						}
					}
				]
			},
			{
				id: 8055,
				createdAt: '2023-04-26 14:04:21',
				createdBy: 108,
				updatedAt: '2023-04-26 14:16:36',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 14:14:07',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13790',
				uniqueJobOperationId: 'bizmc',
				stepNumber: '105132',
				order: 1,
				images: '["/upload/image-1682411390971nsuxm.krackon.png"]',
				instructions: '',
				stepLimitData: {
					id: 2901,
					data: {
						cameraInit: {
							width: 1.1547005383792517,
							height: 1.1547005383792517,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 31.232122050732016,
								y: 10.960952873369257,
								z: 33.1279865352116
							},
							quaternion: {
								w: 0.9229371823924464,
								x: -0.10953177310343748,
								y: 0.3664672539852595,
								z: 0.04349137609701934
							}
						},
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1682411390971nsuxm.krackon.png'
					},
					file: {
						id: 136,
						name: 'test',
						size: '407156',
						active: 1,
						filepath: '/upload/file-1682410143268z14om.glb',
						createdAt: '2023-04-25 18:09:10',
						createdBy: 108,
						extension: 'glb',
						updatedAt: '2023-04-25 18:09:10',
						updatedBy: null,
						description: 'Testing',
						fileCategory: {
							id: 1,
							name: 'Structural Inspection 3D Model',
							createdAt: '2017-07-05 04:17:38',
							createdBy: null,
							updatedAt: '2021-03-25 18:07:03',
							updatedBy: null
						}
					},
					name: '2023/04/25 6:29pm',
					operator: null,
					createdAt: '2023-04-25 18:29:15',
					createdBy: 108,
					isDynamic: 0,
					updatedAt: '2023-04-25 18:29:51',
					updatedBy: 108,
					isRequired: 0,
					description: '',
					positionCode: {
						id: 48,
						code: 'B02',
						createdAt: '2022-05-07 09:12:00',
						createdBy: null,
						updatedAt: '2022-05-07 09:12:00',
						updatedBy: null,
						description: 'Car Body Structure Bottom Plate B02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 44,
						data: null,
						name: 'Inspection - Leak',
						createdAt: '2022-08-20 10:07:15',
						createdBy: null,
						updatedAt: '2022-08-20 10:07:15',
						updatedBy: null,
						description: 'inspection-leak',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 673,
						data: [
							{
								criteria: 'lessthan',
								lowerLimit: 0,
								upperLimit: 1
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'between',
								lowerLimit: 3,
								upperLimit: 4
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 4
							}
						],
						name: 'MW Crack Test 1',
						operator: null,
						createdAt: '2022-02-24 07:33:47',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24 07:33:47',
						updatedBy: null,
						isRequired: 0,
						description: 'MW Crack Test 1',
						isUtilisation: 0,
						limitCategory: {
							id: 24,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal'
								},
								{
									colour: '307dff',
									isDefect: false,
									question: 'Abnormal'
								},
								{
									colour: 'ffc107',
									isDefect: false,
									question: 'Severe'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Critical'
								}
							],
							name: 'Crack List',
							createdAt: '2021-08-04 07:43:57',
							createdBy: 26,
							updatedAt: '2021-08-04 07:43:57',
							updatedBy: null,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Test',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: {
					id: 136,
					createdAt: '2023-04-25 18:09:10',
					createdBy: 108,
					updatedAt: '2023-04-25 18:09:10',
					updatedBy: null,
					name: 'test',
					description: 'Testing',
					filepath: '/upload/file-1682410143268z14om.glb',
					size: '407156',
					extension: 'glb',
					active: 1,
					fileCategory: {
						id: 1,
						createdAt: '2017-07-05 04:17:38',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 3D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 8056,
				createdAt: '2023-04-26 14:04:21',
				createdBy: 108,
				updatedAt: '2023-04-27 12:27:13',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-27 12:27:11',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13790',
				uniqueJobOperationId: 'bizmc',
				stepNumber: '105133',
				order: 2,
				images: '["/upload/image-1682411390971nsuxm.krackon.png"]',
				instructions: '',
				stepLimitData: {
					id: 2901,
					data: {
						cameraInit: {
							width: 1.1547005383792517,
							height: 1.1547005383792517,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 31.232122050732016,
								y: 10.960952873369257,
								z: 33.1279865352116
							},
							quaternion: {
								w: 0.9229371823924464,
								x: -0.10953177310343748,
								y: 0.3664672539852595,
								z: 0.04349137609701934
							}
						},
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1682411390971nsuxm.krackon.png'
					},
					file: {
						id: 136,
						name: 'test',
						size: '407156',
						active: 1,
						filepath: '/upload/file-1682410143268z14om.glb',
						createdAt: '2023-04-25 18:09:10',
						createdBy: 108,
						extension: 'glb',
						updatedAt: '2023-04-25 18:09:10',
						updatedBy: null,
						description: 'Testing',
						fileCategory: {
							id: 1,
							name: 'Structural Inspection 3D Model',
							createdAt: '2017-07-05 04:17:38',
							createdBy: null,
							updatedAt: '2021-03-25 18:07:03',
							updatedBy: null
						}
					},
					name: '2023/04/25 6:29pm',
					operator: null,
					createdAt: '2023-04-25 18:29:15',
					createdBy: 108,
					isDynamic: 0,
					updatedAt: '2023-04-25 18:29:51',
					updatedBy: 108,
					isRequired: 0,
					description: '',
					positionCode: {
						id: 48,
						code: 'B02',
						createdAt: '2022-05-07 09:12:00',
						createdBy: null,
						updatedAt: '2022-05-07 09:12:00',
						updatedBy: null,
						description: 'Car Body Structure Bottom Plate B02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 44,
						data: null,
						name: 'Inspection - Leak',
						createdAt: '2022-08-20 10:07:15',
						createdBy: null,
						updatedAt: '2022-08-20 10:07:15',
						updatedBy: null,
						description: 'inspection-leak',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 673,
						data: [
							{
								criteria: 'lessthan',
								lowerLimit: 0,
								upperLimit: 1
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'between',
								lowerLimit: 3,
								upperLimit: 4
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 4
							}
						],
						name: 'MW Crack Test 1',
						operator: null,
						createdAt: '2022-02-24 07:33:47',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24 07:33:47',
						updatedBy: null,
						isRequired: 0,
						description: 'MW Crack Test 1',
						isUtilisation: 0,
						limitCategory: {
							id: 24,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal'
								},
								{
									colour: '307dff',
									isDefect: false,
									question: 'Abnormal'
								},
								{
									colour: 'ffc107',
									isDefect: false,
									question: 'Severe'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Critical'
								}
							],
							name: 'Crack List',
							createdAt: '2021-08-04 07:43:57',
							createdBy: 26,
							updatedAt: '2021-08-04 07:43:57',
							updatedBy: null,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Test',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: {
					id: 136,
					createdAt: '2023-04-25 18:09:10',
					createdBy: 108,
					updatedAt: '2023-04-25 18:09:10',
					updatedBy: null,
					name: 'test',
					description: 'Testing',
					filepath: '/upload/file-1682410143268z14om.glb',
					size: '407156',
					extension: 'glb',
					active: 1,
					fileCategory: {
						id: 1,
						createdAt: '2017-07-05 04:17:38',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 3D Model'
					}
				},
				attachedDefect: null,
				defects: [
					{
						id: 711,
						name: 'test defect',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2023-04-27 12:21:15',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-04-27 12:21:15',
						updatedAt: '2023-04-27 12:27:13',
						updatedBy: 108,
						createdBy: {
							id: 108,
							createdAt: '2022-05-27 08:39:24',
							createdBy: 26,
							updatedAt: '2023-05-26 07:42:44',
							updatedBy: 123,
							firstName: 'User2',
							lastName: 'Test',
							active: 1,
							email: 'user2@onplan.tech',
							mobilePhone: '+61413353368',
							workPhone: 'dwdwqdw',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 7,
							name: 'Disapproval',
							createdAt: '2023-04-27 10:47:35',
							createdBy: null,
							updatedAt: '2023-04-27 10:47:35',
							updatedBy: null
						},
						status: {
							id: 2,
							name: 'Complete',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 1,
							name: 'P1 - Urgent (24 Hours)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 8056,
							createdAt: '2023-04-26 14:04:21',
							createdBy: 108,
							updatedAt: '2023-04-27 12:27:13',
							updatedBy: 108,
							completedAt: '2023-04-27 12:27:11',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13790',
							uniqueJobOperationId: 'bizmc',
							stepNumber: '105133',
							order: 2,
							images: '["/upload/image-1682411390971nsuxm.krackon.png"]',
							instructions: '',
							stepLimitData: {
								id: 2901,
								data: {
									cameraInit: {
										width: 1.1547005383792517,
										height: 1.1547005383792517,
										origin: {
											x: 0,
											y: 0,
											z: 0
										},
										position: {
											x: 31.232122050732016,
											y: 10.960952873369257,
											z: 33.1279865352116
										},
										quaternion: {
											w: 0.9229371823924464,
											x: -0.10953177310343748,
											y: 0.3664672539852595,
											z: 0.04349137609701934
										}
									},
									numberOfPhotos: 0,
									inspectionImage: '/upload/image-1682411390971nsuxm.krackon.png'
								},
								file: {
									id: 136,
									name: 'test',
									size: '407156',
									active: 1,
									filepath: '/upload/file-1682410143268z14om.glb',
									createdAt: '2023-04-25 18:09:10',
									createdBy: 108,
									extension: 'glb',
									updatedAt: '2023-04-25 18:09:10',
									updatedBy: null,
									description: 'Testing',
									fileCategory: {
										id: 1,
										name: 'Structural Inspection 3D Model',
										createdAt: '2017-07-05 04:17:38',
										createdBy: null,
										updatedAt: '2021-03-25 18:07:03',
										updatedBy: null
									}
								},
								name: '2023/04/25 6:29pm',
								operator: null,
								createdAt: '2023-04-25 18:29:15',
								createdBy: 108,
								isDynamic: 0,
								updatedAt: '2023-04-25 18:29:51',
								updatedBy: 108,
								isRequired: 0,
								description: '',
								positionCode: {
									id: 48,
									code: 'B02',
									createdAt: '2022-05-07 09:12:00',
									createdBy: null,
									updatedAt: '2022-05-07 09:12:00',
									updatedBy: null,
									description: 'Car Body Structure Bottom Plate B02'
								},
								isUtilisation: 0,
								limitCategory: {
									id: 44,
									data: null,
									name: 'Inspection - Leak',
									createdAt: '2022-08-20 10:07:15',
									createdBy: null,
									updatedAt: '2022-08-20 10:07:15',
									updatedBy: null,
									description: 'inspection-leak',
									orderNumber: 9,
									isTableLimit: 0
								},
								isTableTemplate: 0,
								stepLimitCondition: {
									id: 673,
									data: [
										{
											criteria: 'lessthan',
											lowerLimit: 0,
											upperLimit: 1
										},
										{
											criteria: 'between',
											lowerLimit: 1,
											upperLimit: 2
										},
										{
											criteria: 'between',
											lowerLimit: 3,
											upperLimit: 4
										},
										{
											criteria: 'greaterthan',
											lowerLimit: 4
										}
									],
									name: 'MW Crack Test 1',
									operator: null,
									createdAt: '2022-02-24 07:33:47',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-02-24 07:33:47',
									updatedBy: null,
									isRequired: 0,
									description: 'MW Crack Test 1',
									isUtilisation: 0,
									limitCategory: {
										id: 24,
										data: [
											{
												colour: '4caf52',
												isDefect: false,
												question: 'Normal'
											},
											{
												colour: '307dff',
												isDefect: false,
												question: 'Abnormal'
											},
											{
												colour: 'ffc107',
												isDefect: false,
												question: 'Severe'
											},
											{
												colour: 'f44336',
												isDefect: false,
												question: 'Critical'
											}
										],
										name: 'Crack List',
										createdAt: '2021-08-04 07:43:57',
										createdBy: 26,
										updatedAt: '2021-08-04 07:43:57',
										updatedBy: null,
										description: 'conditionlist',
										orderNumber: 7,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							},
							title: 'Test',
							advices: [],
							completedBy: 108,
							isNested: 0
						},
						crack: null
					}
				],
				previousDefects: []
			}
		],
		strategyTask: {
			id: 5386,
			createdAt: '2022-02-23 04:17:37',
			createdBy: 87,
			updatedAt: '2022-02-25 02:39:33',
			updatedBy: 87,
			lastBuiltAt: null,
			notes: '',
			componentCode: '750HR',
			context: 'System Task',
			counter: '0',
			name: '750 Hours Welder  Inspection',
			position: 'WELDER',
			frequency: 750,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: '',
			functionalFailure: '',
			documentGrouping: {
				skillId: 7,
				frequency: 750,
				unitOfMeasureId: 1,
				customDocumentGrouping: ''
			},
			externalId: null
		},
		customer: {
			id: 26,
			createdAt: '2021-05-14 07:03:45',
			createdBy: 26,
			updatedAt: '2023-06-01 16:17:22',
			updatedBy: 108,
			code: 'FRO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: 'Shane Mackay',
			customerSite: 'Fording River',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: 'shane.mackay@teck.com',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1620939824124oazte.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 1,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 1,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 203,
			createdAt: '2021-06-09 13:53:27',
			createdBy: 26,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 108,
			assetName: 'Komatsu 930E-4 Haul Truck',
			serialNumber: 'A30819',
			assetFloc: 'HT521',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: 'FRO MAINT HD SHOP',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-06-09 10:00:00',
			startUtilisation: 0,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 26,
				createdAt: '2021-05-14 07:03:45',
				createdBy: 26,
				updatedAt: '2023-06-01 16:17:22',
				updatedBy: 108,
				code: 'FRO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: 'Shane Mackay',
				customerSite: 'Fording River',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: 'shane.mackay@teck.com',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1620939824124oazte.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 1,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 1,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 94,
				createdAt: '2021-05-19 16:55:04',
				createdBy: 26,
				updatedAt: '2022-12-01 15:08:15',
				updatedBy: 95,
				class: 'Haul Truck',
				modelNumber: '930E-4',
				serialNumberPrefix: '',
				isTemplate: 1,
				image: '/upload/image-1669932493579jfsqb.JPG',
				life: 0,
				utilisation: 0,
				documentGrouping: ['skill'],
				taskGrouping: 'groupingCategory',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 19,
					createdAt: '2021-05-19 16:52:26',
					createdBy: 26,
					updatedAt: '2021-05-19 16:52:26',
					updatedBy: null,
					name: 'Komatsu'
				}
			}
		},
		workOrderType: {
			id: 2,
			type: 'Breakdown',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [],
		sequenceNumber: 74,
		progress: {
			percent: 100,
			total: '3 / 3'
		}
	},
	{
		id: 281,
		workOrderNumber: 'Testing Online NewWO',
		workOrderDescription: '6000',
		createdAt: '2023-04-25 14:31:49',
		createdBy: 108,
		updatedAt: '2023-04-25 14:37:24',
		updatedBy: 108,
		scheduledAt: '2023-04-25 10:00:00',
		googleMapStepDateTime: null,
		status: 'Complete',
		startedAt: '2023-04-25 14:35:29',
		completedAt: '2023-04-25 14:37:02',
		workOrderComponentCode: '6000',
		workOrderHazards: [],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: [],
		workOrderExtraOperations: null,
		modelNumber: '930E-4',
		serialNumberPrefix: '',
		modelClass: 'Haul Truck',
		taskName: 'Grid Box Inspection',
		taskType: 'Inspect',
		approvedDate: null,
		actionedBy: null,
		duration: '1',
		aiEstimatedDuration: 25249945,
		stepLimitHistory: {},
		reportLink:
			'uat-tecktest-job-report-Testing-Online-NewWO-Komatsu-930E-4-Haul-Truck-Teck-23706-pm-8fu.pdf',
		defectReportLink:
			'defects-uat-tecktest-job-report-Testing-Online-NewWO-Komatsu-930E-4-Haul-Truck-Teck-23718-pm-354.pdf',
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 7959,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:40',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:40',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11552',
				uniqueJobOperationId: '5z9vo',
				stepNumber: '92169',
				order: 0,
				images: '[]',
				instructions:
					'<ul><li data-list="bullet"><span></span>This sheet has been created to provide a rating system to determine the structural integrity of the grid box.</li><li data-list="bullet"><span></span>Inspect for cracks are indicate on the appropriate drawing views.</li><li data-list="bullet"><span></span>The crack sheet must be dated and show the truck number, the inspectors name and the maintenance work order number.</li><li data-list="bullet"><span></span>Each section will specify the point scale for each crack. It will also specify points for any previous crack that has been repaired</li></ul><p><br /></p>',
				stepLimitData: null,
				title: 'Instructions',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7960,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:45',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:45',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11553',
				uniqueJobOperationId: 'diknf',
				stepNumber: '92164',
				order: 1,
				images: '[]',
				instructions: '<p>Check front middle of the shell</p><p><br /></p>',
				stepLimitData: null,
				title: 'Exterior Shell',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7961,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:48',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:49',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11553',
				uniqueJobOperationId: 'diknf',
				stepNumber: '92170',
				order: 2,
				images: '[]',
				instructions: '<p>Check back middle of the shell</p>',
				stepLimitData: null,
				title: 'Exterior Shell',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7962,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:50',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:51',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11554',
				uniqueJobOperationId: 'dgy89',
				stepNumber: '92165',
				order: 3,
				images: '[]',
				instructions:
					'<p>Check front outside bottom plate where the shell attaches to the base rails. Visible with a mirror or can feel with hand (wear gloves)</p>',
				stepLimitData: null,
				title: 'Outer Base Attachements',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7963,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:53',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:53',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11554',
				uniqueJobOperationId: 'dgy89',
				stepNumber: '92171',
				order: 4,
				images: '[]',
				instructions:
					'<p>Check back outside bottom plate where the shell attaches to the base rails. Visible with a mirror or can feel with hand (wear gloves)</p>',
				stepLimitData: null,
				title: 'Outer Base Attachements',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7964,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:54',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:55',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11555',
				uniqueJobOperationId: 'w05h2',
				stepNumber: '92166',
				order: 5,
				images: '[]',
				instructions:
					'<p>Check front left where the shell attaches to the base rails. Visable by looking under the side of the box.</p>',
				stepLimitData: null,
				title: 'Underside of Cabinet (Middle Attachments Below Grid Blowers)',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7965,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:56',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:56',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11555',
				uniqueJobOperationId: 'w05h2',
				stepNumber: '92175',
				order: 6,
				images: '[]',
				instructions:
					'<p>Check back left where the shell attaches to the base rails. Visable by looking under the side of the box.</p>',
				stepLimitData: null,
				title: 'Underside of Cabinet (Middle Attachments Below Grid Blowers)',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7966,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:57',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:58',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11555',
				uniqueJobOperationId: 'w05h2',
				stepNumber: '92174',
				order: 7,
				images: '[]',
				instructions:
					'<p>Check front right where the shell attaches to the base rails. Can be seen from front right corner looking under the shell and back.</p>',
				stepLimitData: null,
				title: 'Underside of Cabinet (Middle Attachments Below Grid Blowers)',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 7967,
				createdAt: '2023-04-25 14:31:49',
				createdBy: 108,
				updatedAt: '2023-04-25 14:35:59',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-25 14:35:59',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -27.4748416,
						long: 153.026543
					}
				},
				jobOperationNumber: '11555',
				uniqueJobOperationId: 'w05h2',
				stepNumber: '92173',
				order: 8,
				images: '[]',
				instructions:
					'<p>Check back right where the shell attaches to the base rails. Can be seen from front right corner looking under the shell and back.</p>',
				stepLimitData: null,
				title: 'Underside of Cabinet (Middle Attachments Below Grid Blowers)',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 3910,
			createdAt: '2021-06-09 17:28:25',
			createdBy: 26,
			updatedAt: '2021-06-09 17:28:29',
			updatedBy: 26,
			lastBuiltAt: null,
			notes: '',
			componentCode: '6000',
			context: 'Standard',
			counter: '0',
			name: 'Grid Box Inspection',
			position: '0',
			frequency: 0,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: null,
			functionalFailure: null,
			documentGrouping: null,
			externalId: null
		},
		customer: {
			id: 26,
			createdAt: '2021-05-14 07:03:45',
			createdBy: 26,
			updatedAt: '2023-06-01 16:17:22',
			updatedBy: 108,
			code: 'FRO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: 'Shane Mackay',
			customerSite: 'Fording River',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: 'shane.mackay@teck.com',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1620939824124oazte.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 1,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 1,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 266,
			createdAt: '2021-07-29 07:24:01',
			createdBy: 48,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: null,
			assetName: 'Komatsu 930E-4 Haul Truck',
			serialNumber: 'A31667',
			assetFloc: 'HT518',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-07-28 10:00:00',
			startUtilisation: 0,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 26,
				createdAt: '2021-05-14 07:03:45',
				createdBy: 26,
				updatedAt: '2023-06-01 16:17:22',
				updatedBy: 108,
				code: 'FRO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: 'Shane Mackay',
				customerSite: 'Fording River',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: 'shane.mackay@teck.com',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1620939824124oazte.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 1,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 1,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 94,
				createdAt: '2021-05-19 16:55:04',
				createdBy: 26,
				updatedAt: '2022-12-01 15:08:15',
				updatedBy: 95,
				class: 'Haul Truck',
				modelNumber: '930E-4',
				serialNumberPrefix: '',
				isTemplate: 1,
				image: '/upload/image-1669932493579jfsqb.JPG',
				life: 0,
				utilisation: 0,
				documentGrouping: ['skill'],
				taskGrouping: 'groupingCategory',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 19,
					createdAt: '2021-05-19 16:52:26',
					createdBy: 26,
					updatedAt: '2021-05-19 16:52:26',
					updatedBy: null,
					name: 'Komatsu'
				}
			}
		},
		workOrderType: {
			id: 2,
			type: 'Breakdown',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 108,
				createdAt: '2022-05-27 08:39:24',
				createdBy: 26,
				updatedAt: '2023-05-26 07:42:44',
				updatedBy: 123,
				firstName: 'User2',
				lastName: 'Test',
				active: 1,
				email: 'user2@onplan.tech',
				mobilePhone: '+61413353368',
				workPhone: 'dwdwqdw',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 100,
			total: '9 / 9'
		}
	},
	{
		id: 218,
		workOrderNumber: 'FRO OnPlan Test - At Office',
		workOrderDescription: 'Testing done at office',
		createdAt: '2022-05-27 07:17:13',
		createdBy: 97,
		updatedAt: '2023-06-01 13:06:18',
		updatedBy: 128,
		scheduledAt: '2022-05-26 10:00:00',
		googleMapStepDateTime: null,
		status: 'Disapproved',
		startedAt: '2022-05-27 07:17:21',
		completedAt: '2022-05-27 07:19:20',
		workOrderComponentCode: '',
		workOrderHazards: [
			{
				id: 54,
				icon: '/img/advices/doc-warning.png',
				name: 'Dust',
				template: 'Dust. Wear a dust mask appropriate to the task being undertaken',
				createdAt: '2019-04-02T07:02:15.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			},
			{
				id: 55,
				icon: '/img/advices/doc-warning.png',
				name: 'Excessive Noise',
				template:
					'Excessive Noise. Wear correct hearing protection and communicate to effected work parties.',
				createdAt: '2019-04-02T07:03:42.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			},
			{
				id: 24,
				icon: '/img/advices/doc-warning.png',
				name: 'Slips, Trips and Falls',
				template:
					'Slips, Trips and Falls. Ensure good housekeeping at all times and clean up spills immediately should they occur.',
				createdAt: '2017-09-12T20:08:38.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: '',
				isFoundOnJobOperations: '0'
			}
		],
		workOrderSkills: [
			{
				id: 42,
				skill: {
					id: 3,
					createdAt: '2020-03-12T05:12:10.000Z',
					createdBy: 4,
					updatedAt: '2020-03-12T05:12:10.000Z',
					updatedBy: null,
					description: 'Mechanic',
					shortDescription: null
				},
				duration: 24,
				quantity: 1,
				createdAt: '2022-04-14T04:20:29.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:20:29.000Z',
				updatedBy: null
			},
			{
				id: 43,
				skill: {
					id: 2,
					createdAt: '2020-03-12T00:37:30.000Z',
					createdBy: 4,
					updatedAt: '2020-03-12T00:37:30.000Z',
					updatedBy: null,
					description: 'Electrician',
					shortDescription: null
				},
				duration: 24,
				quantity: 1,
				createdAt: '2022-04-14T04:20:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:20:48.000Z',
				updatedBy: null
			}
		],
		workOrderTools: [
			{
				id: 6018,
				tool: {
					id: 1020,
					createdAt: '2018-08-09T16:54:50.000Z',
					createdBy: null,
					toolImage: '/img/NoPicAvailable.png',
					updatedAt: '2022-02-18T10:10:50.000Z',
					updatedBy: null,
					description: 'Flashlight',
					manufacturerToolNumber: '-'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:52:54.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:52:54.000Z',
				updatedBy: null
			},
			{
				id: 6019,
				tool: {
					id: 1596,
					createdAt: '2022-04-08T15:54:25.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:54:25.000Z',
					updatedBy: null,
					description: 'intrinsically safe - Next to MX4 station, upper floor of braaker shop',
					manufacturerToolNumber: 'Tunnel-specific handled radio'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:54:25.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:54:25.000Z',
				updatedBy: null
			},
			{
				id: 6020,
				tool: {
					id: 1597,
					createdAt: '2022-04-08T15:54:57.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:54:57.000Z',
					updatedBy: null,
					description: 'Upper floor of breaker shop',
					manufacturerToolNumber: 'MX4'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:54:57.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:54:57.000Z',
				updatedBy: null
			},
			{
				id: 6021,
				tool: {
					id: 1598,
					createdAt: '2022-04-08T15:55:33.000Z',
					createdBy: 95,
					toolImage: null,
					updatedAt: '2022-04-08T15:55:33.000Z',
					updatedBy: null,
					description: '-',
					manufacturerToolNumber: 'Flagging tape'
				},
				quantity: 1,
				createdAt: '2022-04-08T15:55:34.000Z',
				createdBy: 95,
				updatedAt: '2022-04-08T15:55:34.000Z',
				updatedBy: null
			}
		],
		workOrderParts: [],
		workOrderProcedures: [],
		workOrderPermits: [
			{
				id: 1247,
				permit: {
					id: 6,
					createdAt: '2018-01-10T20:26:03.000Z',
					createdBy: null,
					permitUrl: null,
					updatedAt: '2019-03-30T02:38:31.000Z',
					updatedBy: null,
					description: 'Confined Space Entry'
				},
				createdAt: '2022-04-11T22:33:54.000Z',
				createdBy: 97,
				updatedAt: '2022-04-11T22:33:54.000Z',
				updatedBy: null
			},
			{
				id: 1248,
				permit: {
					id: 4,
					createdAt: '2018-01-10T20:25:55.000Z',
					createdBy: null,
					permitUrl: null,
					updatedAt: '2019-03-30T02:38:31.000Z',
					updatedBy: null,
					description: 'Work Isolation'
				},
				createdAt: '2022-04-11T22:35:04.000Z',
				createdBy: 97,
				updatedAt: '2022-04-11T22:35:04.000Z',
				updatedBy: null
			}
		],
		workOrderPpe: [
			{
				id: 13775,
				ppe: {
					id: 10,
					ppeImage: '/img/ppe/ppe_insulated_boots.jpg',
					createdAt: '2018-08-23T20:27:10.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Electrically Insulated Boots'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13776,
				ppe: {
					id: 1,
					ppeImage: '/img/ppe/ppe_eye_protection.png',
					createdAt: '2017-08-19T18:20:57.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Eye Protection'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13777,
				ppe: {
					id: 8,
					ppeImage: '/img/ppe/ppe_ear_protection.png',
					createdAt: '2017-08-19T18:23:30.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Hearing Protection'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13778,
				ppe: {
					id: 4,
					ppeImage: '/img/ppe/ppe_long_sleeve_shirt.jpg',
					createdAt: '2017-08-19T18:21:32.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Long Sleeve Shirt and Trousers'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13779,
				ppe: {
					id: 7,
					ppeImage: '/img/ppe/ppe_head_protection.png',
					createdAt: '2017-08-19T18:22:15.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Hard Hat'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13780,
				ppe: {
					id: 11,
					ppeImage: '/img/ppe/ppe_hand_protection.png',
					createdAt: '2019-07-29T00:43:02.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Protective Gloves'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13781,
				ppe: {
					id: 6,
					ppeImage: '/img/ppe/ppe_hi_vis.png',
					createdAt: '2017-08-19T18:22:06.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Reflective Vest or Clothing'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			},
			{
				id: 13782,
				ppe: {
					id: 3,
					ppeImage: '/img/ppe/ppe_foot_protection.png',
					createdAt: '2017-08-19T18:21:09.000Z',
					createdBy: null,
					updatedAt: '2022-02-18T10:10:51.000Z',
					updatedBy: null,
					ppedescription: 'Steel Toe Boots'
				},
				createdAt: '2022-04-14T04:23:48.000Z',
				createdBy: 97,
				updatedAt: '2022-04-14T04:23:48.000Z',
				updatedBy: null
			}
		],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: 'Raw Coal Conveyor ',
		serialNumberPrefix: 'CONV025E',
		modelClass: 'Conveyor',
		taskName: 'Daily Millwright RC Conv Check',
		taskType: 'Inspect',
		approvedDate: '2023-06-01 03:06:16',
		actionedBy: null,
		duration: '1',
		aiEstimatedDuration: 0,
		stepLimitHistory: {},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 6648,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:25',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:17:25',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13044',
				uniqueJobOperationId: 'pxv8c',
				stepNumber: '103209',
				order: 0,
				images: '[]',
				instructions:
					'<ol><li data-list="ordered"><span></span>General inspection to identify immediate and potential repairs required, as well as severity of issues.</li><li data-list="ordered"><span></span>Create Work Orders for all issues identified during inspection.</li><li data-list="ordered"><span></span>Flag concerns with ribbon if safe to do so</li></ol>',
				stepLimitData: null,
				title: 'Job Scope',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6649,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:25',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:17:28',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '12910',
				uniqueJobOperationId: '0bdjv',
				stepNumber: '102536',
				order: 1,
				images: '[]',
				instructions:
					'<p>Access to the conveyor requires entry into controlled areas. The following are the requirements, </p><p><br /></p><ul><li data-list="bullet"><span></span>Notify control room prior to entering tunnel</li><li data-list="bullet"><span></span>Notify control room when entering tube so that belt tonnage can be reduced to 500 tph.</li><li data-list="bullet"><span></span>Notify control room when inspection is complete</li></ul><p><br /></p><p>Do you Acknowledge to comply with these as it is required?</p>',
				stepLimitData: null,
				title: 'REQUIREMENTS',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6650,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:25',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:17:31',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13058',
				uniqueJobOperationId: 'dvxpi',
				stepNumber: '103277',
				order: 2,
				images: '[]',
				instructions:
					'<p>Allowable belt tracking deviation +/- 4" - Deviation Limit</p><ol><li data-list="ordered"><span></span>If greater than allowable deviation, please record the actual deviation as defect</li><li data-list="ordered"><span></span>If less than allowable deviation, please record the actual deviation</li></ol>',
				stepLimitData: {
					id: 1599,
					data: {
						isRendered: true,
						limitValues: {
							text: null,
							isCompleted: false
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Deviation limit',
					operator: null,
					createdAt: '2022-05-26T15:27:39.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:28:30.000Z',
					updatedBy: 97,
					isRequired: 0,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 15,
						data: null,
						name: 'Textbox',
						createdAt: '2020-12-04T10:22:14.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:14.000Z',
						updatedBy: null,
						description: 'textbox',
						orderNumber: 11,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Specifications/Informations',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6651,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:25',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:17:33',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13058',
				uniqueJobOperationId: 'dvxpi',
				stepNumber: '103278',
				order: 3,
				images: '[]',
				instructions:
					'<p>Allowable temperature difference between pulley bearings 10 Degree Celsius</p><ol><li data-list="ordered"><span></span>If greater than allowable temperature, please record the actual temperature as defect</li><li data-list="ordered"><span></span>If less than allowable temperature, please record the actual temperature</li></ol><p><br /></p>',
				stepLimitData: {
					id: 1600,
					data: {
						isRendered: true,
						limitValues: {
							text: null,
							isCompleted: false
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Temperature',
					operator: null,
					createdAt: '2022-05-26T15:28:48.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:29:39.000Z',
					updatedBy: 97,
					isRequired: 0,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 15,
						data: null,
						name: 'Textbox',
						createdAt: '2020-12-04T10:22:14.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:14.000Z',
						updatedBy: null,
						description: 'textbox',
						orderNumber: 11,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Specifications/Informations',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6652,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:25',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:17:43',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13059',
				uniqueJobOperationId: 'hmsi5',
				stepNumber: '103279',
				order: 4,
				images: '["/upload/image-1653580025583-rdcgu.jpeg"]',
				instructions:
					'<p>Tail Pulley</p><ul><li data-list="bullet"><span></span>Observe belt tracking.  It should be centered on the pulley.</li></ul><p>.  </p>',
				stepLimitData: {
					id: 1261,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tail Pulley Observation',
					operator: null,
					createdAt: '2022-05-09T23:19:07.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:30:48.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Tail Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6653,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:43',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13059',
				uniqueJobOperationId: 'hmsi5',
				stepNumber: '103692',
				order: 5,
				images: '["/upload/image-1653580095664-p78ms.png"]',
				instructions:
					'<p>Tail Pulley</p><ul><li data-list="bullet"><span></span>Inspect tail pulley for material buildup</li></ul>',
				stepLimitData: {
					id: 1262,
					data: {
						isRendered: true,
						limitValues: {
							pass: false,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tail Pulley Inspect',
					operator: null,
					createdAt: '2022-05-09T23:19:10.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:31:11.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Tail Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 624,
						name: 'Coal material buildup',
						defectNumber: '',
						longDescription: 'Needs to be cleaned',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-1653599965858dtrvu.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							},
							{
								data: '/upload/krackOn-image-1653599965861e067g.jpg',
								text: 'Photo 2',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							}
						],
						reportedDate: '2022-05-27 07:19:25',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-05-27 07:19:25',
						updatedAt: '2022-05-27 07:19:25',
						updatedBy: null,
						createdBy: {
							id: 97,
							createdAt: '2022-02-01 05:07:01',
							createdBy: 82,
							updatedAt: '2022-05-20 08:01:47',
							updatedBy: 60,
							firstName: 'Sriram',
							lastName: 'Raman',
							active: 1,
							email: 'Sriram.raman.test@teck.com ',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 2,
							name: 'Failure',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6653,
							createdAt: '2022-05-27 07:17:14',
							createdBy: 97,
							updatedAt: '2022-05-27 07:19:26',
							updatedBy: 97,
							completedAt: '2022-05-27 07:18:43',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13059',
							uniqueJobOperationId: 'hmsi5',
							stepNumber: '103692',
							order: 5,
							images: '["/upload/image-1653580095664-p78ms.png"]',
							instructions:
								'<p>Tail Pulley</p><ul><li data-list="bullet"><span></span>Inspect tail pulley for material buildup</li></ul>',
							stepLimitData: {
								id: 1262,
								data: {
									isRendered: true,
									limitValues: {
										pass: false,
										isLimitComplete: true
									}
								},
								file: null,
								name: 'EVO RC Conveyor - Tail Pulley Inspect',
								operator: null,
								createdAt: '2022-05-09T23:19:10.000Z',
								createdBy: 95,
								isDynamic: 0,
								updatedAt: '2022-05-26T15:31:11.000Z',
								updatedBy: 97,
								isRequired: 1,
								description: null,
								positionCode: null,
								isUtilisation: 0,
								limitCategory: {
									id: 9,
									data: null,
									name: 'Pass / Fail',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'passfail',
									orderNumber: 4,
									isTableLimit: 1
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Conveyor Tail Inspection',
							advices: [],
							completedBy: 97,
							isNested: 0
						},
						crack: null
					}
				]
			},
			{
				id: 6654,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:45',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13060',
				uniqueJobOperationId: 'u2u2c',
				stepNumber: '103280',
				order: 6,
				images: '["/upload/image-1653580209111-6ecu3.jpeg"]',
				instructions:
					'<p>Snub Pulley</p><ul><li data-list="bullet"><span></span>Observe belt tracking.  It should be centered on the pulley.</li></ul><p><br /></p>',
				stepLimitData: {
					id: 1267,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Snub Pulley Observation',
					operator: null,
					createdAt: '2022-05-10T15:12:39.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:31:55.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Snub Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6655,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:48',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13060',
				uniqueJobOperationId: 'u2u2c',
				stepNumber: '103699',
				order: 7,
				images: '["/upload/image-1653580402648-trh9x.png"]',
				instructions:
					'<p>Snub Pulley</p><ul><li data-list="bullet"><span></span>Inspect pulley for material buildup.</li></ul><p><br /></p>',
				stepLimitData: {
					id: 1268,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Snub Pulley Inspect',
					operator: null,
					createdAt: '2022-05-10T15:12:43.000Z',
					createdBy: 95,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:32:17.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Snub Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6656,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:49',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103281',
				order: 8,
				images: '["/upload/image-1653580503273-jbp2d.png"]',
				instructions:
					'<p>Scrappers</p><ul><li data-list="bullet"><span></span>Check all scrapers for effectiveness. It should be just touching belt. Make WO for any abnormalities, or if less than 1" remaining</li></ul>',
				stepLimitData: {
					id: 1269,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Scrappers Check',
					operator: null,
					createdAt: '2022-05-10T15:43:52.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:32:54.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6657,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:52',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103694',
				order: 9,
				images: '[]',
				instructions:
					'<p>Scrappers</p><ul><li data-list="bullet"><span></span>Hose and clean all scrapers</li></ul>',
				stepLimitData: {
					id: 1270,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Clean Scrappers ',
					operator: null,
					createdAt: '2022-05-10T15:44:03.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:33:14.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6658,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:54',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103695',
				order: 10,
				images: '["/upload/image-1653580879202-2x6a4.jpeg"]',
				instructions:
					'<p>Suspension Cables</p><ul><li data-list="bullet"><span></span>Visually inspect</li></ul>',
				stepLimitData: {
					id: 1271,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Suspension Cables Inspect',
					operator: null,
					createdAt: '2022-05-10T15:44:12.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:33:33.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6659,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103696',
				order: 11,
				images: '["/upload/image-1653580972370-wsf0r.jpeg"]',
				instructions:
					'<p>Belt</p><ul><li data-list="bullet"><span></span>Observe belt tracking. It should be centered on the tail pulley and the idlers. Report areas where mis-tracking is observed.</li></ul>',
				stepLimitData: {
					id: 1272,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Belt Tracking Observation',
					operator: null,
					createdAt: '2022-05-10T15:44:27.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:03.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6660,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:18:59',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103697',
				order: 12,
				images: '["/upload/image-1653581152000-krktj.jpeg"]',
				instructions:
					'<p>Belt</p><ul><li data-list="bullet"><span></span>Observe the profile of the material load on the belt. It should be centered in the middle of the belt.</li></ul>',
				stepLimitData: {
					id: 1273,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Material Observation on Belt',
					operator: null,
					createdAt: '2022-05-10T15:44:34.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:29.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6661,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:19:04',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103698',
				order: 13,
				images: '["/upload/image-1653581189384-3c1th.png"]',
				instructions:
					'<p>Idler rollers</p><ul><li data-list="bullet"><span></span>Inspect for noisy or failing idlers, or idlers with loose/missing bolts. If seized idlers are found, notify your supervisor immediately. Ensure you are familiar with Idler changeout job plan in this situation.</li></ul><p><br /></p><p>Please see the video for noise - reference</p><p><a target="_blank" href="https://teckresources.sharepoint.com/:v:/r/sites/Digital_PM_Automation/Shared%20Documents/Conveyor/20220511_100917.mp4?csf=1&amp;web=1&amp;e=PTaO2Z">20220511_100917.mp4</a></p>',
				stepLimitData: {
					id: 1274,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Idler Rollers',
					operator: null,
					createdAt: '2022-05-10T15:44:41.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:42.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6662,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:19:07',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13061',
				uniqueJobOperationId: 'qzv7i',
				stepNumber: '103700',
				order: 14,
				images: '["/upload/image-1653581312526-rcqs2.png"]',
				instructions:
					'<p>Idler rollers</p><ul><li data-list="bullet"><span></span>If Idlers are found noisy/or with loose/missing bolts, please list the frame numbers of the problem idlers in the "Comments" section at the end of this check-sheet and flag the idler location with flagging tape. If the exact idler cannot be clearly identified, comment on approx. idler frame so that maintenance can check idlers in the area.</li></ul>',
				stepLimitData: {
					id: 1274,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Idler Rollers',
					operator: null,
					createdAt: '2022-05-10T15:44:41.000Z',
					createdBy: 97,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:34:42.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6663,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:26',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:19:08',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13062',
				uniqueJobOperationId: 'q277w',
				stepNumber: '103282',
				order: 15,
				images: '["/upload/image-1652144975819-h9box.png"]',
				instructions:
					'<p>Pull Cords</p><ul><li data-list="bullet"><span></span>Make sure there are no broken cords</li></ul>',
				stepLimitData: {
					id: 1266,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Pull Cords',
					operator: null,
					createdAt: '2022-05-10T01:08:38.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:35:27.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Electrical Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6664,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:27',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:19:15',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13063',
				uniqueJobOperationId: 'cfa2u',
				stepNumber: '103283',
				order: 16,
				images: '["/upload/image-1652144820646gjafk.png"]',
				instructions: '<p>Inspect tunnel for cleanliness. Look for any coal buildup.</p>',
				stepLimitData: {
					id: 1265,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Tunnel Inspection',
					operator: null,
					createdAt: '2022-05-10T00:33:09.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:35:47.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Tube Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6665,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2022-05-27 07:19:27',
				updatedBy: {
					id: 97,
					firstName: 'Sriram',
					lastName: 'Raman'
				},
				completedAt: '2022-05-27 07:19:17',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13064',
				uniqueJobOperationId: 'tdyhe',
				stepNumber: '103284',
				order: 17,
				images: '["/upload/image-16521427598591r03x.png"]',
				instructions: '<p>Inspect the Head Pulley for material buildup</p>',
				stepLimitData: {
					id: 1263,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Inspect Head Pulley',
					operator: null,
					createdAt: '2022-05-09T23:27:55.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:36:13.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: 'Head Pulley - Material Buildup',
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Head Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6666,
				createdAt: '2022-05-27 07:17:14',
				createdBy: 97,
				updatedAt: '2023-06-01 13:05:52',
				updatedBy: {
					id: 128,
					firstName: 'dan',
					lastName: 'g'
				},
				completedAt: '2022-05-27 07:19:19',
				status: 'Not Started',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '13064',
				uniqueJobOperationId: 'tdyhe',
				stepNumber: '103693',
				order: 18,
				images: '["/upload/image-16521426631330s2f8.png"]',
				instructions:
					'<p>Observe belt tracking on the Head Pulley. It should be centered on the pulley.</p>',
				stepLimitData: {
					id: 1264,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'EVO RC Conveyor - Belt Tracking on Head Pulley',
					operator: null,
					createdAt: '2022-05-10T00:04:48.000Z',
					createdBy: 60,
					isDynamic: 0,
					updatedAt: '2022-05-26T15:36:40.000Z',
					updatedBy: 97,
					isRequired: 1,
					description: null,
					positionCode: null,
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Conveyor Head Inspection',
				advices: [],
				completedBy: 97,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 824,
						name: 'Test 929329',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2023-06-01 13:05:51',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2023-06-01 13:05:51',
						updatedAt: '2023-06-01 13:05:51',
						updatedBy: null,
						createdBy: {
							id: 128,
							createdAt: '2023-06-01 12:15:26',
							createdBy: 108,
							updatedAt: '2023-06-01 13:33:08',
							updatedBy: 128,
							firstName: 'dan',
							lastName: 'g',
							active: 1,
							email: 'dang@onplan.tech',
							mobilePhone: '2',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 7,
							name: 'Disapproval',
							createdAt: '2023-04-27 10:47:35',
							createdBy: null,
							updatedAt: '2023-04-27 10:47:35',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 1,
							name: 'P1 - Urgent (24 Hours)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6666,
							createdAt: '2022-05-27 07:17:14',
							createdBy: 97,
							updatedAt: '2023-06-01 13:05:52',
							updatedBy: 128,
							completedAt: '2022-05-27 07:19:19',
							status: 'Not Started',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '13064',
							uniqueJobOperationId: 'tdyhe',
							stepNumber: '103693',
							order: 18,
							images: '["/upload/image-16521426631330s2f8.png"]',
							instructions:
								'<p>Observe belt tracking on the Head Pulley. It should be centered on the pulley.</p>',
							stepLimitData: {
								id: 1264,
								data: {
									isRendered: true,
									limitValues: {
										pass: true,
										isLimitComplete: true
									}
								},
								file: null,
								name: 'EVO RC Conveyor - Belt Tracking on Head Pulley',
								operator: null,
								createdAt: '2022-05-10T00:04:48.000Z',
								createdBy: 60,
								isDynamic: 0,
								updatedAt: '2022-05-26T15:36:40.000Z',
								updatedBy: 97,
								isRequired: 1,
								description: null,
								positionCode: null,
								isUtilisation: 0,
								limitCategory: {
									id: 9,
									data: null,
									name: 'Pass / Fail',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'passfail',
									orderNumber: 4,
									isTableLimit: 1
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Conveyor Head Inspection',
							advices: [],
							completedBy: 97,
							isNested: 0
						},
						crack: null
					}
				]
			}
		],
		strategyTask: {
			id: 5510,
			createdAt: '2022-04-09 01:51:21',
			createdBy: 95,
			updatedAt: '2022-07-22 06:07:22',
			updatedBy: 95,
			lastBuiltAt: '2022-07-22 06:07:22',
			notes: '',
			componentCode: '',
			context: 'Standard',
			counter: '24',
			name: 'Daily Millwright RC Conv Check',
			position: 'Raw Coal',
			frequency: 0,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: null,
			functionalFailure: null,
			documentGrouping: null,
			externalId: ''
		},
		customer: {
			id: 27,
			createdAt: '2021-06-17 14:33:14',
			createdBy: 26,
			updatedAt: '2022-05-03 03:44:32',
			updatedBy: 95,
			code: '',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: '',
			customerSite: 'Teck Sandbox',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: '',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-162390439139024hed.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 0,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 0,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 300,
			createdAt: '2022-04-12 05:01:17',
			createdBy: 97,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 95,
			assetName: 'RC - Conveyor',
			serialNumber: '',
			assetFloc: '0001',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2022-04-11 10:00:00',
			startUtilisation: 1,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 27,
				createdAt: '2021-06-17 14:33:14',
				createdBy: 26,
				updatedAt: '2022-05-03 03:44:32',
				updatedBy: 95,
				code: '',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: '',
				customerSite: 'Teck Sandbox',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: '',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-162390439139024hed.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 0,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 0,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 118,
				createdAt: '2022-04-09 01:44:57',
				createdBy: 95,
				updatedAt: '2022-05-04 09:45:04',
				updatedBy: 26,
				class: 'Conveyor',
				modelNumber: 'Raw Coal Conveyor ',
				serialNumberPrefix: 'CONV025E',
				isTemplate: 0,
				image: '/upload/image-1649432806936cfrov.jpg',
				life: 0,
				utilisation: 0,
				documentGrouping: [],
				taskGrouping: 'strategyTaskSystemId',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 12,
					createdAt: '2018-07-02 05:00:35',
					createdBy: null,
					updatedAt: '2020-03-12 10:59:04',
					updatedBy: 4,
					name: 'Process Plant'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 60,
				createdAt: '2021-07-24 06:53:25',
				createdBy: 27,
				updatedAt: '2022-06-07 09:09:52',
				updatedBy: 26,
				firstName: 'Shane',
				lastName: 'Mackay',
				active: 1,
				email: 'shane.mackay.test@teck.com',
				mobilePhone: '',
				workPhone: '2503206804',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			},
			{
				id: 95,
				createdAt: '2022-02-01 05:03:18',
				createdBy: 82,
				updatedAt: '2022-03-18 01:58:17',
				updatedBy: 60,
				firstName: 'William',
				lastName: 'Lopez',
				active: 1,
				email: 'william.lopez.test@teck.com',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			},
			{
				id: 97,
				createdAt: '2022-02-01 05:07:01',
				createdBy: 82,
				updatedAt: '2022-05-20 08:01:47',
				updatedBy: 60,
				firstName: 'Sriram',
				lastName: 'Raman',
				active: 1,
				email: 'Sriram.raman.test@teck.com ',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 94,
			total: '18 / 19'
		}
	},
	{
		id: 191,
		workOrderNumber: 'RC-005',
		workOrderDescription: 'Annual Structural Inspection - Elkview',
		createdAt: '2022-04-27 11:27:11',
		createdBy: 106,
		updatedAt: '2023-04-26 13:52:08',
		updatedBy: 108,
		scheduledAt: '2022-04-26 10:00:00',
		googleMapStepDateTime: null,
		status: 'In Progress',
		startedAt: '2023-04-26 13:29:25',
		completedAt: null,
		workOrderComponentCode: '8000',
		workOrderHazards: [
			{
				id: 56,
				icon: '/img/advices/doc-warning.png',
				name: 'Unplanned Movement',
				template:
					'Unplanned Movement. Ensure the work area remains clear as movement is possible. Carry out positive isolation prior to commencing work.',
				createdAt: '2019-04-02T07:04:46.000Z',
				createdBy: null,
				isGeneral: 1,
				updatedAt: '2020-10-09T07:44:04.000Z',
				updatedBy: null,
				adviceCategoryId: 1,
				jobOperationsNames: 'Job Preparation',
				isFoundOnJobOperations: '1'
			}
		],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: '4100XPC',
		serialNumberPrefix: '',
		modelClass: 'Rope Shovel',
		taskName: 'Annual Structural Inspection - Elkview',
		taskType: 'Structural Inspection',
		approvedDate: null,
		actionedBy: null,
		duration: '1',
		aiEstimatedDuration: null,
		stepLimitHistory: {
			178: [
				{
					data: '{"limitValues": {"unitOfMeasure": "In", "isLimitComplete": true}, "unitOfMeasure": "In"}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			186: [],
			188: [],
			196: [],
			197: [],
			198: [],
			199: [],
			200: [],
			201: [],
			206: [],
			207: [],
			208: [],
			215: [],
			216: [],
			218: [],
			219: [],
			220: [],
			226: [
				{
					data: '{"limitValues": {"text": "4th tooth missing since June 21.", "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			227: [
				{
					data: '{"limitValues": {"signature": null, "timestamp": null, "isLimitComplete": false}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			229: [],
			232: [
				{
					data: '{"limitValues": {"unitOfMeasure": "In", "isLimitComplete": true}, "unitOfMeasure": "In"}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			242: [
				{
					data: {
						limitValues: {
							chosenOption: 0,
							isLimitComplete: true
						}
					},
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			386: []
		},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 6059,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:02',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:32',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '12488',
				uniqueJobOperationId: '',
				stepNumber: '100103',
				order: 1,
				images: '[]',
				instructions:
					'<p>Ensure equipment is parked in a safe area and not interfering with operations.</p><p><br /></p><p>Clean the machine prior to task as required. </p><p><br /></p><p>Barricade machine in accordance with site requirements.</p>',
				stepLimitData: null,
				title: 'Job Preparation',
				advices: [
					{
						id: 65811,
						order: 100,
						value: null,
						createdAt: '2021-07-22T03:19:16.000Z',
						createdBy: 26,
						updatedAt: '2021-07-22T03:19:16.000Z',
						updatedBy: null,
						adviceDefinition: {
							id: 56,
							icon: '/img/advices/doc-warning.png',
							name: 'Unplanned Movement',
							template:
								'Unplanned Movement. Ensure the work area remains clear as movement is possible. Carry out positive isolation prior to commencing work.',
							createdAt: '2019-04-02T07:04:46.000Z',
							createdBy: null,
							isGeneral: 1,
							updatedAt: '2020-10-09T07:44:04.000Z',
							updatedBy: null,
							adviceCategory: {
								id: 1,
								name: 'Hazard',
								order: 1,
								createdAt: '2017-07-04T18:17:38.000Z',
								createdBy: null,
								iconStyle: 'text-warning',
								isVisible: 1,
								textStyle: 'd80e0d',
								updatedAt: '2020-02-21T05:26:00.000Z',
								updatedBy: null,
								adviceIcon: 'ion-alert-circled',
								isEditable: 0
							}
						}
					}
				],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6060,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:04',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:34',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '12488',
				uniqueJobOperationId: '',
				stepNumber: '100104',
				order: 2,
				images: '[]',
				instructions: '<p>Lockout unit following SP&amp;P GN.001 prior to PM inspections.</p>',
				stepLimitData: null,
				title: 'Job Preparation',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6061,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:04',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:37',
				status: 'Not Done',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11920',
				uniqueJobOperationId: '',
				stepNumber: '97715',
				order: 3,
				images: '[]',
				instructions:
					'<p>Ensure Take 5 has been completed and pre-work safety discussion has taken place.</p>',
				stepLimitData: null,
				title: 'Safety Precautions',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6062,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:04',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: null,
				status: 'Complete',
				data: {},
				jobOperationNumber: '11920',
				uniqueJobOperationId: '',
				stepNumber: '97716',
				order: 4,
				images: '[]',
				instructions:
					'<p>Confined space areas are not to be entered unless specified and safety requirements have been met.\t\t\t\t\t</p>',
				stepLimitData: {
					id: 242,
					data: {
						isRendered: true,
						limitValues: {
							chosenOption: 1,
							isLimitComplete: true
						},
						listOptions: [
							{
								action: 'Do Nothing'
							},
							{
								action: 'Do Nothing'
							},
							{
								action: 'Do Nothing'
							}
						]
					},
					file: null,
					name: 'Confined Space Check',
					operator: null,
					createdAt: '2021-07-08T21:38:54.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-08-31T18:28:40.000Z',
					updatedBy: 61,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Confined Space Check',
					isUtilisation: 0,
					limitCategory: {
						id: 20,
						data: [
							{
								colour: '008000',
								isDefect: false,
								question: 'YES'
							},
							{
								colour: 'ff0000',
								isDefect: false,
								question: 'NO'
							},
							{
								colour: '0000ff',
								isDefect: false,
								question: 'N/A'
							}
						],
						name: 'Yes-No-NA',
						createdAt: '2021-05-20T06:03:48.000Z',
						createdBy: 26,
						updatedAt: '2021-05-20T06:03:48.000Z',
						updatedBy: null,
						description: 'buttonList',
						orderNumber: 7,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Safety Precautions',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6063,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:40',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '97825',
				order: 5,
				images: '[]',
				instructions:
					'<p>Take Photographs of each side of the dipper for condition assessment.</p>',
				stepLimitData: {
					id: 233,
					data: [
						{
							rows: [
								{
									text: 'Take a photograph of the front of the dipper.'
								},
								{
									text: 'Take a photograph of the left side of the dipper.'
								},
								{
									text: 'Take a photograph of the rear of the dipper.'
								},
								{
									text: 'Take a photograph of the rightside of the dipper.'
								}
							],
							columnType: 'item',
							columnHeader: 'Instruction'
						},
						{
							rows: [
								{
									id: 236,
									data: {
										isRendered: true,
										limitValues: {
											isLimitComplete: false
										}
									},
									name: 'Dipper Photo Front',
									operator: null,
									createdAt: '2021-06-24T23:15:52.000Z',
									createdBy: 26,
									updatedAt: '2021-06-24T23:15:52.000Z',
									updatedBy: null,
									lowerLimit: null,
									upperLimit: null,
									description: 'Dipper Photo Front',
									isUtilisation: 0,
									limitCategory: {
										id: 5,
										data: null,
										name: 'Photo',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'photo',
										orderNumber: 10,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 234,
									data: {
										isRendered: true,
										limitValues: {
											isLimitComplete: false
										}
									},
									name: 'Dipper Photo Left Side',
									operator: null,
									createdAt: '2021-06-24T23:15:24.000Z',
									createdBy: 26,
									updatedAt: '2021-06-24T23:15:24.000Z',
									updatedBy: null,
									lowerLimit: null,
									upperLimit: null,
									description: 'Dipper Photo Left Side',
									isUtilisation: 0,
									limitCategory: {
										id: 5,
										data: null,
										name: 'Photo',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'photo',
										orderNumber: 10,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 237,
									data: {
										isRendered: true,
										limitValues: {
											isLimitComplete: false
										}
									},
									name: 'Dipper Photo Rear',
									operator: null,
									createdAt: '2021-06-24T23:16:04.000Z',
									createdBy: 26,
									updatedAt: '2021-06-24T23:16:04.000Z',
									updatedBy: null,
									lowerLimit: null,
									upperLimit: null,
									description: 'Dipper Photo Rear',
									isUtilisation: 0,
									limitCategory: {
										id: 5,
										data: null,
										name: 'Photo',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'photo',
										orderNumber: 10,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 235,
									data: {
										isRendered: true,
										limitValues: {
											isLimitComplete: false
										}
									},
									name: 'Dipper Photo Right Side',
									operator: null,
									createdAt: '2021-06-24T23:15:38.000Z',
									createdBy: 26,
									updatedAt: '2021-06-24T23:15:38.000Z',
									updatedBy: null,
									lowerLimit: null,
									upperLimit: null,
									description: 'Dipper Photo Right Side',
									isUtilisation: 0,
									limitCategory: {
										id: 5,
										data: null,
										name: 'Photo',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'photo',
										orderNumber: 10,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'Dipper Photos',
					operator: null,
					createdAt: '2021-06-24T23:14:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-24T23:14:17.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: null,
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6064,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92185',
				order: 6,
				images: '["/upload/image-1623737258416ry6f5.png"]',
				instructions: '<p>Inspect RH outside of dipper for cracks.</p>',
				stepLimitData: {
					id: 186,
					data: {
						locationId: 'IMP-DIP-RHS',
						locationDescription: 'Dipper - Inside '
					},
					file: {
						id: 19,
						name: 'P&H-4100-STR-DIP-FRT-ISO-2 19',
						size: '473785',
						active: 0,
						filepath: '/upload/image-1623737258416ry6f5.png',
						createdAt: '2021-06-15T06:07:40.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: 26,
						description: 'P&H 4100 Dipper - Right Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-RHS',
					operator: null,
					createdAt: '2021-06-15T06:09:42.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T06:27:43.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Dipper - Inside ',
					positionCode: {
						id: 25,
						code: 'IMP-DIP-RHS',
						description: 'Dipper - Inside '
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 19,
					createdAt: '2021-06-15 16:07:40',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:43',
					updatedBy: 26,
					name: 'P&H-4100-STR-DIP-FRT-ISO-2 19',
					description: 'P&H 4100 Dipper - Right Side',
					filepath: '/upload/image-1623737258416ry6f5.png',
					size: '473785',
					extension: 'png',
					active: 0,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: [
					{
						id: 44,
						name: '12” wear crack',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/detail-krackOn-image-162567322644923yib.jpg',
								text: ''
							},
							{
								data: '/upload/krackOn-image-16256732264443kz99.jpg',
								text: 'Photo 1',
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							}
						],
						reportedDate: '2021-07-08 01:52:37',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2021-07-08 01:53:51',
						updatedAt: '2021-07-30 20:05:06',
						updatedBy: null,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 38,
							name: '12” wear crack',
							sequenceNumber: 1,
							notes: '',
							length: 300,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[-0.291212283557042, -0.35372955457158956, 0.35]],
							images: [
								{
									data: '/upload/detail-krackOn-image-162567322644923yib.jpg',
									text: ''
								},
								{
									data: '/upload/krackOn-image-16256732264443kz99.jpg',
									text: 'Photo 1',
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: null
								}
							],
							dateRecorded: '2021-07-08 01:52:37',
							severity: null,
							createdAt: '2021-09-18 08:26:00',
							createdBy: null,
							customerNote: null,
							updatedAt: '2021-09-20 13:25:01',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 1,
								name: 'Repair',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'structural-inspection'
								}
							}
						}
					}
				]
			},
			{
				id: 6065,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92186',
				order: 7,
				images: '["/upload/image-1623738865247xfmsx.png"]',
				instructions: '<p>Inspect LH outside of dipper for cracks.</p>',
				stepLimitData: {
					id: 188,
					data: {
						locationId: 'IM-DIP-DOOR',
						locationDescription: 'Implement Dipper Door'
					},
					file: {
						id: 24,
						name: 'P&H-4100-IMP-DIP-RHS-1 24',
						size: '512626',
						active: 1,
						filepath: '/upload/image-1623738865247xfmsx.png',
						createdAt: '2021-06-15T06:34:26.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Dipper - Inside ',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-DOOR',
					operator: null,
					createdAt: '2021-06-15T06:51:51.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T06:54:07.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Implement Dipper Door',
					positionCode: {
						id: 26,
						code: 'IM-DIP-DOOR',
						description: 'Implement Dipper Door'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 24,
					createdAt: '2021-06-15 16:34:26',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-RHS-1 24',
					description: 'P&H 4100 Dipper - Inside ',
					filepath: '/upload/image-1623738865247xfmsx.png',
					size: '512626',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6066,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:07',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92188',
				order: 8,
				images: '["/upload/image-1623738865247xfmsx.png"]',
				instructions:
					'<p>Inspect inside of dipper and dipper floor for cracks and/or missing wear plates.</p>',
				stepLimitData: {
					id: 191,
					data: {
						locationId: 'IMP-DIP-FRT',
						locationDescription: 'Dipper - Inside '
					},
					file: {
						id: 24,
						name: 'P&H-4100-IMP-DIP-RHS-1 24',
						size: '512626',
						active: 1,
						filepath: '/upload/image-1623738865247xfmsx.png',
						createdAt: '2021-06-15T06:34:26.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Dipper - Inside ',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-FRT',
					operator: null,
					createdAt: '2021-06-15T06:57:18.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T06:58:32.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Dipper - Inside ',
					positionCode: {
						id: 28,
						code: 'IMP-DIP-FRT',
						description: 'Dipper - Inside '
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 24,
					createdAt: '2021-06-15 16:34:26',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-RHS-1 24',
					description: 'P&H 4100 Dipper - Inside ',
					filepath: '/upload/image-1623738865247xfmsx.png',
					size: '512626',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6067,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:29:52',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '100110',
				order: 9,
				images: '["/upload/image-1624254831590oko9m.png"]',
				instructions:
					'<p>Inspect inside of the dipper door for cracks and/or missing wear plates</p>',
				stepLimitData: {
					id: 210,
					data: {
						locationId: 'I02',
						locationDescription: 'Dipper Door - Front Side'
					},
					file: {
						id: 46,
						name: 'P&H-4100-IMP-DTS-02',
						size: '41525',
						active: 1,
						filepath: '/upload/image-1624254831590oko9m.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Implement Dipper Trip System 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-DTS-I02',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:08.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Dipper Door - Front Side',
					positionCode: {
						id: 44,
						code: 'I02',
						description: 'Dipper Door - Front Side'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 46,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:44:28',
					updatedBy: null,
					name: 'P&H-4100-IMP-DTS-02',
					description: 'P&H 4100 Dipper Door - Front Side',
					filepath: '/upload/image-1624254831590oko9m.png',
					size: '41525',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6068,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92192',
				order: 10,
				images: '["/upload/image-162373989697087iir.png"]',
				instructions: '<p>Inspect the rear of the bail as well as bail lugs and keepers </p>',
				stepLimitData: {
					id: 193,
					data: {
						locationId: 'IMP-DIP-LUG-REA',
						locationDescription: ' Bail - Rear'
					},
					file: {
						id: 31,
						name: 'P&H-4100-IMP-DIP-BAI-RE 31',
						size: '90325',
						active: 1,
						filepath: '/upload/image-162373989697087iir.png',
						createdAt: '2021-06-15T06:51:37.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Bail - Rear',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-LUG-REA',
					operator: null,
					createdAt: '2021-06-15T07:03:49.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T07:04:34.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Bail - Rear',
					positionCode: {
						id: 30,
						code: 'IMP-DIP-LUG-REA',
						description: ' Bail - Rear'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 31,
					createdAt: '2021-06-15 16:51:37',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-BAI-RE 31',
					description: 'P&H 4100 Bail - Rear',
					filepath: '/upload/image-162373989697087iir.png',
					size: '90325',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6069,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92197',
				order: 11,
				images: '["/upload/image-1623739879354yp651.png"]',
				instructions: '<p>Inspect the front of the bail.</p>',
				stepLimitData: {
					id: 192,
					data: {
						locationId: 'IMP-DIP-LUG-FR',
						locationDescription: 'Bail - Front  Front'
					},
					file: {
						id: 30,
						name: 'P&H-4100-IMP-DIP-BAI-FR 30',
						size: '89472',
						active: 1,
						filepath: '/upload/image-1623739879354yp651.png',
						createdAt: '2021-06-15T06:51:20.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Bail - Front ',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-LUG-FRT',
					operator: null,
					createdAt: '2021-06-15T06:59:43.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T07:04:43.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Bail - Front ',
					positionCode: {
						id: 29,
						code: 'IMP-DIP-LUG-FR',
						description: 'Bail - Front  Front'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 30,
					createdAt: '2021-06-15 16:51:20',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-BAI-FR 30',
					description: 'P&H 4100 Bail - Front ',
					filepath: '/upload/image-1623739879354yp651.png',
					size: '89472',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6070,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92199',
				order: 12,
				images: '[]',
				instructions: '<p>Inspect the equalizer and keepers.</p>',
				stepLimitData: null,
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6071,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '97827',
				order: 13,
				images: '["/upload/image-1623739832738afwb5.png"]',
				instructions: '<p>Inspect outside of dipper door for cracks.</p>',
				stepLimitData: {
					id: 194,
					data: {
						locationId: 'IMP-DIP-TRIP',
						locationDescription: 'Implement Dipper Trip'
					},
					file: {
						id: 29,
						name: 'P&H-4100-IMP-DIP-INT 29',
						size: '121384',
						active: 1,
						filepath: '/upload/image-1623739832738afwb5.png',
						createdAt: '2021-06-15T06:50:33.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Dipper Door - Back Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-TRIP',
					operator: null,
					createdAt: '2021-06-15T07:08:43.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T07:09:24.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Implement Dipper Trip',
					positionCode: {
						id: 31,
						code: 'IMP-DIP-TRIP',
						description: 'Implement Dipper Trip'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 29,
					createdAt: '2021-06-15 16:50:33',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-INT 29',
					description: 'P&H 4100 Dipper Door - Back Side',
					filepath: '/upload/image-1623739832738afwb5.png',
					size: '121384',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6072,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:53:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11557',
				uniqueJobOperationId: '',
				stepNumber: '92194',
				order: 14,
				images: '["/upload/image-1623739832738afwb5.png"]',
				instructions: '<p>Inspect trip rope and latch lever link.</p>',
				stepLimitData: {
					id: 194,
					data: {
						locationId: 'IMP-DIP-TRIP',
						locationDescription: 'Implement Dipper Trip'
					},
					file: {
						id: 29,
						name: 'P&H-4100-IMP-DIP-INT 29',
						size: '121384',
						active: 1,
						filepath: '/upload/image-1623739832738afwb5.png',
						createdAt: '2021-06-15T06:50:33.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-18T11:33:52.000Z',
						updatedBy: null,
						description: 'P&H 4100 Dipper Door - Back Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-DIP-TRIP',
					operator: null,
					createdAt: '2021-06-15T07:08:43.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-15T07:09:24.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Implement Dipper Trip',
					positionCode: {
						id: 31,
						code: 'IMP-DIP-TRIP',
						description: 'Implement Dipper Trip'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'DIPPER ',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 29,
					createdAt: '2021-06-15 16:50:33',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIP-INT 29',
					description: 'P&H 4100 Dipper Door - Back Side',
					filepath: '/upload/image-1623739832738afwb5.png',
					size: '121384',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6073,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97728',
				order: 15,
				images: '[]',
				instructions:
					'<p>Inspect the dipper door hinges and hinge and snubber arm pins for missing lock collars and/or retainers</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6074,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '101375',
				order: 16,
				images: '[]',
				instructions: '<p>Inspect dutchman</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6075,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97769',
				order: 17,
				images: '[]',
				instructions: '<p>Inspect the dipper latch lever guide.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6076,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97770',
				order: 18,
				images: '[]',
				instructions: '<p>Inspect the upper and lower dipper latch bar guide.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6077,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97771',
				order: 19,
				images: '[]',
				instructions: '<p>Inspect the dipper latch bar shim pack.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6078,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97772',
				order: 20,
				images: '[]',
				instructions: '<p>Inspect the dipper latch bar.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6079,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97773',
				order: 21,
				images: '[]',
				instructions: '<p>Inspect the dipper latch lever and the wear bar.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6080,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11926',
				uniqueJobOperationId: '',
				stepNumber: '97776',
				order: 22,
				images: '[]',
				instructions: '<p>Inspect the dipper trip chain and the shackle.</p>',
				stepLimitData: null,
				title: 'DIPPER',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6081,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:05',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12554',
				uniqueJobOperationId: '',
				stepNumber: '100720',
				order: 23,
				images: '["/upload/image-162425483513980a1h.png"]',
				instructions:
					'<p>Visually inspect top revolving frame and surrounding structure for cracks and physical damage.</p><p><br /></p><p>Visually inspect wing attachment for loose bolts, cracks and physical damage.</p><p><br /></p><p>Visually inspect swing shaft housings and pinions for wear and physical damage.</p>',
				stepLimitData: {
					id: 218,
					data: {
						locationId: 'T01',
						locationDescription: 'Revolving Frame Structure Top Side T01'
					},
					file: {
						id: 54,
						name: 'P&H-4100-RVF-STR-01',
						size: '374460',
						active: 1,
						filepath: '/upload/image-162425483513980a1h.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Rev Frame - Top Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-RVF-STR-T01',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Revolving Frame Structure Top Side T01',
					positionCode: {
						id: 47,
						code: 'T01',
						description: 'Carbody - Top Side T01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Revolving Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 54,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:12:43',
					updatedBy: 26,
					name: 'P&amp;H-4100-RVF-STR-01',
					description: 'P&amp;H 4100 Rev Frame - Top Side',
					filepath: '/upload/image-162425483513980a1h.png',
					size: '374460',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6082,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:33:35',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12554',
				uniqueJobOperationId: '',
				stepNumber: '100721',
				order: 24,
				images: '["/upload/image-1624254835540b7zao.png"]',
				instructions:
					'<p>Visually inspect bottom revolving frame and surrounding structure for cracks and physical damage.</p><p><br /></p><p>Visually inspect wing attachment for loose bolts, cracks and physical damage.</p><p><br /></p><p>Visually inspect swing shaft housings and pinions for wear and physical damage.</p>',
				stepLimitData: {
					id: 219,
					data: {
						locationId: 'BG02',
						locationDescription: 'Rev Frame - Bottom Side'
					},
					file: {
						id: 55,
						name: 'P&H-4100-RVF-STR-02',
						size: '428857',
						active: 1,
						filepath: '/upload/image-1624254835540b7zao.png',
						createdAt: '2021-06-21T08:23:09.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:09.000Z',
						updatedBy: null,
						description: 'P&H 4100 Rev Frame - Bottom Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-RVF-STR-BG02',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Rev Frame - Bottom Side',
					positionCode: {
						id: 50,
						code: 'BG02',
						description: 'Rev Frame - Bottom Side'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Revolving Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 55,
					createdAt: '2021-06-21 18:23:09',
					createdBy: 26,
					updatedAt: '2022-07-26 22:35:44',
					updatedBy: 26,
					name: 'PH4100-RVF-STR-02',
					description: 'PH4100 Rev Frame - Bottom Side',
					filepath: '/upload/image-1624254835540b7zao.png',
					size: '428857',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6083,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:33:35',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12554',
				uniqueJobOperationId: '',
				stepNumber: '100722',
				order: 25,
				images: '["/upload/image-162425483593984glp.png"]',
				instructions: '<p>Inspect in compartments of rev frame</p>',
				stepLimitData: {
					id: 220,
					data: {
						locationId: 'B03',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-162425483593984glp.png',
						locationDescription: 'Rev Frame - Internal'
					},
					file: {
						id: 56,
						name: 'P&H-4100-RVF-STR-03',
						size: '90311',
						active: 1,
						filepath: '/upload/image-162425483593984glp.png',
						createdAt: '2021-06-21T08:23:09.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:09.000Z',
						updatedBy: null,
						description: 'P&H 4100 Rev Frame - Internal',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'B03',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-08-26T14:59:29.000Z',
					updatedBy: 34,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Rev Frame - Internal',
					positionCode: {
						id: 51,
						code: 'B03',
						description: 'Rev Frame - Internal'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Revolving Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 56,
					createdAt: '2021-06-21 18:23:09',
					createdBy: 26,
					updatedAt: '2022-07-26 22:35:44',
					updatedBy: null,
					name: 'P&H-4100-RVF-STR-03',
					description: 'P&H 4100 Rev Frame - Internal',
					filepath: '/upload/image-162425483593984glp.png',
					size: '90311',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6084,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:05',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12555',
				uniqueJobOperationId: '',
				stepNumber: '100723',
				order: 26,
				images: '["/upload/image-1624254836175fjblr.png"]',
				instructions: '<p>Inspect outside structure of carbody</p>',
				stepLimitData: {
					id: 215,
					data: {
						locationId: 'T01',
						locationDescription: 'Carbody - Top Side T01'
					},
					file: {
						id: 51,
						name: 'P&H-4100-CAR-STR-01',
						size: '378676',
						active: 1,
						filepath: '/upload/image-1624254836175fjblr.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Carbody - Top Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-CAR-STR-T01',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Carbody - Top Side T01',
					positionCode: {
						id: 47,
						code: 'T01',
						description: 'Carbody - Top Side T01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'CARBODY',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 51,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:29:05',
					updatedBy: 26,
					name: 'P&H-4100-CAR-STR-01',
					description: 'P&H 4100 Carbody - Top Side',
					filepath: '/upload/image-1624254836175fjblr.png',
					size: '378676',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6085,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:33:35',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12555',
				uniqueJobOperationId: '',
				stepNumber: '100724',
				order: 27,
				images: '["/upload/image-1624254836530lehfq.jpg"]',
				instructions: '<p>Inspect inside compartments of carbody</p>',
				stepLimitData: {
					id: 216,
					data: {
						locationId: 'B02',
						locationDescription: 'Rev Frame - Bottom Side'
					},
					file: {
						id: 52,
						name: 'P&H-4100-CAR-STR-02',
						size: '55644',
						active: 1,
						filepath: '/upload/image-1624254836530lehfq.jpg',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'jpg',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Rev Frame - Bottom Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-CAR-STR-B02',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Rev Frame - Bottom Side',
					positionCode: {
						id: 48,
						code: 'B02',
						description: 'Rev Frame - Bottom Side'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'CARBODY',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 52,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:35:44',
					updatedBy: null,
					name: 'P&H-4100-CAR-STR-02',
					description: 'P&H 4100 Rev Frame - Bottom Side',
					filepath: '/upload/image-1624254836530lehfq.jpg',
					size: '55644',
					extension: 'jpg',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6086,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:05:07',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12556',
				uniqueJobOperationId: '',
				stepNumber: '100725',
				order: 28,
				images: '["/upload/image-1624254826856qa4n6.png"]',
				instructions: '<p>Inspect left hand side of the boom</p>',
				stepLimitData: {
					id: 196,
					data: {
						locationId: 'L01',
						locationDescription: 'Handle - Right Side'
					},
					file: {
						id: 32,
						name: 'P&H-4100-IMP-BOO-01',
						size: '51278',
						active: 1,
						filepath: '/upload/image-1624254826856qa4n6.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Boom - Left Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-BOO-L01',
					operator: null,
					createdAt: '2021-06-21T08:24:07.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:07.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Handle - Right Side',
					positionCode: {
						id: 33,
						code: 'L01',
						description: 'Handle - Right Side'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Boom',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 32,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:28:42',
					updatedBy: 26,
					name: 'P&H-4100-IMP-BOO-01',
					description: 'P&H 4100 Boom - Left Side',
					filepath: '/upload/image-1624254826856qa4n6.png',
					size: '51278',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6087,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:05',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12556',
				uniqueJobOperationId: '',
				stepNumber: '100726',
				order: 29,
				images: '["/upload/image-1624254827026dnns5.png"]',
				instructions: '<p>Inspect right hand side of the boom</p>',
				stepLimitData: {
					id: 197,
					data: {
						locationId: 'R02',
						locationDescription: 'Handle - Left SideR02'
					},
					file: {
						id: 33,
						name: 'P&H-4100-IMP-BOO-02',
						size: '63448',
						active: 1,
						filepath: '/upload/image-1624254827026dnns5.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Boom - Right Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-BOO-R02',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:08.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Handle - Left SideR02',
					positionCode: {
						id: 34,
						code: 'R02',
						description: 'Handle - Left SideR02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Boom',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 33,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 21:37:06',
					updatedBy: 26,
					name: 'P&amp;H-4100-IMP-BOO-02',
					description: 'P&amp;H 4100 Boom - Right Side',
					filepath: '/upload/image-1624254827026dnns5.png',
					size: '63448',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6088,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:06',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12556',
				uniqueJobOperationId: '',
				stepNumber: '100727',
				order: 30,
				images: '["/upload/image-1624254827233y6co1.png"]',
				instructions: '<p>Inspect the top of the boom, including boom feet</p>',
				stepLimitData: {
					id: 198,
					data: {
						locationId: 'T03',
						locationDescription: 'Boom - Top Side T03'
					},
					file: {
						id: 34,
						name: 'P&H-4100-IMP-BOO-03',
						size: '84159',
						active: 1,
						filepath: '/upload/image-1624254827233y6co1.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Boom - Top Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-BOO-T03',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:08.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Boom - Top Side T03',
					positionCode: {
						id: 35,
						code: 'T03',
						description: 'Boom - Top Side T03'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Boom',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 34,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 21:37:18',
					updatedBy: 26,
					name: 'P&amp;H-4100-IMP-BOO-03',
					description: 'P&amp;H 4100 Boom - Top Side',
					filepath: '/upload/image-1624254827233y6co1.png',
					size: '84159',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6089,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:06',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12556',
				uniqueJobOperationId: '',
				stepNumber: '100729',
				order: 31,
				images: '["/upload/image-16242548274162yygf.png"]',
				instructions: '<p>Inspect bottom of the boom</p>',
				stepLimitData: {
					id: 199,
					data: {
						locationId: 'B04',
						locationDescription: 'Boom - Bottom Side B04'
					},
					file: {
						id: 35,
						name: 'P&H-4100-IMP-BOO-04',
						size: '75452',
						active: 1,
						filepath: '/upload/image-16242548274162yygf.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Boom - Bottom Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-BOO-B04',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-09-16T16:45:40.000Z',
					updatedBy: 34,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Boom - Bottom Side B04',
					positionCode: {
						id: 36,
						code: 'B04',
						description: 'Boom - Bottom Side B04'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Boom',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 35,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 21:37:34',
					updatedBy: 26,
					name: 'P&amp;H-4100-IMP-BOO-04',
					description: 'P&amp;H 4100 Boom - Bottom Side',
					filepath: '/upload/image-16242548274162yygf.png',
					size: '75452',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6090,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12556',
				uniqueJobOperationId: '',
				stepNumber: '100730',
				order: 32,
				images: '["/upload/image-1630676239446aaaqo.jpg"]',
				instructions: '<p>Inspect internal compartments of the boom</p>',
				stepLimitData: {
					id: 386,
					data: {
						cameraInit: {
							width: 0.017454272530636212,
							height: 0.02595835100003565,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986874e-15,
								z: 57.29432506465481
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'Internal',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1630676239446aaaqo.jpg',
						locationDescription: 'Inside of the boom'
					},
					file: {
						id: 91,
						name: 'P&H-4100-IMP-BOOM-INTERNAL',
						size: '107081',
						active: 1,
						filepath: '/upload/image-1630676239446aaaqo.jpg',
						createdAt: '2021-09-03T13:37:25.000Z',
						createdBy: 34,
						extension: 'jpg',
						updatedAt: '2021-09-03T13:37:25.000Z',
						updatedBy: null,
						description: 'P&H 4100 Implement Boom - Internal',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-BOOM-INTERNAL',
					operator: null,
					createdAt: '2021-09-03T13:41:45.000Z',
					createdBy: 34,
					isDynamic: 0,
					updatedAt: '2021-09-03T13:42:08.000Z',
					updatedBy: 34,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Implement Boom Internal',
					positionCode: {
						id: 87,
						code: 'Internal',
						description: 'Inside of the boom'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Boom',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 91,
					createdAt: '2021-09-03 23:37:25',
					createdBy: 34,
					updatedAt: '2021-09-03 23:37:25',
					updatedBy: null,
					name: 'P&H-4100-IMP-BOOM-INTERNAL',
					description: 'P&H 4100 Implement Boom - Internal',
					filepath: '/upload/image-1630676239446aaaqo.jpg',
					size: '107081',
					extension: 'jpg',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6091,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 21:29:53',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12618',
				uniqueJobOperationId: '',
				stepNumber: '101335',
				order: 33,
				images: '["/upload/image-1624365049156v46v1.JPG"]',
				instructions: '<p>Inspect gantry </p>',
				stepLimitData: {
					id: 229,
					data: {
						locationId: 'P&H-4100-GAN-GEN',
						inspectionImage: '/upload/image-1624365049156v46v1.JPG',
						locationDescription: 'Gantry'
					},
					file: {
						id: 62,
						name: 'P&H-4100-GAN-GEN',
						size: '68829',
						active: 1,
						filepath: '/upload/image-1624365049156v46v1.JPG',
						createdAt: '2021-06-22T12:30:51.000Z',
						createdBy: 26,
						extension: 'JPG',
						updatedAt: '2021-06-22T12:30:51.000Z',
						updatedBy: null,
						description: 'Gantry',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-GAN-GEN',
					operator: null,
					createdAt: '2021-06-22T12:31:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-22T12:31:40.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&amp;H 4100 Gantry General',
					positionCode: {
						id: 57,
						code: 'P&H-4100-GAN-GEN',
						description: 'Gantry'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'GANTRY',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 62,
					createdAt: '2021-06-22 22:30:51',
					createdBy: 26,
					updatedAt: '2021-06-22 22:30:51',
					updatedBy: null,
					name: 'P&H-4100-GAN-GEN',
					description: 'P&H 4100 Gantry General',
					filepath: '/upload/image-1624365049156v46v1.JPG',
					size: '68829',
					extension: 'JPG',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6092,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12489',
				uniqueJobOperationId: '',
				stepNumber: '100105',
				order: 34,
				images: '["/upload/image-16269706232667ldnk.jpg"]',
				instructions: '<p>Inspect RHS saddle block for cracks</p>',
				stepLimitData: {
					id: 244,
					data: {
						cameraInit: {
							width: 0.017453532265474157,
							height: 0.01283895230615903,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.769262981683765e-15,
								z: 77.88797529221179
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'RHS',
						inspectionImage: '/upload/image-16269706232667ldnk.jpg',
						locationDescription: 'RHS Saddle Block'
					},
					file: {
						id: 64,
						name: 'P&H-4100-IMP-SADDLEBLOCK-RHS',
						size: '27984',
						active: 1,
						filepath: '/upload/image-16269706232667ldnk.jpg',
						createdAt: '2021-07-22T16:17:18.000Z',
						createdBy: 34,
						extension: 'jpg',
						updatedAt: '2021-07-22T16:17:18.000Z',
						updatedBy: null,
						description: 'RHS SADDLE BLOCK',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-SADDLEBLOCK-RHS',
					operator: null,
					createdAt: '2021-07-22T16:07:47.000Z',
					createdBy: 34,
					isDynamic: 0,
					updatedAt: '2021-07-22T16:21:15.000Z',
					updatedBy: 34,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '',
					positionCode: {
						id: 60,
						code: 'RHS',
						description: 'RHS Saddle Block'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'SADDLE BLOCKS',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 64,
					createdAt: '2021-07-23 02:17:18',
					createdBy: 34,
					updatedAt: '2021-07-23 02:17:18',
					updatedBy: null,
					name: 'P&H-4100-IMP-SADDLEBLOCK-RHS',
					description: 'RHS SADDLE BLOCK',
					filepath: '/upload/image-16269706232667ldnk.jpg',
					size: '27984',
					extension: 'jpg',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6093,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12489',
				uniqueJobOperationId: '',
				stepNumber: '100106',
				order: 35,
				images: '["/upload/image-1626970757921qum31.jpg"]',
				instructions: '<p>Inspect LHS saddle block for cracks</p>',
				stepLimitData: {
					id: 245,
					data: {
						cameraInit: {
							width: 0.017453565826062178,
							height: 0.01370816543420334,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.466851545618673e-15,
								z: 72.94922174668923
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'LHS',
						inspectionImage: '/upload/image-1626970757921qum31.jpg',
						locationDescription: 'LHS Saddle Block'
					},
					file: {
						id: 65,
						name: 'P&H-4100-IMP-SADDLEBLOCK-LHS',
						size: '27964',
						active: 1,
						filepath: '/upload/image-1626970757921qum31.jpg',
						createdAt: '2021-07-22T16:19:20.000Z',
						createdBy: 34,
						extension: 'jpg',
						updatedAt: '2021-07-22T16:19:20.000Z',
						updatedBy: null,
						description: 'LHS SADDLE BLOCK',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&amp;H-4100-IMP-SADDLEBLOCK-LHS',
					operator: null,
					createdAt: '2021-07-22T16:20:28.000Z',
					createdBy: 34,
					isDynamic: 0,
					updatedAt: '2021-07-22T16:21:59.000Z',
					updatedBy: 34,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'LHS SADDLE BLOCK',
					positionCode: {
						id: 61,
						code: 'LHS',
						description: 'LHS Saddle Block'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'SADDLE BLOCKS',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 65,
					createdAt: '2021-07-23 02:19:20',
					createdBy: 34,
					updatedAt: '2021-07-23 02:19:20',
					updatedBy: null,
					name: 'P&H-4100-IMP-SADDLEBLOCK-LHS',
					description: 'LHS SADDLE BLOCK',
					filepath: '/upload/image-1626970757921qum31.jpg',
					size: '27964',
					extension: 'jpg',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6094,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:04:05',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12619',
				uniqueJobOperationId: '',
				stepNumber: '101336',
				order: 36,
				images: '["/upload/image-1624254827716ngk9m.png"]',
				instructions: '<p>Inspect RH dipper handle</p>',
				stepLimitData: {
					id: 207,
					data: {
						locationId: 'R02',
						locationDescription: 'Implement Dipper Handle Right R02'
					},
					file: {
						id: 43,
						name: 'P&H-4100-IMP-DIH-02',
						size: '25567',
						active: 1,
						filepath: '/upload/image-1624254827716ngk9m.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Handle - Left Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-DIH-R02',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:08.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Implement Dipper Handle Right R02',
					positionCode: {
						id: 34,
						code: 'R02',
						description: 'Handle - Left SideR02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'STICKS',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 43,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 21:38:21',
					updatedBy: 26,
					name: 'P&amp;H-4100-IMP-DIH-02',
					description: 'P&amp;H 4100 Handle - Right Side',
					filepath: '/upload/image-1624254827716ngk9m.png',
					size: '25567',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6095,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-07-26 22:05:07',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12619',
				uniqueJobOperationId: '',
				stepNumber: '101337',
				order: 37,
				images: '["/upload/image-1624254827576lt0ea.png"]',
				instructions: '<p>Inpsect LH dipper handle</p>',
				stepLimitData: {
					id: 206,
					data: {
						locationId: 'L01',
						locationDescription: 'Implement Dipper Handle Left L01'
					},
					file: {
						id: 42,
						name: 'P&H-4100-IMP-DIH-01',
						size: '29573',
						active: 1,
						filepath: '/upload/image-1624254827576lt0ea.png',
						createdAt: '2021-06-21T08:23:08.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:08.000Z',
						updatedBy: null,
						description: 'P&H 4100 Handle - Right Side',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-IMP-DIH-L01',
					operator: null,
					createdAt: '2021-06-21T08:24:08.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:08.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Implement Dipper Handle Left L01',
					positionCode: {
						id: 33,
						code: 'L01',
						description: 'Handle - Right Side'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'STICKS',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 42,
					createdAt: '2021-06-21 18:23:08',
					createdBy: 26,
					updatedAt: '2022-07-26 22:24:44',
					updatedBy: null,
					name: 'P&H-4100-IMP-DIH-01',
					description: 'P&H 4100 Handle - Right Side',
					filepath: '/upload/image-1624254827576lt0ea.png',
					size: '29573',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6096,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11938',
				uniqueJobOperationId: '',
				stepNumber: '97818',
				order: 38,
				images: '["/upload/image-1624254834378fwdak.png"]',
				instructions:
					'<p>Inspect the overall structure of the L/H side frame.</p><p><br /></p><p>Inspect the L/H top rails.</p>',
				stepLimitData: {
					id: 221,
					data: {
						locationId: 'LHS01',
						locationDescription: 'Propel System Track Frame Left Side LHS01'
					},
					file: {
						id: 57,
						name: 'P&H-4100-PWS-TRF-01',
						size: '37390',
						active: 1,
						filepath: '/upload/image-1624254834378fwdak.png',
						createdAt: '2021-06-21T08:23:09.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:09.000Z',
						updatedBy: null,
						description: 'P&H 4100 Propel System Track Frame 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-PWS-TRF-LHS01',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Propel System Track Frame Left Side LHS01',
					positionCode: {
						id: 52,
						code: 'LHS01',
						description: 'Propel System Track Frame Left Side LHS01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 57,
					createdAt: '2021-06-21 18:23:09',
					createdBy: 26,
					updatedAt: '2022-07-26 22:44:28',
					updatedBy: null,
					name: 'P&H-4100-PWS-TRF-01',
					description: 'P&H 4100 Track Frame - Left Side',
					filepath: '/upload/image-1624254834378fwdak.png',
					size: '37390',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6097,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11938',
				uniqueJobOperationId: '',
				stepNumber: '97819',
				order: 39,
				images: '["/upload/image-16242548347563i2r5.png"]',
				instructions:
					'<p>Inspect the overall structure of the R/H side frame</p><p><br /></p><p>Inspect the R/H top rails.</p>',
				stepLimitData: {
					id: 222,
					data: {
						locationId: 'RHS02',
						locationDescription: 'Propel System Track Frame Right Side RHS02'
					},
					file: {
						id: 58,
						name: 'P&H-4100-PWS-TRF-02',
						size: '246392',
						active: 1,
						filepath: '/upload/image-16242548347563i2r5.png',
						createdAt: '2021-06-21T08:23:09.000Z',
						createdBy: 26,
						extension: 'png',
						updatedAt: '2021-06-21T08:23:09.000Z',
						updatedBy: null,
						description: 'P&H 4100 Propel System Track Frame 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'P&H-4100-PWS-TRF-RHS02',
					operator: null,
					createdAt: '2021-06-21T08:24:09.000Z',
					createdBy: 26,
					isDynamic: 0,
					updatedAt: '2021-06-21T08:24:09.000Z',
					updatedBy: null,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'P&H 4100 Propel System Track Frame Right Side RHS02',
					positionCode: {
						id: 53,
						code: 'RHS02',
						description: 'Propel System Track Frame Right Side RHS02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 58,
					createdAt: '2021-06-21 18:23:09',
					createdBy: 26,
					updatedAt: '2022-07-26 22:44:28',
					updatedBy: null,
					name: 'P&H-4100-PWS-TRF-02',
					description: 'P&H 4100 Track Frame - Right Side',
					filepath: '/upload/image-16242548347563i2r5.png',
					size: '246392',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6098,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97804',
				order: 40,
				images: '[]',
				instructions: '<p>Inspect the L/H grease guards.</p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6099,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97813',
				order: 41,
				images: '[]',
				instructions: '<p>Inspect the R/H grease guards.</p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6100,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97814',
				order: 42,
				images: '[]',
				instructions: '<p>Inspect the L/H final drive guards.</p><p><br /></p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6101,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97815',
				order: 43,
				images: '[]',
				instructions: '<p>Inspect the R/H final drive guards.</p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6102,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97816',
				order: 44,
				images: '[]',
				instructions: '<p>Inspect the L/H brake guards.</p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6103,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2022-04-27 11:27:11',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '11936',
				uniqueJobOperationId: '',
				stepNumber: '97817',
				order: 45,
				images: '[]',
				instructions: '<p>Inspect the R/H brake guards.</p>',
				stepLimitData: null,
				title: 'Track Frames',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6104,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:52',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11930',
				uniqueJobOperationId: '',
				stepNumber: '97756',
				order: 46,
				images: '[]',
				instructions: '<p>Inspect the cabin catwalks.</p>',
				stepLimitData: null,
				title: 'CAB',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6105,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:53',
				status: 'Not Done',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11930',
				uniqueJobOperationId: '',
				stepNumber: '97758',
				order: 47,
				images: '["/upload/image-1624365336765uv8oo.png"]',
				instructions: '<p>Inspect the cabin hand rails and ladders. (01, 05)</p>',
				stepLimitData: null,
				title: 'CAB',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6106,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:54',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11930',
				uniqueJobOperationId: '',
				stepNumber: '97757',
				order: 48,
				images: '[]',
				instructions: '<p>Inspect the cab mounting area.</p>',
				stepLimitData: null,
				title: 'CAB',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6107,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:55',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97759',
				order: 49,
				images: '["/upload/image-16243661171865glgw.png"]',
				instructions: '<p>Inspect the structural components of the machine house (I-beams)</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6108,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:56',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97760',
				order: 50,
				images: '[]',
				instructions: '<p>Inspect the A-frame for cracks or damage.</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6109,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:56',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '98950',
				order: 51,
				images: '["/upload/image-1625693146050-e9w0j.png"]',
				instructions: '<p>Inspect hoist gearcase pedestals for cracking</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6110,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97761',
				order: 52,
				images: '[]',
				instructions: '<p>Inspect the access doors to swing traps (roof)</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6111,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97762',
				order: 53,
				images: '[]',
				instructions: '<p>Inspect the house pressurizer cover (AirScrub Pro)</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6112,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:05',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97763',
				order: 54,
				images: '[]',
				instructions: '<p>Inspect the grease room structure.</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6113,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:06',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97764',
				order: 55,
				images: '[]',
				instructions: '<p>Inspect the electrical cabinet structure.</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6114,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:06',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:57',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97765',
				order: 56,
				images: '["/upload/image-1624366180191hjrkh.png"]',
				instructions:
					'<p>Inspect the machinery house ladders, catwalks and handrails.</p><p><br /></p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6115,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:06',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:58',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11924',
				uniqueJobOperationId: '',
				stepNumber: '97766',
				order: 57,
				images: '["/upload/image-1624366341877eb460.png"]',
				instructions: '<p>Inspect the counterweight.</p>',
				stepLimitData: null,
				title: 'Machinery House',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6116,
				createdAt: '2022-04-27 11:27:11',
				createdBy: 106,
				updatedAt: '2023-04-26 13:52:06',
				updatedBy: {
					id: 108,
					firstName: 'User2',
					lastName: 'Test'
				},
				completedAt: '2023-04-26 13:29:58',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '11918',
				uniqueJobOperationId: '',
				stepNumber: '97710',
				order: 58,
				images: '[]',
				instructions:
					'<p>Ensure detailed work orders from inspection have been entered in DAXTI.</p>',
				stepLimitData: null,
				title: 'Post Inspection Checks',
				advices: [],
				completedBy: 108,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 5079,
			createdAt: '2021-08-05 07:32:34',
			createdBy: 34,
			updatedAt: '2021-09-04 03:22:31',
			updatedBy: 34,
			lastBuiltAt: null,
			notes: '',
			componentCode: '8000',
			context: 'EVO',
			counter: '0',
			name: 'Annual Structural Inspection - Elkview',
			position: '0',
			frequency: 0,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: '',
			functionalFailure: '',
			documentGrouping: null,
			externalId: null
		},
		customer: {
			id: 25,
			createdAt: '2019-08-06 11:08:38',
			createdBy: null,
			updatedAt: '2022-08-20 10:07:23',
			updatedBy: 26,
			code: 'EVO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: '',
			customerSite: 'Elkview',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: '',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1620939755462lutvp.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: null,
			isReportRequired: 0,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 0,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 257,
			createdAt: '2021-06-23 00:04:35',
			createdBy: null,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 108,
			assetName: 'P&H 4100 Shovel',
			serialNumber: '54960',
			assetFloc: 'SH320',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-06-23 00:04:35',
			startUtilisation: 0,
			isDisposed: 1,
			disposedAt: '2023-05-09 03:17:31',
			customer: {
				id: 25,
				createdAt: '2019-08-06 11:08:38',
				createdBy: null,
				updatedAt: '2022-08-20 10:07:23',
				updatedBy: 26,
				code: 'EVO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: '',
				customerSite: 'Elkview',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: '',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1620939755462lutvp.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: null,
				isReportRequired: 0,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 0,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 108,
				createdAt: '2021-06-23 00:03:28',
				createdBy: 26,
				updatedAt: '2021-06-23 00:03:28',
				updatedBy: null,
				class: 'Rope Shovel',
				modelNumber: '4100',
				serialNumberPrefix: '',
				isTemplate: 1,
				image: '/upload/image-1624370606873fzrmx.jpg',
				life: 0,
				utilisation: 0,
				documentGrouping: [],
				taskGrouping: 'strategyTaskSystemId',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 20,
					createdAt: '2021-05-20 09:35:05',
					createdBy: 26,
					updatedAt: '2021-05-20 09:35:05',
					updatedBy: null,
					name: 'P&H'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 108,
				createdAt: '2022-05-27 08:39:24',
				createdBy: 26,
				updatedAt: '2023-05-26 07:42:44',
				updatedBy: 123,
				firstName: 'User2',
				lastName: 'Test',
				active: 1,
				email: 'user2@onplan.tech',
				mobilePhone: '+61413353368',
				workPhone: 'dwdwqdw',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 31,
			total: '18 / 58'
		}
	},
	{
		id: 192,
		workOrderNumber: 'RC007',
		workOrderDescription: '750 Hours Welder  Inspection',
		createdAt: '2022-04-27 11:29:17',
		createdBy: 106,
		updatedAt: '2022-04-27 11:29:17',
		updatedBy: null,
		scheduledAt: '2022-04-26 10:00:00',
		googleMapStepDateTime: null,
		status: 'In Progress',
		startedAt: null,
		completedAt: null,
		workOrderComponentCode: '750HR',
		workOrderHazards: [],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [
			{
				id: 5845,
				createdAt: '2022-03-04T04:19:32.000Z',
				createdBy: 87,
				procedure: {
					id: 74,
					createdAt: '2022-03-04T04:18:52.000Z',
					createdBy: 87,
					updatedAt: '2022-03-04T04:18:52.000Z',
					updatedBy: null,
					description: '930E TEST UPLOAD DOCUMENT',
					procedureUrl: '/upload/file-1646367512102cowrg.docx',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-08T19:23:30.000Z',
						createdBy: null,
						updatedAt: '2019-03-30T02:38:40.000Z',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04T04:19:32.000Z',
				updatedBy: null
			},
			{
				id: 5846,
				createdAt: '2022-03-04T04:20:28.000Z',
				createdBy: 87,
				procedure: {
					id: 73,
					createdAt: '2021-09-14T21:02:03.000Z',
					createdBy: 54,
					updatedAt: '2021-09-14T21:02:03.000Z',
					updatedBy: null,
					description: 'CAT 793F Off Highway Truck - HEI (LCO)',
					procedureUrl: '/upload/file-16316533127660dzo5.pdf',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-08T19:23:30.000Z',
						createdBy: null,
						updatedAt: '2019-03-30T02:38:40.000Z',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04T04:20:28.000Z',
				updatedBy: null
			}
		],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: '930E-4',
		serialNumberPrefix: '',
		modelClass: 'Haul Truck',
		taskName: '750 Hours Welder  Inspection',
		taskType: 'Inspect',
		approvedDate: null,
		actionedBy: null,
		duration: '0',
		aiEstimatedDuration: null,
		stepLimitHistory: {
			155: [],
			159: [],
			163: [],
			165: [],
			169: [],
			171: [],
			227: [
				{
					data: '{"limitValues": {"signature": "/upload/limit-image-1625756647752h8r3y.png", "timestamp": 1625756579839, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			435: [
				{
					data: '{"limitValues": {"chosenOption": 0, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			436: [
				{
					data: '{"limitValues": {"chosenOption": 1, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			437: [
				{
					data: '{"limitValues": {"text": "Broken internal component of pump. Does not operate.", "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			438: [
				{
					data: '{"limitValues": {"text": "Replace the fuel pump.", "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			439: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448qkek7.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			440: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448oa2gp.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			441: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448t6gi8.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589464fqla2.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589464oi217.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				},
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-163245158946459qhn.png", "location": {"lat": -27.5149714, "long": 152.9581804}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			442: [
				{
					data: '{"limitValues": {"photo": "/upload/limit-image-1632451589448tb94n.png", "location": {"lat": -27.5149857, "long": 152.9581687}, "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			443: [
				{
					data: '{"limitValues": {"chosenOption": "13", "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			],
			444: [
				{
					data: '{"limitValues": {"text": "Fuel Pump", "isLimitComplete": true}}',
					completedAt: '2021-11-26T05:59:27.000Z'
				}
			]
		},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 6117,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102548',
				order: 1,
				images: '[""]',
				instructions: '<p>Inspect Safety Lug on the Dump Body.</p>',
				stepLimitData: {
					id: 686,
					data: {},
					file: null,
					name: 'Box Safety Lug Inspection',
					operator: null,
					createdAt: '2022-03-01T14:13:28.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Box Safety Lug Inspection',
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Dump Body',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6118,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102580',
				order: 2,
				images: '["/upload/image-1646146381297-cer4m.png"]',
				instructions: '<p>Inspect LH and RH Side of Dump Body</p>',
				stepLimitData: {
					id: 690,
					data: [
						{
							rows: [
								{
									text: 'Visually Inspect Equipment ID  '
								},
								{
									text: 'Record Box ID'
								},
								{
									text: 'Inspect Lifting Lugs'
								},
								{
									text: 'Inspect Rock Ejector Brackets'
								}
							],
							columnType: 'item',
							columnHeader: 'Task'
						},
						{
							rows: [
								{
									id: 691,
									data: {},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 692,
									data: {},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 15,
										data: null,
										name: 'Textbox',
										createdAt: '2020-12-04T10:22:14.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:14.000Z',
										updatedBy: null,
										description: 'textbox',
										orderNumber: 11,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 694,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 695,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'LH'
						},
						{
							rows: [
								{
									id: 689,
									data: {},
									name: 'New Limit 2022/03/02 00:39am',
									operator: null,
									createdAt: '2022-03-01T14:39:44.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:39:44.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 693,
									data: {},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 15,
										data: null,
										name: 'Textbox',
										createdAt: '2020-12-04T10:22:14.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:14.000Z',
										updatedBy: null,
										description: 'textbox',
										orderNumber: 11,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 696,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 697,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'RH'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-BOX-06',
					operator: null,
					createdAt: '2022-03-01T14:39:44.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Dump Body 06',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Dump Body',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6119,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102583',
				order: 3,
				images: '["/upload/image-1646256926059zxao6.krackon.png"]',
				instructions:
					'<p><strong>Inspect and Repair Any Cracks found in the following areas</strong>:</p><p><br /></p><p><strong><u>Location 1:</u></strong> Visually Inspect the Canopy, Canopy Braces and Box Side Extensions (If Box is raised, a hole check is sufficient)</p><p><br /></p><p><strong><u>Location 2:</u></strong> Visually Inspect the Hoist Cylinder  Mount Area</p><p><br /></p><p><strong><u>Location 3:</u></strong> Visually Inspect the Box Pivot Ears and Area</p><p><br /></p><p><strong><u>Location 4:</u></strong> Visually Inspect the Box Rails and Bolster to Main Rail Junctions</p><p><br /></p><p><strong><u>Location 5:</u></strong> Visually Inspect the Safety Sling Lug </p><p><br /></p><p><strong><u>Location 6:</u></strong> Visually Inspect the Box Dove Tail Area</p><p><br /></p><p><strong><u>Location 7:</u></strong> Visually Inspect the Bolsters</p><p><br /></p><p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas</p>',
				stepLimitData: {
					id: 611,
					data: {
						locationId: 'STR-BOX-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646256926059zxao6.krackon.png',
						locationDescription: 'Structure Dump Body 01'
					},
					file: {
						id: 100,
						name: 'FRO-KOM-930E-STR-BOX-03',
						size: '628068',
						active: 1,
						filepath: '/upload/image-1645661607780w58vf.png',
						createdAt: '2022-02-24T00:27:54.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:54.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Dump Body 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-BOX-01',
					operator: null,
					createdAt: '2022-02-22T18:36:48.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:35:28.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Dump Body 01',
					positionCode: {
						id: 94,
						code: 'STR-BOX-01',
						description: 'Structure Dump Body 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 676,
						data: [
							{
								criteria: 'between',
								lowerLimit: 0,
								upperLimit: 2
							},
							{
								criteria: 'between',
								lowerLimit: 2,
								upperLimit: 4
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 4
							}
						],
						name: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						operator: null,
						createdAt: '2022-02-24T18:40:04.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:49:25.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Dump Body',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 100,
					createdAt: '2022-02-24 10:27:54',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:54',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-BOX-03',
					description: 'FRO-KOM 930E Structure Dump Body 03',
					filepath: '/upload/image-1645661607780w58vf.png',
					size: '628068',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6120,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102576',
				order: 4,
				images: '["/upload/image-164607976540072bft.krackon.png"]',
				instructions:
					'<p><strong>Repair Any Cracks found in the following areas</strong>: </p><p><br /></p><p><strong><u>Location 1:</u></strong> Inspect the Lower Suspension Mount Casting to Axle Box Barrel</p><p><br /></p><p><strong><u>Location 2:</u></strong> Inspect the Access Hole Reinforcement Plate to Axle Box Barrel</p><p><br /></p><p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas </p>',
				stepLimitData: {
					id: 618,
					data: {
						locationId: 'STR-AXLBOX-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-164607976540072bft.krackon.png',
						locationDescription: 'Structure Axle Box 02'
					},
					file: {
						id: 98,
						name: 'FRO-KOM-930E-STR-AXLBOX-02',
						size: '165500',
						active: 1,
						filepath: '/upload/image-1645661595926r3ulu.png',
						createdAt: '2022-02-24T00:27:54.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:54.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Axle Box 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-AXLBOX-02',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-02-28T20:22:46.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Axle Box 02',
					positionCode: {
						id: 100,
						code: 'STR-AXLBOX-02',
						description: 'Structure Axle Box 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 98,
					createdAt: '2022-02-24 10:27:54',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:54',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-AXLBOX-02',
					description: 'FRO-KOM 930E Structure Axle Box 02',
					filepath: '/upload/image-1645661595926r3ulu.png',
					size: '165500',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6121,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102577',
				order: 5,
				images: '["/upload/image-16460808323513ljlg.krackon.png"]',
				instructions:
					'<p><strong>Repair Any Cracks found in the following areas</strong>: </p><p><br /></p><p><strong><u>Location 1:</u></strong> Inspect D-Ring to Axle Box Barrel</p><p><br /></p><p><strong><u>Location 2:</u></strong> Inspect Axle Box Barrel where Wheel Motor Mounting Tube is attached to the Center Structure</p><p><br /></p><p><strong><u>Location 3:</u></strong> Inspect the Center Section of the Axle Box</p><p><br /></p><p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas</p>',
				stepLimitData: {
					id: 617,
					data: {
						cameraInit: {
							width: 0.017453625014638013,
							height: 0.015119854386791675,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.0497969352706655e-15,
								z: 66.13820308174229
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-AXLBOX-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-16460808323513ljlg.krackon.png',
						locationDescription: 'Structure Axle Box 01'
					},
					file: {
						id: 116,
						name: 'FRO-KOM-930E-STR-AXLBOX-01',
						size: '66189',
						active: 1,
						filepath: '/upload/image-16456615952814liou.png',
						createdAt: '2022-02-24T17:17:56.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T17:17:56.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Axle Box 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-AXLBOX-01',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-02-28T20:40:33.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Axle Box 01',
					positionCode: {
						id: 99,
						code: 'STR-AXLBOX-01',
						description: 'Structure Axle Box 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 116,
					createdAt: '2022-02-25 03:17:56',
					createdBy: 87,
					updatedAt: '2022-02-25 03:17:56',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-AXLBOX-01',
					description: 'FRO-KOM 930E Structure Axle Box 01',
					filepath: '/upload/image-16456615952814liou.png',
					size: '66189',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6122,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102558',
				order: 6,
				images: '["/upload/image-1646257418857khfyx.png"]',
				instructions: '<p>Inspect the Nose Cone Weld and Mounting to Torque Tube Area.</p>',
				stepLimitData: {
					id: 622,
					data: {
						locationId: 'STR-NOSECONE-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257418857khfyx.png',
						locationDescription: 'Structure Nose Cone 01'
					},
					file: {
						id: 132,
						name: 'FRO-KOM-930E-STR-NOSECONE-01.png',
						size: '44338',
						active: 1,
						filepath: '/upload/image-1646257418857khfyx.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Nose Cone 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-NOSECONE-01',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:49:29.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Nose Cone 01',
					positionCode: {
						id: 104,
						code: 'STR-NOSECONE-01',
						description: 'Structure Nose Cone 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 132,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-NOSECONE-01.png',
					description: 'Komatsu 930E Structure Nose Cone 01',
					filepath: '/upload/image-1646257418857khfyx.png',
					size: '44338',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6123,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102588',
				order: 7,
				images: '["/upload/image-1646154914210534ky.png"]',
				instructions: '<p>Visually Inspect the ROPS Cab Foot structure</p>',
				stepLimitData: {
					id: 698,
					data: {
						locationId: 'KOM-930E-ROPS-CAB FOOT',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646154914210534ky.png',
						locationDescription: 'Komatsu 930E ROPS CAB FOOT'
					},
					file: {
						id: 124,
						name: 'FRO-KOM-930E-STR-ROPS-01.1',
						size: '909581',
						active: 1,
						filepath: '/upload/image-1646154914210534ky.png',
						createdAt: '2022-03-01T17:18:04.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T17:18:04.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure ROPS 01.1',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'KOM-930E-ROPS-CAB FOOT',
					operator: null,
					createdAt: '2022-03-01T17:19:55.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T02:24:59.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E ROPS CAB FOOT',
					positionCode: {
						id: 140,
						code: 'KOM-930E-ROPS-CAB FOOT',
						description: 'Komatsu 930E ROPS CAB FOOT'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 124,
					createdAt: '2022-03-02 03:18:04',
					createdBy: 87,
					updatedAt: '2022-03-02 03:18:04',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ROPS-01.1',
					description: 'FRO-KOM 930E Structure ROPS 01.1',
					filepath: '/upload/image-1646154914210534ky.png',
					size: '909581',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6124,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102589',
				order: 8,
				images: '["/upload/image-16462268052516n632.krackon.png"]',
				instructions:
					'<p>Visually Inspect the ROPS structure as highlighted in the picture. Any defects to the ROPS MUST be Repaired immediately.</p><p><br /></p><p><a target="_blank" href="https://mykomatsu.komatsu/ ">https://mykomatsu.komatsu/ </a></p>',
				stepLimitData: {
					id: 662,
					data: {
						locationId: 'STR-ROPS-02',
						inspectionImage: '/upload/image-16462268052516n632.krackon.png',
						locationDescription: 'Structure Roll Over Protection 02'
					},
					file: {
						id: 114,
						name: 'FRO-KOM-930E-STR-ROPS-02',
						size: '247961',
						active: 1,
						filepath: '/upload/image-16456615922367488f.png',
						createdAt: '2022-02-24T00:27:55.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:55.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Roll Over Protection 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-ROPS-02',
					operator: null,
					createdAt: '2022-02-23T16:01:03.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T13:13:26.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Roll Over Protection 02',
					positionCode: {
						id: 131,
						code: 'STR-ROPS-02',
						description: 'Structure Roll Over Protection 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 114,
					createdAt: '2022-02-24 10:27:55',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:55',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ROPS-02',
					description: 'FRO-KOM 930E Structure Roll Over Protection 02',
					filepath: '/upload/image-16456615922367488f.png',
					size: '247961',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6125,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102584',
				order: 9,
				images: '["/upload/image-16461576383070ml6h.krackon.png"]',
				instructions: '<p><br /></p>',
				stepLimitData: {
					id: 623,
					data: {
						cameraInit: {
							width: 0.017453529008240275,
							height: 0.01275143671834906,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.80199536019777e-15,
								z: 78.4225356003234
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-16461576383070ml6h.krackon.png',
						locationDescription: 'Structure Frame 01'
					},
					file: {
						id: 120,
						name: 'FRO-KOM-930E-STR-FRM-01',
						size: '1110400',
						active: 1,
						filepath: '/upload/image-1646152842990q6snd.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-01',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:00:42.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 01',
					positionCode: {
						id: 105,
						code: 'STR-FRM-01',
						description: 'Structure Frame 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 120,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-01',
					description: 'FRO-KOM 930E Structure Frame 01',
					filepath: '/upload/image-1646152842990q6snd.png',
					size: '1110400',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6126,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102585',
				order: 10,
				images: '["/upload/image-1646157820865zvqa6.krackon.png"]',
				instructions: null,
				stepLimitData: {
					id: 624,
					data: {
						cameraInit: {
							width: 0.017454093498363805,
							height: 0.02346768873729588,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986874e-15,
								z: 57.29432506465481
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646157820865zvqa6.krackon.png',
						locationDescription: 'Structure Frame 02'
					},
					file: {
						id: 121,
						name: 'FRO-KOM-930E-STR-FRM-02',
						size: '805407',
						active: 1,
						filepath: '/upload/image-1646152848674cf82v.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-02',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:04:45.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 02',
					positionCode: {
						id: 106,
						code: 'STR-FRM-02',
						description: 'Structure Frame 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 121,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-02',
					description: 'FRO-KOM 930E Structure Frame 02',
					filepath: '/upload/image-1646152848674cf82v.png',
					size: '805407',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6127,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102586',
				order: 11,
				images: '["/upload/image-1646158282859ee691.krackon.png"]',
				instructions: '<p>Inspect the Top and Bottom Frame Rail</p>',
				stepLimitData: {
					id: 625,
					data: {
						cameraInit: {
							width: 0.01745447963478744,
							height: 0.028569992241084297,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986874e-15,
								z: 57.29432506465481
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-03',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646158282859ee691.krackon.png',
						locationDescription: 'Structure Frame 03'
					},
					file: {
						id: 122,
						name: 'FRO-KOM-930E-STR-FRM-03',
						size: '228224',
						active: 1,
						filepath: '/upload/image-1646152851148p95hw.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-03',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:11:24.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 03',
					positionCode: {
						id: 107,
						code: 'STR-FRM-03',
						description: 'Structure Frame 03'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 122,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-03',
					description: 'FRO-KOM 930E Structure Frame 03',
					filepath: '/upload/image-1646152851148p95hw.png',
					size: '228224',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6128,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102587',
				order: 12,
				images: '["/upload/image-1646158514290ko0rk.krackon.png"]',
				instructions: '<p>Inspect the Horse Collar Front and Rear</p>',
				stepLimitData: {
					id: 626,
					data: {
						cameraInit: {
							width: 0.01745500027899189,
							height: 0.03426748521029083,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986873e-15,
								z: 57.29432506465479
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-04',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646158514290ko0rk.krackon.png',
						locationDescription: 'Structure Frame 04'
					},
					file: {
						id: 123,
						name: 'FRO-KOM-930E-STR-FRM-04',
						size: '522355',
						active: 1,
						filepath: '/upload/image-16461528534693pvc3.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 04',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-04',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:15:16.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 04',
					positionCode: {
						id: 108,
						code: 'STR-FRM-04',
						description: 'Structure Frame 04'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 123,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-04',
					description: 'FRO-KOM 930E Structure Frame 04',
					filepath: '/upload/image-16461528534693pvc3.png',
					size: '522355',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6129,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102590',
				order: 13,
				images: '["/upload/image-1646160201329-qhajb.png"]',
				instructions: '<p>Visually Inspect the Left Hand Deck Support</p>',
				stepLimitData: {
					id: 709,
					data: [
						{
							rows: [
								{
									text: '1. Inspect LH Deck Mount at Location 1 '
								},
								{
									text: '2. Inspect LH Deck Mount at Location 2'
								},
								{
									text: '3. Inspect LH Deck Mount at Location 3'
								},
								{
									text: '4. Inspect LH Deck Mount at Location 4 '
								},
								{
									text: '5. Inspect LH Deck General Condition '
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 711,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:19.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:19.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 712,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:19.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:19.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 713,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 714,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 715,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-LH DECK',
					operator: null,
					createdAt: '2022-03-01T18:28:31.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Left Deck Support ',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6130,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102552',
				order: 14,
				images: '["/upload/image-1646160736032-v28y9.png"]',
				instructions:
					'<p>Visually inspect the Centre Deck Support, including modifications (Komatsu Parts &amp; Service News AA13034)</p>',
				stepLimitData: {
					id: 716,
					data: [
						{
							rows: [
								{
									text: '1. Inspect Center Deck Mount at Location 1'
								},
								{
									text: '2. Inspect Center Deck Mount at Location 2'
								},
								{
									text: '3. Inspect Center Deck Mount at Location 3'
								},
								{
									text: '4. Inspect Center Deck Mount at Location 4'
								},
								{
									text: '5. Inspect General Condition of the Center Deck '
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 717,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:26.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:26.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 718,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:26.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:26.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 719,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 720,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 721,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-CTR DECK',
					operator: null,
					createdAt: '2022-03-01T18:49:31.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Center Deck Support',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6131,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102591',
				order: 15,
				images: '["/upload/image-1646161002140-3w4og.png"]',
				instructions: '<p>Visually Inspect the Right Hand Deck Support</p>',
				stepLimitData: {
					id: 710,
					data: [
						{
							rows: [
								{
									text: '1. Inspect the Right Hand Deck at Location 1'
								},
								{
									text: '2. Inspect the Right Hand Deck at Location 2'
								},
								{
									text: '3. Inspect the Right Hand Deck at Location 3'
								},
								{
									text: '4. Inspect the Right Hand Deck at Location 4'
								},
								{
									text: '5. Inspect the General Condition of the Right Hand Deck'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 722,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 723,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 724,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 725,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 726,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-RH Deck',
					operator: null,
					createdAt: '2022-03-01T18:29:52.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Right Deck Support ',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6132,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102598',
				order: 16,
				images: '["/upload/image-1645661584631eyg2i.png"]',
				instructions: null,
				stepLimitData: {
					id: 727,
					data: [
						{
							rows: [
								{
									text: '1. Inspect Condition of  Lower Shear Deck Hand Rails'
								},
								{
									text: '2. Inspect Condition of Lower Shear Deck Ladder'
								},
								{
									text: '3. Inspect Overall Condition of Lower Shear Deck'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 728,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:03.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:03.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 729,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:03.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:03.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 730,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'LH'
						},
						{
							rows: [
								{
									id: 731,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 732,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 733,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:05.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:05.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'RH'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-LWR DECK',
					operator: null,
					createdAt: '2022-03-01T19:01:22.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Lower Deck Mount',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6133,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12936',
				uniqueJobOperationId: '',
				stepNumber: '102592',
				order: 17,
				images: '["/upload/image-1646162650007emod2.krackon.png"]',
				instructions:
					'<p>Inspect the following areas:</p><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Lower Front Corner Joints of the HV Cabinet </li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Front Bottom Mounting Plate for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Upper Front Corner Joints of the HV Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Inside Floor of the Cabinet in Front of the Capacitors for Cracks</li></ul>',
				stepLimitData: {
					id: 659,
					data: {
						locationId: 'STR-HV-CAB-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646162650007emod2.krackon.png',
						locationDescription: 'Structure HV Cabinet 01'
					},
					file: {
						id: 109,
						name: 'FRO-KOM-930E-STR-HV-CAB-01',
						size: '217321',
						active: 1,
						filepath: '/upload/image-1645661581851fu00m.png',
						createdAt: '2022-02-24T00:27:55.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:55.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure HV Cabintet 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-HV-CAB-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T19:33:26.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure HV Cabinet 01',
					positionCode: {
						id: 128,
						code: 'STR-HV-CAB-01',
						description: 'Structure HV Cabinet 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'HV Cabinet',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 109,
					createdAt: '2022-02-24 10:27:55',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:55',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-HV-CAB-01',
					description: 'FRO-KOM 930E Structure HV Cabintet 01',
					filepath: '/upload/image-1645661581851fu00m.png',
					size: '217321',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6134,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12936',
				uniqueJobOperationId: '',
				stepNumber: '102593',
				order: 18,
				images: '["/upload/image-1646163314302ubays.krackon.png"]',
				instructions:
					'<p>Inspect the following areas:</p><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Lower Bottom Outside Edge of the LEM Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the the Lower Left Outside Edge of the LEM Cabinet (Under 24V Cabinet) for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Top Left Outside Corner Joint of the LEM Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Inside Floor of the LEM Cabinet Near Near Back Mounting Bolts for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect Front Right Support Braces for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Rear Right Support Braces for Cracks</li></ul>',
				stepLimitData: {
					id: 734,
					data: {
						locationId: 'STR-HV-CAB-03',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646163314302ubays.krackon.png',
						locationDescription: 'Structure HV Cabinet 03'
					},
					file: {
						id: 126,
						name: 'FRO-KOM-930E-STR-HV-CAB-03',
						size: '134615',
						active: 1,
						filepath: '/upload/image-1646161979009ric5l.png',
						createdAt: '2022-03-01T19:21:26.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T19:31:39.000Z',
						updatedBy: 87,
						description: 'FRO KOM 930E Structure HV Cabinet 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'STR-HV-CAB-03',
					operator: null,
					createdAt: '2022-03-01T19:32:09.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T19:35:15.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure HV Cabinet 03',
					positionCode: {
						id: 141,
						code: 'STR-HV-CAB-03',
						description: 'Structure HV Cabinet 03'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'HV Cabinet',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 126,
					createdAt: '2022-03-02 05:21:26',
					createdBy: 87,
					updatedAt: '2022-03-02 05:31:39',
					updatedBy: 87,
					name: 'FRO-KOM-930E-STR-HV-CAB-03',
					description: 'FRO KOM 930E Structure HV Cabinet 03',
					filepath: '/upload/image-1646161979009ric5l.png',
					size: '134615',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6135,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12937',
				uniqueJobOperationId: '',
				stepNumber: '102595',
				order: 19,
				images: '["/upload/image-1646257407731s2qv1.png"]',
				instructions: '<p><br /></p>',
				stepLimitData: {
					id: 639,
					data: {
						locationId: 'STR-GRID-BOX-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257407731s2qv1.png',
						locationDescription: 'Structure Grid Box 02'
					},
					file: {
						id: 131,
						name: 'FRO-KOM-930E-STR-GRID-BOX-01.png',
						size: '2716630',
						active: 1,
						filepath: '/upload/image-1646257407731s2qv1.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Grid Box 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-GRID-BOX-02',
					operator: null,
					createdAt: '2022-02-23T16:01:01.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:53:41.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Grid Box 02',
					positionCode: {
						id: 112,
						code: 'STR-GRID-BOX-02',
						description: 'Structure Grid Box 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 676,
						data: [
							{
								criteria: 'between',
								lowerLimit: 0,
								upperLimit: 2
							},
							{
								criteria: 'between',
								lowerLimit: 2,
								upperLimit: 4
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 4
							}
						],
						name: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						operator: null,
						createdAt: '2022-02-24T18:40:04.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:49:25.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Grid Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 131,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-GRID-BOX-01.png',
					description: 'Komatsu 930E Structure Grid Box 01',
					filepath: '/upload/image-1646257407731s2qv1.png',
					size: '2716630',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6136,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102556',
				order: 20,
				images: '["/upload/image-1646258258172-v3qx0.png"]',
				instructions: '<p>Visually Inspect the Wheel Chocks and Holders</p>',
				stepLimitData: {
					id: 743,
					data: {},
					file: null,
					name: 'FRO-KOM-STR-WHEELCHOCK',
					operator: null,
					createdAt: '2022-03-01T21:14:13.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E Wheel Chock',
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6137,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102798',
				order: 21,
				images: '["/upload/image-1646257420072w8cmy.png"]',
				instructions: '<p>Inspect the LH and RH Steering Cylinder Mounts</p>',
				stepLimitData: {
					id: 652,
					data: {
						locationId: 'STR-STEER-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257420072w8cmy.png',
						locationDescription: 'Structure Steering Left and Right Hand 01'
					},
					file: {
						id: 133,
						name: 'FRO-KOM-930E-STR-STEER-01.png',
						size: '113095',
						active: 1,
						filepath: '/upload/image-1646257420072w8cmy.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Steering 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'STR-STEER-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T22:02:33.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure Steering Left and Right Hand 01',
					positionCode: {
						id: 121,
						code: 'STR-STEER-01',
						description: 'Structure Steering Left and Right Hand 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 133,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-STEER-01.png',
					description: 'Komatsu 930E Structure Steering 01',
					filepath: '/upload/image-1646257420072w8cmy.png',
					size: '113095',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6138,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102555',
				order: 22,
				images: '["/upload/image-1646229115316gj2g7.png"]',
				instructions:
					'<p>Inspect the Front-End and Back-End Engine Subframe Cross-Members and Mounts - Typical Left and Right Hand</p>',
				stepLimitData: {
					id: 648,
					data: {
						locationId: 'STR-ENG-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646229115316gj2g7.png',
						locationDescription: 'Structure Engine 01'
					},
					file: {
						id: 130,
						name: 'FRO-KOM-930E-STR-ENG-01',
						size: '51385',
						active: 1,
						filepath: '/upload/image-1646229115316gj2g7.png',
						createdAt: '2022-03-02T13:53:41.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T13:53:41.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Engine Mount',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-ENG-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T13:55:44.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Engine 01',
					positionCode: {
						id: 117,
						code: 'STR-ENG-01',
						description: 'Structure Engine 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 130,
					createdAt: '2022-03-02 23:53:41',
					createdBy: 87,
					updatedAt: '2022-03-02 23:53:41',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ENG-01',
					description: 'Komatsu 930E Structure Engine Mount',
					filepath: '/upload/image-1646229115316gj2g7.png',
					size: '51385',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6139,
				createdAt: '2022-04-27 11:29:17',
				createdBy: 106,
				updatedAt: '2022-04-27 11:29:17',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102570',
				order: 23,
				images: '["/upload/image-1646172634240-6od7x.png"]',
				instructions:
					'<p>Inspect Handrails, Ladders, Ladder Mounts on the LH and RH Decks, Center Deck, LH and RH Platforms, Engine Access and Hydraulic Tank Access</p>',
				stepLimitData: {
					id: 744,
					data: [
						{
							rows: [
								{
									text: 'Location 1: Inspect Ladder Mounts, Ladder Hand Rail and Steps for defects'
								},
								{
									text: 'Location 2: Inspect RH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 3: Inspect RH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 4: Inspect Center Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 5: Inspect LH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 6: Inspect LH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Inspect Engine Access LH and RH including Platforms for Defects'
								},
								{
									text: 'Inspect Hydraulic Tank Access for Defects'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 745,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 746,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 747,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 748,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 749,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 750,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 751,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 752,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-RAILS',
					operator: null,
					createdAt: '2022-03-01T22:11:42.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E Structure Hand Rails and Ladder',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 5386,
			createdAt: '2022-02-23 04:17:37',
			createdBy: 87,
			updatedAt: '2022-02-25 02:39:33',
			updatedBy: 87,
			lastBuiltAt: null,
			notes: '',
			componentCode: '750HR',
			context: 'System Task',
			counter: '0',
			name: '750 Hours Welder  Inspection',
			position: 'WELDER',
			frequency: 750,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: '',
			functionalFailure: '',
			documentGrouping: {
				skillId: 7,
				frequency: 750,
				unitOfMeasureId: 1,
				customDocumentGrouping: ''
			},
			externalId: null
		},
		customer: {
			id: 26,
			createdAt: '2021-05-14 07:03:45',
			createdBy: 26,
			updatedAt: '2023-06-01 16:17:22',
			updatedBy: 108,
			code: 'FRO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: 'Shane Mackay',
			customerSite: 'Fording River',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: 'shane.mackay@teck.com',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1620939824124oazte.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 1,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 1,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 203,
			createdAt: '2021-06-09 13:53:27',
			createdBy: 26,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 108,
			assetName: 'Komatsu 930E-4 Haul Truck',
			serialNumber: 'A30819',
			assetFloc: 'HT521',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: 'FRO MAINT HD SHOP',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-06-09 10:00:00',
			startUtilisation: 0,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 26,
				createdAt: '2021-05-14 07:03:45',
				createdBy: 26,
				updatedAt: '2023-06-01 16:17:22',
				updatedBy: 108,
				code: 'FRO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: 'Shane Mackay',
				customerSite: 'Fording River',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: 'shane.mackay@teck.com',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1620939824124oazte.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 1,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 1,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 94,
				createdAt: '2021-05-19 16:55:04',
				createdBy: 26,
				updatedAt: '2022-12-01 15:08:15',
				updatedBy: 95,
				class: 'Haul Truck',
				modelNumber: '930E-4',
				serialNumberPrefix: '',
				isTemplate: 1,
				image: '/upload/image-1669932493579jfsqb.JPG',
				life: 0,
				utilisation: 0,
				documentGrouping: ['skill'],
				taskGrouping: 'groupingCategory',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 19,
					createdAt: '2021-05-19 16:52:26',
					createdBy: 26,
					updatedAt: '2021-05-19 16:52:26',
					updatedBy: null,
					name: 'Komatsu'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 95,
				createdAt: '2022-02-01 05:03:18',
				createdBy: 82,
				updatedAt: '2022-03-18 01:58:17',
				updatedBy: 60,
				firstName: 'William',
				lastName: 'Lopez',
				active: 1,
				email: 'william.lopez.test@teck.com',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 74,
		progress: {
			percent: 0,
			total: '0 / 23'
		}
	},
	{
		id: 196,
		workOrderNumber: 'LL-Test-002',
		workOrderDescription: '750 Hours Welder  Inspection',
		createdAt: '2022-04-29 05:11:02',
		createdBy: 105,
		updatedAt: '2022-04-29 05:11:02',
		updatedBy: null,
		scheduledAt: '2022-04-29 10:00:00',
		googleMapStepDateTime: null,
		status: 'In Progress',
		startedAt: null,
		completedAt: null,
		workOrderComponentCode: '750HR',
		workOrderHazards: [],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [
			{
				id: 5845,
				createdAt: '2022-03-04T04:19:32.000Z',
				createdBy: 87,
				procedure: {
					id: 74,
					createdAt: '2022-03-04T04:18:52.000Z',
					createdBy: 87,
					updatedAt: '2022-03-04T04:18:52.000Z',
					updatedBy: null,
					description: '930E TEST UPLOAD DOCUMENT',
					procedureUrl: '/upload/file-1646367512102cowrg.docx',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-08T19:23:30.000Z',
						createdBy: null,
						updatedAt: '2019-03-30T02:38:40.000Z',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04T04:19:32.000Z',
				updatedBy: null
			},
			{
				id: 5846,
				createdAt: '2022-03-04T04:20:28.000Z',
				createdBy: 87,
				procedure: {
					id: 73,
					createdAt: '2021-09-14T21:02:03.000Z',
					createdBy: 54,
					updatedAt: '2021-09-14T21:02:03.000Z',
					updatedBy: null,
					description: 'CAT 793F Off Highway Truck - HEI (LCO)',
					procedureUrl: '/upload/file-16316533127660dzo5.pdf',
					procedureType: {
						id: 2,
						type: 'Procedure',
						createdAt: '2018-01-08T19:23:30.000Z',
						createdBy: null,
						updatedAt: '2019-03-30T02:38:40.000Z',
						updatedBy: null
					}
				},
				updatedAt: '2022-03-04T04:20:28.000Z',
				updatedBy: null
			}
		],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: '930E-4',
		serialNumberPrefix: '',
		modelClass: 'Haul Truck',
		taskName: '750 Hours Welder  Inspection',
		taskType: 'Inspect',
		approvedDate: null,
		actionedBy: null,
		duration: '6',
		aiEstimatedDuration: null,
		stepLimitHistory: {},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 6184,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-06-28 11:25:33',
				updatedBy: {
					id: 105,
					firstName: 'Liezel',
					lastName: 'Lorico'
				},
				completedAt: null,
				status: 'In Progress',
				data: {},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102548',
				order: 1,
				images: '[""]',
				instructions: '<p>Inspect Safety Lug on the Dump Body.</p>',
				stepLimitData: {
					id: 686,
					data: {
						isRendered: true,
						limitValues: {
							pass: true,
							isLimitComplete: true
						}
					},
					file: null,
					name: 'Box Safety Lug Inspection',
					operator: null,
					createdAt: '2022-03-01T14:13:28.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Box Safety Lug Inspection',
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Dump Body',
				advices: [],
				completedBy: 105,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6185,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-06-28 11:25:33',
				updatedBy: {
					id: 105,
					firstName: 'Liezel',
					lastName: 'Lorico'
				},
				completedAt: '2022-06-28 07:54:26',
				status: 'Complete',
				data: {
					completeLocation: {
						lat: -1,
						long: -1
					}
				},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102580',
				order: 2,
				images: '["/upload/image-1646146381297-cer4m.png"]',
				instructions: '<p>Inspect LH and RH Side of Dump Body</p>\n\n',
				stepLimitData: {
					id: 690,
					data: [
						{
							rows: [
								{
									text: 'Visually Inspect Equipment ID  '
								},
								{
									text: 'Record Box ID'
								},
								{
									text: 'Inspect Lifting Lugs'
								},
								{
									text: 'Inspect Rock Ejector Brackets'
								}
							],
							columnType: 'item',
							columnHeader: 'Task'
						},
						{
							rows: [
								{
									id: 691,
									data: {
										isRendered: true,
										limitValues: {
											pass: true,
											isLimitComplete: true
										}
									},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 692,
									data: {
										isRendered: true,
										limitValues: {
											text: null,
											isCompleted: false
										}
									},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 15,
										data: null,
										name: 'Textbox',
										createdAt: '2020-12-04T10:22:14.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:14.000Z',
										updatedBy: null,
										description: 'textbox',
										orderNumber: 11,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 694,
									data: {
										isRendered: true,
										limitValues: {
											pass: true,
											isLimitComplete: true
										}
									},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 695,
									data: {
										isRendered: true,
										limitValues: {
											pass: true,
											isLimitComplete: true
										}
									},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'LH'
						},
						{
							rows: [
								{
									id: 689,
									data: {
										isRendered: true,
										limitValues: {
											pass: false,
											isLimitComplete: true
										}
									},
									name: 'New Limit 2022/03/02 00:39am',
									operator: null,
									createdAt: '2022-03-01T14:39:44.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:39:44.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 693,
									data: {
										isRendered: true,
										limitValues: {
											text: null,
											isCompleted: false
										}
									},
									name: 'New Limit 2022/03/02 00:44am',
									operator: null,
									createdAt: '2022-03-01T14:44:38.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:44:38.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 15,
										data: null,
										name: 'Textbox',
										createdAt: '2020-12-04T10:22:14.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:14.000Z',
										updatedBy: null,
										description: 'textbox',
										orderNumber: 11,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 696,
									data: {
										isRendered: true,
										limitValues: {
											pass: true,
											isLimitComplete: true
										}
									},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 697,
									data: {
										isRendered: true,
										limitValues: {
											pass: true,
											isLimitComplete: true
										}
									},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 00:47am',
									operator: null,
									createdAt: '2022-03-01T14:47:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T14:47:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'RH'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-BOX-06',
					operator: null,
					createdAt: '2022-03-01T14:39:44.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Dump Body 06',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Dump Body',
				advices: [],
				completedBy: 105,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: [
					{
						id: 651,
						name: 'Crack found on the dump body',
						defectNumber: '',
						longDescription: 'Found a crack',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [],
						reportedDate: '2022-06-28 11:25:33',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-06-28 11:25:33',
						updatedAt: '2022-06-28 11:25:33',
						updatedBy: null,
						createdBy: {
							id: 105,
							createdAt: '2022-04-21 06:25:23',
							createdBy: 60,
							updatedAt: '2022-04-21 06:29:04',
							updatedBy: 60,
							firstName: 'Liezel',
							lastName: 'Lorico',
							active: 1,
							email: 'liezel.lorico.test@teck.com',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 2,
							name: 'Failure',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 1,
							name: 'Repair',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 2,
							name: 'P2 - High (7 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6185,
							createdAt: '2022-04-29 05:11:02',
							createdBy: 105,
							updatedAt: '2022-06-28 11:25:33',
							updatedBy: 105,
							completedAt: '2022-06-28 07:54:26',
							status: 'Complete',
							data: '{"completeLocation":{"lat":-1,"long":-1}}',
							jobOperationNumber: '12931',
							uniqueJobOperationId: '',
							stepNumber: '102580',
							order: 2,
							images: '["/upload/image-1646146381297-cer4m.png"]',
							instructions: '<p>Inspect LH and RH Side of Dump Body</p>\n\n',
							stepLimitData: {
								id: 690,
								data: [
									{
										rows: [
											{
												text: 'Visually Inspect Equipment ID  '
											},
											{
												text: 'Record Box ID'
											},
											{
												text: 'Inspect Lifting Lugs'
											},
											{
												text: 'Inspect Rock Ejector Brackets'
											}
										],
										columnType: 'item',
										columnHeader: 'Task'
									},
									{
										rows: [
											{
												id: 691,
												data: {
													isRendered: true,
													limitValues: {
														pass: true,
														isLimitComplete: true
													}
												},
												name: 'New Limit 2022/03/02 00:44am',
												operator: null,
												createdAt: '2022-03-01T14:44:38.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:44:38.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 692,
												data: {
													isRendered: true,
													limitValues: {
														text: null,
														isCompleted: false
													}
												},
												name: 'New Limit 2022/03/02 00:44am',
												operator: null,
												createdAt: '2022-03-01T14:44:38.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:44:38.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 15,
													data: null,
													name: 'Textbox',
													createdAt: '2020-12-04T10:22:14.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:14.000Z',
													updatedBy: null,
													description: 'textbox',
													orderNumber: 11,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 694,
												data: {
													isRendered: true,
													limitValues: {
														pass: true,
														isLimitComplete: true
													}
												},
												meta: {
													usedIn: {
														winCount: '0',
														stepCount: '0',
														workOrderCount: '0',
														childLimitCount: '0',
														parentLimitCount: '0',
														workOrderStepCount: '0'
													}
												},
												name: 'New Limit 2022/03/02 00:47am',
												operator: null,
												createdAt: '2022-03-01T14:47:04.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:47:04.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 695,
												data: {
													isRendered: true,
													limitValues: {
														pass: true,
														isLimitComplete: true
													}
												},
												meta: {
													usedIn: {
														winCount: '0',
														stepCount: '0',
														workOrderCount: '0',
														childLimitCount: '0',
														parentLimitCount: '0',
														workOrderStepCount: '0'
													}
												},
												name: 'New Limit 2022/03/02 00:47am',
												operator: null,
												createdAt: '2022-03-01T14:47:04.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:47:04.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											}
										],
										columnType: 'recorded',
										columnHeader: 'LH'
									},
									{
										rows: [
											{
												id: 689,
												data: {
													isRendered: true,
													limitValues: {
														pass: false,
														isLimitComplete: true
													}
												},
												name: 'New Limit 2022/03/02 00:39am',
												operator: null,
												createdAt: '2022-03-01T14:39:44.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:39:44.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 693,
												data: {
													isRendered: true,
													limitValues: {
														text: null,
														isCompleted: false
													}
												},
												name: 'New Limit 2022/03/02 00:44am',
												operator: null,
												createdAt: '2022-03-01T14:44:38.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:44:38.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 15,
													data: null,
													name: 'Textbox',
													createdAt: '2020-12-04T10:22:14.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:14.000Z',
													updatedBy: null,
													description: 'textbox',
													orderNumber: 11,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 696,
												data: {
													isRendered: true,
													limitValues: {
														pass: true,
														isLimitComplete: true
													}
												},
												meta: {
													usedIn: {
														winCount: '0',
														stepCount: '0',
														workOrderCount: '0',
														childLimitCount: '0',
														parentLimitCount: '0',
														workOrderStepCount: '0'
													}
												},
												name: 'New Limit 2022/03/02 00:47am',
												operator: null,
												createdAt: '2022-03-01T14:47:04.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:47:04.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											},
											{
												id: 697,
												data: {
													isRendered: true,
													limitValues: {
														pass: true,
														isLimitComplete: true
													}
												},
												meta: {
													usedIn: {
														winCount: '0',
														stepCount: '0',
														workOrderCount: '0',
														childLimitCount: '0',
														parentLimitCount: '0',
														workOrderStepCount: '0'
													}
												},
												name: 'New Limit 2022/03/02 00:47am',
												operator: null,
												createdAt: '2022-03-01T14:47:04.000Z',
												createdBy: 87,
												isDynamic: 0,
												updatedAt: '2022-03-01T14:47:04.000Z',
												updatedBy: null,
												isRequired: 0,
												lowerLimit: null,
												upperLimit: null,
												description: '',
												isUtilisation: 0,
												limitCategory: {
													id: 9,
													data: null,
													name: 'Pass / Fail',
													createdAt: '2020-12-04T10:22:11.000Z',
													createdBy: null,
													updatedAt: '2020-12-04T10:22:11.000Z',
													updatedBy: null,
													description: 'passfail',
													orderNumber: 4,
													isTableLimit: 1
												},
												isTableTemplate: 0
											}
										],
										columnType: 'recorded',
										columnHeader: 'RH'
									}
								],
								file: null,
								name: 'FRO-KOM-930E-STR-BOX-06',
								operator: null,
								createdAt: '2022-03-01T14:39:44.000Z',
								createdBy: 87,
								isDynamic: 0,
								updatedAt: '2022-04-06T23:48:05.000Z',
								updatedBy: 26,
								isRequired: 0,
								lowerLimit: null,
								upperLimit: null,
								description: 'FRO-KOM 930E Structure Dump Body 06',
								isUtilisation: 0,
								limitCategory: {
									id: 2,
									data: null,
									name: 'Table',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'table',
									orderNumber: 8,
									isTableLimit: 0
								},
								isTableTemplate: 0,
								stepLimitCondition: null
							},
							title: 'Dump Body',
							advices: [],
							completedBy: 105,
							isNested: 0
						},
						crack: null
					}
				]
			},
			{
				id: 6186,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-06-28 11:25:33',
				updatedBy: {
					id: 105,
					firstName: 'Liezel',
					lastName: 'Lorico'
				},
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12931',
				uniqueJobOperationId: '',
				stepNumber: '102583',
				order: 3,
				images: '["/upload/image-1646256926059zxao6.krackon.png"]',
				instructions:
					'<p><strong>Inspect and Repair Any Cracks found in the following areas</strong>:</p>\n<p><br /></p>\n<p><strong><u>Location 1:</u></strong> Visually Inspect the Canopy, Canopy Braces and Box Side Extensions (If Box is raised, a hole check is sufficient)</p>\n<p><br /></p>\n<p><strong><u>Location 2:</u></strong> Visually Inspect the Hoist Cylinder  Mount Area</p>\n<p><br /></p>\n<p><strong><u>Location 3:</u></strong> Visually Inspect the Box Pivot Ears and Area</p>\n<p><br /></p>\n<p><strong><u>Location 4:</u></strong> Visually Inspect the Box Rails and Bolster to Main Rail Junctions</p>\n<p><br /></p>\n<p><strong><u>Location 5:</u></strong> Visually Inspect the Safety Sling Lug </p>\n<p><br /></p>\n<p><strong><u>Location 6:</u></strong> Visually Inspect the Box Dove Tail Area</p>\n<p><br /></p>\n<p><strong><u>Location 7:</u></strong> Visually Inspect the Bolsters</p>\n<p><br /></p>\n<p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas</p>\n',
				stepLimitData: {
					id: 611,
					data: {
						locationId: 'STR-BOX-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646256926059zxao6.krackon.png',
						locationDescription: 'Structure Dump Body 01'
					},
					file: {
						id: 100,
						name: 'FRO-KOM-930E-STR-BOX-03',
						size: '628068',
						active: 1,
						filepath: '/upload/image-1645661607780w58vf.png',
						createdAt: '2022-02-24T00:27:54.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:54.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Dump Body 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-BOX-01',
					operator: null,
					createdAt: '2022-02-22T18:36:48.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:35:28.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Dump Body 01',
					positionCode: {
						id: 94,
						code: 'STR-BOX-01',
						description: 'Structure Dump Body 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 676,
						data: {
							listOptions: [
								{
									criteria: 'between',
									lowerLimit: 0,
									upperLimit: 2
								},
								{
									criteria: 'between',
									lowerLimit: 2,
									upperLimit: 4
								},
								{
									criteria: 'greaterthan',
									lowerLimit: 4
								}
							]
						},
						name: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						operator: null,
						createdAt: '2022-02-24T18:40:04.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:49:25.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Dump Body',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 100,
					createdAt: '2022-02-24 10:27:54',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:54',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-BOX-03',
					description: 'FRO-KOM 930E Structure Dump Body 03',
					filepath: '/upload/image-1645661607780w58vf.png',
					size: '628068',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [
					{
						id: 652,
						name: 'Inspect and Repair Any Cracks found in t...',
						defectNumber: '',
						longDescription: '',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-16563795337424j43o.jpg',
								text: 'Crack',
								isCrack: 1,
								geoLocation: {
									lat: -1,
									long: -1
								}
							}
						],
						reportedDate: '2022-06-28 11:25:33',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-06-28 11:25:33',
						updatedAt: '2022-06-28 11:25:33',
						updatedBy: null,
						createdBy: {
							id: 105,
							createdAt: '2022-04-21 06:25:23',
							createdBy: 60,
							updatedAt: '2022-04-21 06:29:04',
							updatedBy: 60,
							firstName: 'Liezel',
							lastName: 'Lorico',
							active: 1,
							email: 'liezel.lorico.test@teck.com',
							mobilePhone: '',
							workPhone: '',
							companyName: null,
							signatureImage: null,
							accountType: null,
							isVisible: 1,
							isTwoFaEnabled: 0
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						stepRedPen: null,
						workOrderStep: {
							id: 6186,
							createdAt: '2022-04-29 05:11:02',
							createdBy: 105,
							updatedAt: '2022-06-28 11:25:33',
							updatedBy: 105,
							completedAt: null,
							status: 'Not Started',
							data: '{}',
							jobOperationNumber: '12931',
							uniqueJobOperationId: '',
							stepNumber: '102583',
							order: 3,
							images: '["/upload/image-1646256926059zxao6.krackon.png"]',
							instructions:
								'<p><strong>Inspect and Repair Any Cracks found in the following areas</strong>:</p>\n<p><br /></p>\n<p><strong><u>Location 1:</u></strong> Visually Inspect the Canopy, Canopy Braces and Box Side Extensions (If Box is raised, a hole check is sufficient)</p>\n<p><br /></p>\n<p><strong><u>Location 2:</u></strong> Visually Inspect the Hoist Cylinder  Mount Area</p>\n<p><br /></p>\n<p><strong><u>Location 3:</u></strong> Visually Inspect the Box Pivot Ears and Area</p>\n<p><br /></p>\n<p><strong><u>Location 4:</u></strong> Visually Inspect the Box Rails and Bolster to Main Rail Junctions</p>\n<p><br /></p>\n<p><strong><u>Location 5:</u></strong> Visually Inspect the Safety Sling Lug </p>\n<p><br /></p>\n<p><strong><u>Location 6:</u></strong> Visually Inspect the Box Dove Tail Area</p>\n<p><br /></p>\n<p><strong><u>Location 7:</u></strong> Visually Inspect the Bolsters</p>\n<p><br /></p>\n<p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas</p>\n',
							stepLimitData: {
								id: 611,
								data: {
									locationId: 'STR-BOX-01',
									numberOfPhotos: 0,
									inspectionImage: '/upload/image-1646256926059zxao6.krackon.png',
									locationDescription: 'Structure Dump Body 01'
								},
								file: {
									id: 100,
									name: 'FRO-KOM-930E-STR-BOX-03',
									size: '628068',
									active: 1,
									filepath: '/upload/image-1645661607780w58vf.png',
									createdAt: '2022-02-24T00:27:54.000Z',
									createdBy: 87,
									extension: 'png',
									updatedAt: '2022-02-24T00:27:54.000Z',
									updatedBy: null,
									description: 'FRO-KOM 930E Structure Dump Body 03',
									fileCategory: {
										id: 2,
										name: 'Structural Inspection 2D Model',
										createdAt: '2021-03-25T08:07:03.000Z',
										createdBy: null,
										updatedAt: '2021-03-25T08:07:03.000Z',
										updatedBy: null
									}
								},
								name: 'FRO-KOM-930E-STR-BOX-01',
								operator: null,
								createdAt: '2022-02-22T18:36:48.000Z',
								createdBy: 87,
								isDynamic: 0,
								updatedAt: '2022-03-02T21:35:28.000Z',
								updatedBy: 87,
								isRequired: 0,
								lowerLimit: null,
								upperLimit: null,
								description: 'FRO-KOM 930E Structure Dump Body 01',
								positionCode: {
									id: 94,
									code: 'STR-BOX-01',
									description: 'Structure Dump Body 01'
								},
								isUtilisation: 0,
								limitCategory: {
									id: 3,
									data: null,
									name: 'Structural Inspection',
									createdAt: '2020-12-04T10:22:11.000Z',
									createdBy: null,
									updatedAt: '2020-12-04T10:22:11.000Z',
									updatedBy: null,
									description: 'structural-inspection',
									orderNumber: 9,
									isTableLimit: 0
								},
								isTableTemplate: 0,
								stepLimitCondition: {
									id: 676,
									data: {
										listOptions: [
											{
												criteria: 'between',
												lowerLimit: 0,
												upperLimit: 2
											},
											{
												criteria: 'between',
												lowerLimit: 2,
												upperLimit: 4
											},
											{
												criteria: 'greaterthan',
												lowerLimit: 4
											}
										]
									},
									name: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
									operator: null,
									createdAt: '2022-02-24T18:40:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-02-24T18:49:25.000Z',
									updatedBy: 87,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
									isUtilisation: 0,
									limitCategory: {
										id: 38,
										data: [
											{
												colour: '4caf52',
												isDefect: false,
												question: 'Normal - Create Work Order if needed for Future Repair'
											},
											{
												colour: 'ffeb3b',
												isDefect: false,
												question: 'Caution - Contact Supervisor to discuss Repair Plan'
											},
											{
												colour: 'f44336',
												isDefect: false,
												question: 'Severe - Repair Immediately (Contact Supervisor)'
											}
										],
										name: 'FRO Crack Severity Criteria',
										createdAt: '2022-02-23T22:20:55.000Z',
										createdBy: 87,
										updatedAt: '2022-02-24T18:45:19.000Z',
										updatedBy: 87,
										description: 'conditionlist',
										orderNumber: 7,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							},
							title: 'Dump Body',
							advices: [],
							completedBy: null,
							isNested: 0
						},
						crack: {
							id: 439,
							name: 'Inspect and Repair Any Cracks found in t...',
							sequenceNumber: 1,
							notes: '',
							length: 2,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[0.22202084647797443, 0.36509490856225774, 0.35]],
							images: [
								{
									data: '/upload/krackOn-image-1656379533751991oe.jpg',
									text: 'Crack',
									isCrack: 1,
									geoLocation: {
										lat: -1,
										long: -1
									}
								}
							],
							dateRecorded: '2022-06-28 07:54:31',
							severity: {
								text: 'Caution - Contact Supervisor to discuss Repair Plan',
								colour: '#ffeb3b'
							},
							createdAt: '2022-06-28 11:25:33',
							createdBy: 105,
							customerNote: null,
							updatedAt: '2022-06-28 11:25:33',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						}
					}
				],
				previousDefects: [
					{
						id: 654,
						name: 'Inspect and Repair Any Cracks found in t...',
						defectNumber: '',
						longDescription: 'Repair ',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-16572262895190p1d6.jpg',
								text: 'Crack',
								isCrack: 1,
								geoLocation: {
									lat: -1,
									long: -1
								}
							},
							{
								data: '/upload/krackOn-image-1657226290004us1zi.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: '/upload/krackOn-image-original-1657226290012v3bvt.jpg'
							}
						],
						reportedDate: '2022-07-08 06:38:10',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-07-08 06:38:10',
						updatedAt: '2022-07-08 06:38:10',
						updatedBy: null,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 440,
							name: 'Inspect and Repair Any Cracks found in t...',
							sequenceNumber: 2,
							notes: 'Repair ',
							length: 5,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[0.31505091640760635, -0.3424985341249357, 0.35]],
							images: [
								{
									data: '/upload/krackOn-image-1657226290016ank9o.jpg',
									text: 'Crack',
									isCrack: 1,
									geoLocation: {
										lat: -1,
										long: -1
									}
								},
								{
									data: '/upload/krackOn-image-1657226290511oc9n8.jpg',
									text: 'Photo 1',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: '/upload/krackOn-image-original-1657226290518n1yp1.jpg'
								}
							],
							dateRecorded: '2022-07-08 06:37:14',
							severity: {
								text: 'Severe - Repair Immediately (Contact Supervisor)',
								colour: '#f44336'
							},
							createdAt: '2022-07-08 06:38:10',
							createdBy: 97,
							customerNote: null,
							updatedAt: '2022-07-08 06:38:10',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'structural-inspection'
								}
							}
						}
					}
				]
			},
			{
				id: 6187,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102576',
				order: 4,
				images: '["/upload/image-164607976540072bft.krackon.png"]',
				instructions:
					'<p><strong>Repair Any Cracks found in the following areas</strong>: </p><p><br /></p><p><strong><u>Location 1:</u></strong> Inspect the Lower Suspension Mount Casting to Axle Box Barrel</p><p><br /></p><p><strong><u>Location 2:</u></strong> Inspect the Access Hole Reinforcement Plate to Axle Box Barrel</p><p><br /></p><p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas </p>',
				stepLimitData: {
					id: 618,
					data: {
						locationId: 'STR-AXLBOX-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-164607976540072bft.krackon.png',
						locationDescription: 'Structure Axle Box 02'
					},
					file: {
						id: 98,
						name: 'FRO-KOM-930E-STR-AXLBOX-02',
						size: '165500',
						active: 1,
						filepath: '/upload/image-1645661595926r3ulu.png',
						createdAt: '2022-02-24T00:27:54.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:54.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Axle Box 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-AXLBOX-02',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-02-28T20:22:46.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Axle Box 02',
					positionCode: {
						id: 100,
						code: 'STR-AXLBOX-02',
						description: 'Structure Axle Box 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 98,
					createdAt: '2022-02-24 10:27:54',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:54',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-AXLBOX-02',
					description: 'FRO-KOM 930E Structure Axle Box 02',
					filepath: '/upload/image-1645661595926r3ulu.png',
					size: '165500',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: [
					{
						id: 655,
						name: 'Repair Any Cracks found in the following...',
						defectNumber: '',
						longDescription: 'Repair ',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-16572263430148zx3m.jpg',
								text: 'Crack',
								isCrack: 1,
								geoLocation: {
									lat: -1,
									long: -1
								}
							},
							{
								data: '/upload/krackOn-image-16572263435590eviz.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							},
							{
								data: '/upload/krackOn-image-16572263435660lhc7.jpg',
								text: 'Photo 2',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							},
							{
								data: '/upload/krackOn-image-1657226343570dwe89.jpg',
								text: 'Photo 3',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							}
						],
						reportedDate: '2022-07-08 06:39:04',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-07-08 06:39:04',
						updatedAt: '2022-07-08 06:39:04',
						updatedBy: null,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 441,
							name: 'Repair Any Cracks found in the following...',
							sequenceNumber: 3,
							notes: 'Repair ',
							length: 6,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[0.017692487107047714, 0.05042358825508606, 0.35]],
							images: [
								{
									data: '/upload/krackOn-image-1657226343576vjjd8.jpg',
									text: 'Crack',
									isCrack: 1,
									geoLocation: {
										lat: -1,
										long: -1
									}
								},
								{
									data: '/upload/krackOn-image-1657226344193nxh3g.jpg',
									text: 'Photo 1',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: null
								},
								{
									data: '/upload/krackOn-image-1657226344199sb19j.jpg',
									text: 'Photo 2',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: null
								},
								{
									data: '/upload/krackOn-image-16572263442039yrdz.jpg',
									text: 'Photo 3',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: null
								}
							],
							dateRecorded: '2022-07-08 06:38:24',
							severity: {
								text: 'Severe - Repair Immediately (Contact Supervisor)',
								colour: '#f44336'
							},
							createdAt: '2022-07-08 06:39:04',
							createdBy: 97,
							customerNote: null,
							updatedAt: '2022-07-08 06:39:04',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'structural-inspection'
								}
							}
						}
					}
				]
			},
			{
				id: 6188,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102577',
				order: 5,
				images: '["/upload/image-16460808323513ljlg.krackon.png"]',
				instructions:
					'<p><strong>Repair Any Cracks found in the following areas</strong>: </p><p><br /></p><p><strong><u>Location 1:</u></strong> Inspect D-Ring to Axle Box Barrel</p><p><br /></p><p><strong><u>Location 2:</u></strong> Inspect Axle Box Barrel where Wheel Motor Mounting Tube is attached to the Center Structure</p><p><br /></p><p><strong><u>Location 3:</u></strong> Inspect the Center Section of the Axle Box</p><p><br /></p><p><strong><u>General:</u></strong> Inspect for any other cracks found outside of the highlighted areas</p>',
				stepLimitData: {
					id: 617,
					data: {
						cameraInit: {
							width: 0.017453625014638013,
							height: 0.015119854386791675,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.0497969352706655e-15,
								z: 66.13820308174229
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-AXLBOX-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-16460808323513ljlg.krackon.png',
						locationDescription: 'Structure Axle Box 01'
					},
					file: {
						id: 116,
						name: 'FRO-KOM-930E-STR-AXLBOX-01',
						size: '66189',
						active: 1,
						filepath: '/upload/image-16456615952814liou.png',
						createdAt: '2022-02-24T17:17:56.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T17:17:56.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Axle Box 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-AXLBOX-01',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-02-28T20:40:33.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Axle Box 01',
					positionCode: {
						id: 99,
						code: 'STR-AXLBOX-01',
						description: 'Structure Axle Box 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 116,
					createdAt: '2022-02-25 03:17:56',
					createdBy: 87,
					updatedAt: '2022-02-25 03:17:56',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-AXLBOX-01',
					description: 'FRO-KOM 930E Structure Axle Box 01',
					filepath: '/upload/image-16456615952814liou.png',
					size: '66189',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6189,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12932',
				uniqueJobOperationId: '',
				stepNumber: '102558',
				order: 6,
				images: '["/upload/image-1646257418857khfyx.png"]',
				instructions: '<p>Inspect the Nose Cone Weld and Mounting to Torque Tube Area.</p>',
				stepLimitData: {
					id: 622,
					data: {
						locationId: 'STR-NOSECONE-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257418857khfyx.png',
						locationDescription: 'Structure Nose Cone 01'
					},
					file: {
						id: 132,
						name: 'FRO-KOM-930E-STR-NOSECONE-01.png',
						size: '44338',
						active: 1,
						filepath: '/upload/image-1646257418857khfyx.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Nose Cone 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-NOSECONE-01',
					operator: null,
					createdAt: '2022-02-23T16:00:59.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:49:29.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Nose Cone 01',
					positionCode: {
						id: 104,
						code: 'STR-NOSECONE-01',
						description: 'Structure Nose Cone 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Axle Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 132,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-NOSECONE-01.png',
					description: 'Komatsu 930E Structure Nose Cone 01',
					filepath: '/upload/image-1646257418857khfyx.png',
					size: '44338',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6190,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102588',
				order: 7,
				images: '["/upload/image-1646154914210534ky.png"]',
				instructions: '<p>Visually Inspect the ROPS Cab Foot structure</p>',
				stepLimitData: {
					id: 698,
					data: {
						locationId: 'KOM-930E-ROPS-CAB FOOT',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646154914210534ky.png',
						locationDescription: 'Komatsu 930E ROPS CAB FOOT'
					},
					file: {
						id: 124,
						name: 'FRO-KOM-930E-STR-ROPS-01.1',
						size: '909581',
						active: 1,
						filepath: '/upload/image-1646154914210534ky.png',
						createdAt: '2022-03-01T17:18:04.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T17:18:04.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure ROPS 01.1',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'KOM-930E-ROPS-CAB FOOT',
					operator: null,
					createdAt: '2022-03-01T17:19:55.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T02:24:59.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E ROPS CAB FOOT',
					positionCode: {
						id: 140,
						code: 'KOM-930E-ROPS-CAB FOOT',
						description: 'Komatsu 930E ROPS CAB FOOT'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 124,
					createdAt: '2022-03-02 03:18:04',
					createdBy: 87,
					updatedAt: '2022-03-02 03:18:04',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ROPS-01.1',
					description: 'FRO-KOM 930E Structure ROPS 01.1',
					filepath: '/upload/image-1646154914210534ky.png',
					size: '909581',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6191,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102589',
				order: 8,
				images: '["/upload/image-16462268052516n632.krackon.png"]',
				instructions:
					'<p>Visually Inspect the ROPS structure as highlighted in the picture. Any defects to the ROPS MUST be Repaired immediately.</p><p><br /></p><p><a target="_blank" href="https://mykomatsu.komatsu/ ">https://mykomatsu.komatsu/ </a></p>',
				stepLimitData: {
					id: 662,
					data: {
						locationId: 'STR-ROPS-02',
						inspectionImage: '/upload/image-16462268052516n632.krackon.png',
						locationDescription: 'Structure Roll Over Protection 02'
					},
					file: {
						id: 114,
						name: 'FRO-KOM-930E-STR-ROPS-02',
						size: '247961',
						active: 1,
						filepath: '/upload/image-16456615922367488f.png',
						createdAt: '2022-02-24T00:27:55.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:55.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Roll Over Protection 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-ROPS-02',
					operator: null,
					createdAt: '2022-02-23T16:01:03.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T13:13:26.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Roll Over Protection 02',
					positionCode: {
						id: 131,
						code: 'STR-ROPS-02',
						description: 'Structure Roll Over Protection 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 114,
					createdAt: '2022-02-24 10:27:55',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:55',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ROPS-02',
					description: 'FRO-KOM 930E Structure Roll Over Protection 02',
					filepath: '/upload/image-16456615922367488f.png',
					size: '247961',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6192,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102584',
				order: 9,
				images: '["/upload/image-16461576383070ml6h.krackon.png"]',
				instructions: '<p><br /></p>',
				stepLimitData: {
					id: 623,
					data: {
						cameraInit: {
							width: 0.017453529008240275,
							height: 0.01275143671834906,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 4.80199536019777e-15,
								z: 78.4225356003234
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-16461576383070ml6h.krackon.png',
						locationDescription: 'Structure Frame 01'
					},
					file: {
						id: 120,
						name: 'FRO-KOM-930E-STR-FRM-01',
						size: '1110400',
						active: 1,
						filepath: '/upload/image-1646152842990q6snd.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-01',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:00:42.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 01',
					positionCode: {
						id: 105,
						code: 'STR-FRM-01',
						description: 'Structure Frame 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 120,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-01',
					description: 'FRO-KOM 930E Structure Frame 01',
					filepath: '/upload/image-1646152842990q6snd.png',
					size: '1110400',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6193,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102585',
				order: 10,
				images: '["/upload/image-1646157820865zvqa6.krackon.png"]',
				instructions: null,
				stepLimitData: {
					id: 624,
					data: {
						cameraInit: {
							width: 0.017454093498363805,
							height: 0.02346768873729588,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986874e-15,
								z: 57.29432506465481
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646157820865zvqa6.krackon.png',
						locationDescription: 'Structure Frame 02'
					},
					file: {
						id: 121,
						name: 'FRO-KOM-930E-STR-FRM-02',
						size: '805407',
						active: 1,
						filepath: '/upload/image-1646152848674cf82v.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 02',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-02',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:04:45.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 02',
					positionCode: {
						id: 106,
						code: 'STR-FRM-02',
						description: 'Structure Frame 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 121,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-02',
					description: 'FRO-KOM 930E Structure Frame 02',
					filepath: '/upload/image-1646152848674cf82v.png',
					size: '805407',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: [
					{
						id: 656,
						name: 'Crack',
						defectNumber: '',
						longDescription: 'Repair ',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-1657226461845gsxnn.jpg',
								text: 'Crack',
								isCrack: 1,
								geoLocation: {
									lat: -1,
									long: -1
								}
							},
							{
								data: '/upload/krackOn-image-1657226462753s0cx3.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: '/upload/krackOn-image-original-1657226462758yovkr.jpg'
							}
						],
						reportedDate: '2022-07-08 06:41:03',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-07-08 06:41:03',
						updatedAt: '2022-07-08 06:41:03',
						updatedBy: null,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 442,
							name: 'Crack',
							sequenceNumber: 4,
							notes: 'Repair ',
							length: 2,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[0.3735818150012051, 0.1505847404079747, 0.35]],
							images: [
								{
									data: '/upload/krackOn-image-1657226462762cc1d5.jpg',
									text: 'Crack',
									isCrack: 1,
									geoLocation: {
										lat: -1,
										long: -1
									}
								},
								{
									data: '/upload/krackOn-image-1657226463671h7syt.jpg',
									text: 'Photo 1',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: '/upload/krackOn-image-original-1657226463677yp72z.jpg'
								}
							],
							dateRecorded: '2022-07-08 06:39:55',
							severity: {
								text: 'Severe - Repair Immediately (Contact Supervisor)',
								colour: '#f44336'
							},
							createdAt: '2022-07-08 06:41:03',
							createdBy: 97,
							customerNote: null,
							updatedAt: '2022-07-08 06:41:03',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'structural-inspection'
								}
							}
						}
					}
				]
			},
			{
				id: 6194,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102586',
				order: 11,
				images: '["/upload/image-1646158282859ee691.krackon.png"]',
				instructions: '<p>Inspect the Top and Bottom Frame Rail</p>',
				stepLimitData: {
					id: 625,
					data: {
						cameraInit: {
							width: 0.01745447963478744,
							height: 0.028569992241084297,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986874e-15,
								z: 57.29432506465481
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-03',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646158282859ee691.krackon.png',
						locationDescription: 'Structure Frame 03'
					},
					file: {
						id: 122,
						name: 'FRO-KOM-930E-STR-FRM-03',
						size: '228224',
						active: 1,
						filepath: '/upload/image-1646152851148p95hw.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-03',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:11:24.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 03',
					positionCode: {
						id: 107,
						code: 'STR-FRM-03',
						description: 'Structure Frame 03'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 122,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-03',
					description: 'FRO-KOM 930E Structure Frame 03',
					filepath: '/upload/image-1646152851148p95hw.png',
					size: '228224',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6195,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102587',
				order: 12,
				images: '["/upload/image-1646158514290ko0rk.krackon.png"]',
				instructions: '<p>Inspect the Horse Collar Front and Rear</p>',
				stepLimitData: {
					id: 626,
					data: {
						cameraInit: {
							width: 0.01745500027899189,
							height: 0.03426748521029083,
							origin: {
								x: 0,
								y: 0,
								z: 0
							},
							position: {
								x: 0,
								y: 3.508265589986873e-15,
								z: 57.29432506465479
							},
							quaternion: {
								w: 1,
								x: -3.061616997868383e-17,
								y: 0,
								z: 0
							}
						},
						locationId: 'STR-FRM-04',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646158514290ko0rk.krackon.png',
						locationDescription: 'Structure Frame 04'
					},
					file: {
						id: 123,
						name: 'FRO-KOM-930E-STR-FRM-04',
						size: '522355',
						active: 1,
						filepath: '/upload/image-16461528534693pvc3.png',
						createdAt: '2022-03-01T16:45:31.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T16:45:31.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure Frame 04',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-FRM-04',
					operator: null,
					createdAt: '2022-02-23T16:01:00.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T18:15:16.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Frame 04',
					positionCode: {
						id: 108,
						code: 'STR-FRM-04',
						description: 'Structure Frame 04'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 123,
					createdAt: '2022-03-02 02:45:31',
					createdBy: 87,
					updatedAt: '2022-03-02 02:45:31',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-FRM-04',
					description: 'FRO-KOM 930E Structure Frame 04',
					filepath: '/upload/image-16461528534693pvc3.png',
					size: '522355',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6196,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102590',
				order: 13,
				images: '["/upload/image-1646160201329-qhajb.png"]',
				instructions: '<p>Visually Inspect the Left Hand Deck Support</p>',
				stepLimitData: {
					id: 709,
					data: [
						{
							rows: [
								{
									text: '1. Inspect LH Deck Mount at Location 1 '
								},
								{
									text: '2. Inspect LH Deck Mount at Location 2'
								},
								{
									text: '3. Inspect LH Deck Mount at Location 3'
								},
								{
									text: '4. Inspect LH Deck Mount at Location 4 '
								},
								{
									text: '5. Inspect LH Deck General Condition '
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 711,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:19.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:19.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 712,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:19.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:19.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 713,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 714,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 715,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:48am',
									operator: null,
									createdAt: '2022-03-01T18:48:20.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:48:20.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-LH DECK',
					operator: null,
					createdAt: '2022-03-01T18:28:31.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Left Deck Support ',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6197,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102552',
				order: 14,
				images: '["/upload/image-1646160736032-v28y9.png"]',
				instructions:
					'<p>Visually inspect the Centre Deck Support, including modifications (Komatsu Parts &amp; Service News AA13034)</p>',
				stepLimitData: {
					id: 716,
					data: [
						{
							rows: [
								{
									text: '1. Inspect Center Deck Mount at Location 1'
								},
								{
									text: '2. Inspect Center Deck Mount at Location 2'
								},
								{
									text: '3. Inspect Center Deck Mount at Location 3'
								},
								{
									text: '4. Inspect Center Deck Mount at Location 4'
								},
								{
									text: '5. Inspect General Condition of the Center Deck '
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 717,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:26.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:26.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 718,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:26.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:26.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 719,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 720,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 721,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:54am',
									operator: null,
									createdAt: '2022-03-01T18:54:27.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:54:27.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-CTR DECK',
					operator: null,
					createdAt: '2022-03-01T18:49:31.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Center Deck Support',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6198,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102591',
				order: 15,
				images: '["/upload/image-1646161002140-3w4og.png"]',
				instructions: '<p>Visually Inspect the Right Hand Deck Support</p>',
				stepLimitData: {
					id: 710,
					data: [
						{
							rows: [
								{
									text: '1. Inspect the Right Hand Deck at Location 1'
								},
								{
									text: '2. Inspect the Right Hand Deck at Location 2'
								},
								{
									text: '3. Inspect the Right Hand Deck at Location 3'
								},
								{
									text: '4. Inspect the Right Hand Deck at Location 4'
								},
								{
									text: '5. Inspect the General Condition of the Right Hand Deck'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 722,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 723,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 724,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 725,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 726,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 04:58am',
									operator: null,
									createdAt: '2022-03-01T18:58:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T18:58:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-RH Deck',
					operator: null,
					createdAt: '2022-03-01T18:29:52.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Right Deck Support ',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6199,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12933',
				uniqueJobOperationId: '',
				stepNumber: '102598',
				order: 16,
				images: '["/upload/image-1645661584631eyg2i.png"]',
				instructions: null,
				stepLimitData: {
					id: 727,
					data: [
						{
							rows: [
								{
									text: '1. Inspect Condition of  Lower Shear Deck Hand Rails'
								},
								{
									text: '2. Inspect Condition of Lower Shear Deck Ladder'
								},
								{
									text: '3. Inspect Overall Condition of Lower Shear Deck'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 728,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:03.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:03.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 729,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:03.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:03.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 730,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'LH'
						},
						{
							rows: [
								{
									id: 731,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 732,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:04.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:04.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 733,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 05:05am',
									operator: null,
									createdAt: '2022-03-01T19:05:05.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T19:05:05.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'RH'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-LWR DECK',
					operator: null,
					createdAt: '2022-03-01T19:01:22.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: '930E Lower Deck Mount',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Frame',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6200,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12936',
				uniqueJobOperationId: '',
				stepNumber: '102592',
				order: 17,
				images: '["/upload/image-1646162650007emod2.krackon.png"]',
				instructions:
					'<p>Inspect the following areas:</p><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Lower Front Corner Joints of the HV Cabinet </li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Front Bottom Mounting Plate for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Upper Front Corner Joints of the HV Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Inside Floor of the Cabinet in Front of the Capacitors for Cracks</li></ul>',
				stepLimitData: {
					id: 659,
					data: {
						locationId: 'STR-HV-CAB-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646162650007emod2.krackon.png',
						locationDescription: 'Structure HV Cabinet 01'
					},
					file: {
						id: 109,
						name: 'FRO-KOM-930E-STR-HV-CAB-01',
						size: '217321',
						active: 1,
						filepath: '/upload/image-1645661581851fu00m.png',
						createdAt: '2022-02-24T00:27:55.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-02-24T00:27:55.000Z',
						updatedBy: null,
						description: 'FRO-KOM 930E Structure HV Cabintet 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-HV-CAB-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T19:33:26.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure HV Cabinet 01',
					positionCode: {
						id: 128,
						code: 'STR-HV-CAB-01',
						description: 'Structure HV Cabinet 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'HV Cabinet',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 109,
					createdAt: '2022-02-24 10:27:55',
					createdBy: 87,
					updatedAt: '2022-02-24 10:27:55',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-HV-CAB-01',
					description: 'FRO-KOM 930E Structure HV Cabintet 01',
					filepath: '/upload/image-1645661581851fu00m.png',
					size: '217321',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: [
					{
						id: 658,
						name: 'Inspect the following areas:',
						defectNumber: '',
						longDescription: ' Jfchg ',
						geoCoords: {
							lat: -1,
							long: -1
						},
						images: [
							{
								data: '/upload/krackOn-image-1657226697078qbpoq.jpg',
								text: 'Crack',
								isCrack: 1,
								geoLocation: {
									lat: -1,
									long: -1
								}
							},
							{
								data: '/upload/krackOn-image-1657226698136loqi8.jpg',
								text: 'Photo 1',
								isCrack: null,
								location: {
									lat: -1,
									long: -1
								},
								dataOriginal: null
							}
						],
						reportedDate: '2022-07-08 06:44:59',
						duration: '0',
						singleDefectReportLink: null,
						erpError: null,
						createdAt: '2022-07-08 06:44:59',
						updatedAt: '2022-07-08 06:44:59',
						updatedBy: null,
						status: {
							id: 1,
							name: 'Pending',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						type: {
							id: 3,
							name: 'Structural Defect',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2022-08-20 10:07:15',
							updatedBy: null
						},
						recommendedAction: {
							id: 2,
							name: 'Monitor',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						priority: {
							id: 3,
							name: 'P3 - Medium (30 days)',
							createdAt: '2021-09-18 08:19:13',
							createdBy: null,
							updatedAt: '2021-09-18 08:19:13',
							updatedBy: null
						},
						crack: {
							id: 443,
							name: 'Inspect the following areas:',
							sequenceNumber: 5,
							notes: ' Jfchg ',
							length: 4,
							width: null,
							depth: null,
							leakRate: null,
							temperature: null,
							crackCoords: [[-0.13803090844097657, -0.04627387776712065, 0.35]],
							images: [
								{
									data: '/upload/krackOn-image-1657226698141w0g98.jpg',
									text: 'Crack',
									isCrack: 1,
									geoLocation: {
										lat: -1,
										long: -1
									}
								},
								{
									data: '/upload/krackOn-image-1657226699238aq69e.jpg',
									text: 'Photo 1',
									isCrack: null,
									location: {
										lat: -1,
										long: -1
									},
									dataOriginal: null
								}
							],
							dateRecorded: '2022-07-08 06:44:31',
							severity: {
								text: 'Severe - Repair Immediately (Contact Supervisor)',
								colour: '#f44336'
							},
							createdAt: '2022-07-08 06:44:59',
							createdBy: 97,
							customerNote: null,
							updatedAt: '2022-07-08 06:44:59',
							updatedBy: null,
							status: {
								id: 1,
								name: 'New'
							},
							recommendedAction: {
								id: 2,
								name: 'Monitor',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							priority: {
								id: 3,
								name: 'P3 - Medium (30 days)',
								createdAt: '2021-09-18 08:19:13',
								createdBy: null,
								updatedAt: '2021-09-18 08:19:13',
								updatedBy: null
							},
							parentCrack: null,
							defectCracks: []
						},
						workOrderStep: {
							stepLimitData: {
								limitCategory: {
									description: 'structural-inspection'
								}
							}
						}
					}
				]
			},
			{
				id: 6201,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12936',
				uniqueJobOperationId: '',
				stepNumber: '102593',
				order: 18,
				images: '["/upload/image-1646163314302ubays.krackon.png"]',
				instructions:
					'<p>Inspect the following areas:</p><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Lower Bottom Outside Edge of the LEM Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the the Lower Left Outside Edge of the LEM Cabinet (Under 24V Cabinet) for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Top Left Outside Corner Joint of the LEM Cabinet for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Inside Floor of the LEM Cabinet Near Near Back Mounting Bolts for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect Front Right Support Braces for Cracks</li></ul><p><br /></p><ul><li data-list="bullet"><span></span>Inspect the Rear Right Support Braces for Cracks</li></ul>',
				stepLimitData: {
					id: 734,
					data: {
						locationId: 'STR-HV-CAB-03',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646163314302ubays.krackon.png',
						locationDescription: 'Structure HV Cabinet 03'
					},
					file: {
						id: 126,
						name: 'FRO-KOM-930E-STR-HV-CAB-03',
						size: '134615',
						active: 1,
						filepath: '/upload/image-1646161979009ric5l.png',
						createdAt: '2022-03-01T19:21:26.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-01T19:31:39.000Z',
						updatedBy: 87,
						description: 'FRO KOM 930E Structure HV Cabinet 03',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'STR-HV-CAB-03',
					operator: null,
					createdAt: '2022-03-01T19:32:09.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-01T19:35:15.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure HV Cabinet 03',
					positionCode: {
						id: 141,
						code: 'STR-HV-CAB-03',
						description: 'Structure HV Cabinet 03'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'HV Cabinet',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 126,
					createdAt: '2022-03-02 05:21:26',
					createdBy: 87,
					updatedAt: '2022-03-02 05:31:39',
					updatedBy: 87,
					name: 'FRO-KOM-930E-STR-HV-CAB-03',
					description: 'FRO KOM 930E Structure HV Cabinet 03',
					filepath: '/upload/image-1646161979009ric5l.png',
					size: '134615',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6202,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12937',
				uniqueJobOperationId: '',
				stepNumber: '102595',
				order: 19,
				images: '["/upload/image-1646257407731s2qv1.png"]',
				instructions: '<p><br /></p>',
				stepLimitData: {
					id: 639,
					data: {
						locationId: 'STR-GRID-BOX-02',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257407731s2qv1.png',
						locationDescription: 'Structure Grid Box 02'
					},
					file: {
						id: 131,
						name: 'FRO-KOM-930E-STR-GRID-BOX-01.png',
						size: '2716630',
						active: 1,
						filepath: '/upload/image-1646257407731s2qv1.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Grid Box 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-GRID-BOX-02',
					operator: null,
					createdAt: '2022-02-23T16:01:01.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T21:53:41.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Grid Box 02',
					positionCode: {
						id: 112,
						code: 'STR-GRID-BOX-02',
						description: 'Structure Grid Box 02'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 676,
						data: [
							{
								criteria: 'between',
								lowerLimit: 0,
								upperLimit: 2
							},
							{
								criteria: 'between',
								lowerLimit: 2,
								upperLimit: 4
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 4
							}
						],
						name: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						operator: null,
						createdAt: '2022-02-24T18:40:04.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:49:25.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Non-Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Grid Box',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 131,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-GRID-BOX-01.png',
					description: 'Komatsu 930E Structure Grid Box 01',
					filepath: '/upload/image-1646257407731s2qv1.png',
					size: '2716630',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6203,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102556',
				order: 20,
				images: '["/upload/image-1646258258172-v3qx0.png"]',
				instructions: '<p>Visually Inspect the Wheel Chocks and Holders</p>',
				stepLimitData: {
					id: 743,
					data: {},
					file: null,
					name: 'FRO-KOM-STR-WHEELCHOCK',
					operator: null,
					createdAt: '2022-03-01T21:14:13.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E Wheel Chock',
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 6204,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102798',
				order: 21,
				images: '["/upload/image-1646257420072w8cmy.png"]',
				instructions: '<p>Inspect the LH and RH Steering Cylinder Mounts</p>',
				stepLimitData: {
					id: 652,
					data: {
						locationId: 'STR-STEER-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646257420072w8cmy.png',
						locationDescription: 'Structure Steering Left and Right Hand 01'
					},
					file: {
						id: 133,
						name: 'FRO-KOM-930E-STR-STEER-01.png',
						size: '113095',
						active: 1,
						filepath: '/upload/image-1646257420072w8cmy.png',
						createdAt: '2022-03-02T21:48:13.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T21:48:13.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Steering 01',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'STR-STEER-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T22:02:33.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Structure Steering Left and Right Hand 01',
					positionCode: {
						id: 121,
						code: 'STR-STEER-01',
						description: 'Structure Steering Left and Right Hand 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 133,
					createdAt: '2022-03-03 07:48:13',
					createdBy: 87,
					updatedAt: '2022-03-03 07:48:13',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-STEER-01.png',
					description: 'Komatsu 930E Structure Steering 01',
					filepath: '/upload/image-1646257420072w8cmy.png',
					size: '113095',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6205,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-05-07 09:12:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102555',
				order: 22,
				images: '["/upload/image-1646229115316gj2g7.png"]',
				instructions:
					'<p>Inspect the Front-End and Back-End Engine Subframe Cross-Members and Mounts - Typical Left and Right Hand</p>',
				stepLimitData: {
					id: 648,
					data: {
						locationId: 'STR-ENG-01',
						numberOfPhotos: 0,
						inspectionImage: '/upload/image-1646229115316gj2g7.png',
						locationDescription: 'Structure Engine 01'
					},
					file: {
						id: 130,
						name: 'FRO-KOM-930E-STR-ENG-01',
						size: '51385',
						active: 1,
						filepath: '/upload/image-1646229115316gj2g7.png',
						createdAt: '2022-03-02T13:53:41.000Z',
						createdBy: 87,
						extension: 'png',
						updatedAt: '2022-03-02T13:53:41.000Z',
						updatedBy: null,
						description: 'Komatsu 930E Structure Engine Mount',
						fileCategory: {
							id: 2,
							name: 'Structural Inspection 2D Model',
							createdAt: '2021-03-25T08:07:03.000Z',
							createdBy: null,
							updatedAt: '2021-03-25T08:07:03.000Z',
							updatedBy: null
						}
					},
					name: 'FRO-KOM-930E-STR-ENG-01',
					operator: null,
					createdAt: '2022-02-23T16:01:02.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-03-02T13:55:44.000Z',
					updatedBy: 87,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'FRO-KOM 930E Structure Engine 01',
					positionCode: {
						id: 117,
						code: 'STR-ENG-01',
						description: 'Structure Engine 01'
					},
					isUtilisation: 0,
					limitCategory: {
						id: 3,
						data: null,
						name: 'Structural Inspection',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'structural-inspection',
						orderNumber: 9,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: {
						id: 674,
						data: [
							{
								criteria: 'equalto',
								lowerLimit: 0,
								upperLimit: 0
							},
							{
								criteria: 'between',
								lowerLimit: 1,
								upperLimit: 2
							},
							{
								criteria: 'greaterthan',
								lowerLimit: 2
							}
						],
						name: 'FRO Komatsu Crack Severity (Critical Areas)',
						operator: null,
						createdAt: '2022-02-23T22:28:17.000Z',
						createdBy: 87,
						isDynamic: 0,
						updatedAt: '2022-02-24T18:48:59.000Z',
						updatedBy: 87,
						isRequired: 0,
						lowerLimit: null,
						upperLimit: null,
						description: 'FRO Komatsu Crack Severity (Critical Areas)',
						isUtilisation: 0,
						limitCategory: {
							id: 38,
							data: [
								{
									colour: '4caf52',
									isDefect: false,
									question: 'Normal - Create Work Order if needed for Future Repair'
								},
								{
									colour: 'ffeb3b',
									isDefect: false,
									question: 'Caution - Contact Supervisor to discuss Repair Plan'
								},
								{
									colour: 'f44336',
									isDefect: false,
									question: 'Severe - Repair Immediately (Contact Supervisor)'
								}
							],
							name: 'FRO Crack Severity Criteria',
							createdAt: '2022-02-23T22:20:55.000Z',
							createdBy: 87,
							updatedAt: '2022-02-24T18:45:19.000Z',
							updatedBy: 87,
							description: 'conditionlist',
							orderNumber: 7,
							isTableLimit: 1
						},
						isTableTemplate: 0
					}
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: {
					id: 130,
					createdAt: '2022-03-02 23:53:41',
					createdBy: 87,
					updatedAt: '2022-03-02 23:53:41',
					updatedBy: null,
					name: 'FRO-KOM-930E-STR-ENG-01',
					description: 'Komatsu 930E Structure Engine Mount',
					filepath: '/upload/image-1646229115316gj2g7.png',
					size: '51385',
					extension: 'png',
					active: 1,
					fileCategory: {
						id: 2,
						createdAt: '2021-03-25 18:07:03',
						createdBy: null,
						updatedAt: '2021-03-25 18:07:03',
						updatedBy: null,
						name: 'Structural Inspection 2D Model'
					}
				},
				attachedDefect: null,
				defects: [],
				previousDefects: []
			},
			{
				id: 6206,
				createdAt: '2022-04-29 05:11:02',
				createdBy: 105,
				updatedAt: '2022-04-29 05:11:02',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {},
				jobOperationNumber: '12934',
				uniqueJobOperationId: '',
				stepNumber: '102570',
				order: 23,
				images: '["/upload/image-1646172634240-6od7x.png"]',
				instructions:
					'<p>Inspect Handrails, Ladders, Ladder Mounts on the LH and RH Decks, Center Deck, LH and RH Platforms, Engine Access and Hydraulic Tank Access</p>',
				stepLimitData: {
					id: 744,
					data: [
						{
							rows: [
								{
									text: 'Location 1: Inspect Ladder Mounts, Ladder Hand Rail and Steps for defects'
								},
								{
									text: 'Location 2: Inspect RH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 3: Inspect RH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 4: Inspect Center Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 5: Inspect LH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Location 6: Inspect LH Deck section of Hand Rails for Defects'
								},
								{
									text: 'Inspect Engine Access LH and RH including Platforms for Defects'
								},
								{
									text: 'Inspect Hydraulic Tank Access for Defects'
								}
							],
							columnType: 'item',
							columnHeader: 'Location'
						},
						{
							rows: [
								{
									id: 745,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 746,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 747,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 748,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 749,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:32.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:32.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 750,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 751,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								},
								{
									id: 752,
									data: {},
									meta: {
										usedIn: {
											winCount: '0',
											stepCount: '0',
											workOrderCount: '0',
											childLimitCount: '0',
											parentLimitCount: '0',
											workOrderStepCount: '0'
										}
									},
									name: 'New Limit 2022/03/02 08:22am',
									operator: null,
									createdAt: '2022-03-01T22:22:33.000Z',
									createdBy: 87,
									isDynamic: 0,
									updatedAt: '2022-03-01T22:22:33.000Z',
									updatedBy: null,
									isRequired: 0,
									lowerLimit: null,
									upperLimit: null,
									description: '',
									isUtilisation: 0,
									limitCategory: {
										id: 9,
										data: null,
										name: 'Pass / Fail',
										createdAt: '2020-12-04T10:22:11.000Z',
										createdBy: null,
										updatedAt: '2020-12-04T10:22:11.000Z',
										updatedBy: null,
										description: 'passfail',
										orderNumber: 4,
										isTableLimit: 1
									},
									isTableTemplate: 0
								}
							],
							columnType: 'recorded',
							columnHeader: 'Result'
						}
					],
					file: null,
					name: 'FRO-KOM-930E-STR-RAILS',
					operator: null,
					createdAt: '2022-03-01T22:11:42.000Z',
					createdBy: 87,
					isDynamic: 0,
					updatedAt: '2022-04-06T23:48:05.000Z',
					updatedBy: 26,
					isRequired: 0,
					lowerLimit: null,
					upperLimit: null,
					description: 'Komatsu 930E Structure Hand Rails and Ladder',
					isUtilisation: 0,
					limitCategory: {
						id: 2,
						data: null,
						name: 'Table',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'table',
						orderNumber: 8,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Front End Structure',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 5386,
			createdAt: '2022-02-23 04:17:37',
			createdBy: 87,
			updatedAt: '2022-02-25 02:39:33',
			updatedBy: 87,
			lastBuiltAt: null,
			notes: '',
			componentCode: '750HR',
			context: 'System Task',
			counter: '0',
			name: '750 Hours Welder  Inspection',
			position: 'WELDER',
			frequency: 750,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: '',
			functionalFailure: '',
			documentGrouping: {
				skillId: 7,
				frequency: 750,
				unitOfMeasureId: 1,
				customDocumentGrouping: ''
			},
			externalId: null
		},
		customer: {
			id: 26,
			createdAt: '2021-05-14 07:03:45',
			createdBy: 26,
			updatedAt: '2023-06-01 16:17:22',
			updatedBy: 108,
			code: 'FRO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: 'Shane Mackay',
			customerSite: 'Fording River',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: 'shane.mackay@teck.com',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1620939824124oazte.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 1,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 1,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 221,
			createdAt: '2021-06-09 14:09:14',
			createdBy: null,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: 26,
			assetName: 'Komatsu 930E-4 Haul Truck',
			serialNumber: 'A30508',
			assetFloc: 'HT545',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-06-09 14:09:14',
			startUtilisation: 0,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 26,
				createdAt: '2021-05-14 07:03:45',
				createdBy: 26,
				updatedAt: '2023-06-01 16:17:22',
				updatedBy: 108,
				code: 'FRO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: 'Shane Mackay',
				customerSite: 'Fording River',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: 'shane.mackay@teck.com',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1620939824124oazte.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 1,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 1,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 94,
				createdAt: '2021-05-19 16:55:04',
				createdBy: 26,
				updatedAt: '2022-12-01 15:08:15',
				updatedBy: 95,
				class: 'Haul Truck',
				modelNumber: '930E-4',
				serialNumberPrefix: '',
				isTemplate: 1,
				image: '/upload/image-1669932493579jfsqb.JPG',
				life: 0,
				utilisation: 0,
				documentGrouping: ['skill'],
				taskGrouping: 'groupingCategory',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 19,
					createdAt: '2021-05-19 16:52:26',
					createdBy: 26,
					updatedAt: '2021-05-19 16:52:26',
					updatedBy: null,
					name: 'Komatsu'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 105,
				createdAt: '2022-04-21 06:25:23',
				createdBy: 60,
				updatedAt: '2022-04-21 06:29:04',
				updatedBy: 60,
				firstName: 'Liezel',
				lastName: 'Lorico',
				active: 1,
				email: 'liezel.lorico.test@teck.com',
				mobilePhone: '',
				workPhone: '',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 4,
			total: '1 / 23'
		}
	},
	{
		id: 92,
		workOrderNumber: 'GEOFF05',
		workOrderDescription: 'Shanes service',
		createdAt: '2021-09-03 07:21:17',
		createdBy: 26,
		updatedAt: '2021-09-03 07:21:17',
		updatedBy: null,
		scheduledAt: '2021-09-03 10:00:00',
		googleMapStepDateTime: null,
		status: 'Not Started',
		startedAt: null,
		completedAt: null,
		workOrderComponentCode: '',
		workOrderHazards: [],
		workOrderSkills: [],
		workOrderTools: [],
		workOrderParts: [],
		workOrderProcedures: [],
		workOrderPermits: [],
		workOrderPpe: [],
		workOrderQualifications: null,
		workOrderExtraOperations: null,
		modelNumber: '793F TRAINING',
		serialNumberPrefix: '',
		modelClass: 'Haul Truck',
		taskName: '1500HR Service Man Shane Cow',
		taskType: 'Inspect',
		approvedDate: null,
		actionedBy: null,
		duration: '0',
		aiEstimatedDuration: null,
		stepLimitHistory: {},
		reportLink: null,
		defectReportLink: null,
		completionNotes: '',
		isActive: 1,
		workOrderBatch: null,
		workOrderSteps: [
			{
				id: 3117,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12613',
				uniqueJobOperationId: '',
				stepNumber: '101289',
				order: 1,
				images: '["/upload/image-1630612354819kkgs9.png"]',
				instructions:
					'<p>Make Sure these Items are in Position and in their specific loactions (Yellow Marks on the floor) before the truck rolls in.</p><p><br /></p><p>ALL DRAIN CARTS IN PLACE AND EMPTY?</p>',
				stepLimitData: {
					id: 383,
					data: {},
					file: null,
					name: 'Area Prep',
					operator: null,
					createdAt: '2021-09-02T19:47:40.000Z',
					createdBy: 60,
					updatedAt: '2021-09-02T19:56:21.000Z',
					updatedBy: 60,
					lowerLimit: null,
					upperLimit: null,
					description: 'Generic Area Prep Place Holder',
					isUtilisation: 0,
					limitCategory: {
						id: 20,
						data: [
							{
								colour: '008000',
								isDefect: false,
								question: 'YES'
							},
							{
								colour: 'ff0000',
								isDefect: false,
								question: 'NO'
							},
							{
								colour: '0000ff',
								isDefect: false,
								question: 'N/A'
							}
						],
						name: 'Yes-No-NA',
						createdAt: '2021-05-20T06:03:48.000Z',
						createdBy: 26,
						updatedAt: '2021-05-20T06:03:48.000Z',
						updatedBy: null,
						description: 'buttonList',
						orderNumber: 7,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'PM Bay Prep Work',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3118,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12613',
				uniqueJobOperationId: '',
				stepNumber: '101290',
				order: 2,
				images: '["/upload/image-1630612378794bh54m.png"]',
				instructions:
					'<p>Make Sure these Items are in Position and in their specific locations (Yellow Marks on the floor) before the truck rolls in.</p><p><br /></p><p>CAT PM BOX?</p>',
				stepLimitData: {
					id: 384,
					data: {},
					file: null,
					name: 'Area Prep',
					operator: null,
					createdAt: '2021-09-02T19:56:58.000Z',
					createdBy: 60,
					updatedAt: '2021-09-02T19:57:12.000Z',
					updatedBy: 60,
					lowerLimit: null,
					upperLimit: null,
					description: 'Generic Area Prep Place',
					isUtilisation: 0,
					limitCategory: {
						id: 4,
						data: null,
						name: 'None',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'None',
						orderNumber: 1,
						isTableLimit: 0
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'PM Bay Prep Work',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3119,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12613',
				uniqueJobOperationId: '',
				stepNumber: '101291',
				order: 3,
				images: '["/upload/image-1630612400862q2rbp.png"]',
				instructions:
					'<p>Make Sure these Items are in Position and in their specific locations (Yellow Marks on the floor) before the truck rolls in.</p><p><br /></p><p>PICK UP PRIMARY AIR FILTERS</p>',
				stepLimitData: null,
				title: 'PM Bay Prep Work',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3120,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12613',
				uniqueJobOperationId: '',
				stepNumber: '101293',
				order: 4,
				images: '["/upload/image-16306124156371dd97.png"]',
				instructions:
					'<p>Make Sure these Items are in Position and in their specific locations (Yellow Marks on the floor) before the truck rolls in.</p><p><br /></p><p>LADDERS?</p>',
				stepLimitData: {
					id: 383,
					data: {},
					file: null,
					name: 'Area Prep',
					operator: null,
					createdAt: '2021-09-02T19:47:40.000Z',
					createdBy: 60,
					updatedAt: '2021-09-02T19:56:21.000Z',
					updatedBy: 60,
					lowerLimit: null,
					upperLimit: null,
					description: 'Generic Area Prep Place Holder',
					isUtilisation: 0,
					limitCategory: {
						id: 20,
						data: [
							{
								colour: '008000',
								isDefect: false,
								question: 'YES'
							},
							{
								colour: 'ff0000',
								isDefect: false,
								question: 'NO'
							},
							{
								colour: '0000ff',
								isDefect: false,
								question: 'N/A'
							}
						],
						name: 'Yes-No-NA',
						createdAt: '2021-05-20T06:03:48.000Z',
						createdBy: 26,
						updatedAt: '2021-05-20T06:03:48.000Z',
						updatedBy: null,
						description: 'buttonList',
						orderNumber: 7,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'PM Bay Prep Work',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3121,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12613',
				uniqueJobOperationId: '',
				stepNumber: '101294',
				order: 5,
				images: '["/upload/image-16306125445429l6ly.png"]',
				instructions:
					'<p>Do the following:</p><ul><li><span></span>Pickup PM toolkit from the toolcrib and rool to the PM bay</li><li><span></span>Take all filters needed fro the lower drains from the CAT PM box and put on the working table</li><li><span></span>Do not use impacts to tighten filter housings when changing filters &amp; use proper torque specs!!!!!</li></ul>',
				stepLimitData: null,
				title: 'PM Bay Prep Work',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3122,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101295',
				order: 6,
				images: '[]',
				instructions:
					'<p>Check - Lights before truck goes out of shop</p><p><br /></p><p>Include parking light on top of the cab in this check!</p><p><br /></p>',
				stepLimitData: {
					id: 383,
					data: {},
					file: null,
					name: 'Area Prep',
					operator: null,
					createdAt: '2021-09-02T19:47:40.000Z',
					createdBy: 60,
					updatedAt: '2021-09-02T19:56:21.000Z',
					updatedBy: 60,
					lowerLimit: null,
					upperLimit: null,
					description: 'Generic Area Prep Place Holder',
					isUtilisation: 0,
					limitCategory: {
						id: 20,
						data: [
							{
								colour: '008000',
								isDefect: false,
								question: 'YES'
							},
							{
								colour: 'ff0000',
								isDefect: false,
								question: 'NO'
							},
							{
								colour: '0000ff',
								isDefect: false,
								question: 'N/A'
							}
						],
						name: 'Yes-No-NA',
						createdAt: '2021-05-20T06:03:48.000Z',
						createdBy: 26,
						updatedAt: '2021-05-20T06:03:48.000Z',
						updatedBy: null,
						description: 'buttonList',
						orderNumber: 7,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3123,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101297',
				order: 7,
				images: '[]',
				instructions: '<p>CHECK - Box for debris</p>',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3124,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101298',
				order: 8,
				images: '[]',
				instructions: '<p>SAMPLE-Engine Oil</p>',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3125,
				createdAt: '2021-09-03 07:21:18',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:18',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101299',
				order: 9,
				images: '[]',
				instructions:
					'<p>SAMPLE - LH and RH Front Wheel Hubs and Visually Inspect Condition of Oil</p>',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3126,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101300',
				order: 10,
				images: '["/upload/image-1630613019664anjc8.png"]',
				instructions:
					'<p>LH and RH Front Wheel magnetic plugs - Remove dirty plugs and take picture using iPad with the Dingo Inspection app from the Toolcrib.</p><p><br /></p><p>Instructions on how to use app are available in the toolcrib and manual room.</p><p><br /></p><p><br /></p><p>____ Complete</p><p><br /></p><p>IPad Passcode is 5555</p>',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3127,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101301',
				order: 11,
				images: '[]',
				instructions: '<p><br /></p>',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3128,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12614',
				uniqueJobOperationId: '',
				stepNumber: '101296',
				order: 12,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Running Checks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3129,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101302',
				order: 13,
				images: '[]',
				instructions:
					'<p>DRAIN OIL and REMOVE FILTERS - Engine oil</p><p><br /></p><p><br /></p><p>Engine oil changed every PM, including on trucks with spinners COF/SCF</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3130,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101303',
				order: 14,
				images: '[]',
				instructions:
					'<p>REMOVE- Primary Fuel Filter (H20 Separator) and secondary fuel filter</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3131,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101304',
				order: 15,
				images: '[]',
				instructions: '<p> REPLACE- FILTER- Steering system</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3132,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101305',
				order: 16,
				images: '[]',
				instructions:
					'<p>REPLACE-Steering and Fan Oil Return filter</p><p><br /></p><p>340-0406 </p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3133,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101306',
				order: 17,
				images: '["/upload/image-16306131361289tklq.png"]',
				instructions:
					'<p>Hook up differential filter cart and run for a minimum of 12 hours.</p><p>HE finals (blue) have seperated oil from the differential. As such we need to filter the differential oil only between drain/fill.</p><p><br /></p><p>COMMENT</p><p>Post filter samples are showing good improvments in filtration but still not meeting CAT spec for ISO. We are increasing the filtration requirements to 12 hours.</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3134,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101307',
				order: 18,
				images: '[]',
				instructions:
					'<p>LH and RH Final Drive magnetic plugs - Remove dirty plugs and inspect</p><p><br /></p><p><br /></p><p><br /></p><p>_____ No debris noted</p><p><br /></p><p>_____ Debris found, notify supervisor.  Ensure supervisor sends picture to reliability group for further review.</p>',
				stepLimitData: {
					id: 385,
					data: {},
					file: null,
					name: 'Generic Pass/Fail',
					operator: null,
					createdAt: '2021-09-02T20:08:50.000Z',
					createdBy: 60,
					updatedAt: '2021-09-02T20:09:21.000Z',
					updatedBy: 60,
					lowerLimit: null,
					upperLimit: null,
					description: 'Generic Pass/Fail',
					isUtilisation: 0,
					limitCategory: {
						id: 9,
						data: null,
						name: 'Pass / Fail',
						createdAt: '2020-12-04T10:22:11.000Z',
						createdBy: null,
						updatedAt: '2020-12-04T10:22:11.000Z',
						updatedBy: null,
						description: 'passfail',
						orderNumber: 4,
						isTableLimit: 1
					},
					isTableTemplate: 0,
					stepLimitCondition: null
				},
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3135,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101308',
				order: 19,
				images: '[]',
				instructions: '<p>Sample differential oil after 12 hours on filter cart</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3136,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101309',
				order: 20,
				images: '["/upload/image-16306134204411ykkc.png"]',
				instructions:
					'<p>Hook up hydraulic filter cart and run for a minimum of 6 hours.</p><p><br /></p><p>Improved filtration to help extend both oil and component life. Current samples not meeting CAT specs for cleanliness but oil is still stable.</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3137,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101310',
				order: 21,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3138,
				createdAt: '2021-09-03 07:21:19',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:19',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101311',
				order: 22,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3139,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12615',
				uniqueJobOperationId: '',
				stepNumber: '101312',
				order: 23,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks - 3 Do the other stuff',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3140,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101313',
				order: 24,
				images: '[]',
				instructions:
					'<p>REPLACE FILTERS- Engine Oil and Filters: cut inspect and report abnormal wear. Drain the rear sump.</p><p><br /></p><p>Caution: Leave all plastic covering on paper filters to prevent until install to prevent contamination</p><p><br /></p><p>Test filers on: 54,55,61-65,70</p><p><br /></p><p>340-6283 </p><p>394-4550 Test</p><p><br /></p><p>Cut &amp; Inspect Filter [Circle Condition]     Normal     Warning       Critical </p><p><br /></p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3141,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101314',
				order: 25,
				images: '[]',
				instructions: '<p>Retorque engine oil drain</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3142,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101315',
				order: 26,
				images: '[]',
				instructions:
					'<p>REPLACE- Primary Fuel Filter (H20 Separator)</p><p><br /></p><p>1R0755 </p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3143,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101316',
				order: 27,
				images: '[]',
				instructions:
					'<p>REPLACE- Secondary Fuel Filter</p><p><br /></p><p>316-9954 </p><p><br /></p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3144,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101317',
				order: 28,
				images: '[]',
				instructions: '<p>DRAIN-Fuel Tank Water and Sediment</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3145,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101318',
				order: 29,
				images: '[]',
				instructions: '<p>REPLACE- Torque Converter Outlet Screen </p><p><br /></p><p>6E-1473 </p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3146,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101319',
				order: 30,
				images: '[]',
				instructions: '<p>CLEAN- BOTH Transmission Mag Screens</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3147,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101320',
				order: 31,
				images: '[]',
				instructions:
					'<p>Pump Drive magnetic plug - Remove  and inspect magnetic plug</p><p><br /></p><p><br /></p><p><br /></p><p>_____ No debris noted</p><p><br /></p><p>_____ Debris found, notify supervisor.  Ensure supervisor sends picture to reliability group for further review.</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3148,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101321',
				order: 32,
				images: '[]',
				instructions:
					'<p>REPLACE- Rear Axle Filter</p><p><br /></p><p>328-3655 </p><p><br /></p><p>Cut &amp; Inspect Filter [Circle Condition]     Normal     Warning       Critical </p><p><br /></p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3149,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101322',
				order: 33,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3150,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12616',
				uniqueJobOperationId: '',
				stepNumber: '101323',
				order: 34,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3151,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101324',
				order: 35,
				images: '[]',
				instructions: '<p>CHECK OIL LEVEL- Powered Stairway 10w Oil is used for steps now. </p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3152,
				createdAt: '2021-09-03 07:21:20',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:20',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101325',
				order: 36,
				images: '[]',
				instructions: '<p>GREASE PIVOTS-Powered Stairway</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3153,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101326',
				order: 37,
				images: '[]',
				instructions: '<p>Fill Engine with Oil</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3154,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101327',
				order: 38,
				images: '[]',
				instructions: '<p>Fill Steering Oil After Filter Change</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3155,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101328',
				order: 39,
				images: '[]',
				instructions:
					'<p>GREASE - 4 Bar Links. (Manifold w/grease points located on the Lift Cylinder Cross Member)</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3156,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101329',
				order: 40,
				images: '[]',
				instructions: '<p>INSPECT - Grease Filter Indicator showing Red, Clean if Red</p>',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3157,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101330',
				order: 41,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3158,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101331',
				order: 42,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3159,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101332',
				order: 43,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3160,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101333',
				order: 44,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			},
			{
				id: 3161,
				createdAt: '2021-09-03 07:21:21',
				createdBy: 26,
				updatedAt: '2021-09-03 07:21:21',
				updatedBy: null,
				completedAt: null,
				status: 'Not Started',
				data: {
					krackData: []
				},
				jobOperationNumber: '12617',
				uniqueJobOperationId: '',
				stepNumber: '101334',
				order: 45,
				images: '[]',
				instructions: '',
				stepLimitData: null,
				title: 'Lower Zone Tasks',
				advices: [],
				completedBy: null,
				isNested: 0,
				file: null,
				attachedDefect: null,
				defects: []
			}
		],
		strategyTask: {
			id: 5077,
			createdAt: '2021-09-03 05:44:27',
			createdBy: 60,
			updatedAt: '2022-06-03 07:21:02',
			updatedBy: 26,
			lastBuiltAt: null,
			notes: '',
			componentCode: '',
			context: 'Standard',
			counter: '0',
			name: '1500HR Service Man Shane Cow',
			position: '1500HR Service Man',
			frequency: 1500,
			isStrategyTask: 1,
			isArchived: 0,
			labourHours: 0,
			duration: 0,
			costSource: 1,
			repairCost: 0,
			functionalDescription: '',
			functionalFailure: '',
			documentGrouping: null,
			externalId: ''
		},
		customer: {
			id: 28,
			createdAt: '2021-08-11 15:05:55',
			createdBy: 26,
			updatedAt: '2021-10-12 07:15:06',
			updatedBy: 54,
			code: 'LCO',
			customerName: 'Teck',
			customerDescription: null,
			customerContactName: '',
			customerSite: 'Line Creek Operations',
			projectStatus: null,
			active: 1,
			clientErp: null,
			clientEmail: '',
			clientPhone: '',
			equipStructure: null,
			erpNotes: null,
			flocPrefix: null,
			loadSheets: null,
			maintPlans: null,
			materialCatalogue: null,
			materialRec: null,
			pmSheets: null,
			projectDescription: '',
			strategyDef: null,
			taskBom: null,
			workInstructions: null,
			clientDocName: '',
			customerLogo: '/upload/image-1629379476025lli1s.png',
			documentType: 'docx',
			isWorkOrderFinalisationRequired: 1,
			isReportRequired: 0,
			autoAssignWorkOrderNumber: 0,
			enableWorkOrderIntegration: 0,
			enableDefectIntegration: 0,
			preDownloadAppWorkOrderData: 0,
			parentId: null
		},
		customerAssetList: {
			id: 287,
			createdAt: '2021-09-03 07:15:15',
			createdBy: 26,
			updatedAt: '2023-05-23 14:42:52',
			updatedBy: null,
			assetName: 'geoffs truck',
			serialNumber: '',
			assetFloc: 'Geoffs Truck',
			assetFlocDescription: null,
			sortField: '',
			siteArea: 'FRO MAINT HD SHOP',
			constructionType: '',
			mainWorkCentre: '',
			plannerGroup: '',
			abcIndicator: '',
			catalogueProfile: '',
			startDate: '2021-09-03 10:00:00',
			startUtilisation: 0,
			isDisposed: 0,
			disposedAt: null,
			customer: {
				id: 28,
				createdAt: '2021-08-11 15:05:55',
				createdBy: 26,
				updatedAt: '2021-10-12 07:15:06',
				updatedBy: 54,
				code: 'LCO',
				customerName: 'Teck',
				customerDescription: null,
				customerContactName: '',
				customerSite: 'Line Creek Operations',
				projectStatus: null,
				active: 1,
				clientErp: null,
				clientEmail: '',
				clientPhone: '',
				equipStructure: null,
				erpNotes: null,
				flocPrefix: null,
				loadSheets: null,
				maintPlans: null,
				materialCatalogue: null,
				materialRec: null,
				pmSheets: null,
				projectDescription: '',
				strategyDef: null,
				taskBom: null,
				workInstructions: null,
				clientDocName: '',
				customerLogo: '/upload/image-1629379476025lli1s.png',
				documentType: 'docx',
				isWorkOrderFinalisationRequired: 1,
				isReportRequired: 0,
				autoAssignWorkOrderNumber: 0,
				enableWorkOrderIntegration: 0,
				enableDefectIntegration: 0,
				preDownloadAppWorkOrderData: 0,
				parentId: null
			},
			model: {
				id: 111,
				createdAt: '2021-08-20 06:42:42',
				createdBy: 26,
				updatedAt: '2021-08-20 06:42:42',
				updatedBy: null,
				class: 'Haul Truck',
				modelNumber: '793F TRAINING',
				serialNumberPrefix: '',
				isTemplate: 0,
				image: '/img/model_icons/793F.jpg',
				life: 0,
				utilisation: 0,
				documentGrouping: [],
				taskGrouping: 'strategyTaskSystemId',
				strategyDescription: '',
				strategyReviewFrequency: 12,
				manufacturer: {
					id: 14,
					createdAt: '2018-09-05 03:22:13',
					createdBy: null,
					updatedAt: '2019-08-20 09:19:46',
					updatedBy: null,
					name: 'Caterpillar'
				}
			}
		},
		workOrderType: {
			id: 1,
			type: 'Planned',
			createdAt: '2021-11-26 15:59:19',
			createdBy: null,
			updatedAt: '2021-11-26 15:59:19',
			updatedBy: null
		},
		users: [
			{
				id: 60,
				createdAt: '2021-07-24 06:53:25',
				createdBy: 27,
				updatedAt: '2022-06-07 09:09:52',
				updatedBy: 26,
				firstName: 'Shane',
				lastName: 'Mackay',
				active: 1,
				email: 'shane.mackay.test@teck.com',
				mobilePhone: '',
				workPhone: '2503206804',
				companyName: null,
				signatureImage: null,
				accountType: null,
				isVisible: 1,
				isTwoFaEnabled: 0
			}
		],
		sequenceNumber: 0,
		progress: {
			percent: 0,
			total: '0 / 45'
		}
	}
];
