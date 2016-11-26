var express = require('express');
var router = express.Router();
var hr5711 = require('../models/hr5711.js');
var hr5982 = require('../models/hr5982.js');
var mhr5711 = require('../models/mhr5711.js');
var mhr5982 = require('../models/mhr5982.js');
var s3110 = require('../models/s3110.js');


router.get('/hr5711', function (req, res) {
	hr5711.all(function (data) {
		var hbsObject = { hr5711: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.get('/hr5982', function (req, res) {
	hr5982.all(function (data) {
		var hbsObject = { hr5982: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.get('/mhr5711', function (req, res) {
	mhr5711.all(function (data) {
		var hbsObject = { mhr5711: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.get('/mhr5982', function (req, res) {
	mhr5982.all(function (data) {
		var hbsObject = { mhr5982: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.get('/s3110', function (req, res) {
	s3110.all(function (data) {
		var hbsObject = { s3110: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});







