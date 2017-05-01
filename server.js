'use strict'

const fs = require('fs');
const express = require('express');
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

const conString = process.env.DATABASE_URL + 'portfolioServer';
const client = new pg.Client(conString);

client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/', (request, response) => response.sendFile('index.html', { root: './' }));
app.get('/about', (request, response) => response.sendFile('index.html', { root: './' }));

app.listen(PORT, function () {
  console.log(`Your server is now running on port ${PORT}`);
});
