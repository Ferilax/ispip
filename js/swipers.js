function swiperInit(swiper, params) {
	if (swiper && params) {
		Object.assign(swiper, params);
		swiper.initialize();
	}
}

const mainSlider = document.querySelector("#main-slider");
swiperInit(mainSlider, {
	slidesPerView: 1,
	loop: true,
	navigation: {
		prevEl: ".main-section .swiper-prev",
		nextEl: ".main-section .swiper-next",
	},
	pagination: {
		clickable: true,
		el: ".main-section .swiper-pagination",
	},
	allowTouchMove: false,
})

const cardSlider = document.querySelector("#card-slider");
swiperInit(cardSlider, {
	slidesPerView: 1.2,
	spaceBetween: 8,

	breakpoints: {
		680: {
			spaceBetween: 16,
			slidesPerView: 2.2,
		},
		930: {
			slidesPerView: 3.2,
		},
	}
})

const programSlider = document.querySelector("#program-slider");
swiperInit(programSlider, {
	slidesPerView: 1.1,
	spaceBetween: 20,

	breakpoints: {
		601: {
			slidesPerView: 1.4,
		},
		801: {
			slidesPerView: 1.6,
		},
		951: {
			slidesPerView: 2.2,
		},
		1201: {
			allowTouchMove: false,
			slidesPerView: 3,
		},
	}
})

const popularProgramSlider = document.querySelector("#popular-program-slider");
swiperInit(popularProgramSlider, {
	slidesPerView: 1.1,
	spaceBetween: 20,

	navigation: {
		prevEl: ".popular-program .swiper-prev",
		nextEl: ".popular-program .swiper-next",
	},

	breakpoints: {
		600: {
			slidesPerView: 1.4,
		},
		800: {
			slidesPerView: 1.6,
		},
		950: {
			slidesPerView: 2.2,
		},
		1200: {
			slidesPerView: 3,
		},
	}
})

const tabSlider = document.querySelector("#tab-slider");
const isDouble = tabSlider?.querySelectorAll("swiper-slide").length === 2;
swiperInit(tabSlider, {
	slidesPerView: 1.2,
	spaceBetween: 18,

	breakpoints: {
		400: {
			slidesPerView: 1.6,
		},
		550: {
			slidesPerView: isDouble ? 2 : 2.2,
		},
		768: {
			slidesPerView: isDouble ? 2 : 3,
		},
	}
})
// ----------------------------------------------------------------
function setProgramsSubtitleText(text) {
	if (!tabSlider) return;

	const subtitle = document.querySelector(".section-programs__subtitle");

	const tab = tabSlider.querySelector("input:checked");

	// Если нет checked таба, то код не заработает
	if (tab) {
		const tabTitle = tab.parentElement.querySelector(".tab__title");

		subtitle.innerHTML = text || tabTitle.textContent;
	}
}
setProgramsSubtitleText()

tabSlider?.addEventListener("click", e => {
	const clickedTab = e.target.closest(".tab");

	if (clickedTab && e.target.type === "radio") {
		const tabTitle = clickedTab.querySelector(".tab__title");

		setProgramsSubtitleText(tabTitle.textContent);
	}

})
// ----------------------------------------------------------------
const commentSlider = document.querySelector("#comment-slider");
swiperInit(commentSlider, {
	slidesPerView: 1,
	navigation: {
		prevEl: ".section-comments .swiper-prev",
		nextEl: ".section-comments .swiper-next",
	},
	allowTouchMove: false,
	autoHeight: true,

})

const commentProfileSlider = document.querySelector("#comment-profile-slider");
swiperInit(commentProfileSlider, {
	slidesPerView: 1,
	navigation: {
		prevEl: ".section-comments .swiper-prev",
		nextEl: ".section-comments .swiper-next",
	},
	allowTouchMove: false,
	autoHeight: true,
	effect: "creative",
	creativeEffect: {
		prev: {
			translate: [0, "110%", 0],
		},
		next: {
			translate: [0, "-110%", 0],
		},
	},
})

