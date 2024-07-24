import { updateTimeDisplay, changeColor } from './utils.js';
import { updateProgressBar, updateProgressBarMarkers } from './progress-bar.js';
import { playSound } from './sounds.js';

let minutes = 0;
let seconds = 0;
let range = 60; // Default range in minutes
let interval = null;
let soundFrequency = 1; // Default frequency in minutes

export function initChronometer() {
    console.log('Initializing chronometer'); // Message de débogage
    updateTimeDisplay(minutes, seconds);
    updateProgressBar(minutes, range);
    updateProgressBarMarkers(range);
}

export function incrementTime() {
    if (interval) {
        seconds++;
        if (seconds % 60 === 0) {
            minutes++;
            changeColor();
            updateProgressBarMarkers(range);
            if (minutes % soundFrequency === 0) {
                playSound();
            }
        }
        updateTimeDisplay(minutes, seconds);
        updateProgressBar(minutes, range);

        // Arrêter le chronomètre si la range est atteinte
        if (minutes >= range) {
            stopChronometer();
        }
    }
}

export function setRange(newRange) {
    range = newRange;
    updateProgressBarMarkers(range);
}

export function stopChronometer() {
    clearInterval(interval);
    interval = null;
}

export function startChronometer() {
    if (!interval) {
        interval = setInterval(incrementTime, 1000);
    }
}

export function setSoundFrequency(frequency) {
    soundFrequency = frequency;
}
