// Получаем ссылки на элементы
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equals');

// Переменные
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

// Функции
function clear() {
  display.textContent = '';
  firstOperand = null;
  operator = null;
  secondOperand = null;
  result = null;
}

function calculate() {
  if (operator === '+') {
    result = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === '-') {
    result = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === '*') {
    result = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === '/') {
    result = parseFloat(firstOperand) / parseFloat(secondOperand);
  }
  display.textContent = `${result}`;
  firstOperand = result;
  operator = null;
  secondOperand = null;
}

function handleNumberButtonClick(event) {
    let number = event.target.textContent;
  if (operator === null) {
    if (firstOperand === null) {
        firstOperand = number;
      } else {
        firstOperand = firstOperand + number;
      }
      display.textContent = firstOperand;
    } else {
      if (secondOperand === null) {
        secondOperand = number;
      } else {
        secondOperand = secondOperand + number;
      }
      display.textContent = firstOperand + ' ' + operator + ' ' + secondOperand;
    }
}

function handleOperatorButtonClick(event) {
    let clickedOperator = event.target.textContent;
  if (firstOperand === null) {
    return;
  }
  if (secondOperand !== null) {
    calculate();
  }
  operator = clickedOperator;
  display.textContent = `${firstOperand}`;
}

function handleEqualsButtonClick() {
  if (operator === null || secondOperand === null) {
    return;
  }
  calculate();
}

// Слушатели событий
clearButton.addEventListener('click', clear);

numberButtons.forEach(function(button) {
  button.addEventListener('click', handleNumberButtonClick);
});

operatorButtons.forEach(function(button) {
  button.addEventListener('click', handleOperatorButtonClick);
});

equalsButton.addEventListener('click', handleEqualsButtonClick);