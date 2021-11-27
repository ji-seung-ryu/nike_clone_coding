let _video = document.querySelector('#main_video');
var mediaQueryList = window.matchMedia('(max-width: 670px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    _video.removeAttribute('src'); // src 프로퍼티를 제거
    _video.src = 'cropped_main.mp4'; // 다른 미디어로 소스 변경
    _video.load(); // 새로운 정보를 다시 로드

    _video.play();
  } else {
    /* the viewport is more than than 600 pixels wide */
   _video.removeAttribute('src'); // src 프로퍼티를 제거
    _video.src = 'main.mp4'; // 다른 미디어로 소스 변경
    _video.load(); // 새로운 정보를 다시 로드

    _video.play();
  }
}

mediaQueryList.addListener(screenTest);

let bar = document.getElementsByClassName('bar_span')[0];
let blur_div = document.getElementById('just_blur');

bar.addEventListener('focus',function(){
	blur_div.setAttribute('class','apply_blur');
});

bar.addEventListener('blur',function(){
	blur_div.removeAttribute('class');
});
