window.addEventListener('scroll', () => {
    const scroll = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        scroll.classList.add('active');
    } else {
        scroll.classList.remove('active');
    }
});

const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const mobileMenu = () => {
    const menu = document.querySelector('.mobile');
    const menuIcon = document.querySelector('.header--menu-icon');
    let dir = 'assets/images/'
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.setAttribute('src', dir + 'menu.png');
    } else {
        menu.classList.add('active');
        menuIcon.setAttribute('src', dir + 'menuclose.png');
    }
}
