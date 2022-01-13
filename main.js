'use strict';
// BLUE the modal window new skill
const showButtons = document.querySelectorAll('.btn-show');
const modal = document.querySelector('.modal');
const closeModel = document.querySelector('.close-window');
const overlay = document.querySelector('.overlay');

const openFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showButtons.length; i++)
  showButtons[i].addEventListener('click', openFunc);

closeModel.addEventListener('click', closeFunc);
overlay.addEventListener('click', closeFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeFunc();
  }
});
