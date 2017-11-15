

(function(){
  
  let docBody = document.getElementsByClassName("body");
  let mBurger = document.getElementById("menu-burger");
  let menuDraw = document.getElementById("menu-draw");
  
  mBurger.addEventListener("click", toggleMenuDraw);
  
  function toggleMenuDraw(){
    
    menuDraw.classList.contains("showMenu") ? 
      function(){
      menuDraw.classList.remove("showMenu");
      mBurger.classList.remove("cross");
    }() : function(){ 
      menuDraw.classList.add("showMenu");
      mBurger.classList.add("cross");
    }();
    
  }
  
})();