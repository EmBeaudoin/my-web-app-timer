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

    updateTaskSummary(); // Mettre à jour le résumé des tâches au chargement
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
    completeButton.textContent = '✔';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        updateTaskSummary();
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        updateTaskSummary();
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
    updateTaskSummary();
}

function updateTaskSummary() {
    const tasks = document.querySelectorAll('.task');
    const completedTasks = document.querySelectorAll('.task.completed');
    const pomosCount = document.getElementById('pomos-count');
    const finishTime = document.getElementById('finish-time');

    const pomos = tasks.length;
    const completedPomos = completedTasks.length;
    const remainingPomos = pomos - completedPomos;

    pomosCount.textContent = `Pomos: ${completedPomos}/${pomos}`;

    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + (remainingPomos * 25));
    const finishAt = currentTime.toTimeString().split(' ')[0];
    const remainingHours = (remainingPomos * 25) / 60;

    finishTime.textContent = `Finish At: ${finishAt} (${remainingHours.toFixed(1)}h)`;
}
