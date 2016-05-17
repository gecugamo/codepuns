(function IIFE() {
	"use strict";

	var puns = [
		"Whatever floats your div",
		"Mo' plugins, mo' problems",
		"Float like a butterfly, sting like a clean",
		"I don't want someone who can get things done, I want someone who can get things done right",
		"You know i'm all about that database, database, mysql"
	];

	var punEl = document.getElementById("pun");
	var prevEl = document.getElementById("prev");
	var nextEl = document.getElementById("next");
	var randEl = document.getElementById("rand");
	var indexEl = document.getElementById("index");
	var len = puns.length;
	var lastIndex = len - 1;

	function getIndex() {
		return puns.indexOf(punEl.textContent);
	}

	function updateIndex() {
		indexEl.textContent = getIndex() + 1 + '.';
	}

	function punInit() {
		var currentIndex = getIndex();

		punEl.textContent = puns[0];
		updateIndex();
	}

	function prevPun(e) {
		e.preventDefault();
		var currentIndex = getIndex();

		// If we're on the first item, go to the end
		if (currentIndex === 0) {
			punEl.textContent = puns[lastIndex];
		// Else, decrement
		} else {
			punEl.textContent = puns[currentIndex - 1]
		}
		updateIndex();
	}

	function nextPun(e) {
		e.preventDefault();
		var currentIndex = getIndex();

		// If we're on the last item, go to the beginning
		if (currentIndex === lastIndex) {
			punEl.textContent = puns[0];
		// Else, increment
		} else {
			punEl.textContent = puns[currentIndex + 1]
		}
		updateIndex();
	}

	function randPun() {
		var currentIndex = getIndex();

		punEl.textContent = puns[Math.floor(Math.random() * puns.length)];
		updateIndex();
	}

	window.addEventListener("load", punInit);
	randEl.addEventListener("click", randPun);
	prevEl.addEventListener("click", prevPun);
	nextEl.addEventListener("click", nextPun);
})();
