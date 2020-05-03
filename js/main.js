$(function () {
  // ローディング
  window.onload = function () {
    $(".loading").addClass("done");
  };

  // scroll out
  ScrollOut({
    targets: ".slidein",
    threshold: 0.5,
  });

  // スライダー
  $(".hero").vegas({
    overlay:
      "https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/07.png",
    delay: 5000,
    firstTransition: "fade",
    transition: "blur",
    transitionDuration: 3000,
    animation: ["kenburnsUp", "kenburnsDown", "kenburnsLeft", "kenburnsRight"],
    slides: [
      { src: "assets/img/hero-bg1.jpg" },
      { src: "assets/img/hero-bg2.jpg" },
    ],
  });

  // ドロワーメニュー開閉
  $(".menuBtn").click(function () {
    $(this).toggleClass("close");
    $(".menu").toggleClass("show");
    $(".main").toggleClass("open");
  });

  // トップへ戻るボタン
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.addClass("show");
    } else {
      pagetop.removeClass("show");
    }
  });
  pagetop.find("a").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // ドロワーメニュースクロール
  $(".menu_item, a").click(function () {
    var windowWidth = window.innerWidth;
    var speed = 500;
    var headerHeight = 260;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);

    if (windowWidth <= 767) {
      var position = target.offset().top - headerHeight;
    } else {
      var position = target.offset().top;
    }
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // モーダル 
  $('.works_item').click(function(){
    $('#modal').addClass("show");
    var clicked_item = $(this).data('id');
    console.log(clicked_item);
    $('.' + clicked_item + '_img').addClass("show");
  });

  $('#modal_close , #modal_bg').click(function(){
    $('#modal').removeClass("show");
    $('.modal_inner').find("img").removeClass('show');
  });
});
