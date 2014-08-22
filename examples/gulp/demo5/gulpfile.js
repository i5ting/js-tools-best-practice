var gulp = require('gulp');

gulp.task('default', function() {
  gulp.watch('./src/**/*', ['src']);
});

gulp.task('src', function(done) {
	console.log('gulp watch log info : src directory changed.');
});