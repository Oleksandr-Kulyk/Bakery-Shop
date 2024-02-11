const openButton = document.querySelector('.modal-open');
const modal = document.querySelector('.backdrop');
openButton.addEventListener('click', () => modal.classList.remove('isHidden') );