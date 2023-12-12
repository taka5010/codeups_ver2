
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

$(document).ready(function(){
  $('.js-info').click(function(){
      var tab_id = $(this).attr('id');

      $('.js-info').removeClass('active');
      $('.tab').hide();

      $(this).addClass('active');
      $("#info-content" + tab_id.substr(8)).fadeIn(500);
  });

  $('#info-tab1').trigger('click');
});


$(function () {
  // URLのハッシュ部分（id）を取得
  const urlHash = location.hash;
  // そのidを持つ要素がなかったら処理を抜ける
  if (!$(urlHash).length) return;

  // アコーディオンの要素を開く処理
  $(urlHash)
    .find('.sub-information__item')
    .addClass('active')
    .next()
    .show();
});


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


});


// test

// let accordionDetails = '.js-details';
let accordionDetails = '.js-faq-item';
let accordionSummary = '.js-faq-item__summary';
let accordionContent = '.js-faq-item__content';
let speed = 300

$(accordionSummary).each(function() {
  if ($(this).parent($(accordionDetails)).attr("open")) {
    $(this).addClass("is-active");
  }


  $(this).on("click", function(event) {
  	// デフォルトの挙動を無効化
    event.preventDefault();
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    } else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})


// test_finish

// test

$(function() {
  // パラメータ取得
  function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
 
  // ページ読み込み時のタブ切り替え
  let tabPram = ['tab-1', 'tab-2', 'tab-3'];
  let pram = getParam('active-tab');
  if (pram && $.inArray(pram, tabPram) !== -1) {
    $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
    $('[data-tab="' + pram + '"]').addClass('is-active');
  }
 
  // ロード後のタブ切り替え
  $('.js-tab-switch').on('click', function() {
    let dataPram = $(this).data('tab');
    $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
    $('[data-tab="' + dataPram + '"]').addClass('is-active');
  });
});

// test-fin

// test2
$(function () {
  //タブの実装
$(".tab_box .tab_btn").click(function () {
   var index = $(".tab_box .tab_btn").index(this);
   $(".tab_box .tab_btn, .tab_box .tab_panel").removeClass("active");
   $(this).addClass("active");
   $(".tab_box .tab_panel").eq(index).addClass("active");
});
});

$(function () {
  var hash = location.hash;
  hash = (hash.match(/^#tab_panel-\d+$/) || [])[0];

  if ($(hash).length) {
      var tabname = hash.slice(1);
  } else {
      var tabname = "tab_panel-1";
  }
  //コンテンツ非表示・タブを非アクティブ
  $(".tab_box .tab_btn").removeClass("active");
  $(".tab_box .tab_panel").removeClass("active");
  //何番目のタブかを格納
  var tabno = $(".tab_box .tab_panel#" + tabname).index();
  //コンテンツ表示
  $(".tab_box .tab_panel").eq(tabno).addClass("active");
  //タブのアクティブ化
  $(".tab_box .tab_btn").eq(tabno).addClass("active");
});

// test2-fin







