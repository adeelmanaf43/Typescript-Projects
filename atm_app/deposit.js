import inquirer from 'inquirer';
import { users, userPin } from './index.js';
let flag = false;
export default async function Deposit() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].pin === userPin.pin) {
            flag = true;
            let d = await inquirer.prompt({
                name: 'amount',
                type: "number",
                message: 'Enter amount to deposit'
            });
            users[i].balance += d.amount;
        }
    }
    if (!flag) {
        console.log('Invalid pin');
    }
    return users;
}
