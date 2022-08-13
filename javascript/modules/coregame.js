import { wordLength } from './constants.js';

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
const processAnswer = (trueAnswer, userGuess) => {
    return console.log(trueAnswer, userGuess);
}

const startGame = () => {
    //Generate a word:
    const wordToGuess = generateWord(wordLength);
    console.log(wordToGuess);

    //Script for keyboard input:
    let row = 0;
    let col = 1;

    const keyboardInput = () => {
        //CONSTANTS:
        //Row/Tiles to edit:
        const currentRow = document.getElementById("game-window").getElementsByClassName("row")[row];
        const tilesInRow = currentRow.getElementsByTagName("div");

        //User Input:
        let input;

        //FUNCTIONS:
        //Handling User Input:
        if (event.type === "click") {
            input = event.target.innerHTML;
        } else if (event.type === "keydown") {
            input = event.key.toLowerCase();
            if (input.toLowerCase() === "backspace") { input = "delete"; }
        } else {
            returnconsole.log("Something went wrong!");
        }

        //Filter Input to contain only alphabetical characters...
        if (!/[A-Za-z]/.test(input)) { return; }

        //Adds letters to the input
        if (input.length === 1 && col <= wordLength) {
            tilesInRow[col].innerHTML = `<p>${input}</p>`;
            if (col < wordLength + 1) { col++ };
        }

        //Removes letters from the input
        if (input === "delete" && col > 1) {
            tilesInRow[col - 1].innerHTML = "";
            col--;
        }

        //Submits a complete guess
        if (input === "enter" && col === wordLength + 1) {
            //Collect the guess as an array...
            const userGuess = collectAnswer(currentRow);

            //Process the guess...
            processAnswer(wordToGuess, userGuess);

            //Change row...
            row++;
            col = 1;
        }

        return;
    }

    //Make the keyboard typeable:
    document.getElementById("keyboard").addEventListener("click", keyboardInput);
    document.addEventListener("keydown", keyboardInput);
}

export { collectAnswer, processAnswer, startGame }