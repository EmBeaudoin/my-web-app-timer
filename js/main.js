import { initChronometer, incrementTime } from './chronometer.js';
import { initSettings } from './settings.js';
import { createBubbles } from './bubbles.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded'); // Message de débogage
    initChronometer();
    initSettings();
    createBubbles();
    setInterval(incrementTime, 1000); // Update time every second
});
