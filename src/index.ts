import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { router } from './router/router.ts';

serve(router);
