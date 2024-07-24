import { colors, bubbleColorIndex } from './utils.js';

export function createBubbles() {
    const bubblesContainer = document.getElementById('bubbles');
    for (let i = 0; i < 150; i++) {
        createBubble(bubblesContainer);
    }
}

function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 10 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.setProperty('--x-variation', (Math.random() - 0.5) * 2); // Random -1 to 1 vw
    bubble.style.setProperty('--scale', Math.random() * 0.5 + 0.75); // Random scale 0.75 to 1.25
    bubble.style.setProperty('--duration', `${Math.random() * 40 + 20}s`); // Random duration 20 to 60 seconds
    bubble.style.backgroundColor = colors[bubbleColorIndex];
    container.appendChild(bubble);

    // Remove bubble after animation to keep the count around 150
    bubble.addEventListener('animationend', () => {
        container.removeChild(bubble);
        createBubble(container);
    });
}
