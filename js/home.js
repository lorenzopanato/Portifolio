const skillIcons = document.querySelectorAll('.skills img');
const textIcons = document.querySelectorAll('.skills p');
const themesBtn = document.querySelector('.themes-button');

themesBtn.addEventListener('click', () => {
    const themesBall = document.querySelector('.themes-ball');

    themesBtn.style.flexDirection = 'row-reverse';
    themesBtn.style.backgroundColor = 'var(--main-black)';
    themesBall.style.backgroundColor = 'var(--main-white)'
});

skillIcons.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
        textIcons[index].style.display = 'flex';
    });

    icon.addEventListener('mouseout', () => {
        textIcons[index].style.display = 'none';
    });
});
