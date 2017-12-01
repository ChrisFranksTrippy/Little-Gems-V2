(function() {
  
  let html = document.getElementsByTagName("html")[0];
  let windowHeight = window.innerHeight;
  let topArrow = document.getElementById("top-arrow");
  
  console.log(html);
  
  document.addEventListener("scroll", toggleScrollArrow);
  document.addEventListener("onresize", function() { 
    console.log("Change");
    windowHeight = window.innerHeight; 
  });
  
  
  
  function toggleScrollArrow() {
    
    //console.log(html.scrollTop);
    
    if (html.scrollTop > (window.innerHeight / 2)) {
      //console.log(window.innerHeight);
      topArrow.classList.add("show-arrow");
    } else {
      topArrow.classList.remove("show-arrow");
    }
    
    
  };
  
})();