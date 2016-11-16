$(function(){
	$("#sinaLogo").mouseover(function(){
		 $(this).attr({
			    "src" : "images/sinaL.png"
			  });
	});
	$("#sinaLogo").mouseout(function(){
		 $(this).attr({
			    "src" : "images/sinaW.png"
			  });
	});
	$("#bilibiliLogo").mouseover(function(){
		 $(this).attr({
			    "src" : "images/bilibiliL.png"
			  });
	});
	$("#bilibiliLogo").mouseout(function(){
		 $(this).attr({
			    "src" : "images/bilibili.png"
			  });
	});

});
