import { type APIRoute } from 'astro';
export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get('Content-Type') === 'application/json') {
        const body = await request.json();
        const query = body.query;
        const res = await fetch(`http://api.duckduckgo.com/ac?q=${query}&format=json`).then(
            (apiRes) => apiRes.json()
        );
        return new Response(JSON.stringify(res), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    return new Response(null, { status: 400 });
};
