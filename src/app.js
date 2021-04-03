const express = require('express')
const app = express()

const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
    res.status(200).send("Hello world!");

  /* res.render(__dirname + '/form.html');*/
});

module.exports = app

//test zmiany