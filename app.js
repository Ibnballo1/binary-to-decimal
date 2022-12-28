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
  let numbers = /^[0-1]+$/;
  let result = 0;
  if (numbers.test(binNum.value)) {
    if (binNum.value.length === 1) {
      result += binNum.value * (2 ** 0);
    } else {
      for (let i = 0; i < binNum.value.length; i++) {
        result += binNum.value.charAt(binNum.value.length - (i + 1)) * 2 ** i;
      }
    }
    decimal.innerHTML = `The decimal of the binary number ${binNum.value} is ${result}`;
  } else {
    decimal.innerHTML = `${binNum.value} is not binary number, 0 and/or 1 allowed`;
  }

  binNum.value = "";
  e.preventDefault();
})

container.style.backgroundColor = 'red';