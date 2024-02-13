const openButton = document.querySelector('.modal-open');
const closeButton = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.backdrop');
openButton.addEventListener('click', () => modal.classList.remove('isHidden') );
closeButton.addEventListener ('click', () => modal.classList.add('isHidden'));