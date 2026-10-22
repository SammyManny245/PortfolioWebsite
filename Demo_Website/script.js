function playSound(audioId) {
    const sound = document.getElementById(audioId);
    sound.currentTime = 0;
    sound.play();
}