define(["jquery"],function($){
	function ScrollTo(opts){
		//将用户传递的参数，覆盖默认的参数，生成一个新的对象，然后将新的对象返回出来
		//返回出来的值，通过一个属性 opts 来保存
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
		this.$el = $("html,body");
	}
	ScrollTo.prototype.move = function(){
		console.log(this)
		var opts = this.opts;
		
		//判断如果滚动条不在页面的指定位置
		if($(window).scrollTop() != this.opts.dest){
			//判断页面是否正在滚动
			if(!this.$el.is(':animated')){
				console.log(1)
				this.$el.animate({
					scrollTop: opts.dest
				},opts.speed)
			}
		}
	};
	ScrollTo.prototype.go = function(){
		if($(window).scrollTop() != this.opts.dest){
			this.$el.scrollTop(this.opts.dest);
		}
	};
	//默认参数，如果用户传递参数，就用用户传递的参数，如果用户没有传递参数，就用默认参数
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:800
	}
	return {
		ScrollTo: ScrollTo
	}
})