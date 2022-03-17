$( document ).ready(function() {	
	
// menu							 
$('.navigation nav').meanmenu();	


// scroll up
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 500) {
		$(".scrollTop").addClass("pop");
	}else{
		$(".scrollTop").removeClass("pop");
	}
}); 
$('.scrollTop').click(function(){ 
		$('html,body').animate({ scrollTop: 0 },1000);
		return false; 
});



//Scrolling Text
$('#marquee-vertical').marquee();  
$('#marquee-horizontal').marquee({direction:'horizontal', delay:0, timing:50}); 

/*Load more content with jQuery */   
/*$(".hmOnlineCourses .row [class*='col-']").slice(0, 4).show();
$(".loadMore").on('click', function (e) {
	e.preventDefault();
	$(".hmOnlineCourses .row [class*='col-']:hidden").slice(0, 2).slideDown();
	if ($(".hmOnlineCourses .row [class*='col-']:hidden").length == 0) {
		$(".loadMore").fadeOut('slow');
	}
	//$('.hmOnlineCourses').animate({
		//scrollTop: $(this).offset().top
	//}, 1500);
});*/

	
	
//youtubeSlider
$('.youtubeSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  speed: 800,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
	{
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
	]
}); 

//testimo-slider
$('.testimo-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 600,
  arrows: true,
  autoplaySpeed: 22000,
  autoplay: true,
  adaptiveHeight: true
});


if($(window).width() > 767){
$(window).scroll(function(){
    $(".bannerBox").css("opacity", 1 - $(window).scrollTop() / 600);
});
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
	
	// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");

	
	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	
});

//malihu jquery custom scrollbar
(function($){	
	if ($(window).width() >= 639) {
        $(window).on("load",function(){		 
            $(".reviewList").mCustomScrollbar();
        });			
	}
})(jQuery);



// Equal height
$(function() {
   $('.courseCont p').matchHeight();
   $('.courseCont').matchHeight();
   $('.courseIcon').matchHeight();
   $('.courseBox').matchHeight();
   $('.course-eql-height').matchHeight();
   $('.OnlineCourseCont h3').matchHeight();
   $('.OnlineCourseCont').matchHeight();
   $('.OnlineCoursePic').matchHeight();
   $('.OnlineCourseBx').matchHeight();
   $('.reviewBox').matchHeight();
   $('.youtubePic').matchHeight();
   $('.studntsWorldCont').matchHeight();
   $('.studntsWorldIcon').matchHeight();
   $('.studntsWorldBx').matchHeight();
   $('.udemyCourseCont h3').matchHeight();
   $('.udemyCourseCont').matchHeight();
   $('.udemyCoursePic').matchHeight();
   $('.udemyCourseBox').matchHeight();
   $('.about-eql-js').matchHeight();
   $('.contact-eql-height').matchHeight();
   $('.project-equal-height').matchHeight();
   $('.projectCont').matchHeight();
   $('.projectPic').matchHeight();
   $('.projectBox').matchHeight();
   
});

// SB
/*
$(function(){
	$('#psSubmitButton').click(function(e){ 
    	//e.preventDefault();
		var psName = $("#psName").val();
		var psEmail = $("#psEmail").val();
		$.ajax({
		  method: "POST",
		  url: "getPS.php",
		  dataType : 'json',
		  data: { psName: psName, psEmail: psEmail }
		 })
		 .done(function( msg ) {
			alert( "Data Saved: " + msg );
	    });
	});
});
*/