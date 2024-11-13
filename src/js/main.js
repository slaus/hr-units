const scrollHeight = window.innerHeight - 65;
const headerTop = document.querySelector('.header__top');

const toggleFixedHeader = () => {
    if (window.scrollY >= scrollHeight) {
        headerTop.classList.add('fixed');
    } else {
        headerTop.classList.remove('fixed');
    }
};

window.addEventListener('scroll', toggleFixedHeader);

const smoothScroll = (selector, target) => {
    document.querySelector(selector).addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

smoothScroll('.header__logo--link', '#header');
smoothScroll('.header__btn', '#contacts');
smoothScroll('.intro__text--btn', '#contacts');
smoothScroll('.situation__btn', '#contacts');
smoothScroll('.consult__btn', '#contacts');
smoothScroll('.candidat__btn', '#about');


const swiperTeam = new Swiper('.swiper-team', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    mousewheel: true,
    grabCursor: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
    on: {
        click: function () {
            this.slideNext();
        }
    }
});

const swiperClients = new Swiper('.swiper-clients', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    mousewheel: true,
    grabCursor: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 50
        },
    },
    on: {
        click: function () {
            this.slideNext();
        }
    }
});