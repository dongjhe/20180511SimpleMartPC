$(function() {

    //選館別換顏色
    $(".nav_area ul li a").click(function() {
        $(this).addClass('font_bg_color').parents("li").siblings().children('a').removeClass('font_bg_color')
            // return false
    })

    //各館頁籤切換樣式
    $(".shelfblock nav ul li a").click(function() {
        $(this).addClass("act").parents("li").siblings().children('a').removeClass("act")
    })



    // 購物車開關區塊
    var x
    var TT
    $(".goshop_area h2>a").mouseenter(function() {
        TT = setTimeout(blackgoshop, 250)
    })

    $(".goshop_area ").mouseleave(function() {
        clearTimeout(TT)
        $(".shoppinglist").stop(true, true).fadeOut('fast')
    })

    function blackgoshop() {
        $(".shoppinglist").stop(true, true).fadeIn()

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

        if (i > 0) {
            i = i - 1
            $(this).parents("li").remove()
            if (i == 4) {
                $(".shoppinglist .list").removeClass('Beyond')
            }
            if (i == 0) {
                $(".shoppinglist").css("display", 'none')
            }
        }
    });

    // 加入購物車
    $("#addshop").click(function() {
        $(".Success_added").css("display", 'block')

        $(".Success_added").delay(300).stop(true).animate({
            top: -145,
            right: 0,
            opacity: 0,
        }, 700, ainmdel)
    });

    function ainmdel() {
        $(".Success_added").removeAttr('style')

    }

    // 選擇美廉社卡號
    $(".cardnumber ul li").click(function() {
        $(this).addClass("number_act").siblings().removeClass("number_act")
    })

    // 退貨申請原因開關
    $(".returninput p").click(function() {
        $(this).parents(".returninput").siblings(".returnitem").stop(true, true).slideToggle()
    })
    $(".returnitem li").click(function() {
            $(this).parents(".returnitem").find("li").removeClass("add")
            $(this).addClass("add").parents(".returnitem").stop(true, true).slideUp()


            $(this).parents(".returnitem").siblings(".returninput").find("p").html($(this).html())

            if ($(this).html() == "其他") {
                $(this).parents(".returnitem").siblings(".returninput").find("textarea").delay(200).fadeIn()
            } else {
                $(this).parents(".returnitem").siblings(".returninput").find("textarea").css('display', 'none');
            }
        })
        // $(".count button").click(function(){
        // 	$(this).parents(".left").siblings(".right").css('display', 'block');
        // })

    // 收件人資訊選櫃點變色
    $(".maplist li").click(function() {
        $(this).css('background-color', '#E0E0E0').siblings().css('background-color', '');
    })

    // 訂單明細表格收合區塊
    $(".listitle a").click(function() {
        $(this).toggleClass("act")
        $(this).parents(".listitle").siblings(".listcont").stop(true, true).slideToggle()
        $(this).parents(".listitle").siblings(".recipient_information").stop(true, true).slideToggle()
    })

    // 取消訂單按扭區塊
    $(".schedule .nono").click(function() {
        $(".blackblack1").css('display', 'block')
        return false
    })

    $(".black").click(function() {
        $(".blackblack1").fadeOut()
    });
    $(".blackblack1 .contentbox .yes button").eq(0).click(function() {
        $(".blackblack1").fadeOut()
    })
    $(".blackblack1 .contentbox .yes button").eq(1).click(function() {
        $(".blackblack1").fadeOut()
    })

    // 退貨訂單按扭區塊
    $(".schedule .return").click(function() {
        $(".blackblack2").css('display', 'block')
        return false
    })
    $(".black").click(function() {
        $(".blackblack2").fadeOut()
    });
    $(".blackblack2 .contentbox .yes button").eq(0).click(function() {
        $(".blackblack2").fadeOut()
    })
    $(".blackblack2 .contentbox .yes button").eq(1).click(function() {
        $(".blackblack2").fadeOut()
    })

    // 查詢物流進度按扭區塊
    $(".recipient_information .logistics_progress").click(function() {
        var textArea = document.createElement("textarea");
        textArea.value = $(this).prev('span').text();
        textArea.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        document.execCommand("Copy")

        $(this).parents(".box").siblings(".blackblack3").css('display', 'block')
        return false
    })
    $(".recipient_information .black").click(function() {
        $(".blackblack3").fadeOut()
    });

    $(".recipient_information .blackblack3 .nono").click(function() {
        $(".blackblack3").fadeOut()
    })

    $(".recipient_information .blackblack3 .gogo").click(function() {
		
		$(".recipient_information .blackblack3").fadeOut()
        var logistics = $(this).parents(".blackblack3").siblings(".box").find(".logistics").text()

        switch (logistics) {
            case "順風速運":
                window.open('http://www.sf-express.com/tw/tc/dynamic_functions/waybill/')
                break;
            case "宅配通":
                window.open('https://www.e-can.com.tw/search_Goods.aspx')
                break;
            case "黑貓宅急便":
                window.open('https://www.t-cat.com.tw/inquire/trace.aspx')
                break;
            case "新竹物流":
                window.open('https://www.hct.com.tw/Default.aspx')
                break;
            case "嘉里大榮":
                window.open('http://www.kerrytj.com/zh/')
                break;
            case "中華郵政":
                window.open('http://postserv.post.gov.tw/pstmail/main_mail.html')
                break;
            case "便利帶":
                window.open('http://www.4128777.tw/Search.php')
                break;
            case "全速配":
                window.open('http://www.fsdex.com.tw/Default.aspx')
                break;
            case "錸乾物流":
                window.open('http://ec.qtrans.com.tw/')
                break;
            case "超峰快遞":
                window.open('http://www.express.com.tw/tools/positchecking.aspx')
                break;
            case "晉越快遞":
                window.open('http://www.byondex.com/')
                break;
            case "好運袋":
                window.open('http://www.luckyexpress.com.tw/')
                break;
            case "DHL":
                window.open('http://www.dhl.com.tw/zt/express/tracking/tracking_tools.html')
                break;
            case "UPS":
                window.open('https://www.ups.com/WebTracking/track?loc=zh_TW')
                break;
        }



    })



    // 完成訂購頁(訂購明細的高度判斷)
    var order_right_height = $(".order_right").outerHeight(true)
    $(".order_left").height(order_right_height)


    $(".listcont h3").click(function() {
        $(this).toggleClass("act");
        $(this).parents(".listcont").find(".schedule").stop(true, true).fadeToggle(400);
        $(this).parents(".listcont").find(".status").stop(true, true).fadeToggle(400);

    })


    // 打開加入會員浮層
    $(".buyhelp h2 a , .member_Login h1 a").click(function(event) {
        $(".alertbox").css('display', 'block');
    });



    // 會員步驟介紹下一步
    $(".step .finger a").click(NEXT)

    var N = 0,
        step_li_length = $(".step ul li").length

    function NEXT() {

        if (N < step_li_length - 1) {
            N += 1;
            console.log(N)
        } else {
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


    // 退貨流程按鈕切換
    $('.return_process_bt a, .buyhelp_bt a').on('click',function(){
        
        $(this).addClass('active').siblings('a').removeClass('active');

        let index_of = $(this).index();

        if (index_of === 0) {
           
           $('.area1').css('display', 'block');
           $('.area2').css('display', 'none');

        }else{

           $('.area1').css('display', 'none');
           $('.area2').css('display', 'block');

        }

    })


    // 搜尋結果區塊
    $('.menulist > a').on('click',function(){
        $('.menulist').toggleClass('active');
    })

    $('.menulist li').on('click',function(){
        $('.menulist > a').html($(this).text() +'<b></b>')
        $('.menulist').toggleClass('active');
    })


})