import { json } from '@sveltejs/kit';

/**
 * This endpoint is used by the App for confirming a REAL online status,
 * additional checking "with window.navigator.onLine" in the client side
 *
 * Endpoint: /api/check-online-status
 */
export function GET() {
	return json({ online: true });
}
