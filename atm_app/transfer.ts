import inquirer from 'inquirer';
import {users, userPin} from './index.js';

export default async function transfer(){
    let flag = false;
    for(let i = 0; i < users.length; i++){
        if(users[i].pin === userPin.pin){
            flag = true;
            let userInput = await inquirer.prompt([
                {
                type: "number",
                name: "amount",
                message: "Enter amount you want to transfer",
            },
            {
                type: 'input',
                name: "userName",
                message: "Enter the name of user whom you want to transfer"
            }
        ])
        let flag2 = false;
        for(let j = 0; j < users.length; j++){
            if(users[j].name === userInput.userName){
                flag2 = true
                if(users[i].balance < userInput.amount){
                    console.log("Insufficient balance")
                }
                else{
                    users[j].balance += userInput.amount;
                    users[i].balance -= userInput.amount
                }
            }
        }
        if(!flag2) {
            console.log("User doesn't exist");
            break;
        }
        }
    }
    if(!flag){
        console.log("Invalid pin");
    }
    return users;
}