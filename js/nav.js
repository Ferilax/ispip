const hiddenLists = document.querySelectorAll(".nav__hidden-list");
const hiddenContainers = document.querySelectorAll(".nav__hidden-container");

// Убираем все тултипы и показываем нужный
function setClassList(element) {
	hiddenContainers.forEach(el => {
		if (el !== element) {
			el.classList.remove("show");
		}
	})
	element?.classList.toggle("show");
}

document.addEventListener("click", e => {
	if (!e.target.closest(".nav__hidden-container")) {
		setClassList();
	};
})

//Обрабатываем клик по тригеру
const nav = document.querySelector(".nav");
nav?.addEventListener("click", e => {
	const hiddenContainer = e.target.closest(".nav__hidden-container");
	const clickedHiddenList = e.target.closest(".nav__hidden-list");

	if (!hiddenContainer || window.innerWidth < 1024) return;

	if (clickedHiddenList) return

	setClassList(hiddenContainer);
})


// Перенос тултипа, если касается правой части экрана
function setTooltipPos() {
	const windowWidth = window.innerWidth;

	hiddenLists.forEach(el => {
		const rightPos = el.getBoundingClientRect().right;
		const width = el.getBoundingClientRect().width;

		if (windowWidth - rightPos <= 3) {
			el.classList.add("right");
		} else if (window.innerWidth - rightPos >= width) {
			el.classList.remove("right");
		}
	})
}
setTooltipPos();
window.addEventListener("resize", setTooltipPos);

// Мобильная навигация -------------------------------------------------------------------------
const navOpen = document.querySelector(".header__burger");
navOpen?.addEventListener("click", () => {
	nav.classList.add("show");
	document.body.classList.add("lock-mobile");
})

const navClose = document.querySelector(".logo-content__close");
navClose?.addEventListener("click", () => {
	nav.classList.remove("show");
	document.body.classList.remove("lock-mobile");
})

// Для анимации height с 0 до auto -------------------------------------------------------------------------
const navContainer = document.querySelector(".container.desktop");
function setZeroHeight() {
	if (window.innerWidth < 1024) {
		hiddenContainers.forEach(el => {
			el.querySelector(".nav__hidden-list").style.height = "0px";
		})
	} else {
		hiddenContainers.forEach(el => {
			el.querySelector(".nav__hidden-list").style.height = "unset";
		})
	}
}
setZeroHeight();
window.addEventListener("resize", setZeroHeight);

navContainer?.addEventListener("click", (e) => {
	let clicked = e.target.closest(".nav__hidden-container");

	if (!clicked || window.innerWidth > 1023) return;

	let accordeon = clicked.querySelector(".nav__hidden-list");

	if (accordeon.style.height === "0px") {
		accordeon.style.height = `${accordeon.scrollHeight}px`;
		clicked.classList.add("open");
	} else {
		accordeon.style.height = `${accordeon.scrollHeight}px`;
		window.getComputedStyle(accordeon, null).getPropertyValue("height");
		accordeon.style.height = "0";
		clicked.classList.remove("open");
	}

	accordeon.addEventListener("transitionend", () => {
		if (accordeon.style.height !== "0px") {
			accordeon.style.height = "auto"
		}
	});
})