// Для анимации height с 0 до auto -------------------------------------------------------------------------
const accordeonSection = document.querySelector(".accordeons");
const accordeons = document.querySelectorAll(".accordeon");

const accordeonAnswerClassName = ".accordeon__answer"

function setZeroHeight() {
	accordeons.forEach(el => {
		el.querySelector(accordeonAnswerClassName).style.height = "0px";
	})
}
setZeroHeight();

accordeonSection?.addEventListener("click", (e) => {
	let accordeon = e.target.closest(".accordeon");
	let trigger = e.target.closest(".accordeon__trigger");

	if (!trigger) return;

	let accordeonAnswer = accordeon.querySelector(accordeonAnswerClassName);

	if (accordeonAnswer.style.height === "0px") {
		accordeonAnswer.style.height = `${accordeonAnswer.scrollHeight}px`;
		accordeon.classList.add("open");
	} else {
		accordeonAnswer.style.height = `${accordeonAnswer.scrollHeight}px`;
		window.getComputedStyle(accordeonAnswer, null).getPropertyValue("height");
		accordeonAnswer.style.height = "0";
		accordeon.classList.remove("open");
	}

	accordeonAnswer.addEventListener("transitionend", () => {
		if (accordeonAnswer.style.height !== "0px") {
			accordeonAnswer.style.height = "auto"
		}
	});
})