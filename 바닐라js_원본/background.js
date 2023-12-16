const images = [
    "MH0.jpg",
    "MH1.jpg",
    "MH2.jpg",
    "MH3.jpg",
    "MH4.jpg",
    "MH5.jpg",
    "MH6.jpg",
    "MH7.jpg",
    "MH8.jpg",
    "MH9.jpg",
    "MH10.jpg",
    "MH11.jpg",
    "MH12.jpg",
    "MH13.jpg",
    "MH14.jpg",
    "MH15.jpg",
    "MH16.jpg",
    "MH17.jpg",
    "MH19.jpg",
    "MH20.jpg",
    "MH21.jpg",
    "MH22.jpg",
    "MH23.jpg",
    "MH24.jpg",
    "MH25.jpg",
    "MH26.jpg",
    "MH27.jpg",
    "MH28.jpg",
    "MH29.jpg",
    

]

const choseImage = images[Math.floor(Math.random() * images.length)];



const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;
bgImage.style.width = "250px";
bgImage.style.height ="200px";

document.body.appendChild(bgImage);


