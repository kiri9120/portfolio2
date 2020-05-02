$(function () {

  // scroll out
  ScrollOut({
    targets: ".slidein",
    threshold: 0.5,
  });

  // slider
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
  // $("a#previous").on("click", function (e) {
  //   $("body").vegas("options", "transition", "fade2").vegas("previous");
  //   e.preventDefault();
  // });
  // $("a#next").on("click", function (e) {
  //   $("body").vegas("options", "transition", "fade2").vegas("next");
  //   e.preventDefault();
  // });

  // page_top
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.addClass("show");
    } else {
      pagetop.removeClass("show");
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
