/**
 * @class class for install button
 * @dev this may seem a little overkill, but the beforeinstallprompt could fire on either
 * the login screen or the index screen (depending on where the user lands first)
 * we only get one chance to capture this prompt and this seemed like a nice way to capture/use on either page
 */
class InstallButton {
	constructor() {
		this.prompt = null;
	}

	/**
	 * Attach listener and assign event to this.prompt
	 */
	static attachListener() {
		window.addEventListener('beforeinstallprompt', (e) => {
			// Stop default chrome action
			e.preventDefault();

			// Stash event to be used later
			this.prompt = e;
		});
	}

	/**
	 * Trigger install prompt for user to install PWA
	 */
	static async installPWA() {
		if (typeof this.prompt === 'undefined') {
			InstallButton.fireAlreadyInstalledSwal();

			return;
		}

		const response = await this.prompt.prompt();

		// Response undefined means the app is already installed
		if (typeof response === 'undefined') {
			InstallButton.fireAlreadyInstalledSwal();
		}
	}

	/**
	 * Fires off already installed Swal
	 * saves us repeating this
	 */
	static fireAlreadyInstalledSwal() {
		// Todo: transfer this to modal
		alert('App Already Installed - Uninstall OnPlan, refresh page and try again');
		// Swal.fire({
		// 	type: 'info',
		// 	title: 'App Already Installed',
		// 	text: 'Uninstall OnPlan, refresh page and try again'
		// });
	}
}

export default function installPWA() {
	InstallButton.installPWA();
}
