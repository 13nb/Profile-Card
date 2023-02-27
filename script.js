const btn = document.querySelector('.card-btn'),
      container = document.querySelector('.container');

btn.addEventListener('click', () => {
    container.classList.toggle('change');
})