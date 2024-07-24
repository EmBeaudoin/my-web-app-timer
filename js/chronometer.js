import { updateTimeDisplay, changeColor } from './utils.js';
import { updateProgressBar, updateProgressBarMarkers } from './progress-bar.js';

let minutes = 0;
let seconds = 0;
let range = 60; // Default range in minutes

export function initChronometer() {
    console.log('Initializing chronometer'); // Message de débogage
    updateTimeDisplay(minutes, seconds);
    updateProgressBar(minutes, range);
    updateProgressBarMarkers(range);
}

export function incrementTime() {
    seconds++;
    if (seconds % 60 === 0) {
        minutes++;
        changeColor();
        updateProgressBarMarkers(range);
    }
    updateTimeDisplay(minutes, seconds);
    updateProgressBar(minutes, range);
}

export function setRange(newRange) {
    range = newRange;
    updateProgressBarMarkers(range);
}
