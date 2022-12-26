const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            // spaceBetween: 30,

        },
        // when window width is >= 640px
        840: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperComment = new Swiper(".swiperComment", {
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 200,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        // when window width is >= 640px
        840: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        900: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        1300: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

const swiperTrajectologs = new Swiper(".swiperNew", {
    slidesPerView: 4,
    spaceBetween: 20,
    touchAction: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: -80,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        // when window width is >= 640px
        840: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

const swiperPrice = new Swiper(".swiperPrice", {
    slidesPerView: 3,
    spaceBetween: 20,
    touchAction: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: -80,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 1,
            spaceBetween: -80,
        },
        780: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
        840: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

const swiperMap = new Swiper(".swiperMap", {
    slidesPerView: 1,
    spaceBetween: 20,
    touchAction: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: -80,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 1,
            spaceBetween: -120,
        },
        780: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
        840: {
            slidesPerView: 2,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".roadMap__Block-image",
        hide: false,
        clickable: true
    }

})
