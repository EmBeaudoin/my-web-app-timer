export const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD'];
export let bubbleColorIndex = 1; // Start with a different color than background

export function updateTimeDisplay(minutes, seconds) {
    let displayMinutes = String(minutes).padStart(2, '0');
    let displaySeconds = String(seconds % 60).padStart(2, '0');
    document.getElementById('time-display').textContent = `${displayMinutes}:${displaySeconds}`;
}

export function changeColor() {
    let colorIndex = (bubbleColorIndex + 1) % colors.length;
    bubbleColorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.backgroundColor = colors[bubbleColorIndex];
    });
    document.getElementById('progress-bar').style.backgroundColor = colors[bubbleColorIndex];
}
