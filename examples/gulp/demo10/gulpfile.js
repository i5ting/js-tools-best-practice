var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function() {
	gulp.watch(['../../../src/*.html'],['html'])
});
gulp.task('connect',function(){
	connect.server({
		root:'aaa',
		livereload:true
	})
})
gulp.task('html',function(){
	gulp.src('../../../src/*.html').pipe(connect.reload());
})
gulp.task('default',['connect','watch'])