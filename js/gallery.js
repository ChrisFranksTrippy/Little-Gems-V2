"use strict";

(function(){
  
  let mainImg = document.getElementById("main-img"); 
  let eTarget;
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
    
    eTarget = e.target;
    
    console.log(eTarget.classList);
    
    let imgReg = new RegExp(/img-tag-\d{1,3}/);
    
    console.log(eTarget.classList.value);
    console.log(imgReg.test(eTarget.classList.value));
    console.log(e.target.classList.value.match(imgReg));
    
    let mainImgClass = mainImg.classList.value.match(imgReg)[0];
    let smImgClass = eTarget.classList.value.match(imgReg)[0];
    
    mainImg.classList.add("transition-img");
    eTarget.classList.add("transition-img");
    
    setTimeout(function(){
      mainImg.classList.remove(mainImgClass);
      mainImg.classList.add(smImgClass);      

      eTarget.classList.remove(smImgClass);
      eTarget.classList.add(mainImgClass);
      
      mainImg.classList.remove("transition-img");
      eTarget.classList.remove("transition-img");

    
    }, 400);
    
    //mainImg.classList.remove("transition-img");
    //eTarget.classList.remove("transition-img");
        
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