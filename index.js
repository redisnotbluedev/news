const body = document.body;
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
	const current = window.scrollY;
	if (current > lastScroll) {
		body.classList.toggle("down", true);
	}
	if (current < lastScroll) {
		body.classList.toggle("down", false);
	}

	lastScroll = window.scrollY;
});
