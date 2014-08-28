;(function($){
	/*
	 * dialog 弹出
	 */
	function alertClick(opts){
			$('body').append('<div class="layout"></div>');
			$('body').append('<div class="alert_box"><div class="alert_title"></div><div class="alert_con"></div><ul class="alert_btn"></ul></div>');
			setTimeout(function(){$('.alert_box').addClass('show')},10);
			$('.alert_title').html(opts.title);
			$('.alert_con').html(opts.content);

			//ok按钮
			if(opts.okValue !== undefined){
				$('.alert_btn').append('<li><input class="ok" type="button" value=""/></li>');
				$('.ok').val(opts.okValue);
				$('.ok').on('click',function(){
					opts.okCallback();
				})
			}

			if(opts.cancelValue !== undefined){
				$('.alert_btn').append('<li><input class="cancel" type="button" value=""/></li>');
				$('.cancel').val(opts.cancelValue);
			}

			for(var i in opts.otherBtns){
				$('.alert_btn').append('<li><input class="other" type="button" value=""/></li>');
				$('.other').val(opts.otherBtns[i].otherValue);
				$('.other').on('click',function(){
					opts.otherBtns[i].otherCallback();
				})
			}

			$('.cancel').on('click',opts.cancelCallback);
	}

	/*
	 * dialog 删除
	 */
	$.lt_alert_close = function(){
		$('.layout').remove();
		$('.alert_box').remove();
	}

	$.lt_alert = function(options){
		// 将defaults 和 options 参数合并到{}
		var opts = $.extend({},$.lt_alert.defaults,options);
		/*
		 * 绑定事件
		 */
		alertClick(opts);
	}

	/*
	 * 定义默认
	 */
	$.lt_alert.defaults = {
		title :'',
		content:'',
		okCallback:function(){
		},
		otherBtns:[],
		cancelCallback:function(){
			$.lt_alert_close();
		}
	};

})(Zepto);