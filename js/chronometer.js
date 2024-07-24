import { updateTimeDisplay, changeColor } from './utils.js';
import { updateProgressBar, updateProgressBarMarkers } from './progress-bar.js';
import { playSound } from './sounds.js';

let minutes = 0;
let seconds = 0;
let range = 60; // Default range in minutes
let soundFrequency = 1; // Default frequency in minutes

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
        if (minutes % soundFrequency === 0) {
            playSound(); // Jouer le son en fonction de la fréquence définie
        }
    }
    updateTimeDisplay(minutes, seconds);
    updateProgressBar(minutes, range);
}

export function setRange(newRange) {
    range = newRange;
    updateProgressBarMarkers(range);
}

export function setSoundFrequency(newFrequency) {
    soundFrequency = newFrequency;
}
