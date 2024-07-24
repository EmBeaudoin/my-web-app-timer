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

    // Gestion des tâches
    document.getElementById('add-task-button').addEventListener('click', addTask);
    document.getElementById('new-task-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('tasks-list');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;
    taskItem.appendChild(taskLabel);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
