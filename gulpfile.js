const fs = require('fs');
const path = require('path');
const { src, dest, watch } = require('gulp');

const minify = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));

const paths = {
	src: {
		css: './assets/css/src/**/*.scss',
		js: './assets/js/src/**/*.js'
	},
	dest: {
		css: './assets/css/dist/css',
		js: './assets/js/dist/js'
	}
}

const compile = () => {
	return src(paths.src.css)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minify())
		.pipe(dest(paths.dest.css));
}

const observe = () => {
	watch(paths.src.css, compile);
}

exports.sass = compile;
exports.build = build;
exports.watch = observe;
