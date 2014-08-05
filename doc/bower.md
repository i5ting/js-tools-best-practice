了解每个技术是做什么的以及用于什么场景。

bower helloworld

circle ci helloworld

component helloworld

gulp helloworld（grunt helloworld）

npm helloworld

# bower

## bower介绍

Bower 是 'twitter' 推出的一款包管理工具，基于nodejs的模块化思想，把功能分散到各个模块中，让模块和模块之间存在联系，通过 Bower 来管理模块间的这种联系.
bower插件是通过npm, Node.js包管理器安装和管理的.

## 安装bower

	npm install -g bower
	
如权限不足

	sudo npm install -g bower

## 安装js包

	bower install angularjs

## 用bower提交自己的类库


### 1.生成bower.json配置文件

	bower init

### 2.查看生成的文件bower.json

	{
		"name": "tab-plugin",
		"version": "v0.0.0",
		"authors": [
			"kezhizhi <kezhizhi@163.com>"
		],
		"description": "a jquery-plugin",
		"main": "jquery.lt_tab.js",
		"keywords": [
			"tab",
			"plugin"
		],
		"license": "MIT",
		"homepage": "git://github.com/kezhi/tab-plugin.git",
		"dependencies": {
			"jquery": "latests"
		},
		"ignore": [
			"**/.*",
			"node_modules",
			"bower_components",
			"test",
			"tests"
		]
	}

			
### 3.在github创建一个资源库：tab-plugin

### 4.上传到github

	git init

	git add .

	git commit -m "tab-plugin"

	git remote add origin git://github.com/kezhi/tab-plugin.git

	git push -u origin master
	

## 注册到bower官方类库

bower register tab-plugin git@github.com:kezhi/tab-plugin.git

## 查询自己的包

bower search tab-plugin

## 安装自己的包

bower install tab-plugin



