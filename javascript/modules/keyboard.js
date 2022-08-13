import { wordLength } from './constants.js';
import { collectAnswer, processAnswer } from './coregame.js';

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

export { keyboardInput }