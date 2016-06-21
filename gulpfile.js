/**
 * Created by kemy on 17/04/2016.
 */
var gulp = require('gulp');
var react = require('gulp-react');
var stream = require('webpack-stream');
var named = require('vinyl-named');

var webpackConfig = {
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/,loader: "babel-loader"}
        ]
    }
};

gulp.task('webpack', function() {
    return gulp.src('jsx/index.js')
        .pipe(named(function (file) {
            return 'bundle';
        }))
        .pipe(stream(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default',['webpack'],function () {
    gulp.watch("./jsx/**/*.js",['webpack']);
});