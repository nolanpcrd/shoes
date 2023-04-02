const header = document.querySelector('#header');
let isHeaderHidden = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY && scrollY > header.offsetHeight + 50) {
        if (!isHeaderHidden) {
            header.classList.add('header-hidden');
            isHeaderHidden = true;
        }
    } else {
        if (isHeaderHidden) {
            header.classList.remove('header-hidden');
            isHeaderHidden = false;
        }
    }
    lastScrollY = scrollY;
});