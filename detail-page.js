// 좋아요 클릭시 변하는 js
document.getElementById('unlike').addEventListener('click', function() {
    document.getElementById('unlike').style.display = 'none';
    document.getElementById('like').style.display = 'inline-block';
    document.querySelector('.like-unclick').style.display = 'none';
    document.querySelector('.like-click').style.display = 'block';
});

document.getElementById('like').addEventListener('click', function() {
    document.getElementById('like').style.display = 'none';
    document.getElementById('unlike').style.display = 'inline-block';
    document.querySelector('.like-click').style.display = 'none';
    document.querySelector('.like-unclick').style.display = 'block';
});

// 슬라이드
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll(".text-section > .middle > p").length;
    const slides = document.querySelectorAll(".text-section > .middle > p");
    const nextButton = document.querySelector('.next-slide');
    const previousButton = document.querySelector('.before-slide');

    function showSlide(slideIndex) {
        currentSlide = (slideIndex + totalSlides) % totalSlides;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide].style.display = "block";

        // Hide all images initially
        const images = document.querySelectorAll(".photo-section img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        // Show the corresponding image
        const currentImage = document.querySelector(`.photo-section img.post${currentSlide + 1}`);
        if (currentImage) {
            currentImage.style.display = "block";
        }

        // Show/hide previous and next buttons based on current slide index
        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "block";
        }
        if (currentSlide === totalSlides - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    }

    function nextSlide() {
        showSlide(currentSlide += 1);
    }

    function previousSlide() {
        showSlide(currentSlide -= 1);
    }

    document.querySelector('.next-slide').addEventListener('click', nextSlide);
    document.querySelector('.before-slide').addEventListener('click', previousSlide);

    // Show the first slide initially
    showSlide(currentSlide);
});