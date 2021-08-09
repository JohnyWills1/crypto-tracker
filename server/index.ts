// #region Global Imports
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnvConfig } from '@next/env';
import express from 'express';
import fs from 'fs';
import https from 'https';
import next from 'next';
// #endregion Global Imports

// Load .env before next() is called. NODE_ENV must be passed via CLI
loadEnvConfig('./', process.env.NODE_ENV !== 'production');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (req, res) => handler(req, res));

    // Evaluate dev when https support on the api is done
    if (dev) {
        const httpsOptions = {
            key: fs.readFileSync(process.env.SSL_KEY_PATH || ''),
            cert: fs.readFileSync(process.env.SSL_CERT_PATH || ''),
        };

        const secureServer = https.createServer(httpsOptions, server);
        secureServer.listen(port);
    } else {
        server.listen(port);
    }

    // eslint-disable-next-line no-console
    console.log(
        `> Server listening at http${dev ? 's' : ''}://localhost:${port} as ${
            dev ? 'development' : process.env.NODE_ENV
        }`,
    );
});
