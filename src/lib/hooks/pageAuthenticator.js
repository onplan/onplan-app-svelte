import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import { APP_PATHNAMES } from '$lib/utils/constants';
import { page } from '$app/stores';
import authUser from '$lib/stores/authUser';

/**
 * Check if user is authenticated or guest and redirect if necessary
 *
 */
async function redirect() {
	const currentPath = get(page)?.url?.pathname;
	const user = get(authUser);

	if (currentPath) {
		if (user) {
			// Authenticated user
			if (currentPath === APP_PATHNAMES.login) {
				console.log(`AUTH USER: Redirect the user to ${APP_PATHNAMES.index} page......`);
				await goto(APP_PATHNAMES.index);
			}
		} else {
			// Guest user
			if (currentPath !== APP_PATHNAMES.login) {
				console.log(`GUEST USER: Redirect the user to ${APP_PATHNAMES.login} page......`);
				await goto(APP_PATHNAMES.login);
			}
		}
	}
}

// Listen to the `page` and `authUser` stores changes
page.subscribe(() => redirect());
authUser.subscribe(() => redirect());
