// OG GULP FILE

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var minify = require('gulp-minify-css');

gulp.task('og', function() {
	gutil.log('- - = = O G = = - -')
});

gulp.task('sass', function() {
	gulp.src('styles/main.scss')
	.pipe(sass({style: 'compressed'}))
		.on('error', gutil.log)
	.pipe(gulp.dest('www/css'))
	.pipe(connect.reload())
});

gulp.task('js', function() {
	gulp.src('scripts/*.js')
	.pipe(uglify())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('www/js'))
	.pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('styles/components/*.scss', ['sass']);
  gulp.watch('www/index.html', ['html']);
});

gulp.task('html', function() {
  gulp.src('www/*.html')
  .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  })
});

gulp.task('minify', function() {
	gulp.src('www/css/main.css')
	.pipe(minify())
	.pipe(gulp.dest('www/css'))
});

gulp.task('default', ['og', 'html', 'js', 'sass', 'connect', 'watch']);