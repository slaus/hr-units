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
smoothScroll('.candidat__btn', '#about');
