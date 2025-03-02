const videos = document.querySelector(".videos");
const videoModal = document.querySelector(".modal-video");
const videoModalContent = videoModal?.querySelector(".modal__content");

videos?.addEventListener("click", e => {
	const playButton = e.target.closest(".lazy-video__play");
	const video = e.target.closest(".lazy-video");
	const videoId = video?.dataset.id;

	if (!playButton) return;

	document.body.classList.add("lock");

	// При открытии модалки, добавить задний фон и кнопку
	videoModal.classList.add("show");
	videoModal.dataset.id = videoId;
	videoModalContent.style.cssText = `background: url("https://rutube.ru/api/video/${videoId}/thumbnail/?redirect=1") 50%/cover no-repeat #00000063`;
	videoModalContent.innerHTML = `
			<button class="modal-video__play">
				<img src="img/icons/play-white.svg" alt="">
			</button>
		`
});

// При клике на кнопку воспроизведения добавить видео 
videoModal.addEventListener("click", function (e) {
	const videoId = this.dataset.id;

	videoModalContent.innerHTML = `
		<iframe
			src="https://rutube.ru/play/embed/${videoId}" 
			frameBorder="0" 
			allow="clipboard-write;autoplay"
			webkitAllowFullScreen
			mozallowfullscreen
			allowFullScreen
		></iframe>  
	`;
})



/*
videos?.forEach(el => {
	const videoId = el.dataset.id;
	const playButton = el.querySelector(".lazy-video__play");

	playButton?.addEventListener("click", () => {
		el.innerHTML = `
			<iframe
				src="https://rutube.ru/play/embed/${videoId}" 
				frameBorder="0" 
				allow="clipboard-write;autoplay"
				webkitAllowFullScreen
				mozallowfullscreen
				allowFullScreen
		 ></iframe>  
		`;

		el.classList.add("ready");
	})
})
*/