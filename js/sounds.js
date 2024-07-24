export const sounds = {
    default: new Audio('audio/wind-chime-g-003-89307.mp3'),
    // Ajoutez d'autres sons ici
    // sound1: new Audio('audio/sound1.mp3'),
    // sound2: new Audio('audio/sound2.mp3'),
};

export function playSound(name = 'default') {
    const sound = sounds[name];
    if (sound) {
        sound.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    } else {
        console.error(`Sound '${name}' not found`);
    }
}
