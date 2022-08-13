import { wordLength } from './constants.js';
import { keyboardInput } from './keyboard.js';

//Script to generate word:
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

//Script to collect answer:
const collectAnswer = (row) => {
    const userGuess = [];
    row.querySelectorAll("div:not(:first-of-type) > p").forEach(item => userGuess.push(item.innerHTML));
    return userGuess;
}

//Script to process answer:
const processAnswer = (userGuess) => {
    return console.log(trueAnswer, userGuess);
}

const startGame = () => {
    //Generate a word:
    const wordToGuess = generateWord(wordLength);
    console.log(wordToGuess);

    //Make the keyboard typeable:
    document.getElementById("keyboard").addEventListener("click", keyboardInput);
    document.addEventListener("keydown", keyboardInput);
}

export { collectAnswer, processAnswer, startGame }