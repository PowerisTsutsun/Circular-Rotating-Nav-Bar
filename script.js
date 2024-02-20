let angle = 0;
const rotationSpeed = 1; // Adjust the rotation speed as desired
let rotationInterval = setInterval(rotateCarousel, 25); // Adjust the interval speed as desired

function rotateCarousel() {
    angle = (angle + rotationSpeed) % 360;
    const carousel = document.getElementById('carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        const rotation = angle + (index * 360 / items.length);
        item.style.transform = `rotate(${rotation}deg) translateX(50%)`;
        // Apply counter-rotation to all items to keep the text stationary
        item.querySelector('.item-content').style.transform = `rotate(${-rotation}deg)`;
    });
}

document.getElementById('carousel').addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
});

document.getElementById('carousel').addEventListener('mouseleave', () => {
    rotationInterval = setInterval(rotateCarousel, 20);
});
