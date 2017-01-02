/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var plugin = require('gulp-load-plugins')();
var prefix = require('gulp-autoprefixer');
var helper = require('../../../helpers.js');

gulp.task('build:sass', function () {
    return gulp.src(helper.root('sass', 'main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(plugin.rename('style.min.css'))
        .pipe(gulp.dest(helper.root('dist', 'css')));
});