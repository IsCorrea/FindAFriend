const openNavButton = document.getElementById('open-nav-button');
const closeNavButton = document.getElementById('close-nav-button');

const navMenu = document.querySelector('.nav-menu');

openNavButton.onclick = () => {
  navMenu.classList.remove('invisible')
  openNavButton.classList.add('invisible')
  closeNavButton.classList.remove('invisible')
}

closeNavButton.onclick = () => {
  navMenu.classList.add('invisible')
  openNavButton.classList.remove('invisible')
  closeNavButton.classList.add('invisible')
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  hiddenClass: 'swiper-button-hidden',
  spaceBetween: 10,

  mousewheel: true,
  keyboard: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper-team', {
  // Optional parameters
  direction: 'horizontal',

  hiddenClass: 'swiper-button-hidden',
  spaceBetween: 10.5,

  watchOverflow: true,

  mousewheel: true,
  keyboard: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


});