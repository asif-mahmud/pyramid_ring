/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');

gulp.task('watch', ['clean', 'copy:angular.js', 'build', 'watch:sass', 'watch:ngapps']);