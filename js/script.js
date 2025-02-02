document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[data-marquee]').forEach(container => {
        const primaryTrack = container.querySelector('.marquee__track');
        if (primaryTrack) {
            const secondaryTrack = primaryTrack.cloneNode(true);
            secondaryTrack.classList.add('marquee__track--secondary');
            container.appendChild(secondaryTrack);
            container.style.width = `${primaryTrack.offsetWidth}px`;
        }
    });

    new Swiper(".mySwiper", {
        spaceBetween: 24,
        slidesPerView: "auto",
        centeredSlides: true,
        slidesOffsetBefore: -144,
        slideToClickedSlide: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        breakpoints: {
            992: {
                slidesOffsetBefore: -144,
                centeredSlides: true,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 24,
                slidesOffsetBefore: 20,
                centeredSlides: false,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesOffsetBefore: 0,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 1
                }
            }
        }
    });

    const cursor = document.querySelector(".custom-cursor");
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});
