var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat  = require('gulp-concat');

gulp.task('concat', function() {
	gulp.src('../../../src/*.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = ".min.js"
		}))
		.pipe(concat('lt_all.min.js'))
		.pipe(gulp.dest('dist'));
});
gulp.task('default',['concat'])