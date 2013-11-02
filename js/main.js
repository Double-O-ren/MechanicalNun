$(function(){

  var videos = [
    'video/face.mp4',
    'video/face.mp4',
    'video/face.mp4',
    'video/face.mp4',
    'video/face.mp4'
  ];

  var currentVideoIndex = 0;

  var video = document.getElementsByTagName('video')[0];

  function playNextVideo(){
    console.log('Playing video number '+currentVideoIndex);

    $('#video source').attr('src', videos[currentVideoIndex]);

    video.play();

    if (videos.length > 1) {
      var nextVideoIndex = currentVideoIndex;
      while (nextVideoIndex == currentVideoIndex) {
        nextVideoIndex = Math.floor(Math.random() * videos.length);
      }
      currentVideoIndex = nextVideoIndex;
    }
  }

  video.addEventListener('ended', playNextVideo, false);

  playNextVideo();

});
