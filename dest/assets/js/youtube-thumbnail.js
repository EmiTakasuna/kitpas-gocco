//Youtube サムネイルカスタマイズ
document.querySelectorAll('.js-movie').forEach(function(element) {
    element.addEventListener('click', function() {
      var youtubeId = this.getAttribute('data-video');
      var player = new YT.Player('js-player', {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
          rel: 0,
          playsinline: 1
        },
        videoId: youtubeId
      });
      document.querySelectorAll('.js-movie').forEach(function(movie) {
        movie.style.display = 'none';
      });
    });
  });
  