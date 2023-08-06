const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const burger = header.querySelector('.burger');
const navigation = header.querySelector('.navigation');
const navList = navigation.querySelector('.navigation__list');
const navItem = navigation.querySelector('.navigation__item');
const telephone= navigation.querySelector('.header__contact');
const modal= document.querySelector('.modal');

function toggleModalIsActive() {
  modal.classList.toggle('modal_active');
}

// Функция для отображения или скрытия навигации и изменения состояния бургер-меню
function toggleNav() {
    navigation.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('active');
  }

  function handleClose() {
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

// Получаем элементы формы
const form = document.querySelector('.modal__form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');
const textareaInput = document.getElementById('textarea');

// Обработчик события отправки формы
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение формы

  // Создаем объект FormData и добавляем значения полей формы
  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('telephone', telephoneInput.value);
  formData.append('wishes', textareaInput.value);

  // Создаем новый объект XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Устанавливаем метод и URL для отправки данных
  xhr.open('POST', 'обработчик.php', true);

  // Устанавливаем заголовок для правильной обработки данных на сервере
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  // Устанавливаем обработчик события загрузки
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Действия при успешной отправке формы
      console.log(xhr.responseText);
    } else {
      // Действия при ошибке отправки формы
      console.error(xhr.statusText);
    }
  };

  // Отправляем данные формы на сервер
  xhr.send(formData);

  toggleModalIsActive();
});