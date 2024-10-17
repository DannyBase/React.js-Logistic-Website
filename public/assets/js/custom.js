
(function ($) {
	
    'use strict';
//=======================================================//    
//________document.ready (ALL FUNCTION)________//
//=======================================================//
	
//________FADE SLIDER FUNCTION BY = owl.carousel.js________//
function owl_fade_slider_one(){
jQuery('.owl-fade-slider-one').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:2000,
	margin:30,
	nav:true,
	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	items:1,
	dots: true,
	animateOut:'fadeOut',

})
}

//________CLIENT LOGO CAROUSEL FUNCTION BY= owl.carousel.js________//
function client_logo_carousel(){
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		margin:50,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	})
}	

//________SLIDE SLIDER FUNCTION BY= owl.carousel.js________//
function owl_slide_slider_one(){
jQuery('.owl-slide-slider-one').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:2000,
	margin:30,
	nav:true,
	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	items:1,
	dots: true,
})	
}
	
//________TESTIMONIAL FIVE FUNCTION BY=owl.carousel.js________//
function testimonial_five(){
jQuery('.testimonial-five').owlCarousel({
	loop:false,
	margin:80,
	nav:false,
	dots: true,
	autoplay:true,
	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	responsive:{
		0:{
			items:1
		},
		991:{
			items:2
		}
	}
})	
}

//________TOOLTIP FUNCTION BY=bootstrap.js________//
function tool_tip(){
	jQuery('[data-toggle="tooltip"]').tooltip();
}

//________POPOVER FUNCTION BY =bootstrap.js________//
function pop_over(){
	jQuery('[data-toggle="popover"]').popover();
}

//________MAGNIFICPOPUP FUNCTION BY= magnific-popup.js________//
function magnific_popup(){
	jQuery('.mfp-gallery').magnificPopup({
	  delegate: '.mfp-link',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	  }
   });
}
	
//________MAGNIFICPOPUP FOR VIDEO FUNCTION BY= magnific-popup.js________//		
function magnific_video(){	
	jQuery('.mfp-video').magnificPopup({
		type: 'iframe',
	});
}
		
//________VERTICLE CENTER BOOTSTRAP MODAL POPUP________//
function popup_vertical_center(){	
	jQuery(function() {
		function reposition() {
			var modal = jQuery(this),
			dialog = modal.find('.modal-dialog');
			modal.css('display', 'block');
			// Dividing by two centers the modal exactly, but dividing by three 
			// or four works better for larger screens.
			dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
		}
		// Reposition when a modal is shown
		jQuery('.modal').on('show.bs.modal', reposition);
		// Reposition when the window is resized
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
		});
	});
}
			
//________TOP SEARCH BAR SHOW HIDE FUNCTION________//
function site_search(){
	jQuery('a[href="#search"]').on('click', function(event) {                    
	jQuery('#search').addClass('open');
	jQuery('#search > form > input[type="search"]').focus();
});
			
jQuery('#search, #search button.close').on('click keyup', function(event) {
	if (event.target === this || event.target.className === 'close') {
		jQuery(this).removeClass('open');
	}
});  
}
//________VIDEO RESPONSIVE ________//	
function video_responsive(){	
	jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
}
//________SCROLL TOP BUTTON________//	
function scroll_top(){
	jQuery("button.scroltop").on('click', function() {
		jQuery("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	jQuery(window).on("scroll", function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll > 900) {
			jQuery("button.scroltop").fadeIn(1000);
		} else {
			jQuery("button.scroltop").fadeOut(1000);
		}
	});
}

//________INPUT TYPE FILE________//	 	 
function input_type_file_form(){
	jQuery(document).on('change', '.btn-file :file', function() {
		var input = jQuery(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		var input = jQuery(this).parents('.input-group').find(':text'),
			log = numFiles > 10 ? numFiles + ' files selected' : label;
		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}
	});	
}
//________INPUT PLACEHOLDER IN IE9________//	
function placeholderSupport(){
/* input placeholder for ie9 & ie8 & ie7 */
	jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
	/* input placeholder for ie9 & ie8 & ie7 end*/
	/*fix for IE7 and IE8  */
	if (!jQuery.support.placeholder) {
		jQuery("[placeholder]").on('focus', function () {
			if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
		}).blur(function () {
			if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
		}).blur();

		jQuery("[placeholder]").parents("form").on('submit', function () {
			jQuery(this).find('[placeholder]').each(function() {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
					 jQuery(this).val("");
				}
			});
		});
	}
	/*fix for IE7 and IE8 end */
}	
//________BOX HEIGHT MATCH WINDOW HEIGHT ACCORDING________//	
function set_height() {
	if(jQuery('.demo-wraper').length){
		windowHeight = jQuery(window).innerHeight();
		jQuery('.demo-wraper').css('min-height', windowHeight);
	}
}
//________FOOTER FIXED ON BOTTOM PART________//	
function footer_fixed() {
	jQuery('.site-footer').css('display', 'block');
	jQuery('.site-footer').css('height', 'auto');
	var footerHeight = jQuery('.site-footer').outerHeight();
	jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	jQuery('.site-footer').css('height', footerHeight);
}
//________ACCORDIAN ACTIVE CLASS________//	

