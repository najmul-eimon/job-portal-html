document.addEventListener("DOMContentLoaded", function(event) {
        
  let offset = 200;
  let circleContainer = document.querySelector(".progress-wrap");
  let circlePath = document.querySelector('.progress-wrap path');
  let pathLength = circlePath.getTotalLength();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
  circlePath.style.strokeDasharray = pathLength;
  circlePath.style.strokeDashoffset = pathLength;
  circlePath.getBoundingClientRect();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  let updateLoader = () => {

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let height = docHeight - winHeight;
    let progress = pathLength - (scrollTop * pathLength / height);
    circlePath.style.strokeDashoffset = progress;

    if (scrollTop > offset) {
      circleContainer.classList.add("active-progress");
    } else {
      circleContainer.classList.remove("active-progress");
    }
          
  }

circleContainer.onclick = function(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}

window.onscroll = () => {
  updateLoader();
}

updateLoader();

});