const achievementSlider = document.querySelector("#achievement-slider");
swiperInit(achievementSlider, {
	slidesPerView: 1.3,
	spaceBetween: 24,
	navigation: {
		prevEl: ".section-achievements .swiper-prev",
		nextEl: ".section-achievements .swiper-next",
	},
	breakpoints: {
		501: {
			spaceBetween: 40,
			slidesPerView: 2,
		},
		768: {
			spaceBetween: 40,
			slidesPerView: 2,
		},
		1024: {
			spaceBetween: 100,
			slidesPerView: 3,
		},
		1301: {
			slidesPerView: 3,
			spaceBetween: 190,
		}
	}
})

const teacherSlider = document.querySelector("#teacher-slider");
swiperInit(teacherSlider, {
	slidesPerView: "auto",
	spaceBetween: 42,
	navigation: {
		prevEl: ".section-teachers .swiper-prev",
		nextEl: ".section-teachers .swiper-next",
	},
})

const partnerSlider = document.querySelector("#partner-slider");
swiperInit(partnerSlider, {
	slidesPerView: 1.2,
	spaceBetween: 8,

	breakpoints: {
		425: {
			spaceBetween: 20,
			slidesPerView: 1.4,
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
	}
})

const newsSlider = document.querySelector("#news-slider");
swiperInit(newsSlider, {
	slidesPerView: "auto",
	spaceBetween: 20,
	navigation: {
		prevEl: ".news .swiper-prev",
		nextEl: ".news .swiper-next",
	},
	breakpoints: {
		768: {
			spaceBetween: 7,
		}
	}
});

const videoSlider = document.querySelector("#video-slider");
swiperInit(videoSlider, {
	slidesPerView: 1,
	spaceBetween: 8,
	grid: {
		rows: 1,
		fill: "row",
	},
	breakpoints: {
		351: {
			slidesPerView: 1.2,
			spaceBetween: 8,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		451: {
			slidesPerView: 1.6,
			spaceBetween: 8,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		651: {
			slidesPerView: 2.2,
			spaceBetween: 20,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		901: {
			slidesPerView: 3,
			spaceBetween: 20,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 20,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
	}
});

const tableSwiper = document.querySelector("#table-slider");
swiperInit(tableSwiper, {
	slidesPerView: 2.5,
	scrollbar: {
		el: ".table-scroll",
		draggable: true,
	},
	freeMode: {

		momentumRatio: 0.3,
	},

	mousewheel: true,

	breakpoints: {
		501: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		},
	}
});

const commentsGridSwiper = document.querySelector("#comments-grid-slider");
swiperInit(commentsGridSwiper, {
	slidesPerView: 1.2,
	spaceBetween: 12,
});

const processInfoSwiper = document.querySelector("#process-info-slider");
swiperInit(processInfoSwiper, {
	slidesPerView: 1.2,
	spaceBetween: 12,
});

const forWhomSliderSwiper = document.querySelector("#for-whom-slider");
swiperInit(forWhomSliderSwiper, {
	slidesPerView: "auto",
	spaceBetween: 8,

	breakpoints: {
		768: {
			spaceBetween: 20,
		}
	}
});

const opportunitiesSwiper = document.querySelector("#opportunities-slider");
swiperInit(opportunitiesSwiper, {
	slidesPerView: 1.2,
	spaceBetween: 12,
	grid: {
		rows: 1,
		fill: "row",
	},

	breakpoints: {
		601: {
			slidesPerView: 2.2,
			spaceBetween: 12,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		768: {
			slidesPerView: 2.2,
			spaceBetween: 20,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
	},
});

const trainingStepsSwiper = document.querySelector("#cards-with-checked-slider");
swiperInit(trainingStepsSwiper, {
	slidesPerView: 1.2,
	spaceBetween: 12,
	grid: {
		rows: 1,
		fill: "row",
	},

	breakpoints: {
		601: {
			slidesPerView: 2.2,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		768: {
			slidesPerView: 2.2,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
		1024: {
			slidesPerView: 3,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
	},
});
