
document.addEventListener('DOMContentLoaded', function() {

    
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substr(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                var startPosition = window.pageYOffset;
                var distance = targetPosition - startPosition;
                var duration = 800;
                var start_time = performance.now();

                window.requestAnimationFrame(function scrollAnimation(current_time) {
                    var runtime = current_time - start_time;
                    var progress = Math.min(runtime / duration, 1);

                    window.scrollTo(0, startPosition + distance * ease(progress));

                    if (runtime < duration) {
                        window.requestAnimationFrame(scrollAnimation);
                    }
                });
            }
        });
    });

    const sliderButtons = document.querySelectorAll('.button-slider-task');
    const sliderImages = document.querySelectorAll('.img-main-info-section');
    
    // Добавляем обработчики событий для каждой кнопки
    sliderButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Удаляем класс button-active у всех кнопок
            sliderButtons.forEach(btn => btn.classList.remove('button-active'));
            // Добавляем класс button-active только к нажатой кнопке
            button.classList.add('button-active');
          
            // Добавляем класс mg-main-info-section-none ко всем изображениям
            sliderImages.forEach(image => image.classList.add('img-main-info-section-none'));
            // Убираем класс mg-main-info-section-none только у соответствующего изображения
            sliderImages[index+1].classList.remove('img-main-info-section-none');
        });
    });

    const sliderButtonsVideo = document.querySelectorAll('.button-slider-preparation');
        const sliderVideos = document.querySelectorAll('.main-info-section-preparation-slider-video');

        sliderButtonsVideo.forEach((button, index) => {
            button.addEventListener('click', () => {
                sliderButtonsVideo.forEach(btn => btn.classList.remove('button-active'));
                button.classList.add('button-active');

                sliderVideos.forEach(video => video.classList.add('main-info-section-preparation-slider-video-none'));
                sliderVideos[index].classList.remove('main-info-section-preparation-slider-video-none');
            });
        });

    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
});

