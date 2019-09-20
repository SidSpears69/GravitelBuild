var breakpoint = window.matchMedia('(max-width:767px)');
            var mySwiper;
            var breakpointChecker = function () {
                if (breakpoint.matches === true) {
                    if (mySwiper !== undefined) 
                        mySwiper.destroy(true, true);
                    
                    return;
                } else if (breakpoint.matches === false) {
                    return enableSwiper();
                }

            };
            var enableSwiper = function () {
                mySwiper = new Swiper(".swiper-container", {
                    mode: 'horizontal',
                    slidesPerView: '3',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loopedSlides: 3

                });
            };
            breakpoint.addListener(breakpointChecker);
            breakpointChecker();