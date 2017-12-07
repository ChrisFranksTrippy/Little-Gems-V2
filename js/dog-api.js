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

	fetch(request)
		.then(function (response) {
			console.log(`response: ${response.status}`);
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			let key;
			let theData = "";
			breedListArray = data.message;
			for (key in breedListArray) {
				theData += `<option value="${breedListArray[key]}">`;
			}

			breedList.innerHTML = theData;

			console.log(breedListArray);

		});

	checkBtn.addEventListener("click", fetchImg);

	
	

	function fetchImg() {
		
		console.log("fetch img!");
		console.log(breedInput.value);
		
		let key;
		
		for (key in breedListArray) {
			if (breedInput.value === breedListArray[key]) {
				//Match
				console.log("match!");
				
				let request = new Request(imgListUrlStart + breedListArray[key] + imgListUrlEnd); 

				fetch(request)
					.then(function (response) {
						console.log(`response: ${response.status}`);
						return response.json();
					})
					.then(function (data) {
						console.log(data);
						
						if (breedImg.classList.contains("unknown-breed")) {
							breedImg.classList.remove("unknown-breed");
						}				
					
						breedImg.src = data.message;
						breedCaption.innerHTML = breedListArray[key];
					
					});

				break;
			}
		}
	}


})();
