let deg = 60;

document.querySelector('.btn').addEventListener('click', () => {
    let caroussel = document.querySelector('.all-plans');
    caroussel.style.transform = `rotateY(${deg}deg)`
    deg += 60;
})