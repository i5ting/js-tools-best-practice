//引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');

//创建watch任务去检测文件的改动
gulp.task('watch', function () {
    gulp.watch(['../../../src/*.html'], ['html']);
});
//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: '../../../src',
        livereload: true
    });
});
//调用要执行的任务
gulp.task('html', function () {
    gulp.src('../../../src/*.html').pipe(connect.reload());
});

//运行任务
gulp.task('default', ['connect', 'watch']);
