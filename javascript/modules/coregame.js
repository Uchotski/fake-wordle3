import { wordLength } from './constants.js';
import {  keyboardInput } from './keyboard.js';

const generateWord = (length) => {
    const wordToGuess = [];

    let i = 0;
    while (i < length) {
        let randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97); //Generates letter from a-z;
        wordToGuess.push(randomLetter);
        i++;
    }
    return wordToGuess;
}

const startGame = () => {
    generateWord(wordLength);
}

export { generateWord, startGame }