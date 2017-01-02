/**
 * Created by shimon on 1/2/17.
 */
var gulp = require("gulp");
var del = require("del");
var helper = require('../../helpers.js');

gulp.task('clean', function (done) {
    var dist = helper.root('dist');
    del([dist])
        .then(function(paths) {
            console.log('Removed : ', paths.join('\n'));
    });
    done();
});