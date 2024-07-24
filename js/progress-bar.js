export function updateProgressBar(minutes, range) {
    let progress = (minutes / range) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

export function updateProgressBarMarkers(range) {
    const container = document.getElementById('progress-container');
    container.querySelectorAll('.progress-marker').forEach(marker => container.removeChild(marker));
    for (let i = 1; i < range; i++) {
        const marker = document.createElement('div');
        marker.classList.add('progress-marker');
        marker.style.left = `${(i / range) * 100}%`;
        marker.style.backgroundColor = 'darkgray';
        container.appendChild(marker);
    }
}
