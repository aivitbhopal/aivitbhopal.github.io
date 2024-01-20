// ----------------------------------------------
// CSS for the select box
// ----------------------------------------------

const size_select_black = document.querySelectorAll(".size-black");

size_select_black.forEach( size_select_black => {
	size_select_black.addEventListener("click", () => {
		document.querySelector(".size-black.active")?.classList.remove("active");
		size_select_black.classList.add("active");
	});
});

const type_select_black = document.querySelectorAll(".type-black");

type_select_black.forEach( type_select_black => {
	type_select_black.addEventListener("click", () => {
		document.querySelector(".type-black.active")?.classList.remove("active");
		type_select_black.classList.add("active");
	});
});


const size_select_white = document.querySelectorAll(".size-white");

size_select_white.forEach( size_select_white => {
	size_select_white.addEventListener("click", () => {
		document.querySelector(".size-white.active")?.classList.remove("active");
		size_select_white.classList.add("active");
	});
});

const type_select_white = document.querySelectorAll(".type-white");

type_select_white.forEach( type_select_white => {
	type_select_white.addEventListener("click", () => {
		document.querySelector(".type-white.active")?.classList.remove("active");
		type_select_white.classList.add("active");
	});
});


// keep a default selected value
const link_black = document.getElementById("merch-black"); // Select the buy button element
const link_white = document.getElementById("merch-white"); // Select the buy button element

link_white.addEventListener("click", () => {
	const size_white = document.querySelector(".size-white.active").innerHTML;
	const type_white = document.querySelector(".type-white.active").innerHTML;
	window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSdzX7zdGPz9ziH-fEB1PnjE7LTtBgY5RIrNFIvm06FxJgj81Q/viewform?usp=pp_url&entry.217624640=${
		type_white === "Normal"
			? "Normal+Fit+White+t-shirt+(200+GSM)+INR+400"
			: "Oversized+White+t-shirt+(220+GSM)+INR+500"
	}&entry.${
		type_white === "Normal"
			? "1021208672"
			: "1445181987"
	}=${size_white}`;
});

link_black.addEventListener("click", () => {
	const size = document.querySelector(".size-black.active").innerHTML;
	const type = document.querySelector(".type-black.active").innerHTML;
	window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSdpoME1rrPbhb7M6THUeYA5Wa6ywGs-TU73JGb8__5nqe4Wog/viewform?usp=pp_url&entry.557791790=${
		type === "Normal"
			? "Normal+Fit+Black+t-shirt+(200+GSM)+INR+400"
			: "Oversized+Black+t-shirt+(220+GSM)+INR+500"
	}&entry.${
		type === "Normal"
			? "1906753020"
			: "1791548458"
	}=${size}`;
});


