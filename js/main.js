import { initChronometer, incrementTime, setRange, stopChronometer, startChronometer } from './chronometer.js';
import { initSettings } from './settings.js';
import { createBubbles } from './bubbles.js';

let pomodoroActive = false;

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded'); // Message de débogage
    initChronometer();
    initSettings();
    createBubbles();
    startChronometer(); // Commence le chronomètre automatiquement

    document.getElementById('pomodoro-button').addEventListener('click', () => {
        pomodoroActive = !pomodoroActive;
        if (pomodoroActive) {
            setRange(25); // 25 minutes for Pomodoro
            document.getElementById('pomodoro-button').classList.add('pomodoro-on');
            document.getElementById('pomodoro-button').classList.remove('pomodoro-off');
        } else {
            setRange(60); // Reset to default or previous range
            document.getElementById('pomodoro-button').classList.add('pomodoro-off');
            document.getElementById('pomodoro-button').classList.remove('pomodoro-on');
        }
    });

    document.getElementById('stop-button').addEventListener('click', () => {
        stopChronometer();
    });

    document.getElementById('start-button').addEventListener('click', () => {
        startChronometer();
    });
});
