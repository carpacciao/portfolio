//scroll anchor
(() => {
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})();


// header-carousel
(() => {
    let leftA = document.querySelector('.left-arrow a');
    let rightA = document.querySelector('.right-arrow a');
    let bg = document.querySelector('.header-carousel');
    
    //inserer images dans le tableau
    let images = ['assets/img/1.jpeg', 'assets/img/2.jpeg', 'assets/img/3.jpeg', 'assets/img/4.jpeg'];
    let count = 0;
    
    function right(){
        count ++;
        if(count > images.length -1){
            count = 0;
        }
        bg.style.backgroundImage = "url(" + images[count] +")";
    }
    function left(){
        count --;
        if(count < 0){
            count = images.length -1;
        }
        bg.style.backgroundImage = "url(" + images[count] + ")";
    }
    leftA.addEventListener('click', (e) => {
        e.preventDefault();
        left();
    });
    rightA.addEventListener('click', (e) => {
        e.preventDefault();
        right();
    });
    setInterval(right, 5000);
})();

//nav
(() => {
    let nav = document.querySelector('nav');
    let navO = nav.offsetTop;
    
    window.addEventListener('scroll', (e) => {
        if(window.scrollY >= navO){
            nav.style.position = "fixed";
            nav.style.top = 0;
        }else{
            nav.style.position = "absolute";
            nav.style.top = "100vh";
        }
    });
    window.addEventListener('resize', () => {
        navO = document.querySelector('header').offsetHeight;
    });

    //hamburger
    let ham = document.querySelector('.hamburger a');
    ham.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle("active")
    });
    let links = document.querySelectorAll('.links ul li a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    
})();

//filter skills

(() => {
    let btns = document.querySelectorAll(".skills-filters a");
    let p = document.querySelectorAll(".progressCircle");

    btns[0].addEventListener('click', (e) => {
        e.preventDefault();
        showAll();
        activeButton(e.target);
    });
    btns[1].addEventListener('click', (e) => {
        e.preventDefault();
        showDesign();
        activeButton(e.target);
    });
    btns[2].addEventListener('click', (e) => {
        e.preventDefault();
        showLanguage();
        activeButton(e.target);
    });

    function activeButton(a) {
        for (let i = 0; i < btns.length; i++) {
            if (btns[i] == a) {
                btns[i].classList.add('active');
            } else {
                btns[i].classList.remove('active');
            }
        }
    }

    function showAll() {
        for (let i = 0; i < p.length; i++) {
            p[i].classList.remove('d-none')
        }
    }

    function showDesign() {
        showAll();
        for (let i = 0; i < p.length; i++) {
            if (p[i].getAttribute('data-category') == 'language') {
                p[i].classList.add('d-none')
            }
        }
    }

    function showLanguage() {
        showAll();
        for (let i = 0; i < p.length; i++) {
            if (p[i].getAttribute('data-category') != 'language') {
                p[i].classList.add('d-none')
            }
        }
    }
})();

//
(() => {
    let btns = document.querySelectorAll(".portfolio-filters a");
    let p = document.querySelectorAll(".portfolio-content");

    btns[0].addEventListener('click', (e) => {
        e.preventDefault();
        showAll();
        activeButton(e.target);
    });
    btns[1].addEventListener('click', (e) => {
        e.preventDefault();
        showDesign();
        activeButton(e.target);
    });
    btns[2].addEventListener('click', (e) => {
        e.preventDefault();
        showLanguage();
        activeButton(e.target);
    });

    function activeButton(a) {
        for (let i = 0; i < btns.length; i++) {
            if (btns[i] == a) {
                btns[i].classList.add('active');
            } else {
                btns[i].classList.remove('active');
            }
        }
    }

    function showAll() {
        for (let i = 0; i < p.length; i++) {
            p[i].classList.remove('d-none')
        }
    }

    function showDesign() {
        showAll();
        for (let i = 0; i < p.length; i++) {
            if (p[i].getAttribute('data-category') == 'web') {
                p[i].classList.add('d-none')
            }
        }
    }

    function showLanguage() {
        showAll();
        for (let i = 0; i < p.length; i++) {
            if (p[i].getAttribute('data-category') != 'web') {
                p[i].classList.add('d-none')
            }
        }
    }
})();