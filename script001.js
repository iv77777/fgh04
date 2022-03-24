const writeInput = document.querySelectorAll('.writeInput_js');
const buttonColorJs = document.querySelector('#button-color_js');
const inputColor = document.querySelectorAll('.inputColor_js');

const input1Js = document.querySelector('#input-1_js');
const input2Js = document.querySelector('#input-2_js');
const input3Js = document.querySelector('#input-3_js');
const input4Js = document.querySelector('#input-4_js');
const input5Js = document.querySelector('#input-5_js');
const input6Js = document.querySelector('#input-6_js');
const input7Js = document.querySelector('#input-7_js');

const renderDey = document.querySelector('.renderDey_js');

const popup = document.querySelector('.popup_js');
const valuesLength = document.querySelector('.values-length_js');
const popupTableWrapper = document.querySelector('.popup__table-wrapper_js');
const popupTable = document.querySelector('.popup__table_js');
const sortValue = document.querySelector('.sort__value_js');
const miniPopup = document.querySelector('.mini-popup_js');
const selectButton = document.querySelector('.select__button_js');
const popupReverse = document.querySelector('.popup__reverse_js');

const popupDey = document.querySelector('.popupDey_js');
const popupRenderDey = document.querySelector('.popupRenderDey_js');

const popupButtonUp = document.querySelector(".popupButtonUp_js");

const fon = document.querySelector('.fon_js');

// Польот значений
const audioFly = new Audio("mp3/flight.mp3");
audioFly.currentTime = 0;

// клик по клавиатури
const audioClick = new Audio("mp3/click.mp3");
audioClick.currentTime = 0;

// ключи 
const keyActiveColor = 'fgh-activeColor';
const inputValue = 'fgh-inputValue';
const oneInputValue = 'fgh-oneInputValue';

// <<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Уберает активный цвет input
function removeActiveColor() {
  inputColor.forEach(item => {
    item.classList.remove('_active-color');
    if (item.classList.contains('background__acent-2')) {
      item.dataset.background = "#b83ce6";
    }
    if (item.classList.contains('background__acent-1')) {
      item.dataset.background = "#ffeb3b";
    }
  });
}
// устанавлюваем активный цвет input
function addActiveColor() {
  inputColor.forEach(item => {
    item.classList.add('_active-color');
    if (item.classList.contains('background__acent-2')) {
      item.dataset.background = "#ffeb3b";
    }
    if (item.classList.contains('background__acent-1')) {
      item.dataset.background = "#b83ce6";
    }
  });
}

// прощытует инпуты 
function input1JsInput2Js() {
  if (input1Js.value > 0 && input2Js.value > 0) {
    input4Js.value = input1Js.value * input2Js.value * input3Js.value;

    if (input5Js.value > 0) {
      input7Js.value = (input4Js.value / input5Js.value * input6Js.value).toFixed(2);
    } else {
      input7Js.value = '';
    }

  } else {
    input4Js.value = '';
    input7Js.value = '';
  }
}

// Уберает вивраный для записи инпут
function removeSelectInput() {
  writeInput.forEach(item => {
    item.classList.remove('writeNumber_js');
  });
}

// Встанавлювает input для записи чисел
function selectInput(element) {
  // Уберает вивраный для записи инпут
  removeSelectInput();
  // делает переданный елемент выбранный
  element.classList.add('writeNumber_js');

  // изменяет цвет кнопок клавиатуры
  changeBgNumbers(element.dataset.background);

  if (element.id == 'input-1_js') {
    // изменяет цвет бордера клавиатуры на цвет поля input7Js
    changeBorderInput7Js();
  } else {
    // изменяет цвет бордера клавиатуры на переданный цвет
    changeBorder(element.dataset.background);
  }
}

// Добавляет число в input
function writeNumber(number) {
  writeInput.forEach(item => {
    if (item.classList.contains('writeNumber_js')) {
      if (!isNaN(item.value + number)) {
        let numberValue = item.value + number
        item.value = numberValue;
      }
    }
  });
}

// Удаляет число с инпута
function numberDelete() {
  writeInput.forEach(item => {
    if (item.classList.contains('writeNumber_js')) {
      let inputValue = item.value.slice(0, -1);
      item.value = inputValue;
    }
  });
}

// запускает аудио
function audioPlay(audio) {
  audio.play();
}

//добавляет обект objectValue в LocalStorage по ключу keyName 
function postLocalStorage(keyName, object) {
  // переобразовуем масив value в строку и записываем в valueText
  let objectText = JSON.stringify(object);
  // добавляем valueText в localStorage
  localStorage.setItem(keyName, objectText);
}

// Получает обект з LocalStorage (если localStorage пустой то возвращам пустой обект)
function getLocalStorage(keyName, obgect = true) {
  // Получает обект з LocalStorage
  const objectLocalStorage = localStorage.getItem(keyName);
  if (objectLocalStorage !== null) {
    //переобразовуем из строки в обект и возвращаем
    return JSON.parse(objectLocalStorage);
  }

  // если localStorage пустой то возвращам пустой обект или масив
  if (obgect) {
    return {};
  } else {
    return [];
  }
}

// Проверает чы обект пустой
function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return true;
  }
  return false;
}

