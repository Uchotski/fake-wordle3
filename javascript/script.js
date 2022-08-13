import { row, col, keyboardInput } from './modules/keyboard.js';

document.addEventListener("keydown", keyboardInput);
document.getElementById("keyboard").addEventListener("click", keyboardInput);