let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];  // Change to array for better management

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");  // Corrected the ID to match the assumed structure
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");  // Added # for ID selection
const monsterNameText = document.querySelector("#monsterNameText");  // Corrected typo
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave","FightDragon"],
      "button functions": [goStore, goCave, fightDragon]
    }
]

/*initialize buttons*/
button1.onclick = goStore;  // Changed onClick to onclick
button2.onclick = goCave;
button3.onclick = fightDragon;

function update (location){

}

function goToTown(){
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You return to the town square.";
}

function goStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;  // Changed onClick to onclick
    button2.onclick = buyWeapon;
    button3.onclick = goToTown;
    text.innerText = "You enter the store";
}

function goCave(){
    text.innerText = "You enter the cave.";
    console.log("Going to cave.");
}

function fightDragon(){
    text.innerText = "You encounter a dragon!";
    console.log("Fighting dragon.");
}

function buyHealth(){
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
        text.innerText = "You bought 10 health.";
    } else {
        text.innerText = "You don't have enough gold.";
    }
}

function buyWeapon(){
    if (gold >= 30) {
        gold -= 30;
        inventory.push("sword");  // Example weapon
        goldText.innerText = gold;
        text.innerText = "You bought a sword.";
    } else {
        text.innerText = "You don't have enough gold.";
    }
}

