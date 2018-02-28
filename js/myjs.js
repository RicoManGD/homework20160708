			var i=0;
			var ss;
			var imgtxtId=["#pictxt01","#pictxt02","#pictxt03","#pictxt04","#pictxt05"];
			var img=[".pic01",".pic02",".pic03",".pic04"];
			$(document).ready(function(){
				var clone=$("#banner .img li").first().clone();
				$("#banner .img").append(clone).attr('id','pictxt05');
				var size=$("#banner .img li").size();
				$("#banner .btn_l").click(function (){
					i++;
					picmove();
				});
				$("#banner .btn_r").click(function (){
					i--;
					picmove();
				});
				//海报动作
				function picmove(){
					if(i==size){
						$("#banner .img").css({left:0});
						i=1;
					}
					if(i==-1){
						$("#banner .img").css({left:-(size-1)*1024});
						i=size-2;
					}
					$("#banner .img").stop().animate({left:-i*1024},1500)
					if (i == size-1) {
                    	$("#banner .num li").eq(0).addClass("on").siblings().removeClass("on");
                	}else{
                		$("#banner .num li").eq(i).addClass("on").siblings().removeClass("on");
                	}
									
				}
				//海报自动轮播
				var ss=setInterval(function(){i++;picmove()},3000);
				//鼠标放入海报停止轮播，放出海报继续轮播
				$("#banner").hover(function(){
					clearInterval(ss);},function(){
						ss=setInterval(function(){i++;picmove()},3000);
					}
				);
				//海报计数点的控制
				$("#banner .num li").hover(function(){
					var index=$(this).index();
					i=index;
					picmove();
				});
				//导航栏
				$("#header_l1").click(function(){
					$("#nav1").fadeIn(500).siblings("nav .nav").hide();
					
					$("nav #sjx").css("border-bottom-color","orangered");
					$("nav #sjx").animate({left:40},300);

				});
				$("#header_l2").click(function(){
					$("#nav2").fadeIn(500).siblings("nav .nav").hide();
					$("nav #sjx").css("border-bottom-color","#058588");
					$("nav #sjx").animate({left:145},300);
				});
				$("#header_l3").click(function(){
					$("#nav3").fadeIn(500).siblings("nav .nav").hide();
					$("nav #sjx").css("border-bottom-color","#102f41");
					$("nav #sjx").animate({left:253},300);
				});
				$("#header_l4").click(function(){
					$("#nav4").fadeIn(500).siblings("nav .nav").hide();
					$("nav #sjx").css("border-bottom-color","#4fbaa0");
					$("nav #sjx").animate({left:360},300);
				});
				$("#header_l5").click(function(){
					$("#nav5").fadeIn(500).siblings("nav .nav").hide();
					$("nav #sjx").css("border-bottom-color","#058588");
					$("nav #sjx").animate({left:465},300);
				});
				//海报介绍
				$(img[0]).hover(function(){
					$(imgtxtId[0]).fadeIn(100);
				},function(){
					$(imgtxtId[0]).hide();
				});
				$(img[1]).hover(function(){
					$(imgtxtId[1]).fadeIn(100);
				},function(){
					$(imgtxtId[1]).hide();
				});
				$(img[2]).hover(function(){
					$(imgtxtId[2]).fadeIn(100);
				},function(){
					$(imgtxtId[2]).hide();
				});
				$(img[3]).hover(function(){
					$(imgtxtId[3]).fadeIn(100);
				},function(){
					$(imgtxtId[3]).hide();
				});

				
			});
