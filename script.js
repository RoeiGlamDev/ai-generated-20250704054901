// Get the hero video and thumbnail elements
const heroVideo = document.getElementById('hero-video');
const videoThumbnail = document.querySelector('.video-thumbnail');

// Add event listener to the hero video
heroVideo.addEventListener('loadeddata', () => {
    // Fade in the hero video
    heroVideo.classList.add('fade-in');
    // Hide the video thumbnail
    videoThumbnail.style.opacity = 0;
});

// Get the video cards
const videoCards = document.querySelectorAll('.video-card');

// Add event listener to the video cards
videoCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        // Add a hover effect to the video card
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        // Remove the hover effect from the video card
        card.style.transform = 'scale(1)';
    });
});