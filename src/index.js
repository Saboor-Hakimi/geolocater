/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  // cloudflare worker entry point
  async fetch(request, env, ctx) {
    // the /ip endpoint returns the IP address of the request
    if (request.url.endsWith('/ip')) {
      return new Response(
        JSON.stringify({
          ip:
            // get the IP address of the request client from the request headers
            request.headers.get('CF-Connecting-IP'),
        })
      );
    } else {
      // return a json response that health is ok
      return new Response(JSON.stringify({ status: 'ok' }));
    }
  },
};
