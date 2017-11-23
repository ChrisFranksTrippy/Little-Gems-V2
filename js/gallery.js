(function(){
  
  let mainImg = document.getElementById("main-img");  
  let slideContainer = document.getElementById("slider-container");  
  let leftArrow = document.getElementById("cta-arrow-container--left");
  let rightArrow = document.getElementById("cta-arrow-container--right");
  
  
  console.log(slideContainer.offsetWidth);
  console.log(slideContainer.childElementCount);
  console.log(slideContainer.children[0].offsetWidth);
  
  let maxScrollSlideContainer = slideContainer.children[0].offsetWidth * slideContainer.childElementCount - slideContainer.offsetWidth;
  let scrollClickAmount = slideContainer.offsetWidth * 0.9;
  
  
  slideContainer.addEventListener("scroll", toggleArrows);
  slideContainer.addEventListener("click", function(e) {
    togglePicture(e); 
  });
  
  leftArrow.addEventListener("click", leftArrowClick);
  rightArrow.addEventListener("click", rightArrowClick);
  
  function togglePicture(e){
    //console.log(e);
    
    console.log(e.target.classList);
    
    let imgReg = new RegExp(/img-tag-\d{1,3}/);
    
    console.log(e.target.classList.value);
    console.log(imgReg.test(e.target.classList.value));
    console.log(e.target.classList.value.match(imgReg));
    
    let mainImgClass = mainImg.classList.value.match(imgReg)[0];
    let smImgClass = e.target.classList.value.match(imgReg)[0];
    
    mainImg.classList.remove(mainImgClass);
    mainImg.classList.add(smImgClass);
    
    e.target.classList.remove(smImgClass);
    e.target.classList.add(mainImgClass);
    
    
  }
  
  function toggleArrows(){
    if (slideContainer.scrollLeft === 0){
      leftArrow.classList.add("hide-arrow");
    } else {
      leftArrow.classList.remove("hide-arrow");
    }
    
    if (slideContainer.scrollLeft === maxScrollSlideContainer){
      rightArrow.classList.add("hide-arrow");
    } else {
      rightArrow.classList.remove("hide-arrow");
    }    
  }
  
  function leftArrowClick(){
    console.log("Left Arrow");
    let scrollAmount = 0;
    //scrollAmount = slideContainer.scrollLeft - slideContainer.offsetWidth;
    scrollAmount = slideContainer.scrollLeft - scrollClickAmount;
    if (scrollAmount < 0) { scrollAmount = 0;}
    
    slideContainer.scrollLeft = scrollAmount;
  }
  
  function rightArrowClick(){
    console.log("Right Arrow");
    let scrollAmount = 0;
    //scrollAmount = slideContainer.scrollLeft + slideContainer.offsetWidth;
    scrollAmount = slideContainer.scrollLeft + scrollClickAmount;
    if (scrollAmount > maxScrollSlideContainer) { scrollAmount = maxScrollSlideContainer;}
    
    slideContainer.scrollLeft = scrollAmount;
  }
  
})();