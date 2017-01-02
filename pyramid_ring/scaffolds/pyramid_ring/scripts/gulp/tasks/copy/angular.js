/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('copy:angular.js', function () {
    return gulp.src([helper.root('node_modules', 'angular', 'angular.min.js')])
        .pipe(gulp.dest(helper.root('dist', 'vendor')));
});