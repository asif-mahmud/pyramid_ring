/**
 * Created by shimon on 1/2/17.
 */
var gulp = require("gulp");
var rmdir = require("gulp-clean");
var helper = require('../../helpers.js');

gulp.task('clean', function () {
    var dist = helper.root('dist');
    return gulp.src(dist).pipe(rmdir());
});