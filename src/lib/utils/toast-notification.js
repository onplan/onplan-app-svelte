let notificationContext = null;

/**
 * Called inside `lib/components/toast/Controller.svelte`
 * since context can only be created inside a component
 *
 */
const setNotificationContext = (contextObject) => {
	notificationContext = contextObject;
	// notificationContext.subscribe((notifs) => console.log('> Notifications: ', notifs));
};

/**
 * Show App notifications.
 *
 * This uses `svelte-notifications` library API, but customized
 * Read more: https://www.npmjs.com/package/svelte-notifications
 *
 * @param options - Toast options
 * @param options.id - Optional identifier. Use for programatic closing of the toast.
 * @param options.position - One of these values: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`
 * @param options.type - One of these values: `success`, `info`, `warning`, `error`
 * @param options.heading - Heading text.
 * @param options.headingRight - Optional. Heading text on the right.
 * @param options.description - Optional. Description text
 * @param options.removeAfter - Optional. Millisecond before removing the toast.
 * @param options.boostrapIcon - Optional. Bootstrap icon name Eg: `bi-check` . See https://icons.getbootstrap.com for the list of icons
 *
 */
const toast = (options) => {
	if (!notificationContext) {
		console.error('toast(): notificationContext not ready.');
	}
	notificationContext?.addNotification({ ...options });
};

/**
 * Close a toast/notification
 * @param {*} id Toast id
 */
const closeToast = (id) => {
	if (!notificationContext) {
		console.error('closeToast(): notificationContext not ready.');
	}
	notificationContext?.removeNotification(id);
};

/**
 * Close all floating toasts
 */
const clearAllToasts = () => {
	if (!notificationContext) {
		console.error('clearAllToasts(): notificationContext not ready.');
	}
	notificationContext?.clearNotifications();
};

export { toast, closeToast, clearAllToasts, setNotificationContext };
