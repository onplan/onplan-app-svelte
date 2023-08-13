<script>
	import { getNotificationsContext } from 'svelte-notifications';
	import { setNotificationContext } from '$lib/utils/toast-notification';

	/**
	 * Create `svelte-notifications` context in the most immediate child component of the
	 * svelte-notifications/Notifications wrapper component
	 *
	 * `getNotificationsContext()` can only be called inside a svelte component
	 *
	 */
	const notificationsContext = getNotificationsContext();

	/**
	 * Set/Pass the notification context inside the `src/lib/utils/toast-notification.js` module.
	 *
	 */
	setNotificationContext(notificationsContext);
</script>

<slot />
