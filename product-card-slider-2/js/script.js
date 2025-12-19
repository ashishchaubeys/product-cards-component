

        let swiper;
        
        function initSwiper() {
            // Destroy existing swiper instance if it exists
            if (swiper) {
                swiper.destroy(true, true);
            }
            
            swiper = new Swiper('.swiper', {
                // Base config for the smallest widths (< 320px)
                slidesPerView: 1.5,
                spaceBetween: 20,
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                grabCursor: true,
                allowTouchMove: true,
                watchOverflow: true,
                watchSlidesProgress: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                resizeObserver: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    // From 320px and up
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                    },
                    // From 375px and up
                    375: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    // From 425px and up
                    425: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    // From 640px and up
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                },
                on: {
                    init: function() {
                        this.update();
                    },
                    resize: function() {
                        this.update();
                    }
                }
            });
        }
        
        // Initialize Swiper on page load
        initSwiper();
        
        // Handle window resize with debounce
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (swiper) {
                    swiper.update();
                    swiper.updateSlides();
                    swiper.updateSlidesClasses();
                }
            }, 250);
        });
    
