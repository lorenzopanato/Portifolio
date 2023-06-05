const skillIcons = document.querySelectorAll('.skills img');
const textIcons = document.querySelectorAll('.skills p');

skillIcons.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
        textIcons[index].style.display = 'flex';
    });

    icon.addEventListener('mouseout', () => {
        textIcons[index].style.display = 'none';
    });
});
