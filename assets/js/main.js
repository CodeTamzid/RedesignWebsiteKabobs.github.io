var swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidespPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidespPerView: 2,
        }
    }
});