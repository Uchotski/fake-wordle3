import {  keyboardInput } from './modules/keyboard.js';
import { startGame } from './modules/coregame.js';

document.addEventListener("keydown", keyboardInput);
document.getElementById("keyboard").addEventListener("click", keyboardInput);
document.getElementById("start").addEventListener("click", startGame);