function accordion_active() {
	jQuery('.acod-head a').on('click', function() {
		jQuery('.acod-head').removeClass('acc-actives');
		jQuery(this).parents('.acod-head').addClass('acc-actives');
		jQuery('.acod-title').removeClass('acc-actives'); //just to make a visual sense
		jQuery(this).parent().addClass('acc-actives'); //just to make a visual sense
		(jQuery(this).parents('.acod-head').attr('class'));
	 });
}	

//________Nav submenu show hide on mobile by = custom.js________//
function mobile_nav(){
	jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
	jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

	jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

		jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
			jQuery(this).parent().removeClass('nav-active');
		});

		jQuery(this).next(jQuery('.sub-menu, .mega-menu ')).slideToggle(500, function(){
			jQuery(this).parent().toggleClass('nav-active');
		});

		ev.stopPropagation();
	});

}	
	 
//________ONHOVER THEN BACKGROUND IMAGE CHANGE________//
function bg_hover_tab(){	
	jQuery('.bgcall-block').on('mouseover', function() {
		var index = $('.bgcall-block').index(this);
		jQuery('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
	});	
}
	
//________INDEX PAGE CAROUSEL 1 FUNCTION BY = owl.carousel.js________//
function home_carousel_1(){
	jQuery('.home-carousel-1').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			
			767:{
				items:1,
				margin:50
			},
			1000:{
				items:2
			}
		}
		
	});
}
	
//________BLOG POST CAROUSEL FUNCTION BY= owl.carousel.js________//
function service_detail_carousel(){
	jQuery('.service-detail-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		dots: true,
		animateOut:'fadeOut',
	})	;
}

//________CLIENT LOGO ON HOME PAGE FUNCTION BY= owl.carousel.js________//
function home_client_logo(){
	jQuery('.home-client-logo').owlCarousel({
		loop:true,
		autoplay:true,
		margin:20,
		nav:false,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
		
	});
}

//________HOME PAGE -1 FILTER CAROUSAL FUNCTION BY=owl.carousel.js________//
function home_projects_filter(){
	
	var owl = jQuery('.owl-carousel-filter').owlCarousel({
	loop:true,
	autoplay:false,
	margin:10,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsive:{
		0:{
			items:1,
			nav:true
		},
		540:{
			items:2,
			nav:true,
			margin:20				
		},
		768:{
			items:3,
			nav:true,
		},			
		991:{
			items:3
		},
		1136:{
			items:3
		},					
		1366:{
			items:3
		}	
		}
})

}
	
//________HOME PAGE -2 FILTER CAROUSAL FUNCTION BY=owl.carousel.js________//

function home_projects_filter2(){
	
	var owl = jQuery('.owl-carousel-filter2').owlCarousel({
	loop:false,
	autoplay:false,
	margin:10,
	nav:true,
	dots: false,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsive:{
		0:{
			items:1,
			nav:true
		},
		540:{
			items:2,
			nav:true,
			margin:20				
		},
		768:{
			items:2,
			nav:true,
		},			
		991:{
			items:3
		},
		1136:{
			items:4
		},					
		1366:{
			items:5
		}	
		}
})
		
		/* Filter Nav */

	jQuery('.btn-filter-wrap2').on('click', '.btn-filter', function(e) {
		var filter_data = jQuery(this).data('filter');

		/* return if current */
		if(jQuery(this).hasClass('btn-active')) return;

		/* active current */
		jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		owl.owlFilter(filter_data, function(_owl) { 
			jQuery(_owl).find('.item').each(owlAnimateFilter); 
		});
	})
	
}	
	
//________CITY IMAGE MOVING FUNCTION BY= jquery.bgscroll.js________//
	
function city_image_moving(){
	jQuery( function() {			  
	jQuery('.city-slide-image').bgscroll({scrollSpeed:20 , direction:'h' });
	});
}
		
//=======================================================//    
//________Window on load (ALL FUNCTION)________//
//=======================================================//	

// text animation function

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
	// var elements = document.getElementsByClassName('typewriter');
	// for (var i=0; i<elements.length; i++) {
	// 	var toRotate = elements[i].getAttribute('data-type');
	// 	var period = elements[i].getAttribute('data-period');
	// 	if (toRotate) {
	// 	  new TxtType(elements[i], JSON.parse(toRotate), period);
	// 	}
	// }
	// // INJECT CSS
	// var css = document.createElement("style");
	// css.type = "text/css";
	// css.innerHTML = ".typewriter > .wrap {}";
	// document.body.appendChild(css);
};



//________SKILLS BAR ________//

/* 2.1 skills bar tooltips*/
function progress_bar_tooltips() {
	jQuery(function () { 
	  jQuery('[data-toggle="tooltips"]').tooltip({trigger: 'manual'}).tooltip('show');
	});  
}

/* 2.2 skills bar widths*/

