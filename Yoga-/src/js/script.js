require('nodelist-foreach-polyfill');
require('formdata-polyfill');
require('element-matches-polyfill');
require("@babel/polyfill");

window.addEventListener('DOMContentLoaded', function() {

	'use strict';
		let tabs = require('./parts/tabs.js'),
						timer = require('./parts/timer.js'),
						modal = require('./parts/modal.js'),
						ajaxForm = require('./parts/ajaxForm.js'),
						slider = require('./parts/slider.js'),
						calc   = require('./parts/calc.js');

		tabs();
		timer();
  modal();
		ajaxForm();
		slider();
		calc();

		});