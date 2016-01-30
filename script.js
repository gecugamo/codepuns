(function IIFE() {
	"use strict";

	var puns = [
		"Whatever Floats Your Div",
		"Mo' Plugins, Mo' Problems",
		"Float Like a Butterfly, Sting Like a Clean",
		"Gulp Some Gist",
		"You Know I'm All About That Database, Database, MySQL"
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

		punEl.textContent = puns[lastIndex];
		updateIndex();
	}

	function prevPun(e) {
		e.preventDefault();
		var currentIndex = getIndex();

		// If we're on the first item, go to the end
		if (currentIndex === 0) {
			punEl.textContent = puns[lastIndex];
			console.log("reset to end");
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
			console.log("reset to beginning");
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
