import { fileURLToPath } from 'node:url';
import fastifyCompress from '@fastify/compress';
import fastifyCookie from '@fastify/cookie';
import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyMiddie from '@fastify/middie';
import fastifyStatic from '@fastify/static';
import { masqr } from '@rubynetwork/corlink-fastify';
import chalk from 'chalk';
import Fastify from 'fastify';
import isDocker from 'is-docker';
//@ts-ignore THE FILE IS GENERATED AT FUCKING BUILD WHY WOULD I WANT IT TYPE CHECKED
import { handler as ssrHandler } from '../dist/server/entry.mjs';
import { serverFactory } from './serverFactory';

const app = Fastify({ logger: false, serverFactory: serverFactory });

await app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET || 'e',
    parseOptions: {}
});
if (process.env.MASQR === 'true') {
    await app.register(masqr, {
        deniedFilePath: fileURLToPath(new URL('./denied.html', import.meta.url)),
        unlockedPaths: ['/bare/', '/wisp/'],
        whiteListedURLs: [],
        masqrUrl: 'https://corlink.example.com/validate?license=',
        builtinCookieParser: false
    });
}
await app.register(fastifyCompress, {
    encodings: ['br', 'gzip', 'deflate']
});
await app.register(fastifyStatic, {
    root: fileURLToPath(new URL('../dist/client', import.meta.url))
});
await app.register(fastifyMiddie);
await app.register(fastifyHttpProxy, {
    upstream: 'https://rawcdn.githack.com/ruby-network/ruby-assets/main/',
    prefix: '/gms/',
    http2: false
});
app.use(ssrHandler);
let port: number;
if (isDocker()) {
    port = 8080;
} else {
    port = parseInt(process.env.PORT as string);
}
console.log(chalk.green(`Server listening on ${chalk.bold('http://localhost:' + port)}`));
console.log(chalk.magenta(`Server also listening on ${chalk.bold('http://0.0.0.0:' + port)}`));

app.listen({ port: port, host: '0.0.0.0' });
