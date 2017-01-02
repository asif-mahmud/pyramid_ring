/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var plugin = require('gulp-load-plugins')();
var helper = require('../../../helpers.js');

gulp.task('build:homeApp', function () {
    return gulp.src(helper.root('ngapps', 'home', 'home-app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(plugin.rename('home-app.min.js'))
        .pipe(gulp.dest(helper.root('dist', 'home')));
});