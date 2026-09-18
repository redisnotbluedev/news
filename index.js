const body = document.body;
const share = document.getElementById("share");
const button = document.getElementById("top");
let isToTop = false;

window.addEventListener("scroll", () => {
	if (isToTop) return;

	if (window.scrollY > 0) {
		body.classList.toggle("down", true);
	} else {
		body.classList.toggle("down", false);
	}
});

share.addEventListener("click", () => {
	navigator.clipboard.writeText(location.href).then(() => {
		alert("Link copied to clipboard");
	}).catch(() => {
		alert("Failed to copy link.");
	});
});

button.addEventListener("click", () => {
	isToTop = true;
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});

	window.addEventListener("scrollend", () => {
		body.classList.remove("down");
		isToTop = false;
	}, { once: true });
});
