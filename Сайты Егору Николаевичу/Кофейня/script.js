//Получаем модальные окна
let modalGin = document.querySelector('.modal__gin');
let modalViolet = document.querySelector('.modal__violet');
let modalOrder = document.querySelector('.modal__order');

//Получаем кнопку закрытия модального окна
let closeBtn1 = document.querySelector('.close1');
let closeBtn2 = document.querySelector('.close2');
let closeBtn3 = document.querySelector('.close3');

//Получаем все картинки товаров
let purpleLatte = document.querySelector('.purpleLatte');
let birdLatte = document.querySelector('.birdLatte');
let outOrder = document.querySelector('.outOrder');

//Добавляем обработчик событий на картинку товара
purpleLatte.addEventListener('click', function () {
    modalGin.style.display = 'block'; //Отображаем модальное окно
  });

purpleLatte.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer'; //Меняем вид курсора
    purpleLatte.style.transform = 'scale(1.05)'; //Увеличиваем размер картинки при наведении
  });

purpleLatte.addEventListener('mouseout', function () {
    purpleLatte.style.transform = 'scale(1)'; //Возвращаем картинку в исходный размер при уходе курсора
  });

//Добавляем обработчик событий на клик на кнопку закрытия модального окна
closeBtn1.addEventListener('click', function() {
  //Скрываем модальное окно
  modalGin.style.display = 'none';
});

//Делаем ту же процедуру со второй картинкой
birdLatte.addEventListener('click', function () {
    modalViolet.style.display = 'block';
  });

  birdLatte.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer';
    birdLatte.style.transform = 'scale(1.05)';
  });

  birdLatte.addEventListener('mouseout', function () {
    birdLatte.style.transform = 'scale(1)';
  });

closeBtn2.addEventListener('click', function() {
  modalViolet.style.display = 'none';
});

//Делаем ту же процедуру с третьей картинкой
outOrder.addEventListener('click', function () {
    modalOrder.style.display = 'block';
  });

outOrder.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer'; 
    outOrder.style.transform = 'scale(1.05)'; 
  });

outOrder.addEventListener('mouseout', function () {
    outOrder.style.transform = 'scale(1)';
  });

closeBtn3.addEventListener('click', function() {
    modalOrder.style.display = 'none';
});

//Добавление скролла на страницу
let scrollToAboutBtn = document.querySelector('.menu__button-about');
let aboutSection = document.querySelector('.hero'); 
let scrollToMenuBtn = document.querySelector('.menu__button-choice');
let menuSection = document.querySelector('.choice');
let showMenuBtn = document.querySelector('.hero__button');
let scrollToContactsBtn = document.querySelector('.menu__button-contacts');
let contactsSection = document.querySelector('.contacts');
scrollToAboutBtn.addEventListener('click', function () {
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
});
scrollToMenuBtn.addEventListener('click', function () {
    window.scrollTo({
        top: menuSection.offsetTop,
        behavior: 'smooth'
    });
});
showMenuBtn.addEventListener('click', function () {
    window.scrollTo({
        top: menuSection.offsetTop,
        behavior: 'smooth'
    });
});
scrollToContactsBtn.addEventListener('click', function () {
    window.scrollTo({
        top: contactsSection.offsetTop,
        behavior: 'smooth'
    });
});