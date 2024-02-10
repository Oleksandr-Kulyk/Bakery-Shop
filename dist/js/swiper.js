const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button_active',
    },
  
    navigation: {
      nextEl: '.carousel-button-next',
      prevEl: '.carousel-button-prev',
    },

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    }
  });