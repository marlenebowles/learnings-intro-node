const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mime = require('mime');
/**
 * this function is blocking, fix that
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = name => {
	return new Promise((resolve, reject) => {
		const assetPath = path.join(__dirname, 'assets', name);
		fs.readFile(assetPath, { encoding: 'utf-8' }, (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
};

const hostname = '127.0.0.1';
const port = 3000;

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) =>
	console.log(method, route, status);

app.get('/', async (req, res) => {
	const route = url.parse(req.url).pathname;
	res.set({ 'Content-Type': mime.getType('html') });
	res.status(200).send(await findAsset('index.html'));
	logRequest('get', route, 200);
});

app.get('/style.css', async (req, res) => {
	const route = url.parse(req.url).pathname;
	try {
		res.set({ 'Content-Type': mime.getType('css') });
		res.status(200).send(await findAsset('style.css'));
		logRequest('get', route, 200);
	} catch (err) {
		res.status(404).send('nope');
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
