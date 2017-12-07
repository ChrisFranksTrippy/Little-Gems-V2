"use strict";

(function () {

	let docBody = document.getElementsByTagName("body")[0];
	let mBurger = document.getElementById("menu-burger");
	let menuDraw = document.getElementById("menu-draw");

	mBurger.addEventListener("click", toggleMenuDraw);

	function toggleMenuDraw() {

		//Prevent user seeing menu transition when changing 
		//the size of the window in real time
		menuDraw.classList.add("transition-menu");

		requestAnimationFrame(function () {

			menuDraw.classList.contains("showMenu") ?
				function () {
					menuDraw.classList.remove("showMenu");
					mBurger.classList.remove("cross");
				}() : function () {
					menuDraw.classList.add("showMenu");
					mBurger.classList.add("cross");
				}();

			menuDraw.addEventListener("transitionend", removeTransition);
		});
	}

	function removeTransition() {
		menuDraw.classList.remove("transition-menu");
		menuDraw.removeEventListener("transitionend", removeTransition);
	}

})();
