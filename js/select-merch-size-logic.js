// keep a default selected value
const size = '' // Size : S M L XL XXL
const type = '' // Type : Normal Oversized
const size_white = '' // Size : S M L XL XXL
const type_white = '' // Type : Normal Oversized
const link = document.getElementById("merch-black"); // Select the buy button element
const link_white = document.getElementById("merch-white"); // Select the buy button element

link_white.addEventListener("click", () => {
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

link.addEventListener("click", () => {
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
