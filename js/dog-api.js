"use strict";

(function () {

	let breedInput = document.getElementById("breed-input");
	let breedList = document.getElementById("breeds");
	let checkBtn = document.getElementById("check-btn");
	let breedImg = document.getElementById("breed-img");
	let breedCaption = document.getElementById("breed-caption");

	let breedListArray;

	let breedListUrl = "https://dog.ceo/api/breeds/list";

	let imgListUrlStart = "https://dog.ceo/api/breed/";
	let imgListUrlEnd = "/images/random";

	let request = new Request(breedListUrl);

	//Get list of breads
	fetch(request)
		.then(function (response) {
			//console.log(`response: ${response.status}`);
			return response.json();
		})
		.then(function (data) {
			//console.log(data);
			let key;
			let theData = "";
			breedListArray = data.message;
			//input json data to list of datalist options
			for (key in breedListArray) {
				theData += `<option value="${breedListArray[key]}">`;
			}

			//input options into data list
			breedList.innerHTML = theData;

			console.log(breedListArray);

		});

	checkBtn.addEventListener("click", fetchImg);




	function fetchImg() {

		////console.log("fetch img!");
		console.log(breedInput.value);

		let key;
		//Remove white space and change to lower case
		let inputTxt = breedInput.value.toLowerCase().trim();

		for (key in breedListArray) {
			if (inputTxt === breedListArray[key]) {
				//Match
				//console.log("match!");

				//Get Rnd Image
				let request = new Request(imgListUrlStart + breedListArray[key] + imgListUrlEnd);

				fetch(request)
					.then(function (response) {
						//console.log(`response: ${response.status}`);
						return response.json();
					})
					.then(function (data) {
						//console.log(data);

						//remove img size class
						if (breedImg.classList.contains("unknown-breed")) {
							breedImg.classList.remove("unknown-breed");
						}

						//Change img src
						breedImg.src = data.message;
						//Add caption text
						breedCaption.innerHTML = breedListArray[key];

					});

				break;
			} else {
				//Add unknow image
				if (!breedImg.classList.contains("unknown-breed")) {
					breedImg.classList.add("unknown-breed");
					breedImg.src = "img/Unknown.png";
					breedCaption.innerHTML = "";
				}
			}
		}
	}


})();
