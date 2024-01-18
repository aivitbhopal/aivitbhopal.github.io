var swiperFade = new Swiper(".swiperFade", {
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  var swiperVertical = new Swiper(".swiperVertical", {
    loop: true,
    effect: 'fade',
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  
  var swiperEffect = new Swiper(".swiperEffect", {
    loop: true,
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });