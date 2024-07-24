export const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD'];
export let colorIndex = 0;
export let bubbleColorIndex = 1;

const audio = new Audio('wind-chime-g-003-89307.mp3');

export function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    bubbleColorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.backgroundColor = colors[bubbleColorIndex];
    });
    document.getElementById('progress-bar').style.backgroundColor = colors[bubbleColorIndex];
    playSound();
}

export function playSound() {
    audio.play().catch(error => {
        console.error('Error playing sound:', error);
    });
}

export function updateTimeDisplay(minutes, seconds) {
    let displayMinutes = String(Math.floor(minutes)).padStart(2, '0');
    let displaySeconds = String(seconds % 60).padStart(2, '0');
    document.getElementById('time-display').textContent = `${displayMinutes}:${displaySeconds}`;
}
