// code
document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelector('.__open-menu').addEventListener('click', function(event) {
  	event.target.classList.toggle('__active');
  	document.querySelector('.__close-menu').classList.toggle('__active');
  	document.querySelector('.header__nav').classList.add('__show');
  });
  document.querySelector('.__close-menu').addEventListener('click', function(event) {
  	event.target.classList.toggle('__active');
  	document.querySelector('.__open-menu').classList.toggle('__active');
  	document.querySelector('.header__nav').classList.remove('__show');
  });
});


//анимация обектов при скролле
const animItems = document.querySelectorAll('.animate-opacity');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem =  animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if( (pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {
        animItem.classList.add('_animate-opacity');
      } else {
        animItem.classList.remove('_animate-opacity');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  },300);
} 

