import { httpRouter } from 'https://deno.land/x/toruk@0.3.0/mod.ts';
import { getRoutes } from './getRoutes.ts';

export const router = httpRouter({
	routes: await getRoutes(),
});
