export let users = [
    {
        name: "aqeel",
        pin: 1111,
        balance: 10000
    },
    {
        name: "adeel",
        pin: 2222,
        balance: 8000
    },
    {
        name: "ali",
        pin: 3333,
        balance: 7000
    },
    {
        name: "asif",
        pin: 4444,
        balance: 6000
    },

    {
        name: "rehan",
        pin: 5555,
        balance: 1000
    },

]


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import checkBalance from "./checkBalance.js";
import Withdraw from "./withdraw.js";
import Deposit from "./deposit.js";
import transfer from "./transfer.js";

function sleep(){
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome(){
    let msg = chalkAnimation.rainbow("Welcome to ATM");
    await sleep();
    msg.stop();
}

await welcome();

export let userPin = await inquirer.prompt({
    type: "number",
    name: "pin",
    message: "Enter 4 digits pin",
})

let flag = false;

for(let i = 0; i < users.length; i++){
    if(userPin.pin === users[i].pin){
        flag = true;
        break;
    }
}

if(!flag){
    console.log("Your pin is incorrect");
}

else {
        do{
        let choice = await inquirer.prompt({
            type: "list",
            name : "opt",
            choices: ["Check Balance", "Withdraw", "Deposit", "Transfer"],
            message: "Pleass select option"
        })
    
        switch(choice.opt){
            case "Check Balance":
                checkBalance();
                break;
            case "Withdraw":
                let w = await Withdraw();
                users = w;
                break;
            case "Deposit":
                let dep = await Deposit();
                users = dep;
                break;
            case "Transfer":
                let tr = await transfer();
                users = tr;
                break;
            default:
                console.log("Invalid input");
        }
        var c = await inquirer.prompt({
            type: "input",
            name: "restart",
            message : "Do you want to continue. Press y | n"
        })
    }while(c.restart === "Y" || c.restart === "y")

}