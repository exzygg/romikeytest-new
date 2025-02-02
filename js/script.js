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
        slidesOffsetBefore: 540,
        slideToClickedSlide: true,
        breakpoints: {
            1280: {
                slidesOffsetBefore: 540,
            },

            992: {
                slidesOffsetBefore: 100,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 24,
                slidesOffsetBefore: 20,
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