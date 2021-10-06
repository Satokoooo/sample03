const headerElement = document.getElementById('header');

document.addEventListener('scroll',function() {
  if(document.getElementById('hero').getBoundingClientRect().bottom <= 0){
    headerElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
  }
});

const targetElement = document.querySelectorAll(".mainItem");
document.addEventListener("scroll",function() {
  for (let i=0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight*.4
    if(window.innerHeight > getElementDistance) {
     targetElement[i].classList.add("show");
    }
    }
});