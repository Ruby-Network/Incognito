import { createServer } from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import wisp from 'wisp-server-node';
import { routeRhRequest, routeRhUpgrade, shouldRouteRh } from './rammerhead';

function initBareServer() {
    if (process.env.BARE_SERVER_ENABLED === 'true') {
        const bare = createBareServer('/bare/');
        return bare;
    }
}

const bare = initBareServer();

const serverFactory = (handler: any) => {
    return createServer()
        .on('request', (req: any, res: any) => {
            if (req.url.startsWith('/rammer')) {
                req.url = req.url.replace('/rammer', '');
            }
            if (bare?.shouldRoute(req)) {
                bare?.routeRequest(req, res);
            } else if (shouldRouteRh(req)) {
                routeRhRequest(req, res);
            } else {
                handler(req, res);
            }
        })
        .on('upgrade', (req: any, socket: any, head: any) => {
            if (req.url.startsWith('/rammer')) {
                req.url = req.url.replace('/rammer', '');
            }
            if (bare?.shouldRoute(req)) {
                bare?.routeUpgrade(req, socket, head);
            } else if (shouldRouteRh(req)) {
                routeRhUpgrade(req, socket, head);
            } else if (req.url?.endsWith('/wisp/')) {
                wisp.routeRequest(req, socket, head);
            }
        });
};

export { serverFactory };
