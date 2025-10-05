// --- your shared config (adjust values as needed) ---
const swiperConfig = {
    slidesPerView: 1.3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: false,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1.8,
        },
    },
};

// init or re-init function
function initSwiper() {
    // destroy existing instance cleanly
    if (window.mySwiper && typeof window.mySwiper.destroy === "function") {
        try {
            window.mySwiper.destroy(true, true);
        } catch (e) {
            /* ignore */
        }
        window.mySwiper = null;
    }
    window.mySwiper = new Swiper(".mySwiper", swiperConfig);
    const dir = document.documentElement.getAttribute("dir") === "rtl" ? "rtl" : "ltr";

    if (window.mySwiper && typeof window.mySwiper.changeLanguageDirection === "function") {
        window.mySwiper.changeLanguageDirection(dir);
    } else {
        window.mySwiper.update?.();
    }

    // small timeout to force layout recalculation (helps with centeredSlides/fractional slidesPerView)
    setTimeout(() => {
        try {
            window.mySwiper.update();
            // keep current visible slide stable
            const index = window.mySwiper.realIndex ?? 0;
            window.mySwiper.slideTo(index, 0, false);
        } catch (e) {
            /* ignore */
        }
    }, 50);
}

// initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => initSwiper());
