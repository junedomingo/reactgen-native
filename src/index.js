#!/usr/bin/env node --harmony
var colors = require('colors');
var program = require('commander');
var writeFileP = require('write-file-p');
var fileExists = require('file-exists');

if (fileExists('.env')) {
	var dotenv = require('dotenv').config();
	var defaultRootPath;
	defaultRootPath = (process.env.REACTGEN_DEFAULT_ROOT_PATH ? `./${process.env.REACTGEN_DEFAULT_ROOT_PATH}` : '.');
	generate(defaultRootPath);
} else {
	defaultRootPath = '.';
	generate(defaultRootPath);
}

function generate(defaultRootPath) {
	program
		.version('1.0.0')
		.option('-P, --presentational', 'Create Inline function component')
		.option('-C, --container', 'Create class-based component')
		.arguments('<filename> <directory>')
		.action(function(filename, directory) {
			if (program.presentational) {
				writeFileP(`./${defaultRootPath}/${directory}/${filename}.js`, require('./templates/presentional.js')(filename), (error, info) => {
					if (error) {
						console.error('Failed', error);
					} else {
						console.log(`${filename}.js component(presentaional) has been created to ${defaultRootPath}/${directory}/`.yellow);
					}
				});
			}

			if (program.container) {
				writeFileP(`./${defaultRootPath}/${directory}/${filename}.js`, require('./templates/container.js')(filename), (error, info) => {
					if (error) {
						console.error('Failed', error);
					} else {
						console.log(`${filename}.js component(container) has been created to ${defaultRootPath}/${directory}/`.yellow);
					}
				});
			}
		}).parse(process.argv);

		// Default
		if (!process.argv.slice(2).length) {
			program.outputHelp();
		}
}
