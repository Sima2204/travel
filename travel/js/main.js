// Burger

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
    
    // Menu close, if clicked anywhere, but not in menu
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(burgerItem);
        if ( !click ) {
            menu.classList.remove('header__nav_active');
        }
    });

}());

// Login

(function () {

    const loginButton = document.querySelector('.login_button');
    const popUp = document.querySelector('.pop-up');
    const signInButton = document.querySelector(".button-sign-in");
    const loginInput = document.getElementById('user-email');
    const passwordInput = document.getElementById('user-password');
    const regButton = document.getElementById('register');
    const accountButton = document.querySelector('.header_item_acc');

    // Popup open
    loginButton.addEventListener('click', () => {
        popUp.classList.add('pop-up_active');
    });

    // Popup close, if clicked anywhere, but not in menu
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(loginButton);
        const click2 = e.composedPath().includes(popUp);
        if ( !click && !click2) {
            popUp.classList.remove('pop-up_active');
        }
    });

    // Alert input
    signInButton.addEventListener('click', () => {
        alert(`Email: ${loginInput.value} Password: ${passwordInput.value}`)
    });

    // Sign Up open
    regButton.addEventListener('click', () => {
        popUp.innerHTML=`
        <div class="pop-up_container">
            <h2 class="pop-up_header">Create account</h2>
            <div class="pop-up_input">
                <h4>E-mail</h4>
                <input id="user-email" type="text" class="pop-up_imput_text">
            </div>
            <div class="pop-up_input">
                <h4>Password</h4>
                <input id="user-password" type="text" class="pop-up_imput_text">
            </div>
            <button class="pop-up_button button-sign-in">Sign Up</button>
            <div class="pop-up_line"> 
                <div class="long-line"></div>
            </div>
            <div class="pop-up_register">Already have an account? 
                <a id="register" class="pop-up_register-button" href="#!">Log in</a>
            </div>
        </div>`
    });

    // Mobile popup open
    accountButton.addEventListener('click', () => {
        popUp.classList.add('mob-pop-up_active');
    });

    // Mobile popup close, if clicked anywhere, but not in menu
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(accountButton);
        const click2 = e.composedPath().includes(popUp);
        if ( !click && !click2) {
            popUp.classList.remove('mob-pop-up_active');
        }
    });
 
}());

// Slider Desktop

const dots = document.querySelector('.slider');
const itemLeft = document.querySelector('.item1');
const itemCenter = document.querySelector('.item2');
const itemRight = document.querySelector('.item3');
const carousel = document.querySelector('.carousel');
const destinations = document.querySelector('.destinations__cards');


// from center to left
const moveLeft = () => {
    carousel.classList.add('to-left');
    itemLeft.removeEventListener('click', moveLeft);
    dots.innerHTML=`
    <div class="slider__elements">
        <p class="element-selected"></p>
        <p class="element-not_selected"></p> 
        <p class="element-not_selected"></p>                        
    </div>`;
};
itemLeft.addEventListener('click', moveLeft);

// from center to right
const moveRight = () => {
    carousel.classList.add('to-right');
    itemRight.removeEventListener('click', moveRight);
    dots.innerHTML=`
    <div class="slider__elements">
        <p class="element-not_selected"></p>
        <p class="element-not_selected"></p> 
        <p class="element-selected"></p>                        
    </div>`;
};
itemRight.addEventListener('click', moveRight);

// from left to center and from right to center
const moveFromLeft = () => {
    carousel.classList.add('from-left');
    itemCenter.removeEventListener('click', moveFromLeft);
    dots.innerHTML=`
    <div class="slider__elements">
        <p class="element-not_selected"></p>
        <p class="element-selected"></p> 
        <p class="element-not_selected"></p>                        
    </div>`;
};

const moveFromRight = () => {
    carousel.classList.add('from-right');
    itemCenter.removeEventListener('click', moveFromRight);
    dots.innerHTML=`
    <div class="slider__elements">
        <p class="element-not_selected"></p>
        <p class="element-selected"></p> 
        <p class="element-not_selected"></p>                        
    </div>`;
};

itemCenter.addEventListener('click', check);

function check() {
    if (destinations.classList.contains('cards-left')) {
        moveFromLeft();
    } else if (destinations.classList.contains('cards-right')) {
        moveFromRight();
    }
};

// event after animation
carousel.addEventListener('animationend', () => {
    if (carousel.classList.contains('to-left')) {
        carousel.classList.remove('to-left');
        itemLeft.addEventListener('click', moveLeft);
        destinations.classList.add('cards-left');
    } else if (carousel.classList.contains('to-right')) {
        carousel.classList.remove('to-right');
        itemRight.addEventListener('click', moveRight);
        destinations.classList.add('cards-right');
    } else if (carousel.classList.contains('from-left')) {
        carousel.classList.remove('from-left');
        destinations.classList.remove('cards-left');
    } else if (carousel.classList.contains('from-right')) {
        carousel.classList.remove('from-right');
        destinations.classList.remove('cards-right');  
    };
});

// Slider Mobile
const allCards = document.querySelector('.destinations__card1-mob');
const destMobCard = document.querySelector('.picture2');
const arrowLeft = document.querySelector('.arrow-left-button');
const arrowRight = document.querySelector('.arrow-right-button');
const Slidermob = document.querySelector('.slider__elements');

// moving left
const destMobMoveLeft = () => {
    destMobCard.classList.add('dest-move-left');
    arrowLeft.removeEventListener('click', destMobMoveLeft);
    Slidermob.innerHTML=`
    <p class="element-selected"></p>
    <p class="element-not_selected"></p> 
    <p class="element-not_selected"></p>  
    `
};
arrowLeft.addEventListener('click', destMobMoveLeft);

// moving right
const destMobMoveRight = () => {
    destMobCard.classList.add('dest-move-right');
    arrowRight.removeEventListener('click', destMobMoveRight);
    Slidermob.innerHTML=`
    <p class="element-not_selected"></p>
    <p class="element-not_selected"></p> 
    <p class="element-selected"></p>  
    `
};
arrowRight.addEventListener('click', destMobMoveRight);

// moving from left


// event after animation
destMobCard.addEventListener('animationend', () => {
    if (destMobCard.classList.contains('dest-move-left')) {
        destMobCard.classList.remove('dest-move-left');
        arrowLeft.addEventListener('click', destMobMoveLeft);
        allCards.innerHTML=`
        <div class="picture1">
            <div class="destinations__card-title">
                JAPAN
            </div>
            </div>  
        `
    } else if (destMobCard.classList.contains('dest-move-right')) {
        destMobCard.classList.remove('dest-move-right');
        arrowLeft.addEventListener('click', destMobMoveRight);
        allCards.innerHTML=`
        <div class="picture3">
            <div class="destinations__card-title">
                USA
            </div>
            </div>  
        `
    }
});











