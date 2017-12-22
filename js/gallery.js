"use strict";

(function () {

	let mainImg = document.getElementById("main-img");
	let eTarget;
	let slideContainer = document.getElementById("slider-container");
	let leftArrow = document.getElementById("cta-arrow-container--left");
	let rightArrow = document.getElementById("cta-arrow-container--right");


	//console.log(slideContainer.offsetWidth);
	//console.log(slideContainer.childElementCount);
	console.log(slideContainer.children[0].offsetWidth);

	let maxScrollSlideContainer = slideContainer.children[0].offsetWidth * slideContainer.childElementCount - slideContainer.offsetWidth;
	let scrollClickAmount = slideContainer.offsetWidth * 0.9;


	slideContainer.addEventListener("scroll", toggleArrows);

	slideContainer.addEventListener("click", togglePicture);
	

	leftArrow.addEventListener("click", leftArrowClick);
	rightArrow.addEventListener("click", rightArrowClick);

	function togglePicture(event) {
		//console.log(event);
		
		//Prevent double clicks errors
		slideContainer.removeEventListener("click", togglePicture);

		eTarget = event.target;

		//console.log("eTarget");
		//console.log(eTarget);



		//console.log(eTarget.classList);

		let imgReg = new RegExp(/img-tag-\d{1,3}/);

		//console.log(eTarget.classList.value);
		//console.log(imgReg.test(eTarget.classList.value));
		//console.log(eTarget.classList.value.match(imgReg));

		let mainImgClass = mainImg.classList.value.match(imgReg)[0];
		let smImgClass = eTarget.classList.value.match(imgReg)[0];

		//Shrink Img
		mainImg.classList.add("transition-img");
		eTarget.classList.add("transition-img");

		//Add event listener for transition instead of time out

		
		setTimeout(function () {
			//Change Img
			mainImg.classList.remove(mainImgClass);
			mainImg.classList.add(smImgClass);

			eTarget.classList.remove(smImgClass);
			eTarget.classList.add(mainImgClass);

			//Enlarge Img
			mainImg.classList.remove("transition-img");
			eTarget.classList.remove("transition-img");


		}, 400);

		//Listen for clicks again
		slideContainer.addEventListener("click", togglePicture);

	}

	function toggleArrows() {
		//Arrows appear when the container has scrolled away from the edge
		if (slideContainer.scrollLeft === 0) {
			leftArrow.classList.add("hide-arrow");
		} else {
			leftArrow.classList.remove("hide-arrow");
		}

		if (slideContainer.scrollLeft === maxScrollSlideContainer) {
			rightArrow.classList.add("hide-arrow");
		} else {
			rightArrow.classList.remove("hide-arrow");
		}
	}

	function leftArrowClick() {
		//console.log("Left Arrow");
		let scrollAmount = 0;
		//scrollAmount = slideContainer.scrollLeft - slideContainer.offsetWidth;
		scrollAmount = slideContainer.scrollLeft - scrollClickAmount;
		if (scrollAmount < 0) {
			scrollAmount = 0;
		}

		//Slide left a container width amount
		slideContainer.scrollLeft = scrollAmount;
	}

	function rightArrowClick() {
		//console.log("Right Arrow");
		let scrollAmount = 0;
		//scrollAmount = slideContainer.scrollLeft + slideContainer.offsetWidth;
		scrollAmount = slideContainer.scrollLeft + scrollClickAmount;
		if (scrollAmount > maxScrollSlideContainer) {
			scrollAmount = maxScrollSlideContainer;
		}

		//Slide right a container width amount
		slideContainer.scrollLeft = scrollAmount;
	}

})();
