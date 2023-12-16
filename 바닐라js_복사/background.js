
const images = [
    "if0.jpeg",
    "if1.jpeg",
    "if2.jpeg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage})`;
