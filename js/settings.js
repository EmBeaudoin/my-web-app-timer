import { setRange, setSoundFrequency } from './chronometer.js';

export function initSettings() {
    document.getElementById('range-input').addEventListener('change', function() {
        const range = parseInt(this.value, 10);
        setRange(range);
        document.getElementById('settings-block').style.display = 'none';
    });

    document.getElementById('sound-frequency-input').addEventListener('change', function() {
        const frequency = parseInt(this.value, 10);
        setSoundFrequency(frequency);
        document.getElementById('settings-block').style.display = 'none';
    });

    document.getElementById('settings-button').addEventListener('click', function() {
        document.getElementById('settings-block').style.display = 'block';
    });

    document.getElementById('close-settings').addEventListener('click', function() {
        document.getElementById('settings-block').style.display = 'none';
    });
}
