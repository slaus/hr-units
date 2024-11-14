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
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
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
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    },
    on: {
        click: function () {
            this.slideNext();
        }
    }
});

document.getElementById("phone").addEventListener("input", function(e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, "");

    if (value === "") {
      input.value = "";
      return;
    }

    let formattedValue = "+7 (";

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }
    if (value.length >= 5) {
      formattedValue += ") " + value.substring(4, 7);
    }
    if (value.length >= 8) {
      formattedValue += "-" + value.substring(7, 9);
    }
    if (value.length >= 10) {
      formattedValue += "-" + value.substring(9, 11);
    }

    input.value = formattedValue;
  });