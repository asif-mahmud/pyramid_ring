/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function () {
    runSequence([
        'copy:angular.js',
        'build'
    ]);
});