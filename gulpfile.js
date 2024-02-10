var gulp = require('gulp')
const { watch, series } = require('gulp');
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var reload = browserSync.reload; 


function convertcss(){
    return gulp.src('./src/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css/'))
}

exports.convertcss = convertcss


function convertPug() {
    return gulp.src('./src/*.pug')
        .pipe(pug({
                pretty: true,
                doctype: 'html'
            }))
        .pipe(gulp.dest('./dist/'))
};

exports.convertPug = convertPug

function moveJs(){
    return gulp.src('./src/assets/js/*.js')
        .pipe(gulp.dest('./dist/assets/js/'))
}

exports.moveJs = moveJs

exports.default = function() {
    watch(["./src/*.pug","./src/assets/scss/*.scss", "./src/**/*.js"], series(convertcss,convertPug, moveJs )).on("change", reload);
};