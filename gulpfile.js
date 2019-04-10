'use strict';

const ASSETS_DIR = 'dist';
const JS_SRC = [
    'dev/randomQuotes.js',
];

let gulp = require('gulp');
let babel = require('gulp-babel');
let terser = require('gulp-terser');
let eslint = require('gulp-eslint');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let reload = browserSync.reload;

gulp.task('build', ['lint:no-break:es6'], function () {
    return gulp.src(JS_SRC)
        .pipe(concat('randomQuotes.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser({
            output: {
                comments: false
            }
        }))
        .pipe(gulp.dest(ASSETS_DIR));
});


gulp.task('lint:no-break:es6', function () {
    return gulp.src(JS_SRC)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watch', ['build'], function () {
    browserSync({
        notify: true,
        port: 8585,
        reloadDelay: 100,
        browser: 'default',
        server: {
            baseDir: './'
        }
        // proxy: '0.0.0.0:8000'
    });

    gulp.watch('**/*.js', ['build']).on('change', reload);
    gulp.watch('**/*.html').on('change', reload);
});

gulp.task('default', ['build']);
gulp.task('serve', ['watch']);
