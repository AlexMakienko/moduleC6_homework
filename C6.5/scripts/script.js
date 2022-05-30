const btn = document.querySelector('#j-btn');

btn.addEventListener('click', () => {
    window.alert(`
    Ширина экрана: ${window.screen.width}
    Высота экрана: ${window.screen.height}
    `);
});