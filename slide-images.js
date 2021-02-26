const sl_show_img = document.querySelectorAll(".Sl-images .slide-show");

const imgDelay = 6000;
let currentImg = 0;

sl_show_img[currentImg].style.opacity = 1;

setInterval(nextImg,imgDelay);

function nextImg() {
    sl_show_img[currentImg].style.opacity = 0;
    const tempC = currentImg;
    setTimeout(() => {
        sl_show_img[tempC].style.opacity = 0;
    },1000);
    currentImg = (currentImg + 1) % sl_show_img.length;
    sl_show_img[currentImg].style.opacity = 1;
}