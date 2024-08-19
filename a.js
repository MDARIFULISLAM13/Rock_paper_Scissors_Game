// script.js
document.getElementById('clickButton').addEventListener('click', () => {
    const winMessage = document.getElementById('winMessage');
    const backgroundOverlay = document.getElementById('backgroundOverlay');
    const confettiCanvas = document.getElementById('confettiCanvas');

    // Set up confetti canvas
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    // Show the win message and background overlay
    winMessage.classList.remove('hidden');
    backgroundOverlay.classList.remove('hidden');
    winMessage.style.opacity = 1;
    backgroundOverlay.style.opacity = 1;

    // Play celebratory sound
    const sound = new Howl({
        src: ['https://www.soundjay.com/button/beep-07.wav'], // Replace with your sound file
        volume: 1
    });
    sound.play();

    // Trigger confetti animation
    confetti({
        particleCount: 500,
        spread: 180,
        origin: { y: 0.6 },
        colors: ['#ff0', '#f0f', '#0ff', '#0f0'],
        ticks: 500, // Adjust to make the confetti last longer
    });

    // Add animation to win message
    winMessage.style.animation = 'bounce 1s ease-in-out infinite, textGlow 1s infinite alternate';

    // Keep the animation running for 10 seconds
    setTimeout(() => {
        winMessage.style.opacity = 0;
        backgroundOverlay.style.opacity = 0;
        setTimeout(() => {
            winMessage.classList.add('hidden');
            backgroundOverlay.classList.add('hidden');
        }, 500); // Allow fade-out transition to complete
    }, 10000); // Keep the animation for 10 seconds
});
