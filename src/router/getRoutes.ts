import { Route } from 'https://deno.land/x/toruk@0.3.0/router/types.ts';
import { getLinks } from './getLinks.ts';

export async function getRoutes(): Promise<Route[]> {
	const links = await getLinks();

	return Object.entries(links).map(([path, redirectLink]) => ({
		path,
		handler: async () => {
			const linkResponse = await fetch(redirectLink);

			const response = new Response(linkResponse.body);

			for (const [name, value] of linkResponse.headers.entries()) {
				if (!new RegExp('Content-Disposition', 'i').test(name)) {
					response.headers.set(name, value);
				}
			}

			return response;
		},
	}));
}
