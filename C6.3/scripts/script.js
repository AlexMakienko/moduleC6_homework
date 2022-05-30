const btn = document.querySelector('.j-btn');
const btnIcons = document.querySelectorAll('.btn-icon');

btn.addEventListener('click', () => {
    btnIcons.forEach((icon) => {
        icon.classList.toggle('icon-active');
    });
});
