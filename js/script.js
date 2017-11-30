;(function(){

	var container = document.querySelector(".container");

	/* Index.html variables*/
	var searchBtn = document.querySelector(".hotel-search-btn");
	var searchBlock = document.querySelector(".modal-content");

	/* logic vars */
	var plusAdult = document.querySelector(".js-adult-plus");
	var minusAdult = document.querySelector(".js-adult-minus");
	var adultField = document.querySelector("#adult-number");

	var plusChildren = document.querySelector(".js-children-plus");
	var minusChildren = document.querySelector(".js-children-minus");
	var childrenField = document.querySelector("#children-number");

	/* hotels.html variables*/
	var filterRangeFrom = document.querySelector(".filter-range-from");
	var filterRangeTo = document.querySelector(".filter-range-to");

	/* responsive text */
	var lineBreak = document.querySelector(".js-line-break");

	/* SHOW MODAl WINDOW */
	if(searchBtn)
		searchBtn.addEventListener("click", function(event){
			event.preventDefault();

			if (!searchBlock.classList.contains("modal-content-show"))
				searchBlock.classList.add("modal-content-show");
			else
				searchBlock.classList.remove("modal-content-show");
		});


	/* ADD AND SUBTRACT TOURISTS */
	if(plusAdult)
		plusAdult.addEventListener("click", addAdult);
	if(minusAdult)
		minusAdult.addEventListener("click", subtractAdult);

	if(plusChildren)
		plusChildren.addEventListener("click", addChild);
	if(minusChildren)
		minusChildren.addEventListener("click", subtractChild);

	function addAdult(){
		adultField.value++;
	}

	function subtractAdult(){
		if (adultField.value > 0)
			adultField.value--;
		else
			alert("CRITICAL ERROR 404");
	}

	function addChild(){
		childrenField.value++;
	}

	function subtractChild(){
		if (childrenField.value > 0)
			childrenField.value--;
		else
			alert("CRITICAL ERROR 404");
	}

	if(adultField)
		adultField.addEventListener("keydown", function(event){
			event.preventDefault();
			if (event.keyCode === 40 && adultField.value > 0)
				adultField.value--;
			else if (event.keyCode === 38 && adultField.value >= 0)
				adultField.value++;
		});

	if(childrenField)
		childrenField.addEventListener("keydown", function(event){
			event.preventDefault();
			if (event.keyCode === 40 && childrenField.value > 0)
				childrenField.value--;
			else if (event.keyCode === 38 && childrenField.value >= 0)
				childrenField.value++;
		});

	/* Filter logic */

	if(filterRangeFrom)
		filterRangeFrom.addEventListener("keydown", function(event){
			event.preventDefault();
			if (event.keyCode === 40 && +filterRangeFrom.value > 0)
				filterRangeFrom.value--;
			else if (event.keyCode === 38 && +filterRangeFrom.value < +filterRangeTo.value)
				filterRangeFrom.value++;
		});

	if(filterRangeTo)
		filterRangeTo.addEventListener("keydown", function(event){
			event.preventDefault();
			if (event.keyCode === 40 && +filterRangeTo.value > +filterRangeFrom.value)
				filterRangeTo.value--;
			else if (event.keyCode === 38 && +filterRangeTo.value < 3600)
				filterRangeTo.value++;
		});


	/* onresize breakpoint*/

	if(lineBreak)
		window.addEventListener("resize", function(event){
			if (container.offsetWidth < 986)
				lineBreak.innerHTML = "Все достопримеча-тельности находятся очень близко";
			else
				lineBreak.innerHTML = "Все достопримечательности находятся очень близко";

			if (container.offsetWidth < 1024)
				document.querySelector(".js-town-teaser").src = "img/town-teaser-768.png";
			else
				document.querySelector(".js-town-teaser").src = "img/town-teaser.jpg";

			if(container.offsetWidth < 1024)
				document.querySelector(".js-bridge-teaser").src ="img/bridge-teaser-768.png";
			else
				document.querySelector(".js-bridge-teaser").src ="img/bridge-teaser.jpg";
		});

	

}());