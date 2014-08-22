var gulp = require('gulp');

gulp.task('default',['watch'],function() {
	console.log('default task');
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['src']);
});

gulp.task('src', function(done) {
	console.log('gulp watch log info : src directory changed.');
});