// スクロールすると追従ボタンを表示
$(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $("header").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-follow-cvbtn").addClass("show");
      } else {
        $(".js-follow-cvbtn").removeClass("show");
      }
    });
  });