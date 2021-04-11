// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const next = require('next')

const dev = false
const app = next({ dev })

const handle = app.getRequestHandler()

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/brcadv.com/chain.pem', 'utf8');

const options = {
	key: privateKey,
	cert: certificate,
	ca: [ca]
};

app.prepare().then(() => {
    https.createServer(options, (req, res) => {
    	// const parsedUrl = parse(req.url, true);
    	// handle(req, res, parsedUrl);
	res = "hello world"
    }).listen(80, err => {
        if (err) throw err
    })
})
