import inquirer from "inquirer";
let enemies = ["Skeleton", "Assasin", "Warrior", "Zombie"];

let maxEnemyHealth = 75;
let enemyAttackDamage = 25;


let health = 100;
let attackDamage = 50;
let numHealthPotion = 3;
let healthHealAmount = 30;
let healthPotionDropChance = 50;

let running = true;

while(running) {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);

    console.log("The ", enemy, "has appeared");
    let continueRunning = false;
    while(enemyHealth > 1){
        console.log("Your HP", health);
        console.log("Enemy HP", enemyHealth);
        const {userChoice} = await inquirer.prompt({
            name: "userChoice",
            type: "list",
            message: "What you want to do",
            choices: ["Attack Enemy", 'Drink Health Potion', "Run"]

        })
        if(userChoice === "Attack Enemy") {
            let damageDealt = Math.floor(Math.random() * attackDamage);
            let damageTaken = Math.floor(Math.random() * enemyAttackDamage);
            health -= damageTaken;
            enemyHealth -= damageDealt
            console.log("You have strike ", damageDealt, "damage to enemy");
            console.log("You received ", damageTaken, "damage by enemy")
            if(health < 1){
                console.log("You have taken too much damage, you are out");
                break;
            }
        }
        else if(userChoice === "Drink Health Potion"){
            if(health > 70) {
                console.log('You have enough health')
            }
            else {
                if(numHealthPotion > 0){
                    health += healthHealAmount;
                    numHealthPotion--;
                    console.log("You drink a health potion");
                    console.log('Your HP is: ', health);
                    console.log("Number of Healt Potion left:", numHealthPotion);
                }
                else {
                    console.log("You don't have any health potion, kill an enemy to get a chance to receive health potion")
                }
            }
        }
        else if (userChoice == "Run"){
            console.log("You ran away from ", enemy);
            continueRunning = true;
            break;
        }
    }
    if (continueRunning) {
        continue;
    }
    if(health < 1) {
        console.log("You limp out of dungeon, weak from battle");
        break;
    }

    console.log("#", enemy, "was defeated");
    console.log('You have', health, " HP");
    if(Math.floor(Math.random() * 100) >= healthPotionDropChance){
        console.log(enemy, "has dropped health potion");
        numHealthPotion++;
        console.log("You have", numHealthPotion, "Health Potion left");
    }

    const {userChoice2} = await inquirer.prompt({
        name: "userChoice2",
        type: "list",
        message: "What would you want to do now",
        choices: ["Continue Fighting", "Exit from Dungeon"]
    })

    if(userChoice2 === "Continue Fighting"){
        console.log("You continue your adventure")
    }
    else {
        console.log('You exit dungeon, succefully');
        running = false;
    }
}
