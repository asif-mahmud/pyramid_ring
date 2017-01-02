/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:sass', function () {
    gulp.watch(helper.root('sass', '/**/*'), ['build:sass']);
});