function progress_bar_width() {	
	jQuery( window ).on('scroll', function() {   
	  jQuery(".progress-bar").each(function(){
		progress_bar_width = jQuery(this).attr('aria-valuenow');
		jQuery(this).width(progress_bar_width + '%');
	  });
	}); 
}
//________TOUCH SPIN BOX FUNCTION BY= jquery.bootstrap-touchspin.js ________//

function input_number_form() {	 
	jQuery("input[name='demo3']").TouchSpin()
}

//________PAGE LOADER________// 	

function page_loader() {
		jQuery('.loading-area').fadeOut(1000)
};
	


//=======================================================//    
//________Window on SCROLL (ALL FUNCTION)________//
//=======================================================//	

function color_fill_header() {
        var scroll = jQuery(window).scrollTop();
        if(scroll >= 100) {
            jQuery(".is-fixed").addClass("color-fill");
        } else {
            jQuery(".is-fixed").removeClass("color-fill");
        }
};
	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
			
		//________FADE SLIDER FUNCTION BY = owl.carousel.js________//
		owl_fade_slider_one(),
		//________CLIENT LOGO CAROUSEL FUNCTION BY= owl.carousel.js________//
		client_logo_carousel(),
		//________SLIDE SLIDER FUNCTION BY= owl.carousel.js________//
		owl_slide_slider_one(),
		//________TESTIMONIAL FIVE FUNCTION BY=owl.carousel.js________//
		testimonial_five(),
		//________TOOLTIP FUNCTION BY=bootstrap.js________//
		tool_tip(),
		//________POPOVER FUNCTION BY =bootstrap.js________//
		pop_over(),
		//________MAGNIFICPOPUP FUNCTION BY= magnific-popup.js________//
		magnific_popup(),
		//________MAGNIFICPOPUP FOR VIDEO FUNCTION BY= magnific-popup.js________//		
		magnific_video(),	
		//________VERTICLE CENTER BOOTSTRAP MODAL POPUP________//
		popup_vertical_center(),
		//________TOP SEARCH BAR SHOW HIDE FUNCTION________//
		site_search(),
		//________VIDEO RESPONSIVE ________//	
		video_responsive(),
		//________SCROLL TOP BUTTON________//	
		scroll_top(),
		//________INPUT TYPE FILE________//	 	 
		input_type_file_form(),
		//________INPUT PLACEHOLDER IN IE9________//	
		placeholderSupport(),
		//________BOX HEIGHT MATCH WINDOW HEIGHT ACCORDING________//	
		set_height(), 
		//________FOOTER FIXED ON BOTTOM PART________//	
		footer_fixed(), 
		//________ACCORDIAN ACTIVE CLASS________//	
		accordion_active(), 
		//____NAVIGATION SUBMENU SHOW & HIDE ON MOBILE________//	
		mobile_nav(),
		//________ONHOVER THEN BACKGROUND IMAGE CHANGE________//
		bg_hover_tab(),	
		//________INDEX PAGE CAROUSEL 1 FUNCTION BY = owl.carousel.js________//
		home_carousel_1(),
		//________BLOG POST CAROUSEL FUNCTION BY= owl.carousel.js________//
		service_detail_carousel(),
		//________CLIENT LOGO ON HOME PAGE FUNCTION BY= owl.carousel.js________//
		home_client_logo(),	
		//________HOME PAGE -1 FILTER CAROUSAL FUNCTION BY=owl.carousel.js________//
		home_projects_filter(),	
		//________HOME PAGE -2 FILTER CAROUSAL FUNCTION BY=owl.carousel.js________//
		home_projects_filter2(),
		//________CITY IMAGE MOVING FUNCTION BY= jquery.bgscroll.js________//
		city_image_moving()
}); 
	
	
	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
		//________SKILLS BAR ________//
		progress_bar_tooltips(), 
		progress_bar_width(),
		//________TOUCH SPIN BOX FUNCTION BY= jquery.bootstrap-touchspin.js ________//
		input_number_form(),
		//________PAGE LOADER________// 	
		page_loader() 		
		
		//________BOX HEIGHT MATCH WINDOW HEIGHT ACCORDING________//	
		set_height(),
		//________CITY IMAGE MOVING FUNCTION BY= jquery.bgscroll.js________//		
		city_image_moving()
});




 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

jQuery(window).on('scroll', function () {
		// > Window on scroll header color fill 
		color_fill_header()
});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

jQuery(window).on('resize', function () {
		//________FOOTER FIXED ON BOTTOM PART________//		 
		footer_fixed(),
		//________BOX HEIGHT MATCH WINDOW HEIGHT ACCORDING________//	
		set_height()
});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		
		jQuery.ajax({
			url: 'https://theme7x.com/react/fastway/assets/handlers/phpmailer/mail.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
				
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}
			}
		});
		jQuery('.cons-contact-form').trigger("reset");
		return false;
	});	


	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form2', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		
		jQuery.ajax({
   			url: 'https://theme7x.com/fastway/phpmailer/mail.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
				
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
				}
			}
		});
		jQuery('.cons-contact-form2').trigger("reset");
		return false;
	});	
/*===========================
	Document on  Submit FUNCTION END
===========================*/	

})(window.jQuery);