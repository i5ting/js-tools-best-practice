# Express



## 如何解决跨域问题？

首先安装cors npm

	npm install --save cors
	
然后在express里使用

	var cors = require('cors')
	var app = express();
  ....
	app.use(cors());
	
可以测试了