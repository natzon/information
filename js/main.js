// 轮播效果
$(function(){
	var i = 0;
	var clone = $(".hot-news_pic .all-pic li").first().clone();
	var clone2 =$(".hot-news .hot-news-cover li").first().clone();
	$(".hot-news .hot-news-cover").append(clone2);
	$(".hot-news_pic .all-pic").append(clone);
	var size =  $(".hot-news_pic .all-pic li").length;
	for(var j = 0;j<size-1;j++){
		$(".hot-news_pic .num").append("<li></li>");

	}
	$(".hot-news_pic .num li").first().addClass("on");
	// 向左的按钮
	$(".hot-news_pic .btn_r").click(function(){
		i++;
		move()
	})
	// 向坐按钮
	$(".hot-news_pic .btn_l").click(function(){
		i--;
		move();
	})

	//hover
	$(".hot-news_pic .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".hot-news_pic .all-pic").stop().animate({left:-636*index},500);
		$(".hot-news .hot-news-cover").stop().animate({left:-1200*index},500);
		$(this).addClass("on").siblings().removeClass("on");
	})

	// 自动轮播
	var t = setInterval(function(){
		i++;
		move();
	},3000);
	// 对定时器的操作
	$(".hot-news_pic").hover(function(){
		clearInterval(t);
	},function(){
	    t = setInterval(function(){
		i++;
		move();
	},3000);
	})

	// 向右函数
	function move(){
		if (i == size) {
			$(".hot-news_pic .all-pic").css({left:0});
			$(".hot-news .hot-news-cover").css({left:0});
			i = 1;
		}
		if (i == -1) {
			$(".hot-news_pic .all-pic").css({left:-(size-1)*637});
			i = size-2;
		}

		$(".hot-news_pic .all-pic").stop().animate({left:-636*i},500);
		$(".hot-news .hot-news-cover").stop().animate({left:-1200*i},500);

		
		if (i==size-1) {
			$(".hot-news_pic .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".hot-news_pic .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
	}

})