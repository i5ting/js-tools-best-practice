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
	
## concution

.....


## url

- [grunt](gruntjs.org)
- [gulp plugins](http://gulpjs.com/plugins/)
- [gulp-uglify](https://www.npmjs.org/package/gulp-uglify/)
- [gulp-rename](https://www.npmjs.org/package/gulp-rename/)


