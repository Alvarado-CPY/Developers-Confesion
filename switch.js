const btnContainer = document.getElementById("container");
const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");

btnNo.addEventListener("mouseover", () => {
	const firstChildren = btnContainer.firstElementChild.id;
	btnContainer.innerHTML = "";

	if (firstChildren == "no") {
		btnContainer.appendChild(btnYes);
		btnContainer.appendChild(btnNo);
	} else {
		btnContainer.appendChild(btnNo);
		btnContainer.appendChild(btnYes);
	}
});
