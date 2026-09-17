const body = document.body;

window.addEventListener("scroll", () => {
	if (body.scrollTop > 0) {
		body.classList.toggle("down", true);
	} else {
		body.classList.toggle("down", false);
	}
});
