Gulp
======================

## 什么是Gulp

gulp.js 是一种基于流的，代码优于配置的新一代构建工具。

Gulp 和 Grunt 类似。但相比于 Grunt 的频繁的 IO 操作，Gulp 的流操作，能更快地完成构建。

## Gulp安装

Gulp基于 Node.js 

	npm install -g gulp
	npm install —-save-dev gulp

##  hello world

create gulpfile and run hello world demo

	var gulp = require('gulp');
	
	gulp.task('default', function() {
		console.log('hello world')
	});

then run

```
gulp
```

## custom task with name `compress`

	var gulp = require('gulp');

	gulp.task('compress', function() {
		console.log('hello world')
	});

then run

```
gulp compress
```

## use uglify plugin

now we need to minify the js files,so we need uglify plugin

### 安装 gulp-uglify

	npm install gulp-uglify --save-dev
	
## `--save-dev` 

see package.json

```
{
	devDependences:{
		'gulp-uglify':'*'
	}
}
```

this mean ....

## use in gulpfile

	var gulp = require('gulp');
	var uglify = require('gulp-uglify');
	
	gulp.task('default', function() {
		gulp.src('src/*.js')
			.pipe(uglify())   //压缩js
			.pipe(gulp.dest('dist'))
	});
	
NOTE

- require
- usage
	
then run

```
gulp 
```

then open dist dir

```
open dist
```

check if lt_tab.js is compressed.
	
## use rename plugin

we found its name is not `*.min.js`,so we need to rename the compressed result file name.

use gulp-rename npm 

## 安装 gulp-rename

	npm install gulp-rename --save-dev
	
## `--save-dev` 

see package.json

```
{
	devDependences:{
		'gulp-rename':'*'
	}
}
```

this mean ....

## use in gulpfile

	var gulp = require('gulp');
	var uglify = require('gulp-uglify');
	var rename = require('gulp-rename');
	
	
	gulp.task('default', function() {
		gulp.src('src/*.js')
			.pipe(uglify())   //压缩js
			.pipe(rename(function (path) {
				path.extname = ".min.js"    //重命名压缩后的js
			}))
			.pipe(gulp.dest('dist'))
	});
	
then run

```
gulp 
```

then open dist dir

```
open dist
```

check if lt_tab.min.js is existed.

## 使用watch

说明watch是内置的task，用于监控文件变动

	var gulp = require('gulp');

	gulp.task('default', function() {
	  gulp.watch('./src/**/*', ['src']);
	});

	gulp.task('src', function(done) {
		console.log('gulp watch log info : src directory changed.');
	});

启动gulp,然后修改index.js，控制台输入`gulp watch log info : src directory changed.`即代表成功


```
 demo5 git:(master) ✗ gulp 
[21:43:10] Using gulpfile ~/Workspace/github/js-tools-best-practice/gulp-demo/demo5/gulpfile.js
[21:43:10] Starting 'default'...
[21:43:10] Finished 'default' after 11 ms
[21:43:17] Starting 'src'...
gulp watch log info : src directory changed.
```

## 作业依赖

看demo6，和demo5的代码基本上一样

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

注意

	gulp.task('default',['watch'],function() {
		console.log('default task');
	});


这里的task有3个参数，

1. default是方法名称，只有default比较奇怪，会默认调用。相当于c里的main方法
1. `['watch']`这是依赖的作业列表，它们是由顺序的，按数组顺序依次执行
1. 第三个参数是成功执行完上面的依赖作业后执行的回调函数

改一下：

	gulp.task('default',['watch','task_2','task_3'],function() {
		console.log('依赖作业终于执行完了，下面是我的舞台....');
	});

## concat

合并代码

	var gulp = require('gulp');
	var uglify = require('gulp-uglify');
	var rename = require('gulp-rename');
	var concat  = require('gulp-concat');

	gulp.task('default', function() {
		gulp.src('src/*.js')
			.pipe(uglify())
			.pipe(rename(function (path) {
				path.extname = ".min.js"
			}))
			.pipe(concat('trans.min.js'))
			.pipe(gulp.dest('toc/js'));
	});

说明：会把src下得每个js都压缩，然后concat合并成一个trans.min.js，并放到toc/js目录下面

## use with shelljs

see demo 8


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

需求：我需要把lib下的所有js文件，放到toc/lib下，查看http://gulpjs.com/plugins/无和cp或copy有关的插件，so

用shell写的

	cp -rf  lib/* toc/lib/
 
需要用到shelljs

	cp('-R', 'lib/*', 'toc/lib/');

是不是很简单啊？


ShellJS is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API. You can use it to eliminate your shell script's dependency on Unix while still keeping its familiar and powerful commands. You can also install it globally so you can run it from outside Node projects - say goodbye to those gnarly Bash scripts!

http://documentup.com/arturadib/shelljs



## reload usage

## write a gulp plugin



## read gulp source


## node stream

	
## concution

.....


## url

- [grunt](gruntjs.org)
- [gulp plugins](http://gulpjs.com/plugins/)
- [gulp-uglify](https://www.npmjs.org/package/gulp-uglify/)
- [gulp-rename](https://www.npmjs.org/package/gulp-rename/)
- [Gulp.js：比 Grunt 更简单的自动化的项目构建利器](http://www.tuicool.com/articles/n2Uj2y)
- [官方网站](http://gulpjs.com/)
- [使用文档](https://github.com/wearefractal/gulp/ )
- [插件列表](http://gratimax.github.io/search-gulp-plugins/)
- [Grunt Gulp 战斗法师](http://zhuanlan.zhihu.com/TLA42/19711450)
- [awesome-9-gulp-plugins/](http://blog.nodejitsu.com/npmawesome-9-gulp-plugins/)