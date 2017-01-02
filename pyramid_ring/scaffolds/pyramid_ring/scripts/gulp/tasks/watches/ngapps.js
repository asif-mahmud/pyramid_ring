/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:ngapps', function () {
    /* Add more watches as new apps are included */
    gulp.watch(helper.root('ngapps', 'home/**'), ['build:homeApp']);
});