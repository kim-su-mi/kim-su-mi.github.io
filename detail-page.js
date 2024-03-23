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
    let currentSlide = 0; // 현재 슬라이드
    const totalSlides = document.querySelectorAll(".text-section > .middle > p").length; // 전체 게시물 개수
    const slides = document.querySelectorAll(".text-section > .middle > p"); // 모든 슬라이드
    const nextButton = document.querySelector('.next-slide'); // 다음 버튼
    const previousButton = document.querySelector('.before-slide'); // 이전 버튼

    function showSlide(slideIndex) {
        currentSlide = (slideIndex + totalSlides) % totalSlides; // 현재 슬라이드 인덱스를 계산합니다.
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide].style.display = "block"; // 현재 슬라이드를 보이게

        const images = document.querySelectorAll(".photo-section img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none"; 
        }
        // 현재 슬라이드에 해당하는 이미지를 보이게
        const currentImage = document.querySelector(`.photo-section img.post${currentSlide + 1}`);
        if (currentImage) {
            currentImage.style.display = "block";
        }

        // 첫번째 게시물엔 이전 버튼 없애고,마지막 게시물에는 다음버튼 없애는 코드
        if (currentSlide === 0) {
            previousButton.style.display = "none"; // 첫 번째 슬라이드에서는 이전 버튼을 숨김
        } else {
            previousButton.style.display = "block"; // 그 외의 경우에는 이전 버튼을 표시
        }
        if (currentSlide === totalSlides - 1) {
            nextButton.style.display = "none"; // 마지막 슬라이드에서는 다음 버튼을 숨김
        } else {
            nextButton.style.display = "block"; // 그 외의 경우에는 다음 버튼을 표시
        }
    }

    function nextSlide() {
        showSlide(currentSlide += 1); // 다음 슬라이드를 표시합니다.
    }

    function previousSlide() {
        showSlide(currentSlide -= 1); // 이전 슬라이드를 표시합니다.
    }

    // 다음 버튼 클릭 시 다음 슬라이드를 표시하는 이벤트
    document.querySelector('.next-slide').addEventListener('click', nextSlide);
    // 이전 버튼 클릭 시 이전 슬라이드를 표시하는 이벤트
    document.querySelector('.before-slide').addEventListener('click', previousSlide);

    // 처음에 첫 번째 슬라이드를 표시
    showSlide(currentSlide);
});