var IDSALVO = sessionStorage.getItem('1');
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    var player;
                    function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {   
                      videoId: IDSALVO,
                      playerVars: {   
                        'autoplay': 0,   
                        'rel': 0,
                        'showinfo': 1,
                        'modestbranding': 1,
                        'playsinline': 0,
                        'showinfo': 0,
                        'rel': 0,
                        'controls': 1,
                        'color':'black',
                        'loop': 0,
                        'mute':0,
                        'height': screen.availHeight,
                        'width': screen.availWidth,                      
                  },
                    events: {
                      'onReady': onPlayerReady,
                      'onStateChange': onPlayerStateChange
                    }
                  });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }