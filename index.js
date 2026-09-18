const body = document.body;
const share = document.getElementById("share");

window.addEventListener("scroll", () => {
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
