//Youtube サムネイルカスタマイズ
document.querySelectorAll('.js-movie').forEach(function(element) {
    element.addEventListener('click', function() {
      var youtubeId = this.getAttribute('data-video');
      var player = new YT.Player('js-player', {
        height: '100%',
        width: '100%',
        videoId: youtubeId,
        events: {
          'onReady': function(evt) {
            evt.target.mute();
            evt.target.playVideo();
          },
          'onStateChange': function(evt) {
            switch (evt.data) {
              case YT.PlayerState.ENDED:
                evt.target.playVideo();
                break;
            }
          }
        },
        playerVars: {
          playsinline: 1,
        }
      });
      document.querySelectorAll('.js-movie').forEach(function(movie) {
        movie.style.display = 'none';
      });
    });
  });