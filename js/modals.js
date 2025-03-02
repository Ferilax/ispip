// Убирать модалку
document.addEventListener("click", e => {
	const modal = e.target.closest(".modal");
	const modalContent = e.target.closest(".modal__content");


	if (!modal) return; // Если нет модалки то останавливать

	if (!modalContent) {
		modal.classList.remove("show");
		document.body.classList.remove("lock");
	}
})