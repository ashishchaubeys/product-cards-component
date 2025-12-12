
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     pagination: {
      el: ".swiper-pagination",
      type: "fraction" // or "bullets", "progressbar", "custom", dynamicBullets: true,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4.2,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6.2,
        spaceBetween: 24,
      }
    }
  });
