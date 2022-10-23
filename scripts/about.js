function fadeIn(element) {
  element.style.opacity = 0;
  var tick = function () {
      element.style.opacity = +element.style.opacity + 0.01;
      if (+element.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      }
  };
  tick();
}

//about.html fadeIn
const aboutPageContent = document.getElementsByClassName('profile-content-wrapper');
  fadeIn(aboutPageContent[0]);