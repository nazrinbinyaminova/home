$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$("#listBtn").attr("class", "lnr lnr-cross")
			$(".dropBtn").slideDown();
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});
});



$(window).ready(function(){
	$(".topBtn").click(function() {
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});
})
$(window).ready(function(){
	$(".process").click(function() {
		$("body").animate({
			scrollTop: 1350,
		}, 1500);
	});
})


$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});



    $(".uls").draggable({
      cursor: "move", 
    	containment: "parent",
    	  stop: function() {
      if(jQuery(".uls").position().left < 10){
          jQuery(".uls").css("left", "190px");
      }else if(jQuery(".uls").position().left > 180){
          jQuery(".uls").css("left", "190px");
      }
  
    } 
    });
  
count= [1,2,3,4]
  		
  $(window).ready(function(){
  	$("#Success").click(function(){
  		for (i=0; i<10; i++){
  		$(".interval").text(count[4])
  		}
  	})
  	
})
$(window).ready(function(){
	function myTopSlide(){
	$(".img2").hide();
	$(".img1").show();
	$(".img1").animate({
	    width: "120%",
	    bottom:"-200px",
	    left: "-200px",
	}, 8000, function(){
		$(".img1").hide(),
		$(".img2").show(),
		$(".img2").animate({
	    width: "110%",
	    bottom:"-100px",
	    left: "-100px"
	}, 8000)
	}
	)
}setInterval(myTopSlide,2000)
});

var imgWidth=$(".caseStudentSlide img").width();
sumWidth=-imgWidth;
$(window).ready(function(){
	function mySlide(){
	var iteration=2*imgWidth;
	
		$(".caseStudentSlide").animate({
			left: sumWidth+"px",
		}, 2000)
		sumWidth-=imgWidth;
		if(sumWidth<-iteration){
			sumWidth=0;
		}
	
}setInterval(mySlide, 1000)
})

var sliderBtn=document.querySelectorAll(".sliderBtn");
sumWidth=-imgWidth;
$(".sliderBtn").click(function(){
	$(".caseStudentSlide").animate({
		left: sumWidth+"px"
	})
	sumWidth-=imgWidth;
})




   
