document.addEventListener('DOMContentLoaded', function() {
    const videoCard = document.querySelector('.feature-card');
    const videoElement = videoCard.querySelector('video');

    videoCard.addEventListener('mouseover', function() {
        videoElement.play();
    });

    videoCard.addEventListener('mouseout', function() {
        videoElement.pause();
        videoElement.currentTime = 0;
    });
});
