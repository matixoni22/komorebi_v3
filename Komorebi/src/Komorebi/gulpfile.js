/// <binding BeforeBuild='sass' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

//var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');

var paths = {
    webroot: "./wwwroot/"
};

paths.scss = paths.webroot + "css/**/*.scss";

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.webroot + "css"));
});

