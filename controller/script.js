const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const nav = document.querySelector('.navbar nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('ativo');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('ativo');
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('ativo');
    })
})