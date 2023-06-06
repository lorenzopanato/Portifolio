const themesBtn = document.querySelector('.themes-button');

themesBtn.addEventListener('click', () => {
    const main = document.querySelector('.main');
    const themesBall = document.querySelector('.themes-ball');
    const header = document.getElementById('header');

    if(!main.classList.contains('dark-mode')) {
        main.classList.toggle('dark-mode');
        header.style.color = 'var(--main-white)';

        themesBtn.style.flexDirection = 'row-reverse';
        themesBtn.style.backgroundColor = 'rgb(92, 92, 92)';
        themesBall.style.backgroundColor = 'var(--main-white)'
        themesBall.style.marginRight = '3px';
    }
    else {
        main.classList.toggle('dark-mode');
        header.style.color = '';

        themesBtn.style.flexDirection = '';
        themesBtn.style.backgroundColor = '';
        themesBall.style.backgroundColor = ''
        themesBall.style.marginRight = '';
    }
});

const mobileMenu = document.querySelector('.mobile-menu');
const headerInfos = document.querySelector('.header-infos');
const headerLinks = document.querySelectorAll('.header-infos li');

mobileMenu.addEventListener('click', () => {
    headerInfos.classList.toggle('show');
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerInfos.classList.toggle('show');
    });
});