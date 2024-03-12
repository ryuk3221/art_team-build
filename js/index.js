if (document.querySelector('.team-build')) {
  const progDescSlider = new Swiper('.prog-desc__slider', {
    navigation: {
      nextEl: '.prog-desc-slider-next',
      prevEl: '.prog-desc-slider-prev'
    },
    pagination: {
      el: ".prog-desc-slider-pagination "
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 3
      }
    }
  });

  const modulesSlider_1 = new Swiper('.modules__slider_1', {
    navigation: {
      nextEl: '.module-slider-next_1',
      prevEl: '.module-slider-prev_1'
    },
    pagination: {
      el: ".module1-slider-pagination_1"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 40,
        slidesPerView: 4,
      }
    }
  });

  const modulesSlider_2 = new Swiper('.modules__slider_2', {
    navigation: {
      nextEl: '.module-slider-next_2',
      prevEl: '.module-slider-prev_2'
    },
    pagination: {
      el: ".module1-slider-pagination_2"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 40,
        slidesPerView: 4,
      }
    }
  });

  const modulesSlider_3 = new Swiper('.modules__slider_3', {
    navigation: {
      nextEl: '.module-slider-next_3',
      prevEl: '.module-slider-prev_3'
    },
    pagination: {
      el: ".module1-slider-pagination_3"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 40,
        slidesPerView: 4,
      }
    }
  });
}