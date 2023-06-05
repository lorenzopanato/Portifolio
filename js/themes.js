const themesBtn = document.querySelector('.themes-button');

themesBtn.addEventListener('click', () => {
    const main = document.querySelector('.main');
    const themesBall = document.querySelector('.themes-ball');

    main.classList.toggle('dark-mode');

    themesBtn.style.flexDirection = 'row-reverse';
    themesBtn.style.backgroundColor = 'rgb(92, 92, 92)';
    themesBall.style.backgroundColor = 'var(--main-white)'
    themesBall.style.marginRight = '3px';
});