//fade in function for pictures
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

//index.html looping for blur and fadeIn effect
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
    portfolioItems.forEach(portfolioItem => {fadeIn(portfolioItem)
    });

    portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('image-blur');
    });

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('image-blur');
    });
});
