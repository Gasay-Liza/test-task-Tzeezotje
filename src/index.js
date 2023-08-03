const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const navItem = header.querySelector('.navigation__item');
const telephone= header.querySelector('.header__contact');

// Функция для отображения или скрытия навигации и изменения состояния бургер-меню
function toggleNav() {
    console.log(burger)
    navItem.classList.toggle('active');
    burger.classList.toggle('active');
    telephone.classList.toggle('active');
  }
  console.log(burger)
  // Переключение состояния навигации и бургер-меню при клике на бургер
  burger.addEventListener('click', toggleNav);

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });