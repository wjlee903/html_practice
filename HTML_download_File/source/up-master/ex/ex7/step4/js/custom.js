﻿$(document).ready(function(){

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
	//각각의 section에서 마우스를 움직이면
	$("section").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
		$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
		$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });		
	
		//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
		$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
		//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
		$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
		$(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
		//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
		$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });	
	});
	
});















