'use strict';

const NumberEl = document.getElementById('number');

const btnEl = document.querySelector('.btnEl');
const h2El = document.querySelector('.h2El');
const iconEl = document.querySelector('.icon');
const darkEl = document.querySelector('.dark-icon');

btnEl.addEventListener('click', function () {
  console.log('button clicked');
  const numberValue = NumberEl.value;
  h2El.classList.remove('hide');
  if (numberValue % 2 == 0 && 'number') {
    h2El.textContent = 'Your Number is Even Number';
  } else {
    h2El.textContent = 'Your Number is Odd number';
  }
});

iconEl.addEventListener('click', function () {
  NumberEl.value = '';
  h2El.classList.add('hide');
});

darkEl.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    darkEl.src = 'moon.png';
  } else {
    darkEl.src = 'sun.png';
  }
});
