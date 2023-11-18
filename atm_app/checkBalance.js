import { users, userPin } from './index.js';
import chalk from 'chalk';
export default function checkBalance() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].pin === userPin.pin) {
            console.log(chalk.bgGreen(`Your balance: ${users[i].balance}`));
        }
    }
}
