var audio = document.getElementById("audio");
var title = document.getElementById("title");

btnYes.addEventListener("click", () => {
	const jsConfetti = new JSConfetti();
	jsConfetti.addConfetti();
	audio.play();

	title.innerHTML = "LET'S GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!";
});
