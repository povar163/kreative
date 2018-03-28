
$(document).ready(function(){
	"use strict";
  var hellopreloader = document.getElementById("hellopreloader_preload");
	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

	function fadeOutnojquery(el){el.style.opacity = 1;
			var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;
			if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}
			window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-works-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    $('.active-banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });
    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
 $('#back-to-top').on('click', function(){
 	$('body,html').animate({
 		scrollTop: 0
 	}, 600);
 });

 ///////////////////////////
 // Btn nav collapse
 $('#nav .nav-collapse').on('click', function() {
 	$('#nav').toggleClass('open');
 });

 ///////////////////////////
 // Mobile dropdown
 $('.has-dropdown a').on('click', function() {
 	$(this).parent().toggleClass('open-drop');
 });

 ///////////////////////////
 // On Scroll
 $(window).on('scroll', function() {
 	var wScroll = $(this).scrollTop();

 	// Fixed nav
 	wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

 	// Back To Top Appear
 	wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
 });
