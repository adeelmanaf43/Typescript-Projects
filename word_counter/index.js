"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter time in seconds: ", (seconds) => {
    let timeLeft = parseInt(seconds);
    const timer = setInterval(() => {
        console.clear();
        console.log("Time left:", timeLeft);
        timeLeft--;
        if (timeLeft < 0) {
            console.log("Time is up");
            rl.close();
        }
    }, 1000);
});
