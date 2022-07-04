// Burger handler

(function () {

    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav-mob');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header_link');

    // Menu open
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });

    // Menu close
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });

    // Menu close, if link clicked
    if (window.innerWidth <= 390) {
        for (let i = 0; i < menuLinks.length; i += 1) {4
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
    
    // Menu close, if clicked anzwhere, but not in menu
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(burgerItem);
        if ( !click ) {
            menu.classList.remove('header__nav_active');
        }
    });

}());