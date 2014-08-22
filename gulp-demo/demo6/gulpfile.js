var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var paths = {
	scripts:['../../src/*.js']
}

gulp.task('scripts',['uglify'], function() {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = ".min.js"
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('watch',function () {
	gulp.watch(paths.scripts,[scripts])
});

gulp.task('default',['watch','scripts']);