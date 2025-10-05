var swiper = new Swiper(".mySwiper", {
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
});
