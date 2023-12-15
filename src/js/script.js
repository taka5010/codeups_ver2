
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ナビバートグル
    $('.js-hamburger').on('click', function () {
      $("body").toggleClass("active");
      if ($('.js-hamburger').hasClass('is-open')) {
        $('.js-drawer-menu').fadeOut();
        $(this).removeClass('is-open');
      } else {
        $('.js-drawer-menu').fadeIn();
        $(this).addClass('is-open');
      }
    });


    //mvのswiper
    var js_mv_swiper = new Swiper(".js_mv_Swiper", {
      loop: true,
      speed: 1500, 
      effect: 'fade', 
      fadeEffect: {           
        crossFade: true     
    },   
      // spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    //campaignのswiper
    var js_mySwiper = new Swiper(".js_mySwiper", {
      loop: true, 
      spaceBetween: 24,
      slidesPerView: 1.31, 
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1180: {
          slidesPerView: 3.96,
          spaceBetween: 40,
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });

    // inviewの設定
    var box = $('.js-inview'),
      speed = 700;  
      box.each(function(){
      $(this).append('<div class="color"></div>')
      var color = $(this).find($('.color')),
      image = $(this).find('img');
      var counter = 0;

      image.css('opacity','0');
      color.css('width','0%');
      color.on('inview', function(){
          if(counter == 0){
            $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
                  })
                counter = 1;
            }
      });
    });


//information-page ----------------------------

$(function() {
  function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  let tabPram = ['tab-1', 'tab-2', 'tab-3'];
  let pram = getParam('active-tab');
  if (pram && $.inArray(pram, tabPram) !== -1) {
    $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
    $('[data-tab="' + pram + '"]').addClass('is-active');
  }
  $('.js-tab-switch').on('click', function() {
    let dataPram = $(this).data('tab');
    $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
    $('[data-tab="' + dataPram + '"]').addClass('is-active');
  });
});

//about-page ----------------------------
  // galleryのモーダル
  $(".js-modal img").click(function () {
    $(".about-gallery__grayDisplay").html($(this).prop("outerHTML"));
    $(".about-gallery__grayDisplay").fadeIn(200);
    return false;
  });
  $(".about-gallery__grayDisplay").click(function () {
    $(".about-gallery__grayDisplay").fadeOut(200);
    return false;
  });

  // モーダル展開時に背景をスクロールさせない
  let scrollPosition;
  $(".js-modal img").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $("body").addClass("about-gallery__fixed").css({ top: -scrollPosition });
  });
  $(".about-gallery__grayDisplay").on("click", function () {
    $("body").removeClass("about-gallery__fixed").css({ top: 0 });
    $(window).scrollTop(scrollPosition);
  });

  //faq-page ----------------------------
  let accordionDetails = '.js-faq-item';
  let accordionSummary = '.js-faq-item__summary';
  let accordionContent = '.js-faq-item__content';
  let speed2 = 300;
  
  $(accordionSummary).each(function() {
    if ($(this).parent($(accordionDetails)).attr("open")) {
      $(this).addClass("is-active");
    }
  
    $(this).on("click", function(event) {
      event.preventDefault();
      $(this).toggleClass("is-active");
  
      if ($(this).parent($(accordionDetails)).attr("open")) {
        $(this).nextAll($(accordionContent)).slideUp(speed2, function() {
          $(this).parent($(accordionDetails)).removeAttr("open");
        });
      } else {
        $(this).parent($(accordionDetails)).attr("open", "true");
        $(this).nextAll($(accordionContent)).hide().slideDown(speed2);
      }
    })
  });


// リンク先でヘッダーの重なりを防ぐ
  const url = $(location).attr('href'),
	headerHeight = $('header').outerHeight() + 30;

	if(url.indexOf("#") != -1){
		const anchor = url.split("#"),
		target = $('#' + anchor[anchor.length - 1]),
		position = Math.floor(target.offset().top) - headerHeight;
		$("html, body").animate({scrollTop:position}, 500);
	}

});



















