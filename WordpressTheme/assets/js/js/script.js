"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ナビバートグル
  $('.js-hamburger').on('click', function () {
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
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  // var mv2_swiper = new Swiper(".mv2_Swiper", {
  //   loop: true,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  //campaignのswiper
  var js_mySwiper = new Swiper(".js_mySwiper", {
    loop: true,
    // initialSlide: 1.5, 
    spaceBetween: 24,
    // centeredSlides: true,
    slidesPerView: 1.31,
    // 一度に表示する枚数
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1180: {
        slidesPerView: 3.96,
        spaceBetween: 40
      }
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // inviewの設定
  var box = $('.js-inview'),
    speed = 700;
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'left': '0',
            'right': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });
});

// const els = document.getElementsByClassName('js-txtLimit');
// const len = 85;//最大文字数を指定します

// for(let i = 0; i < els.length; i++) {
//     const el = els[i];
//     const str = el.textContent.trim();

//     if (str.length > len) {
//         el.textContent = str.substring(0, len) + '…';
//     }
// }