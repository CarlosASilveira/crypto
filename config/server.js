var express = require('express');
var consign = require('consign');

var app = express();

consign()
    .include('app/modules')
    .into(app);

module.exports = app;