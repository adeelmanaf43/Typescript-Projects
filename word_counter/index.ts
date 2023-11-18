import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Enter time in seconds: ", (seconds) => {
    let timeLeft = parseInt(seconds);

    const timer = setInterval(() => {
        console.clear();
        console.log("Time left:", timeLeft);
        timeLeft--;
        if(timeLeft < 0){
            console.log("Time is up");
            rl.close();
        }
    }, 1000)
})