function showModal(trigger, modal) {
	if (trigger) {
		document.body.classList.add("lock");
		modal.classList.add("show");

		// Изменение заголовка модалки с формой
		if (!modal.classList.contains("modal-application")) return;

		const programCard = trigger.closest(".program-card");
		const modalTitle = modal.querySelector(".modal-application__title > div");
		// Если тригер в карте программы, тогда мы меняем его заголовок на нужный, иначе заголовок будет как в тайтле h1
		if (programCard) {
			const programTitle = programCard.querySelector(".program-card__title");
			modalTitle.textContent = programTitle.textContent;
		} else {
			modalTitle.textContent = document.querySelector("h1").textContent;
		};

	}
}

document.addEventListener("click", e => {
	// Показывать модалку
	const modalApplication = document.querySelector(".modal-application");
	const triggerApplication = e.target.closest(".modal-application-trigger");
	showModal(triggerApplication, modalApplication);

	// Прятать модалку при клике вне
	const modal = e.target.closest(".modal");
	const modalContent = e.target.closest(".modal__content");
	const closeButton = e.target.closest(".modal__close");

	if (!modal) return; // Если нет модалки то останавливать

	if (!modalContent || closeButton) {
		modal.classList.remove("show");
		document.body.classList.remove("lock");
	}
});

function showSuccessModal() {
	const modalApplication = document.querySelector(".modal-application");
	const modalSuccess = document.querySelector(".modal-success");

	document.body.classList.add("lock");
	modalSuccess.classList.add("show");
	modalApplication.classList.remove("show");
}

const modalApplicationForm = document.getElementById("modal-application-form");
modalApplicationForm?.addEventListener("submit", e => {
	e.preventDefault();
	showSuccessModal()
})