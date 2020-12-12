let deg = 0;

document.querySelector('.right-control').addEventListener('click', () => rotate(deg -= 60))
document.querySelector('.left-control').addEventListener('click', () => rotate(deg += 60))

function rotate(increment) {
    let caroussel = document.querySelector('.all-plans');
    caroussel.style.transform = `rotateY(${deg}deg)`;
    increment;
}