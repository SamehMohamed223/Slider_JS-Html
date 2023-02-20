
var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector('.lightboxContainer');
var lightBoxItem = document.querySelector('.lightboxContainer .lightboxitem');
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

var currentSliderIndex = 0;

for(var i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click', function (eventInfo) {

        var imgSrc = eventInfo.target.getAttribute('src');
        currentSliderIndex = imgList.indexOf(eventInfo.target); // return Number
        // lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxItem.style.cssText = `background-image: url(${imgSrc});`;

        lightBoxContainer.classList.replace('d-none', 'd-flex');
    });
}

function nextSlider() {
    currentSliderIndex++;
    if(currentSliderIndex == imgList.length){
        currentSliderIndex = 0;
    }
    var imgSrc = imgList[currentSliderIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener('click',nextSlider);
document.addEventListener('keydown',function (eventInfo) {
    if (eventInfo.key == 'ArrowRight'  || eventInfo.key == 'ArrowUp') {
        eventInfo.preventDefault();
        nextSlider();
    }
});

function prevSlider() {
    currentSliderIndex--;
    if(currentSliderIndex == -1){
        currentSliderIndex = (imgList.length)-1;
    }
    var imgSrc = imgList[currentSliderIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener('click',prevSlider);
document.addEventListener('keydown',function (eventInfo) {
    if (eventInfo.key == 'ArrowLeft' || eventInfo.key == 'ArrowDown') {
        eventInfo.preventDefault();
        prevSlider();
    }
});

closeBtn.addEventListener('click',function () {
    lightBoxContainer.classList.replace('d-flex', 'd-none');
});
document.addEventListener('keydown',function (eventInfo) {
    if (eventInfo.key == 'Escape') {
        lightBoxContainer.classList.replace('d-flex', 'd-none');
    }
});



// document.addEventListener('keydown',function (eventInfo) {
//     console.log(eventInfo.key);
// })