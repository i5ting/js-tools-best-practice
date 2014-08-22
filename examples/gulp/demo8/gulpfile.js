var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat  = require('gulp-concat');

require('shelljs/global');


gulp.task('default', function() {
	gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = ".min.js"
		}))
		.pipe(concat('trans.min.js'))
		.pipe(gulp.dest('toc/js'));
		
	cp('-R', 'lib/*', 'toc/lib/');
});
