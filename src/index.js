const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const burger = header.querySelector('.burger');
const navigation = header.querySelector('.navigation');
const navList = navigation.querySelector('.navigation__list');
const navItem = navigation.querySelector('.navigation__item');
const telephone= navigation.querySelector('.header__contact');

// Функция для отображения или скрытия навигации и изменения состояния бургер-меню
function toggleNav() {
    console.log(burger)
    navigation.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('active');
  }

  function handleClose() {
    console.log(burger)
    navigation.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('active');
  }
  console.log(burger)
  // Переключение состояния навигации и бургер-меню при клике на бургер
  burger.addEventListener('click', toggleNav);
  overlay.addEventListener('click', toggleNav);
  document.addEventListener('keydown', function (e) {
    if(e.key === "Escape") {
      handleClose()
    }
  }); 
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