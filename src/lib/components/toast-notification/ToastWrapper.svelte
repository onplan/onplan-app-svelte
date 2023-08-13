<script>
	import Notifications from 'svelte-notifications';
	import NotificationContext from './NotificationContext.svelte';
	import Template from './Template.svelte';
</script>

<!--
  @component
  Toast Wrapper, this is like React's HOC (Higher Order Component)

  This component injects the Toast notifications holder in the DOM.
  
  Utilizes the `svelte-notifications` library.
-->
<Notifications zIndex="2000" item={Template}>
	<NotificationContext>
		<slot />
	</NotificationContext>
</Notifications>