// получаем значения всех инпутов и создаем с ними обект
function getValueInput() {
  let objectValue = {};
  writeInput.forEach(item => {
    if (item.id == 'input-1_js') {
      objectValue.input1Js = item.value;
    }
    if (item.id == 'input-2_js') {
      objectValue.input2Js = item.value;
    }
    if (item.id == 'input-5_js') {
      objectValue.input5Js = item.value;
    }
  });
  return objectValue;
}

// изменяет цвет бордера клавиатуры на цвет поля input7Js
function changeBorderInput7Js() {
  const numbersList = document.querySelector('.numbers__list_js');
  const colorBorder = input7Js.dataset.background;
  numbersList.style.border = `solid 2px ${colorBorder}`;
}

// изменяет цвет бордера клавиатуры на переданный цвет
function changeBorder(colorBorder) {
  const numbersList = document.querySelector('.numbers__list_js');
  numbersList.style.border = `solid 2px ${colorBorder}`;
}

// изменяет цвет клавиатуры
function changeBgNumbers(color) {
  const numbers = document.querySelectorAll('.number_js');
  const numberDelete = document.querySelector('.number__delete_js');
  numbers.forEach(item => {
    item.style.backgroundColor = color;
  });
  numberDelete.style.backgroundColor = color;
}

// рендерит переданный обект в начало попапа
function renderValuePopup(arrayValue) {
  if (!arrayValue.value1) {
    arrayValue.value1 = "";
  }
  let valueHtml = `
     <tr class="popup__table-tr_js" id="${arrayValue.miliseconds}">
        <td class="td__date">${arrayValue.date}</td>
        <td class="${arrayValue.background2} td__value">${arrayValue.value1}</td>
        <td class="${arrayValue.background} td__value">${arrayValue.value}</td>
      </tr>
  `;
  popupTable.insertAdjacentHTML('afterbegin', valueHtml);
}
// иметирует польот значения до иконки
function addValue(resultValue, backgroundColor) {
  // клонируем результат на html странице
  const resultValueKlone = resultValue.cloneNode(true);
  //resultValueKloneTop присваюваем позицею с верху
  const resultValueKloneTop = resultValue.getBoundingClientRect().top;
  //resultValueKloneLeft присваюваем позицею с лева
  const resultValueKloneLeft = resultValue.getBoundingClientRect().left;

  const resultValueKloneСlientWidth = resultValue.clientWidth;

  // добавляем клону классы _flyValue
  resultValueKlone.setAttribute('class', '_flyValue');

  let color = backgroundColor;

  // задаем позицею значению на странице
  resultValueKlone.style.cssText = `
      left:${resultValueKloneLeft}px;
      top:${resultValueKloneTop}px;
      width: ${resultValueKloneСlientWidth}px;
      height: 60px;
      background-color: ${color};
    `;

  // Выводим етот документ в самый конец боди
  document.body.append(resultValueKlone);

  const buttonStorageInner = document.querySelector('#button-storage__inner_js');

  // получаем коорденаты папки
  const folderjsFlyLeft = buttonStorageInner.getBoundingClientRect().left + 7;
  const folderjsFlyTop = buttonStorageInner.getBoundingClientRect().top + 20;

  // задаем клону позицею куда перемиститца на странице
  resultValueKlone.style.cssText = `
      left:${folderjsFlyLeft}px;
      top:${folderjsFlyTop}px;
      height: 15px;
      width: 35px;
      font-size: 10px;
      background-color: ${color};
      transition: all .5s;
    `;

  // когда клон долитит до папки 
  resultValueKlone.addEventListener('transitionend', function () {
    resultValueKlone.remove();
  });
}

// иметирует польот значения до иконки удалить  в попапе 2
function FlyremoveValue(resultValue) {

  //присваюваем позицею с верху
  const resultValueKloneTop = resultValue.getBoundingClientRect().top;
  //присваюваем коорденаты с лева
  const resultValueKloneLeft = 8;

  // добавляем клону классы _flyValue
  resultValue.setAttribute('class', '_flyValueTr');

  // width: ${ resultValueKloneСlientWidth } px;
  // задаем позицею значению на странице
  resultValue.style.cssText = `
      left:${resultValueKloneLeft}px;
      top:${resultValueKloneTop}px;
      transform: scale(1);
  `;

  let resultValueClientWidth = resultValue.clientWidth;

  // коорденаты с лева
  const folderjsFlyLeft = - ((resultValueClientWidth / 2) - 30);
  // коорденаты с верху
  const folderjsFlyTop = 5;

  // задаем клону позицею куда перемиститца на странице
  setTimeout(() => {
    resultValue.style.cssText = `
      left:${folderjsFlyLeft}px;
      top:${folderjsFlyTop}px;
      transform: scale(0.1);
      transition: all .8s;
    `;
  }, 10);

  // когда клон долитит до папки 
  resultValue.addEventListener('transitionend', function () {
    resultValue.remove();
    const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
    valuesLength.innerText = popupTableTrAll.length;
  });
}

