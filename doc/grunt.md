js-tools-best-practice
======================


## To do

These are the new features you should expect in the coming
months:

* [ ] 使用grunt-init jquery创建一个jquery plugin项目（了解插件写法和grunt用法，以及qunit测试）
* [ ] 增加bower
* [ ] 增加componet
* [x] 增加grunt压缩
* [ ] 增加gulp压缩
* [ ] 增加circle ci持续集成
* [ ] 发布到jquery官方网站
* [ ] npm helloworld
* [x] only test the selected todo style and  [git markdown usage](https://github.com/cssmagic/blog/issues/13)

## Author

- write by 柯织
- review by i5ting


## Shared Link

- [awesome-javascript](https://github.com/sorrycc/awesome-javascript)




======================


# gruntjs

Gruntjs是JavaScript项目的构建工具,是通过nodejs的npm包管理器安装管理的，用于合并JS文件，压缩JS文件，单元测试（基于QUnit）

## 安装 CLI

	npm install -g grunt-cli

如权限不足

	sudo npm install -g grunt-cli
		
grunt-cli的作用是调用与gruntfile在同一目录中的grunt，这样带来的好处是，允许你在同一个系统上同时安装多个版本的 grunt。

## 安装Grunt 和 grunt插件

新建一个package.json文件存放于根目录中，内容如下：

	{
	  "name": "js-tools-best-practice",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "^0.4.5",
	    "grunt-contrib-jshint": "~0.6.3",      //js语法检查
	    "grunt-contrib-nodeunit": "~0.2.0",    //合并文件
	    "grunt-contrib-uglify": "~0.2.2"       //压缩
	  }
	}



在根目录下运行：

	npm install
	
将依据package.json文件中所列出的每个依赖来自动安装适当版本的依赖,安装完成后查看根目录，发现多了个node_modules目录，包含了四个子目录

## 新建Gruntfile.js

```

module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
		},
		build: {
			src: 'src/lt_tab.js',
			dest: 'build/lt_tab.min.js'
		}
	}

});

// 加载包含 "uglify" 任务的插件。
grunt.loadNpmTasks('grunt-contrib-uglify');

// 默认被执行的任务列表。
grunt.registerTask('default', ['uglify']);

};
	
```	

## 执行grunt任务

	grunt



## grunt-init

	npm install -g grunt-init

## document


http://www.gruntjs.org/docs/project-scaffolding.html


### 创建一个包含QUnit单元测试的jQuery插件

	git clone https://github.com/gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery

### 创建一个包含Nodeunit单元测试的commonjs模块

	git clone https://github.com/gruntjs/grunt-init-commonjs ~/.grunt-init/commonjs

### 创建一个基本的Gruntfile

	git clone https://github.com/gruntjs/grunt-init-gruntfile ~/.grunt-init/gruntfile

### 创建一个包含Nodeunit单元测试的Grunt插件
 
	git clone https://github.com/gruntjs/grunt-init-gruntplugin ~/.grunt-init/gruntplugin

### 创建一个包含Nodeunit单元测试的Node.js模块

	git clone https://github.com/gruntjs/grunt-init-node ~/.grunt-init/node
	
	
git clone https://github.com/gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery
git clone https://github.com/gruntjs/grunt-init-commonjs ~/.grunt-init/commonjs
git clone https://github.com/gruntjs/grunt-init-gruntfile ~/.grunt-init/gruntfile
git clone https://github.com/gruntjs/grunt-init-gruntplugin ~/.grunt-init/gruntplugin
git clone https://github.com/gruntjs/grunt-init-node ~/.grunt-init/node