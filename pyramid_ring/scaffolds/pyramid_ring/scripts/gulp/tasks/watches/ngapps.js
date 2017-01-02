/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var helper = require('../../../helpers.js');
var runSequence = require('run-sequence');

gulp.task('watch:ngapps', function () {
    gulp.watch(helper.root('ngapps', 'home/**'), ['build:homeApp']);
});