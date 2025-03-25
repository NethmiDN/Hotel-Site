const hero = document.getElementById("hero");

// Array of image URLs (replace with your actual image paths)
const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg"
];

let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length; // Loop back to first image
}

// Change image every 5 seconds
setInterval(changeBackground, 5000);
