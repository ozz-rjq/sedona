var searchBtn = document.querySelector(".hotel-search-btn");
var searchBlock = document.querySelector(".modal-content");

searchBtn.addEventListener("click", function(event){
	event.preventDefault();
	
	if (!searchBlock.classList.contains("modal-content-show"))
		searchBlock.classList.add("modal-content-show");
	else
		searchBlock.classList.remove("modal-content-show");
})