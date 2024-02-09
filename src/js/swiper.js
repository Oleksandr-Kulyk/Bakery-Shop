const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-button-next',
      prevEl: '.carousel-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });