const themeColor = document.querySelector('.calc_theme');

const key = document.querySelectorAll('.buton_number');
const display = document.querySelector('.input_area')

let keyPressed = '',
  displayValue = '',
  num1 = '',
  num2 = '',
  resultado = '',
  operator = '+',
  isVisible = '',
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let cont = 1;

themeColor.addEventListener('click', () => {
  cont += 1
  switch (cont) {
    case 1:

      break;
    case 2:
      // background
      const main2 = document.querySelector('.back1')
      main2.classList.remove('back1')
      main2.classList.add('back2')
      themeColor.style.marginLeft = '23px'
      // controls 
      const butonContainer = document.querySelector('.buton');
      butonContainer.classList.add('colorback1')

      const keys = document.querySelectorAll('.buton_number')
      for (let i = 0; i < keys.length; i++) {
        keys[i].classList.add('colorback2')
      }

      const colorKey = document.querySelectorAll('.color1')
      colorKey[0].classList.add('color3')
      colorKey[1].classList.add('color3')

      const colorEqual = document.querySelector('.color2')
      colorEqual.classList.add('color4')

      const input2 = document.querySelector('.input_area');
      input2.classList.add('colorback3')

      const back2 = document.querySelector('.calc_toggle_buton')
      back2.classList.add('colorback1')
      break;
    case 3:
      // background
      const main3 = document.querySelector('.back2')
      main3.classList.remove('back2')
      main3.classList.add('back3')
      themeColor.style.marginLeft = '47px'
      // controls 

      const keys2 = document.querySelectorAll('.buton_number')
      for (let i = 0; i < keys2.length; i++) {
        keys2[i].classList.remove('colorback2')
        keys2[i].classList.add('colorback5')
      }

      const toggle = document.querySelector('.colorback1')
      toggle.classList.remove('colorback1')
      toggle.classList.add('colorback4')

      const area = document.querySelector('.input_area')
      area.classList.remove('colorback3')
      area.classList.add('colorback6')

      const back3 = document.querySelector('.buton')
      back3.classList.remove('colorback1')
      back3.classList.add('colorback6')

      const colorKey2 = document.querySelectorAll('.color1')
      colorKey2[0].classList.remove('color3')
      colorKey2[0].classList.add('color5')
      colorKey2[1].classList.remove('color3')
      colorKey2[1].classList.add('color5')

      const equal2 = document.querySelector('.color4')
      equal2.classList.remove('color4')
      equal2.classList.add('color6')
      break;

    default:
      cont = 1;
      // background
      const main1 = document.querySelector('.back3')
      main1.classList.remove('back3')
      main1.classList.add('back1')
      themeColor.style.marginLeft = '3px'
      // controls  
      const keys3 = document.querySelectorAll('.buton_number')
      for (let i = 0; i < keys3.length; i++) {
        keys3[i].classList.remove('colorback5')
      }

      const toggle2 = document.querySelector('.colorback4')
      toggle2.classList.remove('colorback4')

      const area1 = document.querySelector('.input_area')
      area1.classList.remove('colorback6')

      const back4 = document.querySelector('.color6')
      back4.classList.remove('color6')


      const back5 = document.querySelectorAll('.color5')
      back5[0].classList.remove('color5')
      back5[1].classList.remove('color5')

      const back6 = document.querySelector('.buton')
      back6.classList.remove('colorback6')
      break;
  }
});

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener('click', (e) => {

    keyPressed = e.target.textContent;

    if (numbers.includes(keyPressed)) {
      displayValue += keyPressed;
      display.innerHTML = displayValue;
      if (displayValue.length === 15) {
        const modal = document.querySelector('.modal')
        modal.classList.add('active')
      }
    } else {
      switch (keyPressed) {

        case 'RESET':
          clear();
          break;

        case '+':
          num1 = Number(displayValue);
          operator = '+';
          clear();
          break;

        case '-':
          num1 = Number(displayValue);
          operator = '-';
          clear();
          break;

        case 'x':
          num1 = Number(displayValue);
          operator = '*';
          clear();
          break;

        case '/':
          num1 = Number(displayValue);
          operator = '/';
          clear();
          break;

        case '=':
          const resu = calculate(operator, num1, Number(displayValue));
          clear();
          display.innerHTML = resu;
          break;

        default:
          break;
      }
    }
  });
};

function clear() {
  displayValue = '';
  display.innerHTML = displayValue;
}

function calculate(op, n1, n2) {
  switch (op) {
    case '+':
      resultado = n1 + n2;
      break;
    case '-':
      resultado = n1 - n2;
      break;
    case '*':
      resultado = n1 * n2;
      break;
    case '/':
      resultado = n1 / n2;
      break;

    default:
      break;
  }
  return resultado
}