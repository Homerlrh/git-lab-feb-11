document.querySelector("#toggle").addEventListener("click", (e) => {
	e.preventDefault();
	visability();
});

function visability() {
	var x = document.querySelector("#a");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
