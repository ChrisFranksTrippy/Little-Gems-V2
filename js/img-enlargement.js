//https://stackoverflow.com/questions/8825144/detect-double-tap-on-ipad-or-iphone-screen-using-javascript
//Help from

(function() {
  
  console.log("img-enlargement active!");
  
  let images = document.getElementsByClassName("parallax-container");
  
  let lastClickTime = new Date().getTime();
  console.log(lastClickTime);
  
  for (let i = 0; i < images.length; i++) { 
    //console.log(images[i]);
    images[i].addEventListener("click", function(e) {
      enlargeImgRequest(e); 
    });
  }
  
  function enlargeImgRequest(e) {    
    //console.log(e);
    let image;
    let icon;
    
    //double touch accounted for on phones
    let currentClickTime = new Date().getTime();
    let clickTimeDif = currentClickTime - lastClickTime;
    lastClickTime = currentClickTime;
    
    if (e.target.classList.contains("parallax-container")) {
      //Images clicked
      if (clickTimeDif < 400 && clickTimeDif > 0) {
        //Image double click
        image = e.target;
        icon = e.target.firstElementChild;
        
        //console.log(clickTimeDif);
        //console.log(image);
        //console.log(icon);
        
        enlargeImg(image, icon);
      }
      
      
    } else {
      //Span element clicked;
      image = e.target.parentElement;
      icon = e.target;
      
      //console.log(image);
      //console.log(icon);
      
      enlargeImg(image, icon);
    }
    
    
  }
  
  function enlargeImg(image, icon){
    console.log(image);
    image.classList.toggle("enlarge");
  }
})();