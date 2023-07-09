/**
 * Service Worker Communicator (SW)
 *
 * This is used by main thread to send and receive message to `service-worker.js`
 *
 * Uses BroadcastChannel and EventEmitter API
 *
 */

import EventEmitter from 'events';

/**
 * Service worker actions
 *
 * Action names that can be triggered in SW thread to get data.
 *
 */
const SW_ACTIONS = {
	getOfflineAssetsInfo: 'getOfflineAssetsInfo'
	// ...
};

const CHANNEL_NAME = 'onplan-app-svelte';

const swCommunicator = new EventEmitter();
const channel = new BroadcastChannel(CHANNEL_NAME);

/**
 * Listen to upcoming SW messages
 *
 */
channel.addEventListener('message', (event) => {
	const {
		data: { fromSW, actionName, payload }
	} = event;

	if (fromSW) {
		if (SW_ACTIONS[actionName]) {
			// emit the SW payload to the `actionName` listeners
			swCommunicator.emit(SW_ACTIONS[actionName], payload);
		} else {
			console.error(`sw-communicator: Action "${actionName}" does not exists (sent by SW)`);
		}
	} else {
		console.log('Receive message from other tabs/windows: ', payload);
	}
});

/**
 * Request an Action to SW
 *
 * @param {string} actionName - SW Action name
 * @param {* | undefineed} reqPayload - Optional request payload
 */
swCommunicator.requestToSw = (actionName, reqPayload = null) => {
	channel.postMessage({
		fromSW: false,
		actionName,
		payload: reqPayload
	});
};

export {
	CHANNEL_NAME,
	SW_ACTIONS,

	/**
	 * How to use `swCommunicator`:
	 *
	 * 
	  	// Part 1: Listen to `action name` event
		swCommunicator.on('getOfflineAssetsInfo', function (swPayload) {
			// Process service worker payload/data
		});

		// Part 2: Request `action name` data from SW 
		swCommunicator.requestToSw('getOfflineAssetsInfo');

		// Note: You need to listen first to SW `action name` before requesting.
	 *
	 *
	 */
	swCommunicator
};
