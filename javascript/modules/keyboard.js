let row = 0;
let col = 1;

const keyboardInput = () => {
    //CONSTANTS:
    //Length of word to guess:
    const wordLength = document.getElementById("game-window").getElementsByClassName("row")[0].getElementsByTagName("div").length - 1;

    //Row/Tiles to edit:
    const rowToEdit = document.getElementById("game-window").getElementsByClassName("row")[row];
    const tilesInRow = rowToEdit.getElementsByTagName("div");

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
        if (col < wordLength + 1) col++;
    }

    //Removes letters from the input
    if (input === "delete" && col > 1) {
        tilesInRow[col - 1].innerHTML = "";
        col--;
    }
    
    //Submits a complete guess
    if (input === "enter" && col === wordLength + 1) {
        console.log("Enter was hit! Guess is now being processed...");
        row++;
        col = 1; 
    }

    return;
}

export { row, col, keyboardInput }