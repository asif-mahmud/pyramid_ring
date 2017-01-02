/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');

gulp.task('build', [
    /* Add your app build scripts here */
    'build:homeApp',

    /* Build the stylesheet */
    'build:sass'
    ]
);