$(function () {
    $(".slider").slick({
      autoplay: true,
      arrows: false,
      fade: true,
      asNavFor: ".thumbnail",
    });
    $(".thumbnail").slick({
      slidesToShow: 8,
      asNavFor: ".slider",
      focusOnSelect: true,
    });
  });