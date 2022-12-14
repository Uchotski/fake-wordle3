import { wordLength } from './constants.js';
import { keyboardInit } from './keyboard.js';

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
const processAnswer = (wordToGuess, userGuess) => {
    return console.log(wordToGuess, userGuess);
}

//Changes Start button to Stop:
const startButtonSwap = () => {
    const startButton = document.getElementById("start");

    if (startButton.innerHTML === "START") {
        startButton.innerHTML = "STOP";
        startButton.removeEventListener("click", startGame);
        startButton.addEventListener("click", resetGame);
    } else {
        startButton.innerHTML = "START";
        startButton.removeEventListener("click", resetGame);
        startButton.addEventListener("click", startGame);
    }
}

//Resets the game:
const resetGame = () => {
    //Code to go here;
}

//Starts and runs the game:
const startGame = () => {
    //Change Start Button:
    startButtonSwap();

    //Generate a word:
    const wordToGuess = generateWord(wordLength);

    //Make the keyboard typeable, and passes the word to guess into the keyboard:
    let row = 0;
    let col = 1;
    keyboardInit(row, col, wordToGuess, true);
}

export { collectAnswer, processAnswer, startGame }