$(document).ready(function (){
			$( "#checkin" ).datepicker();
			$( "#checkout" ).datepicker();
		  $("ul.main-nav li a").on('click',function(){
		  		$("ul.main-nav li a").removeClass('active');
				$(this).addClass('active');
		  		var classT = $(this).attr('data');             
				 $('html, body').animate({
					  scrollTop: $("div."+classT).offset().top
				}, 1000);               
			});
		  $("a.book_now_scroll").on('click',function(){
		  		$("ul.main-nav li a").removeClass('active');
				$('a[data="section5"]').addClass('active');
		  		var classT = $(this).attr('data');             
				 $('html, body').animate({
					  scrollTop: $("div."+classT).offset().top
				}, 1000);               
			});
			
			
			/*$('a.menu-icon').click(function(){
				$('ul.main-nav').slideToggle();
			});*/
			
			
			
          $('ul.main-nav li a').click(function(){
				$('ul.main-nav').slideUp();
			});
			  
	$('a.menu-icon').click(function(){
		if($(this).hasClass('active')){
			$(this).find('ul.main-nav').slideUp();	
			$(this).removeClass('active');			
		} else{
			$(this).addClass('active');		
			$(this).parent().find('ul.main-nav').slideDown();
		}
 	}); 

			
			$('ul.photo_collage li').hover(function(){
					$('ul.photo_collage li .zoom-wrapper').hide();
					$(this).find('div.zoom-wrapper').show();
			});
			
			/*$('ul.gallery li').hover(function(){
					$('ul.gallery li div.wrapper').hide();
					$('ul.gallery li div.onhover').show();
					$(this).find('div.onhover').hide();
					$(this).find('div.wrapper').show();
			});*/
			
			$('div.dropdown img').click(function(){
				$('#check-in').trigger( "click" );	
				//$(this).parent().find('select').click();
			});
			
			$('a.enq_btn').click(function(){
				if(validateBookNow()){
					alert(1);
				}
				return false;
			});
			
			$('a#cobourg').click(function(){
					$('div#cobourg').fadeIn();					  
			});
			
			$('a.btn-close').click(function(){
					$('div#cobourg').fadeOut();
					$('div#toronto').fadeOut();	
			});
			
			$('a#toronto').click(function(){
					$('div#toronto').fadeIn();					  
			});
			
		});

jssor_1_slider_init = function() {
            
            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };
		jssor_2_slider_init = function() {
            
            var jssor_2_SlideoTransitions = [
              [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
            ];
            
            var jssor_2_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_2_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_2_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };
		
function validateBookNow(){
	var errorCount=0;
	var regexname=/^[a-zA-Z ]+$/;
	var name=$('form#contact_form input#name').val();	
	if (!name.match(regexname)) {
		errorCount=1;
		$('p#name').slideDown();
	}
	else{
		$('p#name').slideUp();	
	}
	
	var email = $('form#contact_form input#email').val();
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	var emailErr = email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i);
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		errorCount=1;
		if (email==null || email=="" || email=="Email")
		{
			
			$('p#email').slideDown();
		}
		$('p#email').slideDown();
	}
	else{
		
		$('p#email').slideUp();
	}
	
	var mobile = $('form#contact_form input#phone').val();
	var mobileErr = mobile.match(/^\d{10}$/i);
	if(!mobileErr){
		errorCount=1;
		$('p#phone').slideDown();
		//return false;
	}
	else{
		
		$('p#phone').slideUp();
	}
	
	var checkin=$('form#contact_form input#checkin').val();	
	if (checkin=='Select Date' || checkin=='') {
		errorCount=1;
		$('p#checkin').slideDown();
	}
	else{
		$('p#checkin').slideUp();	
	}
	
	var checkout=$('form#contact_form input#checkout').val();	
	if (checkout=='Select Date' || checkout=='') {
		errorCount=1;
		$('p#checkout').slideDown();
	}
	else{
		$('p#checkout').slideUp();	
	}
		
	var adults = $('form#contact_form select#adults').val();
	if(adults==''){
		errorCount=1;
		$('p#adults').slideDown();	}
	else{
		
		$('p#adults').slideUp();
	}
	
	var childrens = $('form#contact_form select#childrens').val();
	if(childrens==''){
		errorCount=1;
		$('p#childrens').slideDown();	}
	else{
		
		$('p#childrens').slideUp();
	}
	
	var meals = $('form#contact_form select#meals').val();
	if(meals==''){
		errorCount=1;
		$('p#meals').slideDown();	}
	else{
		
		$('p#meals').slideUp();
	}
	
	if(errorCount==0){
		return true;
	}
	else
		return false;
}