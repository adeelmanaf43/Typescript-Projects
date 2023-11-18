import inquirer from 'inquirer';
import {users, userPin} from './index.js';
import chalk from 'chalk';
let flag = false;
export default async function Withdraw(){
    for(let i = 0; i < users.length; i++){
        if(users[i].pin === userPin.pin){
            flag = true
            let amount = await inquirer.prompt({
                type: "number",
                name: "am",
                message: "Enter amount to withdraw"
            })
            if(amount.am <= users[i].balance){
                users[i].balance -= amount.am
            }
            else{
                console.log("You have insufficient amount");
            }

        }
    }
    if(!flag){
        console.log('Invalid pin');
    }
    return users;
}