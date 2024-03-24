document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 1; // 현재 보여지는 슬라이드의 인덱스

    // 슬라이드를 보여주는 함수
    function showSlide(slideIndex) {
        const slides = document.querySelectorAll('.detail-page > div'); // 슬라이드 요소들
        slides.forEach(slide => {
            slide.style.display = 'none'; // 모든 슬라이드 숨기기
        });
        slides[slideIndex - 1].style.display = 'flex'; // 선택한 슬라이드 보이기

        // 이전 버튼과 다음 버튼의 가시성 조절
        document.querySelector('.before-slide').style.display = slideIndex === 1 ? 'none' : 'block'; // 첫 번째 슬라이드면 이전 버튼 숨기기
        document.querySelector('.next-slide').style.display = slideIndex === slides.length ? 'none' : 'block'; // 마지막 슬라이드면 다음 버튼 숨기기
    }

    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        if (currentSlide < document.querySelectorAll('.detail-page > div').length) {
            currentSlide++; // 다음 슬라이드 인덱스로 이동
            showSlide(currentSlide); // 다음 슬라이드 보여주기
        }
    }

    // 이전 슬라이드로 이동하는 함수
    function previousSlide() {
        if (currentSlide > 1) {
            currentSlide--; // 이전 슬라이드 인덱스로 이동
            showSlide(currentSlide); // 이전 슬라이드 보여주기
        }
    }

    // "다음" 버튼에 클릭 이벤트 리스너 추가
    document.querySelector('.next-slide').addEventListener('click', nextSlide);

    // "이전" 버튼에 클릭 이벤트 리스너 추가
    document.querySelector('.before-slide').addEventListener('click', previousSlide);

    // 초기에 첫 번째 슬라이드 보여주기
    showSlide(currentSlide);
});