$(document).ready(function(){	
	/*返回顶部*/
	$('#top,#topS').click(function(){
			$("html, body").animate({
      			scrollTop:"0px"
    		},{
      			duration: 400,
      			easing: "swing"
    		});
	})
	$('.sn-quick-menu li>a').hover(function(){
			$(this).css('color',' rgb(255,0,52)');
		},function(){
			$(this).css('color',' #888');
		})
		$('.sn-quick-menu>li:eq(6)').hover(function(){
			$('.sn-quick-menu>li:eq(6)>div>div').css('display','block');
		},function(){
$('.sn-quick-menu>li:eq(6)>div>div').css('display','none');
		})
		$('.sn-quick-menu>li:eq(4)').hover(function(){
			$('.sn-quick-menu>li:eq(4)>div>div').css('display','block');
		},function(){
$('.sn-quick-menu>li:eq(4)>div>div').css('display','none');
		})
		$('.sn-quick-menu>li:eq(1)').hover(function(){
			$('.sn-quick-menu>li:eq(1)>div>div').css('display','block');
		},function(){
$('.sn-quick-menu>li:eq(1)>div>div').css('display','none');
		})
		$('.sn-quick-menu>li:eq(0)').hover(function(){
			$('.sn-quick-menu>li:eq(0)>div>div').css('display','block');
		},function(){
$('.sn-quick-menu>li:eq(0)>div>div').css('display','none');
		})
		$('.MemberBenefitsSP').hover(function(){
			$(this).css('background-color','red');
			$(this).children().eq(1).removeClass('H').addClass('S').show(0);
		},function(){
			$(this).css('background-color','');
			$(this).children().eq(1).removeClass('S').addClass('H').delay(360).hide(0);
			//$(this).children().eq(1).removeClass('S').hide(150);
		})
		$('.shoppingTrolleySP').hover(function(){
			$(this).css('background-color','red');
			$(this).children().children().eq(0).css('color','#fff');
			/*$('.shoppingTrolleySP font:eq(0)').css('color','#fff');*/
		},function(){
			$(this).css('background-color','');
			$(this).children().children().eq(0).css('color','red');
		})
		var sz;
		$('.NwckNavigation li').hover(function(){
			//console.log($('.NwckNavigation li').index(this))
			if($('.NwckNavigation li').index(this)%2==0/*获取当前是这个类型的第几个*/){
				$(this).css({'background-color':'rgb(255,255,255)','color':'rgb(237,121,160)'});
				$(this).children().css('color','rgb(237,121,160)');
			}else{
				$(this).css({'background-color':'rgb(255,255,255)','color':'rgb(88,140,241)'});
				$(this).children().css('color','rgb(88,140,241)');
			}
			sz=$(this);
			$('.NwckMasking').show(0);
			$('.advertising').hide(0);
			$('.slider-nav').hide(0);
		},function(){
			$(this).css({'background-color':'','color':''});
			$(this).children().css('color','');
			$('.NwckMasking').hide(0);
			$('.advertising').show(0);
			$('.slider-nav').show(0);
		})
		$('.NwckMasking').hover(function(){
			if($('.NwckNavigation li').index(sz[0])%2==0/*获取当前是这个类型的第几个*/){
				sz.css({'background-color':'rgb(255,255,255)','color':'rgb(237,121,160)'});
				sz.children().css('color','rgb(237,121,160)');
			}else{
				sz.css({'background-color':'rgb(255,255,255)','color':'rgb(88,140,241)'});
				sz.children().css('color','rgb(88,140,241)');
			}
			$(this).show(0);
			$('.advertising').hide(0);
			$('.slider-nav').hide(0);
		},function(){
			sz.css({'background-color':'','color':''});
			sz.children().css('color','');
			$(this).hide(0);
			$('.advertising').show(0);
			$('.slider-nav').show(0);
		})

		//图片轮播
		var imgS=['img/TB1QGHgjf2H8KJjy1zkSutr7pXa.jpg','img/TB11z4ejBfH8KJjy1XbSuvLdXXa.jpg_q100.jpg_.webp','img/TB2HEMpcQfb_uJjSsD4XXaqiFXa_!!63-0-luban.jpg_q100.jpg_.webp'];
		var bgColor=['10,12,37','123,56,216','98,16,18'];
		var iS=1;
		var NimgA=$('.NwckRecommend div:eq(0)');
		var NimgB=$('.NwckRecommend div:eq(1)');
		function ImgCarousel(){
			if(iS==0){
				NimgA.html('<a href="#"><img src="img/TB2W987i7fb_uJjSsrbXXb6bVXa_!!169-2-lubanu.png_240x5000q100.jpg_.webp" alt=""></a>');
				NimgB.html('<a href="#"><img src="img/TB2GmDGj4TI8KJjSspiXXbM4FXa_!!46-2-lubanu.png_240x5000q100.jpg_.webp" alt=""></a>');
			}
			if(iS==1){
				NimgA.html('<a href="#"><img src="img/TB2jorNaPb.heNjSZFAXXchKXXa_!!105-2-lubanu.png_294x430q100.jpg_.webp" alt=""></a>');
				NimgB.html('<a href="#"><img src="img/TB2L6hVkf6H8KJjy0FjXXaXepXa_!!38-2-lubanu.png_294x430q100.jpg_.webp" alt=""></a>');
			}
			if(iS==2){
				NimgA.html('<a href="#"><img src="img/TB2yFR_jxPI8KJjSspoXXX6MFXa_!!122-2-lubanu.png_294x430q100.jpg_.webp" alt=""></a>');
				NimgB.html('<a href="#"><img src="img/TB20GwXdXLM8KJjSZFBXXXJHVXa_!!114-2-luban.png_294x430q100.jpg_.webp" alt=""></a>');
			}
			$('.NeckImg').css('background-color','rgb('+bgColor[iS]+')');
			$('.Nimg').css('background-image','url('+imgS[iS]+')');
			$('.slider-nav li').css('background-color','rgba(126,126,126,.6)');
			$('.slider-nav li').eq(iS).css('background-color','rgba(255,255,255,.6)');
			if(iS++>=(imgS.length-1)) iS=0;
		}
		window.setInterval(ImgCarousel,5000);
		$('.slider-nav li').hover(function(){
			iS=$('.slider-nav li').index(this);
			ImgCarousel();
		})


		//HomeBody
		$('.RecommendDrand>div').hover(function(){
			$(this).children().eq(0).children().eq(0).show(0);
		},function(){
			$(this).children().eq(0).children().eq(0).hide(0);
		})
		$('.borderRed').hover(function(){
			$(this).css('border',' 1px solid rgba(255,0,52,.8)');
		},function(){
			$(this).css('border',' 1px solid rgba(255,255,255,.8)');
		})

		/* item body */
		/*jQuery的鼠标移入与移出事件
		移入：mouseover与mouseenter
		移出：mouseout与mouseleave
		*/
		$('.bodyIA_d2_A>div:nth-child(1)>img').hover(function(){
			$('.bodyIA_d2_A>div:nth-child(1)>div').show(0);
		},function(){
			$('.bodyIA_d2_A>div:nth-child(1)>div').hide(0);
		})
		$('.bodyIA_d2_A>div:nth-child(1)>ul img').mouseenter(function(){
			$('.bodyIA_d2_A>div:nth-child(1)>img').attr('src',$(this).attr('src'));
		})
})