//показует скрывает miniPopup
function addRemoveMiniPopup(e) {
  miniPopup.classList.add('_active');
  const miniPopupСlientWidth = miniPopup.clientWidth;
  // присваюваем позицею с верху
  const eTargetTop = e.pageY - 90;
  // присваюваем позицею с лева
  let eTargetLeft = e.pageX - miniPopupСlientWidth - 30;

  if (eTargetLeft < miniPopupСlientWidth) {
    eTargetLeft = 8;
  }
  miniPopup.style.cssText = `
           top: ${eTargetTop}px;
           left: ${eTargetLeft}px;
        `;

  setTimeout(() => {
    miniPopup.classList.remove('_active');
  }, 700);
}

function resetMiniPopup() {
  miniPopup.textContent = 0;
}

// удаляет стрелку пролистования вверх у попапах
function removeArrowTop(){
  popupButtonUp.classList.remove('_active');
}
// в попапе popupTable если нужно то показует или удаляет стрелку пролистувания вверх
function arrowAddRemove1() {
  if (popupTable.getBoundingClientRect().top < 100) {
    if (!popupButtonUp.classList.contains('_active')) {
      popupButtonUp.classList.add('_active')
    }
  } else {
    if (popupButtonUp.classList.contains('_active')) {
      popupButtonUp.classList.remove('_active')
    }
  }
}
// в попапе popupRenderDey если нужно то показует или удаляет стрелку пролистувания вверх
function arrowAddRemove2() {
  if (popupRenderDey.getBoundingClientRect().top < 55) {
    if (!popupButtonUp.classList.contains('_active')) {
      popupButtonUp.classList.add('_active')
    }
  } else {
    if (popupButtonUp.classList.contains('_active')) {
      popupButtonUp.classList.remove('_active')
    }
  }
}
// <<<<<<<<<<<<<<<< // function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// =================== при загрузке странице =============================
// Подставляем цвета с LocalStorage 
const colorDD = getLocalStorage(keyActiveColor);
if (colorDD !== null) {
  if (colorDD.color) {
    buttonColorJs.classList.add('_active-color');
    addActiveColor();
    changeBgNumbers("#ffeb3b");
    changeBorder("#ffeb3b");
  } else {
    buttonColorJs.classList.remove('_active-color');
    removeActiveColor();
  }
}

// подставляем значения инпутов из LocalStorage
const objectLocalStorage = getLocalStorage(inputValue);
if (isEmpty(objectLocalStorage)) {
  if (objectLocalStorage.input1Js > 0) {
    input1Js.value = objectLocalStorage.input1Js;
  }
  if (objectLocalStorage.input2Js > 0) {
    input2Js.value = objectLocalStorage.input2Js;
  }
  if (objectLocalStorage.input5Js > 0) {
    input5Js.value = objectLocalStorage.input5Js;
  }

  input1JsInput2Js();
}

// рендерим значения в попап
const arrayValues = getLocalStorage(oneInputValue, false);
if (arrayValues.length) {
  valuesLength.innerText = arrayValues.length;
  arrayValues.forEach(item => {
    // рендерит етот обект в попап
    renderValuePopup(item);
  });
}

// =================== // при загрузке странице ========================

