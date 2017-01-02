/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', ['clean'], function () {
    runSequence([
        'copy:angular.js',
        'build',
        'watch:sass',
        'watch:ngapps'
    ]);
});