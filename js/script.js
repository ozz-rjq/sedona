var searchBtn = document.querySelector(".hotel-search-btn");
var searchBlock = document.querySelector(".modal-content");

/* logic vars */

var plusAdult = document.querySelector(".js-adult-plus");
var minusAdult = document.querySelector(".js-adult-minus");
var adultField = document.querySelector("#adult-number");

var plusChildren = document.querySelector(".js-children-plus");
var minusChildren = document.querySelector(".js-children-minus");
var childrenField = document.querySelector("#children-number");

/* SHOW MODAl WINDOW */
searchBtn.addEventListener("click", function(event){
	event.preventDefault();

	if (!searchBlock.classList.contains("modal-content-show"))
		searchBlock.classList.add("modal-content-show");
	else
		searchBlock.classList.remove("modal-content-show");
});

/* ADD AND SUBTRACT TOURISTS */
plusAdult.addEventListener("click", addAdult);
minusAdult.addEventListener("click", subtractAdult);

plusChildren.addEventListener("click", addChild);
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

adultField.addEventListener("keydown", function(event){
	event.preventDefault();
	if (event.keyCode === 40 && adultField.value > 0)
		adultField.value--;
	else if (event.keyCode === 38 && adultField.value >= 0)
		adultField.value++;
});

childrenField.addEventListener("keydown", function(event){
	event.preventDefault();
	if (event.keyCode === 40 && childrenField.value > 0)
		childrenField.value--;
	else if (event.keyCode === 38 && childrenField.value >= 0)
		childrenField.value++;
})