// <<<<<<<<<<<<<<<< при клике на странице >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.addEventListener('click', (e) => {

  // при клики по клавиатупи 
  if (e.target.closest('.number_js')) {
    // Добавляет число в input
    writeNumber(e.target.innerText);
    // прощытует инпуты 
    input1JsInput2Js();

    const obgectValue = getValueInput();
    postLocalStorage(inputValue, obgectValue);

    // audioPlay(audioClick);
  }

  // при клики на input 
  if (e.target.closest('.writeInput_js')) {
    // Встанавлювает етот input для записи чисел
    selectInput(e.target);
  }

  // при клики удалить на клавиатуре
  if (e.target.closest('.number__delete_js')) {
    // audioPlay(audioClick);
    // Удаляет число с инпута
    numberDelete();
    // прощытует инпуты 
    input1JsInput2Js();

    const obgectValue = getValueInput();
    postLocalStorage(inputValue, obgectValue);
  }

  // пири клики по кнопке изминения цвета
  if (e.target.closest('#button-color_js')) {
    if (e.target.classList.contains('_active-color')) {
      // записуем в LocalStorage
      postLocalStorage(keyActiveColor, { color: false });
      // Уберает активный цвет у кнопки
      e.target.classList.remove('_active-color');

      // Уберает активный цвет input
      removeActiveColor();

      // Устанавлювает активный input1Js input
      selectInput(input1Js);
    } else {
      // записуем в LocalStorage
      postLocalStorage(keyActiveColor, { color: true });
      //устанавлюваем активный цвет у кнопки
      e.target.classList.add('_active-color');

      // устанавлюваем активный цвет input
      addActiveColor();

      // Устанавлювает активный input1Js input
      selectInput(input1Js);
    }
  }

  // при клики по кнопке делаем активный первый input
  if (e.target.closest('.buttons__one')) {
    // Встанавлювает input для записи чисел
    selectInput(input1Js);
    // изменяет цвет кнопок клавиатуры
    changeBgNumbers(input1Js.dataset.background);
    // изменяет цвет бордера клавиатуры на цвет поля input7Js
    changeBorderInput7Js();
  }

  // при клики по кнопке делаем активный второй или пятый input
  if (e.target.closest('.buttons__two')) {
    if (input2Js.classList.contains('writeNumber_js')) {
      // Встанавлювает input для записи чисел
      selectInput(input5Js);
      // изменяет цвет кнопок клавиатуры
      changeBgNumbers(input5Js.dataset.background);
      // изменяет цвет бордера клавиатуры на переданный цвет
      changeBorder(input5Js.dataset.background);
      return
    }
    if (input5Js.classList.contains('writeNumber_js')) {
      // Встанавлювает input для записи чисел
      selectInput(input2Js);
      // изменяет цвет кнопок клавиатуры
      changeBgNumbers(input2Js.dataset.background);
      // изменяет цвет бордера клавиатуры на переданный цвет
      changeBorder(input2Js.dataset.background);
      return
    }
    if (!input2Js.classList.contains('writeNumber_js') || !input5Js.classList.contains('writeNumber_js')) {
      // Встанавлювает input для записи чисел
      selectInput(input2Js);
      // изменяет цвет кнопок клавиатуры
      changeBgNumbers(input2Js.dataset.background);
      // изменяет цвет бордера клавиатуры на переданный цвет
      changeBorder(input2Js.dataset.background);
    }
  }

  //при клики показует попап
  if (e.target.closest('.buttons-img')) {
    popup.classList.add('_active');
    fon.classList.add('_active');

    // делает вибранным "самые новые"
    sortValue.options[0].selected = true;

    let arrayValue = getLocalStorage(oneInputValue, false);
    valuesLength.innerText = arrayValue.length;
    // сортировка самые новые
    arrayValue.sort(function (a, b) {
      return a.miliseconds - b.miliseconds;
    });
    popupTable.innerHTML = '';

    arrayValue.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });

    setTimeout(()=>{
      arrowAddRemove1(); 
    }, 200);
  }

  // при клики скрывает попап
  if (e.target.closest('.popup__close_js')) {
    const popupTable2Html = document.querySelector('.popup__table2_js');
    if (popupTable2Html){
      popupTable.width = "100%";
      popupTable2Html.remove();
    }
    popup.classList.remove('_active');
    fon.classList.remove('_active');
    selectButton.classList.remove('_active');
    popupReverse.classList.remove('_reverse');
    removeArrowTop();
  }

  // если кликнули по кнопке реверс в попапе
  if (e.target.closest('.popup__reverse_js')){
    e.target.classList.add('_reverse'); 
    let arrayValue = getLocalStorage(oneInputValue, false);
    valuesLength.innerText = arrayValue.length;
    openSortPopup(arrayValue);
  }
  
  // при клики скрывает popupDey
  if (e.target.closest('.popupDey__close_js')) {
    popupDey.classList.remove('_active');
    popupReverse.classList.remove('_reverse');
    // делает вибранным "самые новые"
    sortValue.options[0].selected = true;
    // сортируем попак от самих новых
    newValuePopup();
    popupRenderDey.innerHTML = '';
    arrowAddRemove1();
  }

  // при клики сохраняем данные
  if (e.target.closest('.buttons__save')) {
    // звук при польоти
    audioPlay(audioFly);
    // час в вашем текущем часовом поясе
    const date = new Date();

    let Minutes;
    // доставляем ноль если менше 10 минут
    if (date.getMinutes() < 10) {
      Minutes = "0" + date.getMinutes();
    } else {
      Minutes = date.getMinutes();
    }
    const hourse = date.getHours();
    const numberDeta = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const DATE1 = `${numberDeta}.${month}.${year}`;
    const DATE2 = `${hourse}:${Minutes}`;

    let saveObgect = {};

    saveObgect.hourse = hourse;
    saveObgect.numberDeta = numberDeta;
    saveObgect.month = month;
    saveObgect.year = year;
    saveObgect.Minutes = Minutes;
    saveObgect.miliseconds = Date.now();
    saveObgect.date = `${DATE1}, ${DATE2} `
    saveObgect.value = input7Js.value;
    saveObgect.value1 = input1Js.value;
    saveObgect.value2 = input2Js.value;
    saveObgect.value3 = input5Js.value;

    
    let backgroundColor1;
    let backgroundColor2;

    if (input7Js.classList.contains('_active-color')) {
      saveObgect.background = "background__acent-2";
      saveObgect.background2 = "background__acent-1";
      backgroundColor1 = '#b83ce6';
      backgroundColor2 = '#ffeb3b';
    } else {
      saveObgect.background = "background__acent-1";
      saveObgect.background2 = "background__acent-2";
      backgroundColor1 = '#ffeb3b';
      backgroundColor2 = '#b83ce6';
    }

    let arrayValue = getLocalStorage(oneInputValue, false);
    arrayValue.push(saveObgect);
    postLocalStorage(oneInputValue, arrayValue);

    const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
    valuesLength.innerText = popupTableTrAll.length;

    // польот значения
    addValue(input7Js, backgroundColor1);
    addValue(input1Js, backgroundColor2);
    addValue(input2Js, backgroundColor2);
    addValue(input5Js, backgroundColor1);
  }

  // при клики делает активным или нет удаления
  if (e.target.closest('.select__button_js')) {
    if (!popupReverse.classList.contains('_reverse')) {
      e.target.classList.toggle("_active");
      if (!e.target.classList.contains('_active')) {
        const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
        popupTableTrAll.forEach(item => {
          item.classList.remove('_delete');
        });
        // обнуляет MiniPopup
        resetMiniPopup();
      }
    }
  }

  // при клики вызываем popup2
  if (e.target.closest('.popup__delet_js')) {
    if (!popupReverse.classList.contains('_reverse')) {
      const popup2 = document.querySelector('.popup2_js');

      if (popup2.classList.contains('_active')) {
        popup2.classList.remove('_active');

        const popup2Radios = document.querySelectorAll('.popup2_radio_js');
        popup2Radios.forEach(item => {
          item.classList.remove('_active');
        });
      } else {
        popup2.classList.add('_active');
        fon.style.zIndex = 20;
      }

      const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
      let tableDelete = false;
      popupTableTrAll.forEach(item => {
        if (item.classList.contains('_delete')) {
          tableDelete = true;
          return
        }
      });

      const popup2RadioSelected = document.querySelector('.popup2_radio-selected_js');
      if (!tableDelete) {
        popup2RadioSelected.classList.add('_not-active');
      } else {
        popup2RadioSelected.classList.remove('_not-active');
      }
    }
  }

  // пир клики в попапе 2 по переключатилям
  if (e.target.closest('.popup2_radio_js')) {
    if (e.target.closest('.popup2_radio_js').classList.contains('_active')) {
      e.target.closest('.popup2_radio_js').classList.remove('_active');
    } else {
      const popup2Radios = document.querySelectorAll('.popup2_radio_js');
      popup2Radios.forEach(item => {
        item.classList.remove('_active');
      });
      if (!e.target.closest('.popup2_radio_js').classList.contains('_not-active')) {
        e.target.closest('.popup2_radio_js').classList.add('_active');
      }
    }
  }

  // пири клики в попапе 2 на кнопку "ОК"
  if (e.target.closest(".popup2__button_js")) {
    // скрываем попап 2
    const popup2 = document.querySelector('.popup2_js');
    popup2.classList.remove('_active');
    fon.style.zIndex = "";

    // делаем кнопку выбрать не активной
    selectButton.classList.remove('_active');

    // обнуляет MiniPopup
    resetMiniPopup();

    let addAudio = false;

    const popup2RadioSelected = document.querySelector('.popup2_radio-selected_js');
    const popup2RadioRemoveAll = document.querySelector('.popup2_radio-removeAll_js');

    // удаляем вибраные значения
    if (popup2RadioSelected.classList.contains('_active')) {
      popup2RadioSelected.classList.remove('_active');
      let itemId;
      // удаляем со страницы
      const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
      popupTableTrAll.forEach(item => {
        if (item.classList.contains('_delete')) {
          itemId = item.id;

          // удаляем с localStorage
          const arrayLocalStorage = getLocalStorage(oneInputValue);
          let filteredArray = arrayLocalStorage.filter(value => value.miliseconds != itemId);
          postLocalStorage(oneInputValue, filteredArray);

          // польот значений в корзину а затем удаляем
          FlyremoveValue(item);

          // да запускать аудио
          addAudio = true;
        }
      });
    } else {
      const popupTableTrAll = document.querySelectorAll('.popup__table-tr_js');
      popupTableTrAll.forEach(item => {
        if (item.classList.contains('_delete')) {
          item.classList.remove('_delete');
        }
      });
    }

    // удаляем все значения
    if (popup2RadioRemoveAll.classList.contains('_active')) {
      popup2RadioRemoveAll.classList.remove('_active');
      popupTable.innerHTML = '';
      localStorage.removeItem(oneInputValue);
      valuesLength.innerText = 0;
      // да запускать аудио
      addAudio = true;
    }

    if (addAudio) {
      // звук при польоти
      audioPlay(audioFly);
    }
  }

  // при клики выбираем поле для удаления
  if (e.target.closest('.popup__table-tr_js')) {
    if (selectButton.classList.contains("_active")) {
      if (!e.target.closest('.popup__table-tr_js').classList.contains('_delete')) {
        e.target.closest('.popup__table-tr_js').classList.add('_delete');

        // показуем количество значений которые будут удалены
        counter = Number(miniPopup.textContent) + 1;
        miniPopup.textContent = counter;

        //показует скрывает miniPopup
        addRemoveMiniPopup(e);
      } else {
        e.target.closest('.popup__table-tr_js').classList.remove('_delete');

        // показуем количество значений которые будут удалены
        counter = Number(miniPopup.textContent) - 1;
        miniPopup.textContent = counter;

        //показует скрывает miniPopup
        addRemoveMiniPopup(e);
      }
    }
  }
  // при клики сортируем попап popupDey к большому
  if (e.target.closest('.popupDey__sort_js')) {
    if (popupReverse.classList.contains('_reverse')) {
      sortPopupDeyTable2();
    }else{
      sortPopupDeyTable();
    }
  }
  // при клики
  if (e.target.closest('.popupButtonUp_js')) {
    handleButtonClick();

    function handleButtonClick() {
      const popupTop = document.querySelector(".popup_js");
      const popupDeyTop = document.querySelector(".popupDey_js");
      if (popupTop.classList.contains('_active')) {
        popupTop.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      if (popupDeyTop.classList.contains('_active')) {
        popupDeyTop.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
});
// <<<<<<<<<<<<<<<< // при клике на странице >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

popup.addEventListener('scroll', function (e) {
  arrowAddRemove1();
});
popupDey.addEventListener('scroll', function (e) {
  arrowAddRemove2();
});



// сортировка попапа
sortValue.addEventListener("change", function () {
  let arrayValue = getLocalStorage(oneInputValue, false);
  valuesLength.innerText = arrayValue.length;

  // сортировка самые новые
  if (Number(this.value) == 1) {
    newValuePopup();
  }

  // сортировка По значению больше
  if (Number(this.value) == 2) {
    popupTable.innerHTML = '';

    arrayValue.sort(function (a, b) {
      return a.value - b.value;
    });
    arrayValue.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });
  }
    
  // сортировка По значению менше
  if (Number(this.value) == 3) {
    popupTable.innerHTML = '';
    arrayValue.sort(function (a, b) {
      return b.value - a.value;
    });

    arrayValue.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });
  }

  // сортировка самые старые
  if (Number(this.value) == 4) {
    popupTable.innerHTML = '';
    arrayValue.sort(function (a, b) {
      return b.miliseconds - a.miliseconds;
    });
    arrayValue.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });
  }
  // сортировка Больше за 24год.
  if (Number(this.value) == 5) {
    const miliseconds = Date.now();
    let newArray = [];

    arrayValue.forEach(item => {
      if (miliseconds - item.miliseconds < 86400000) {
        newArray.push(item);
      }
    });
    valuesLength.innerText = newArray.length;
    popupTable.innerHTML = '';

    newArray.sort(function (a, b) {
      return a.value - b.value;
    });
    newArray.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });
  }
  // сортировка Меньше за 24год..
  if (Number(this.value) == 6) {
    const miliseconds = Date.now();
    let newArray = [];

    arrayValue.forEach(item => {
      if (miliseconds - item.miliseconds < 86400000) {
        newArray.push(item);
      }
    });
    valuesLength.innerText = newArray.length;
    popupTable.innerHTML = '';

    newArray.sort(function (a, b) {
      return b.value - a.value;
    });
    newArray.forEach(item => {
      // рендерит етот обект в попап
      renderValuePopup(item);
    });
  }
  // сортировка Средние по часам.
  if (Number(this.value) == 7) {
    openSortPopup(arrayValue);
  }
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function openSortPopup(arrayValue) {
  selectButton.classList.remove('_active');
  let indexTable = 1;
  popupRenderDey.innerHTML = '';
  popupDey.classList.add('_active');

  // все года
  const years = [];
  // выбераем года
  arrayValue.forEach(item => {
    // если в массиве years нету етого значения то возвращает false если есть то true
    let i = years.includes(item.year);
    if (!i) {
      years.push(item.year)
    }
  });
  // сортируем от большого к меншому
  years.sort(function (a, b) {
    return b - a;
  });

  let indexYears = 0;

  f1();
  function f1() {
    let year = years[indexYears];
    //месеа 
    const months = [];
    // выбераем месяца в текущем годе
    arrayValue.forEach(item => {
      if (item.year == year) {
        let i = months.includes(item.month);
        if (!i) {
          months.push(item.month)
        }
      }
    });
    // сортируем от большого к меншому
    months.sort(function (a, b) {
      return b - a;
    });
    let indexMonths = 0;

    f2();
    function f2() {
      let indexDey = 31;
      f3();
      function f3() {
        let arrayDey = [];
        arrayValue.forEach(item => {
          if (item.numberDeta == indexDey && item.month == months[indexMonths] && item.year == year) {
            arrayDey.push(item);
          }
        });

        if (arrayDey.length > 0) {
          if (!popupReverse.classList.contains('_reverse')) {
            renderTable(indexDey, months[indexMonths], year, indexTable, arrayDey);
          } else {
            renderTable2(indexDey, months[indexMonths], year, indexTable, arrayDey);
          }
          indexTable++;
        }

        if (indexDey > 1) {
          indexDey--;
          f3();
        }
      }
      indexMonths++;
      if (months[indexMonths]) {
        f2();
      }
    }
    indexYears++
    if (years[indexYears]) {
      f1();
    }

  }
  setTimeout(() => {
    arrowAddRemove2();
  }, 200);
}
function newValuePopup() {
  let arrayValue = getLocalStorage(oneInputValue, false);
  valuesLength.innerText = arrayValue.length;
  arrayValue.sort(function (a, b) {
    return a.miliseconds - b.miliseconds;
  });
  popupTable.innerHTML = '';

  arrayValue.forEach(item => {
    // рендерит етот обект в попап
    renderValuePopup(item);
  });
}
// рендерит таблицы в попап popupRenderDey
function renderTable(day, month, year, counterTableId, arrayDey) {
  let idTable = `table${counterTableId}`;

  const months = ['січеня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

  const htmlTable = `
      <div class="popupDeyTable">
        <div class="flex-block tebleTitle">
          <p>${day} ${months[month - 1]} ${year}</p>
          <p>
          ${arrayDey.length} зн.
          </p>
        </div>
        <table class="popup__table sortPopupDeyTable_js" id="${idTable}" cellpadding="100" border="2" width="100%">

        </table>
      </div>
    `;
  popupRenderDey.insertAdjacentHTML('beforeend', htmlTable);

  renderDeyFunc(arrayDey, idTable);
}
function renderDeyFunc(arrayValueDey, idTable) {
  for (let counter = 0; counter < 24; counter++) {
    let newArray = [];
    let value = 0;

    arrayValueDey.forEach(item => {
      if (item.hourse == counter) {
        newArray.push(item.value);
      }
    });

    for (let i = 0; i < newArray.length; i++) {
      value = value + Number(newArray[i]);
    }

    let newValue = 0;
    let newArrayLength = 0;

    if (newArray.length) {
      newValue = (value / newArray.length).toFixed(3);
      newArrayLength = newArray.length;
    }
    // --------------------------------------------------------------
    // рендерим все часы даже пустые
    renderhourse(counter, newValue, newArrayLength, idTable);

    // рендерим только часы у которых есть значения
    // if (newValue > 0){
    //   renderhourse(counter, newValue, newArrayLength, idTable);
    // }
    // --------------------------------------------------------------
  }
}
// рендерит сортировку Средние по часам в таблицы.
function renderhourse(time, value, number, idTable) {
  let valueHtml = `
     <tr class="popup__table-tr_js" data-valuetime="${value}">
        <td class="td__value">${time} год.</td>
        <td class="td__value">${value}</td>
        <td class="td__value">${number} зн.</td>
      </tr>
  `;
  const popupTable = document.querySelector(`#${idTable}`);
  popupTable.insertAdjacentHTML('beforeend', valueHtml);
  // popupTable.insertAdjacentHTML('afterbegin', valueHtml);
}
// сортировка Средние по часам начиная з большого
function sortPopupDeyTable() {
  const sortPopupDeyTable = document.querySelectorAll('.sortPopupDeyTable_js');
  sortPopupDeyTable.forEach(itemDey => {
    let childTr = itemDey.querySelectorAll('.popup__table-tr_js');

    let tableTrAll = [];

    childTr.forEach(item => {
      itemObgect = {
        value: item.dataset.valuetime,
        element: item
      }
      tableTrAll.push(itemObgect)
    });

    tableTrAll.sort(function (a, b) {
      return a.value - b.value;
    });

    itemDey.innerHTML = '';
    tableTrAll.forEach(item => {
      let element = item.element;
      itemDey.prepend(element);
    });
  });
}

// рендерит таблицы в попап popupRenderDey
function renderTable2(day, month, year, counterTableId, arrayDey) {
  let idTable = `table${counterTableId}`;

  const months = ['січеня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

  const htmlTable = `
      <div class="popupDeyTable font__smail">
        <div class="flex-block tebleTitle">
          <p>${day} ${months[month - 1]} ${year}</p>
          <p>
          ${arrayDey.length} зн.
          </p>
        </div>
        <div class="table__wrapper">
          <div class="table__inner table__inner1-${idTable}_js table__sort_js"> </div>
          <div class="table__inner table__inner2-${idTable}_js table__sort_js"> </div>
        </div>
      </div>
    `;
  popupRenderDey.insertAdjacentHTML('beforeend', htmlTable);

  renderDeyFunc2(arrayDey, idTable);
}
function renderDeyFunc2(arrayValueDey, idTable) {
  for (let counter = 0; counter < 24; counter++) {
    let newArray = [];

    arrayValueDey.forEach(item => {
      if (item.hourse == counter) {
        newArray.push(item);
      }
    });
    
    if(newArray.length){
      const tableInner1 = document.querySelector(`.table__inner1-${idTable}_js`);
      const tableInner2 = document.querySelector(`.table__inner2-${idTable}_js`);
      let bg1 = "";
      let bg2 = "";

      const table1 = document.createElement("div");
      table1.className = "table";
      const tableClock1 = document.createElement("div");
      tableClock1.className = 'table__clock';
      tableClock1.innerHTML = counter;
      table1.insertAdjacentElement('afterbegin', tableClock1);
      const tableValue1 = document.createElement("div");
      tableValue1.className = "table__value";

      const table2 = document.createElement("div");
      table2.className = "table";
      const tableClock2 = document.createElement("div");
      tableClock2.className = 'table__clock';
      tableClock2.innerHTML = counter;
      table2.insertAdjacentElement('afterbegin', tableClock2);
      const tableValue2 = document.createElement("div");
      tableValue2.className = "table__value";

      newArray.forEach(item =>{
        if (item.background == "background__acent-2"){
          bg1 = 'background__acent-1';
          bg2 = 'background__acent-2';
        }else{
          bg1 = 'background__acent-2';
          bg2 = 'background__acent-1';
        }
        if(!item.Minutes){
          item.Minutes = "--";
        }
        const ul1 = `
        <ul class="table__value-list" data-clock="${counter}">
          <li class="table__value-item">${item.hourse}:${item.Minutes}</li>
          <li class="table__value-item ${bg1}" data-valuetime="${item.value2}">${item.value2}
            <span class="table__value-item__span">в</span>
          </li>
        </ul>
       `;
        tableValue1.insertAdjacentHTML('beforeEnd', ul1);
        const ul2 = `
        <ul class="table__value-list" data-clock="${counter}">
          <li class="table__value-item">${item.hourse}:${item.Minutes}</li>
          <li class="table__value-item ${bg2}" data-valuetime="${item.value3}">${item.value3}
            <span class="table__value-item__span">н</span>
          </li>
        </ul>
       `;
        tableValue2.insertAdjacentHTML('beforeEnd', ul2);
      });

      table1.insertAdjacentElement('beforeEnd', tableValue1);
      table2.insertAdjacentElement('beforeEnd', tableValue2);
      
      tableInner1.insertAdjacentElement('beforeend', table1);
      tableInner2.insertAdjacentElement('beforeend', table2);
    }else{
      const tableInner1 = document.querySelector(`.table__inner1-${idTable}_js`);
      const tableInner2 = document.querySelector(`.table__inner2-${idTable}_js`);
      let valueHtml1 = `
          <div class="table">
              <div class="table__clock">${counter}</div>
              <div class="table__value">
                <ul class="table__value-list" data-clock="${counter}">
                  <li class="table__value-item">-</li>
                  <li class="table__value-item" data-valuetime="0">-
                    <span class="table__value-item__span">в</span>
                  </li>
                </ul>
              </div>
          </div>
        `;
      let valueHtml2 = `
          <div class="table">
              <div class="table__clock">${counter}</div>
              <div class="table__value">
                <ul class="table__value-list" data-clock="${counter}">
                  <li class="table__value-item">-</li>
                  <li class="table__value-item" data-valuetime="0">-
                    <span class="table__value-item__span">н</span>
                  </li>
                </ul>
              </div>
          </div>
        `;
      tableInner1.insertAdjacentHTML('beforeend', valueHtml1);
      tableInner2.insertAdjacentHTML('beforeend', valueHtml2);
    }
  }
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// сортировка Средние по часам начиная з меншого
function sortPopupDeyTable2() {
  let tableSort = document.querySelectorAll('.table__sort_js');
  tableSort.forEach(childTr => {
    // собырае все ul с колонки
    const table = childTr.querySelectorAll('.table__value-list');
    let tableTrAll = [];

    // из каждого ul (листа) делаем обект з даннымы
    table.forEach(item => {
      const tableDataAll = item.querySelectorAll("[data-valuetime]");
      tableDataAll.forEach(itemData => {
        itemObgect = {
          value: itemData.dataset.valuetime,
          element: item,
          clock: item.dataset.clock
        }
        tableTrAll.push(itemObgect)
      });
    });

    // больше сверху
    tableTrAll.sort(function (a, b) {
      return b.value - a.value;
    });

    childTr.innerHTML = '';
    // ---------------------------------
    fs1();
    function fs1() {
      // создаем елемент таблицы table 
      const table = document.createElement("div");
      table.className = "table";
      const tableClock = document.createElement("div");
      tableClock.className = 'table__clock';
      tableClock.innerHTML = tableTrAll[0].clock;
      table.insertAdjacentElement('afterbegin', tableClock);

      fs2();
      function fs2() {
        // создаем table__value(обертка для ul)
        const tableValue = document.createElement("div");
        tableValue.className = "table__value";

        fs3();
        function fs3() {
          // берем ul по index-0 и ложим в table__value
          tableValue.insertAdjacentElement('beforeEnd', tableTrAll[0].element);
          let clock = tableTrAll[0].clock;
          tableTrAll.splice(0, 1);
  
          if (tableTrAll.length) {
            fs4();
          } else {
            table.insertAdjacentElement('beforeEnd', tableValue);
            childTr.insertAdjacentElement('beforeend', table);
          }

          function fs4() {
            if (clock == tableTrAll[0].clock) {
              tableValue.insertAdjacentElement('beforeEnd', tableTrAll[0].element);
              tableTrAll.splice(0, 1);
              if (tableTrAll.length) {
                fs4();
              } else {
                table.insertAdjacentElement('beforeEnd', tableValue);
                childTr.insertAdjacentElement('beforeend', table);
              }
            } else {
              // -----------------------------------------------------------------------------------------
              // берем значения из масива tableTrAll по индексу [0]
              let ulValue = tableTrAll[0].value;
              
              for (let i = 1; i < tableTrAll.length; i++){
                // если в масиве tableTrAll есть ещо значения равны 
                if (tableTrAll[i].value == ulValue && tableTrAll[i].clock == clock){
                  tableValue.insertAdjacentElement('beforeEnd', tableTrAll[i].element);
                  tableTrAll.splice(i, 1);
                }
              }

              table.insertAdjacentElement('beforeEnd', tableValue);
              childTr.insertAdjacentElement('beforeend', table);
              if (tableTrAll.length) {
                fs1();
              }
              // -----------------------------------------------------------------------------------------
            }
          }
        }
      }
    }
  });
}