var navigatonMenu = document.getElementsByClassName("give-menu");

function toggleClass (el, className) {
	if(el.classList.contains(className)) {
		el.classList.remove(className);
	} else {
		el.classList.add(className);
	}
}

var slider = (function(oSlider) {
	oSlider.currentPage = 0;
	oSlider.maxPage = 5;

	oSlider.init = function() {
		var currentPage = 0,
			maxPage = 5;

		oSlider.interval = setInterval(function () {
			oSlider.currentPage = (oSlider.currentPage + 1) % oSlider.maxPage;
	
			var el = document.querySelector("#slide-" + oSlider.currentPage);
			var slides = document.querySelectorAll(".give-active-slider")[0];
			
			slides.classList.remove("give-active-slider");
			el.classList.add("give-active-slider");
		
		}, 3000);
	};

	oSlider.nextPage = function () {
		oSlider.currentPage = (oSlider.currentPage + 1) % oSlider.maxPage;
	
		var el = document.querySelector("#slide-" + oSlider.currentPage);
		var slides = document.querySelectorAll(".give-active-slider")[0];
		
		slides.classList.remove("give-active-slider");
		el.classList.add("give-active-slider");
	};

	oSlider.prevPage = function () {
		oSlider.currentPage -= 1;
		if(oSlider.currentPage === -1){
			oSlider.currentPage = oSlider.maxPage - 1;
		}

		var el = document.querySelector("#slide-" + oSlider.currentPage);
		var slides = document.querySelectorAll(".give-active-slider")[0];
		
		slides.classList.remove("give-active-slider");
		el.classList.add("give-active-slider");
	}
	return oSlider;
})(slider || {});

navigatonMenu[0].addEventListener("click", function() {
	var el = document.getElementsByTagName("main")[0];
	toggleClass(el, "active");
	toggleClass(this, "give-menu-change");
});

window.onload = function () {
	slider.init();
	// set next page slide event
	var next = document.querySelector(".give-slider-left");
	next.onclick = function() {
		slider.nextPage();
	}

	var prev = document.querySelector(".give-slider-right");
	prev.onclick = function(){
		slider.prevPage();
	}
};