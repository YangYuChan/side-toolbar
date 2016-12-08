requirejs.config({
	paths:{
		jquery:'jquery.min'
	}
});
requirejs(['jquery','toolbar'],function($,toolbar){
	var scroll = new toolbar.ScrollTo({
		dest:0,
		speed:800
	})
	//默认对象是backTop，使用$.proxy修改this的指向，第一个参数传递要调用的方法，第二个参数传递this的指向，这里指向我们的实例对象scroll
	$("#backTop").on("click",$.proxy(scroll.move,scroll));
	$(window).on("scroll",checkPosition);
	
	function checkPosition(){
		if($(window).scrollTop() > $(window).height()){
			$("#backTop").fadeIn();
		}else{
			$("#backTop").fadeOut();
		}
	}
	checkPosition(); //页面载入的时候就先执行这个方法
})
