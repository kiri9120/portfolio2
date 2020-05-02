$(function () {

  // ローディング
  window.onload = function() {
    $(".loading").addClass('done');
  }

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
    animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
    slides: [
      { src: "assets/img/hero-bg1.jpg" },
      { src: "assets/img/hero-bg2.jpg" }
    ],
  });

  // ドロワーメニュー開閉
  $(".menuBtn").click(function () {
    $(this).toggleClass("close");
    $(".menu").toggleClass("show");
    $(".main").toggleClass("open");
  });

  // page_top
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.addClass("show");
    } else {
      pagetop.removeClass("show");
    }
  });

  // ページ内リンクスクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
