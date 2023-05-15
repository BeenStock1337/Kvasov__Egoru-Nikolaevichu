//Создание связи с элементами страницы; присваивание переменных
let fromText = document.querySelector('.from-text');
let toText = document.querySelector('.to-text');
let exchageIcon = document.querySelector('.exchange');
let selectTag = document.querySelectorAll('select');
let icons = document.querySelectorAll('.row i');
let translateBtn = document.querySelector('button');

//
let countries = {
    'en': 'Английский',
    'ru': 'Русский'
};

//Добавление опций в выпадающий список
selectTag.forEach(function (tag, id) {
    for (let country_code in countries) { //Выбор страны по умолчанию при загрузке страницы
        let selected = '';
        if (id == 0) {
          if (country_code == 'en') {
            selected = 'selected';
          } 
        } else {
          if (country_code == 'ru') {
            selected = 'selected';
          }
        }
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`; //Определение выбранной опции и ее значение
        tag.insertAdjacentHTML('beforeEnd', option); //Добавление новой опции в конец выпадающего списка
    }
});

//Реализация функции обмена местами языков
exchageIcon.addEventListener('click', function () {
    let tempText = fromText.value;
    let tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

//Реализация функции кнопки перевода
translateBtn.addEventListener('click', function () {
    let text = fromText.value.trim();
    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;
    if(!text) return;
    if (translateFrom == translateTo) {return toText.value = 'Выберите разные языки'};
    toText.setAttribute('placeholder', 'Переводим..');
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute('placeholder', 'Перевод');
    });
});