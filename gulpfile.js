const gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', () => {

    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
        
});


gulp.task('pug', () => {

    return gulp.src('src/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/'))
                
});



