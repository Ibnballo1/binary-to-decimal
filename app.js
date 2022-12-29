const container = document.getElementById('container');
const form = document.getElementById('form');
const binNum = document.getElementById('binaryNum');
const decimal = document.getElementById("decimal");

binNum.addEventListener('input', (e) => {
  let val = e.target.value;
  decimal.innerHTML = '';
  for (let i = 0; i < val.length; i++) {
    if (val.charAt(i) === "0" || val.charAt(i) === "1") {
      val;
      decimal.innerHTML = '';
    } else {
      decimal.innerHTML = `${binNum.value} is not binary number`;
    }
  }
})
form.addEventListener('submit', (e) => {
  let numbers = /^[.0-1]+$/;
  let result = 0;
  let wholeNum = binNum.value;
  let decimalNum = '';
  if (numbers.test(binNum.value)) {
    if (binNum.value.includes(".")) {
      wholeNum = binNum.value.slice(0, binNum.value.indexOf("."));
      decimalNum = binNum.value.slice((binNum.value.indexOf(".") + 1));
    }
    // Looping through the whole number
    for (let i = 0; i < wholeNum.length; i++) {
      result += wholeNum.charAt(wholeNum.length - (i + 1)) * 2 ** i;
    }
    // Looping through the decimal number
    for (let j = 0; j < decimalNum.length; j++) {
      result += decimalNum.charAt(j) * 2 ** (-(j + 1))
    }
    decimal.innerHTML = `The decimal of the whole number ${wholeNum} is ${result}`;
  } else {
    decimal.innerHTML = `${binNum.value} is not binary number, 0 and/or 1 allowed`;
  }

  binNum.value = "";
  e.preventDefault();
})

container.style.backgroundColor = 'red';