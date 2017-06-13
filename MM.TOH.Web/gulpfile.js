/// <binding BeforeBuild='clean' AfterBuild='copy:allFiles' Clean='clean' />
"use strict";

var gulp = require('gulp');
var del = require('del');

var config = require('./gulp.config')();

gulp.task("clean", function () {
    return del(config.appDestBase + "*");
});

gulp.task("copy:libs", function () {
    return gulp
        .src(config.libraries, { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task("copy:styles", function () {
    return gulp
        .src(config.styles)
        .pipe(gulp.dest(config.cssDest));
});

gulp.task("copy:appBase", function () {
    return gulp
        .src(config.appBase)
        .pipe(gulp.dest(config.appDestBase));
});

gulp.task("copy:appFiles", function () {
    return gulp
        .src(config.appFiles)
        .pipe(gulp.dest(config.appDest));
});

gulp.task("copy:appScripts", function () {
    return gulp
        .src(config.appScripts)
        .pipe(gulp.dest(config.libDest));
});

gulp.task("copy:allFiles", [
    "copy:libs",
    "copy:styles",
    "copy:appBase",
    "copy:appFiles",
    "copy:appScripts"
]);

gulp.task('default', function () {
    // place code for your default task here
});