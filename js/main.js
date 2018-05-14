$(function(){

	//選館別換顏色
	$(".nav_area ul li a").click(function(){
		$(this).addClass('font_bg_color').parents("li").siblings().children('a').removeClass('font_bg_color')
		// return false
	})

	//各館頁籤切換樣式
	$(".shelfblock nav ul li a").click(function(){
		$(this).addClass("act").parents("li").siblings().children('a').removeClass("act")
	})



	// 購物車開關區塊
	var x
	var TT
	$(".goshop_area h2>a").mouseenter(function(){
		TT = setTimeout(blackgoshop,250)
	})

	$(".goshop_area ").mouseleave(function(){
		clearTimeout(TT)
		$(".shoppinglist").stop(true,true).fadeOut('fast')
	})

	function blackgoshop(){
		$(".shoppinglist").stop(true,true).fadeIn()

		// x = $(".shoppinglist .list").outerHeight()
		// if (x > 440) {
		// 	$(".shoppinglist .list").addClass('Beyond')
		// }else {
		// 	return
		// };	

	}



	// 刪除訂單資訊
	var i = $(".list ul li").length
	$(".list .del").click(function() {

		  if ( i > 0 ) {
		    i=i-1
		    $(this).parents("li").remove()
			   if ( i == 4) {
			    $(".shoppinglist .list").removeClass('Beyond')
			   } 
			   if ( i == 0 ) {
				$(".shoppinglist").css("display",'none')
			   }
		  } 
	});

	// 加入購物車
	$("#addshop").click(function(){
		$(".Success_added").css("display",'block')

		$(".Success_added").delay(300).stop(true).animate({
			top:-145,
			right:0,
			opacity:0,
		},700,ainmdel)
	});

	function ainmdel(){
		$(".Success_added").removeAttr('style')

	}

	// 選擇美廉社卡號
	$(".cardnumber ul li").click(function(){
		$(this).addClass("number_act").siblings().removeClass("number_act")
	})

	// 退貨申請原因開關
	$(".returninput p").click(function(){
		$(this).parents(".returninput").siblings(".returnitem").stop(true,true).slideToggle()
	})
	$(".returnitem li").click(function(){
		$(this).parents(".returnitem").find("li").removeClass("add")
		$(this).addClass("add").parents(".returnitem").stop(true,true).slideUp()
		
		
		$(this).parents(".returnitem").siblings(".returninput").find("p").html($(this).html())

		if ($(this).html() == "其他") {
			$(this).parents(".returnitem").siblings(".returninput").find("textarea").delay(200).fadeIn()
		}else {
			$(this).parents(".returnitem").siblings(".returninput").find("textarea").css('display', 'none');
		}
	})
	// $(".count button").click(function(){
	// 	$(this).parents(".left").siblings(".right").css('display', 'block');
	// })

	// 收件人資訊選櫃點變色
	$(".maplist li").click(function(){
		$(this).css('background-color', '#E0E0E0').siblings().css('background-color', '');
	})

	// 訂單明細表格收合區塊
	$(".listitle a").click(function(){
		$(this).toggleClass("act")
		$(this).parents(".listitle").siblings(".listcont").stop(true,true).slideToggle()
		$(this).parents(".listitle").siblings(".recipient_information").stop(true,true).slideToggle()
	})

	// 取消訂單按扭區塊
	$(".schedule .nono").click(function(){
		$(".blackblack1").css('display', 'block')
		return false
	})

	$(".black").click(function() {
		$(".blackblack1").fadeOut()
	});
	$(".blackblack1 .contentbox .yes button").eq(0).click(function(){
		$(".blackblack1").fadeOut()
	})
	$(".blackblack1 .contentbox .yes button").eq(1).click(function(){
		$(".blackblack1").fadeOut()
	})	

	// 退貨訂單按扭區塊
	$(".schedule .return").click(function(){
		$(".blackblack2").css('display', 'block')
		return false
	})
	$(".black").click(function() {
		$(".blackblack2").fadeOut()
	});
	$(".blackblack2 .contentbox .yes button").eq(0).click(function(){
		$(".blackblack2").fadeOut()
	})
	$(".blackblack2 .contentbox .yes button").eq(1).click(function(){
		$(".blackblack2").fadeOut()
	})

	// 查詢物流進度按扭區塊
	$(".logistics_progress").click(function(){
		$(".blackblack3").css('display', 'block')
		return false
	})
	$(".black").click(function() {
		$(".blackblack3").fadeOut()
	});
	$(".blackblack3 .contentbox .yes button").eq(0).click(function(){
		$(".blackblack3").fadeOut()
	})
	$(".blackblack3 .contentbox .yes button").eq(1).click(function(){
		$(".blackblack3").fadeOut()
	})





	// 完成訂購頁(訂購明細的高度判斷)
	var order_right_height = $(".order_right").outerHeight(true)
	$(".order_left").height(order_right_height)


	$(".listcont h3").click(function(){
		$(this).toggleClass("act");
		$(this).parents(".listcont").find(".schedule").stop(true,true).fadeToggle(400);
		$(this).parents(".listcont").find(".status").stop(true,true).fadeToggle(400);
		
	})


	// 打開加入會員浮層
	$(".buyhelp h2 a , .member_Login h1 a").click(function(event) {
		$(".alertbox").css('display', 'block');
	});



	// 會員步驟介紹下一步
	$(".step .finger a").click(NEXT)

	var N = 0 , step_li_length = $(".step ul li").length

	function NEXT(){

		if (N < step_li_length - 1) {
		    N += 1;
		    console.log(N)
		}else{
			N = 1;
			console.log(N)
		} 

		$(".step > ul").stop().animate({ left: N * 250 * -1 })

	}

	$(".step span").click(function(event) {
		$(".step > ul").stop().animate({ left: 0 * 250 * -1 })
	});

	$(".closeclose").click(function(event) {
		$(".alertbox").css('display', 'none');
	});

})
