const selects = document.querySelectorAll(".custom-select");


document.addEventListener("click", e => {
	let clickedSelect = e.target.closest(".custom-select");
	let clickedLabelContainer = e.target.closest(".custom-select__label-container");
	const clickedOption = e.target.closest(".custom-select__option");

	if (!clickedSelect) {
		selects.forEach(el => el.classList.remove("show"))
	}

	if (clickedLabelContainer) {
		clickedSelect.classList.toggle("show");
	};


	if (clickedOption) {
		let input = clickedSelect.querySelector("input");
		let label = clickedSelect.querySelector(".custom-select__label");

		input.value = clickedOption.dataset.value;
		label.innerHTML = clickedOption.textContent;
		clickedSelect.classList.remove("show");
	};
})