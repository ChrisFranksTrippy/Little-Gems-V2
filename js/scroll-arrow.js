"use strict";

(function() {
  
  //let body = document.getElementsByTagName("main")[0];
  let windowHeight = window.innerHeight;
  let topArrow = document.getElementById("top-arrow");
  
  //console.log(body);
  
  document.addEventListener("scroll", toggleScrollArrow);
  /*document.addEventListener("onresize", function() { 
    console.log("Change");
    windowHeight = window.innerHeight; 
  });*/
  
  
  
  function toggleScrollArrow() {
    
    console.log(window.pageYOffset);
    
    if (window.pageYOffset > (window.innerHeight / 2)) {
      //console.log(window.innerHeight);
			if (!topArrow.classList.contains("show-arrow")) {
      	topArrow.classList.add("show-arrow");
			}
    } else {
      if (topArrow.classList.contains("show-arrow")) {
      	topArrow.classList.remove("show-arrow");
			}
    }
    
    
  };
  
})();