'use strict'

const fs = require('experess');
const express = require('express');
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser').urlencoded({ extended: false });
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function () {
  console.log(`Your server is now running on port ${PORT}`);
});
