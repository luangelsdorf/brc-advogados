// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const next = require('next');
const { parse } = require('url');
const dev = false;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use((req, res) => {
	const parsedUrl = parse(req.url, true);
    	handle(req, res, parsedUrl);
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
