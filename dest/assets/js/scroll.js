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
//SP ページトップへまでで非表示
$(function() {

  var footer = $('.footer').innerHeight(); // footerの高さを取得
  
  window.onscroll = function () {
    var point = window.pageYOffset; // 現在のスクロール地点
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ
  
    if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $('.js-follow-cvbtn').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
    }else{
      $('.js-follow-cvbtn').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
});