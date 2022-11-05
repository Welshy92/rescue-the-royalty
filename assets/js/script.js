/*jshint esversion: 6 */
 
// Wait for the DOM to finish loading before performing any tasks.
document.addEventListener ("DOMContentLoaded", function() {
});
 
// Submitting a hero name will start the game.
 
let heroName = [];
 
function handleSubmit(event) {
    event.preventDefault();
    let userName = userForm.elements["user"].value;
 
    if (userName.length < 5) {
        alert("Please make sure your hero name is at least 5 characters long");
    } else {
        heroName.push(userForm.elements["user"].value);
        battleStart();
    }
}
 
let userForm = document.getElementById("user-name");
userForm.addEventListener("submit", handleSubmit);
 
// Naming the 2 boxes that will be changed throughout gameplay.
 
let battleScreen = document.getElementById("game-area");
let infoScreen = document.getElementById("info-screen");
 
/* This will run at the start of every new fight.
It resets the game area and sets the enemy the user faces,
as well as randomizing the player stats. */
 
function battleStart() {
    selectEnemy();
    playerStats();
    clearScreen();
}
 
// Clears the game screen
 
function clearScreen() {
    battleScreen.innerHTML = ``;
    infoScreen.innerHTML = ``;
    startFight();
}
 
// display the fight screen
 
function startFight() {
    battleScreen.innerHTML = `<div id="top-row-game">
    <span>
        <button id="new-fight-button" data-type="new-fight">New Fight</button>
    </span>
    <span id="enemy-info">
        <p id="enemy-name">${enemyName}</p>
        <span id="enemy-hp"><p><span id="enemy-hp-number">${enemyHP}</span> HP</p></span>
    </span>
</div>
<div id="info-float">
<p>${enemyName}</p>
<p>LORE PIECE</p>
<p>Enemy weakness: ${weakness}</p>
<p>Enemy resistance: ${resist}</p>
<p>Enemy nullification: ${nullify}</p>
<p>Your resist: ${playerResistTo}</p>
<p>Your weakness: ${playerWeakTo}</p>
<button id="close-info">CLOSE</button>
</div>
<div id="move-log">
    <span id="enemy-last-move">
        <p></p>
    </span>
    <span><img id="enemy-image" src="assets/images/${enemyImage}.webp" alt="${enemyName} Enemy"></span>
    <span id="player-last-move">
        <p></p>
    </span>
</div>
<div id="player-abilities">
    <button id="slash-attack" data-type="slash">Sword Swing</button>
    <button id="heal-attack" data-type="heal">Healing Light</button>
    <button id="fire-attack" data-type="fire">Fire</button>
    <button id="water-attack" data-type="water">Water</button>
    <button id="air-attack" data-type="air">Air</button>
    <button id="ground-attack" data-type="ground">Ground</button>
</div>
<div id="bottom-row-game">
    <span id="player-info">
        <p id="player-name">${heroName}</p>
        <span id="player-hp"><p><span id="player-hp-number">100</span> HP</p></span>
    </span>
    <span>
        <button id="instructions-button" data-type="instructions">Info</button>
    </span>
</div>`;
/* Add event listeners to the new buttons */
    let newFightButton = document.getElementById("new-fight-button");
    newFightButton.addEventListener("click", newFight);
 
    let instructionsButton = document.getElementById("instructions-button");
    instructionsButton.addEventListener("click", instructionsBox);
 
    let closeInfoButton = document.getElementById("close-info");
    closeInfoButton.addEventListener("click", closeInfoFloat);
 
    let slashButton = document.getElementById("slash-attack");
    slashButton.addEventListener("click", slashAttack);
 
    let fireButton = document.getElementById("fire-attack");
    fireButton.addEventListener("click", fireAttack);
 
    let waterButton = document.getElementById("water-attack");
    waterButton.addEventListener("click", waterAttack);
 
    let airButton = document.getElementById("air-attack");
    airButton.addEventListener("click", airAttack);
 
    let groundButton = document.getElementById("ground-attack");
    groundButton.addEventListener("click", groundAttack);
 
    let healButton = document.getElementById("heal-attack");
    healButton.addEventListener("click", healAttack);
 
}
// Selects a random enemy for the user to face.
 
let enemyName = [];
 
function selectEnemy() {
    let enemyNum = Math.floor(Math.random() * 6 + 1);
    console.log(enemyNum);
    if (enemyNum === 1) {
        fireSlime();
    }
    else if (enemyNum === 2) {
        waterSlime();
    }
    else if (enemyNum === 3) {
        airSlime();
    }
    else if (enemyNum === 4) {
        groundSlime();
    }
    else if (enemyNum === 5) {
        treant();
    }
    else if (enemyNum === 6) {
        armageddon();
    }
}
// Pressing the new-fight button starts the game over
 
function newFight() {
    battleStart();
}
 
// Add 1 to the player win score and display message
 
function playerVictory() {
    battleScreen.innerHTML = `<div id="end-screen">
    <p>Thank you ${heroName}! You have vanquished this foe and made the kingdom just a little bit safer. However the seemingly eternal search must continue.</p>
    <button id="fight-on-button">Fight On ${heroName}!</button>
    </div>`;
 
    let oldWins = document.getElementById("win-score").innerHTML;
    document.getElementById("win-score").innerHTML = ++oldWins;
 
    let fightOnButton = document.getElementById("fight-on-button");
    fightOnButton.addEventListener("click", newFight);
}
 
// Add 1 to the player loss score and display message
 
function playerDefeat() {
    battleScreen.innerHTML = `<div id="end-screen">
    <p> ${heroName}, you fell unconscious and woke up many hours later. The enemy has disappeared and you feel healthy enough to fight again. The royalty must still be out there somewhere!.</p>
    <button id="fight-on-button">Fight On ${heroName}!</button>
    </div>`;
 
    let oldWins = document.getElementById("loss-score").innerHTML;
    document.getElementById("loss-score").innerHTML = ++oldWins;
 
    let fightOnButton = document.getElementById("fight-on-button");
    fightOnButton.addEventListener("click", newFight);
}
 
// Randomly assign 1 weakness and 1 resistance to the player.
let playerWeakTo = "";
let playerResistTo = "";
 
function playerStats() {
    let randomPlayerWeak = Math.floor(Math.random() * 4 + 1);
    let randomPlayerResist = Math.floor(Math.random() * 4 + 1);
    while (randomPlayerResist == randomPlayerWeak) {
        randomPlayerResist = Math.floor(Math.random() * 4 + 1);
    }
 
    if (randomPlayerWeak === 1) {
        playerWeakTo = "Fire";
    } else if (randomPlayerWeak === 2) {
        playerWeakTo = "Water";
    } else if (randomPlayerWeak === 3) {
        playerWeakTo = "Air";
    } else if (randomPlayerWeak === 4) {
        playerWeakTo = "Ground";
    }
 
    if (randomPlayerResist === 1) {
        playerResistTo = "Fire";
    } else if (randomPlayerResist === 2) {
        playerResistTo = "Water";
    } else if (randomPlayerResist === 3) {
        playerResistTo = "Air";
    } else if (randomPlayerResist === 4) {
        playerResistTo = "Ground";
    }
}
 
// Defining enemies
 
let weakAttack = ["Water", "Air", "Ground", "Fire", "Sword"];
let nullifyAttack = ["Fire", "Water", "Air", "Ground"];
let resistAttack = ["Ground", "Fire", "Water", "Air", "Sword"];
let enemyDamage = ["Fire", "Water", "Air", "Ground", "Slash"];
let normalAttack = ["Air", "Ground", "Fire", "Water", "Slash"];
let enemyHP = "";
let weakness = "";
let nullify = "";
let resist = "";
let damage = "";
let normal = "";
let randomWeak = Math.floor(Math.random() * 5 + 1);
let randomResist = Math.floor(Math.random() * 5 + 1);
let enemyImage= "";
 
function fireSlime() {
    enemyName = "Fire Slime";
    enemyHP = 100;
    weakness = weakAttack[0];
    nullify = nullifyAttack[0];
    resist = resistAttack[0];
    damage = enemyDamage[0];
    normal = normalAttack[0, 4];
    enemyImage = "f-slime";
}
 
function waterSlime() {
    enemyName = "Water Slime";
    enemyHP = 100;
    weakness = weakAttack[1];
    nullify = nullifyAttack[1];
    resist = resistAttack[1];
    damage = enemyDamage[1];
    normal = normalAttack[1, 4];
    enemyImage = "w-slime";
}
 
function airSlime() {
    enemyName = "Air Slime";
    enemyHP = 100;
    weakness = weakAttack[2];
    nullify = nullifyAttack[2];
    resist = resistAttack[2];
    damage = enemyDamage[2];
    normal = normalAttack[2, 4];
    enemyImage = "a-slime";
}
 
function groundSlime() {
    enemyName = "Ground Slime";
    enemyHP = 100;
    weakness = weakAttack[3];
    nullify = nullifyAttack[3];
    resist = resistAttack[3];
    damage = enemyDamage[3];
    normal = normalAttack[3, 4];
    enemyImage = "g-slime";
}
 
function treant() {
    enemyName = "Anti-magic Treant";
    enemyHP = 100;
    resist = resistAttack[0] + " + " + resistAttack[1] + " + " + resistAttack[2] + " + " + resistAttack[3];
    damage = enemyDamage[4];
    weakness = weakAttack[4];
    enemyImage = "treant";
}
 
function armageddon() {
    enemyName = "Armageddon";
    enemyHP = 1000;
    normal = normalAttack[0] + " + " + normalAttack[1] + " + " + normalAttack[2] + " + " + normalAttack[3] + " + " + normalAttack[4];
    weakness = weakAttack[randomWeak];
    resist = resistAttack[randomResist];
    randomWeak = Math.floor(Math.random() * 5 + 1);
    randomResist = Math.floor(Math.random() * 5 + 1);
    while (randomResist == randomWeak) {
        randomResist = Math.floor(Math.random() * 4 + 1);
    }
    enemyImage = "arma";
}
// button event functions
 
function newFight(event) {
    battleStart();
}
 
function instructionsButton(event) {
    instructionsBox();
}
 
function closeInfoButton(event) {
    closeInfoFloat();
}
 
/* Floating instruction box open and close */
 
function instructionsBox() {
    let infoFloat = document.getElementById("info-float");
    infoFloat.style.display = "flex";
}
 
function closeInfoFloat() {
    let infoFloat = document.getElementById("info-float");
    infoFloat.style.display = "none";
}
 
/* Player move select. */
 
function slashAttack(event) {
    let oldEnemyHP = parseInt(document.getElementById("enemy-hp-number").innerText);
    if (weakness === weakAttack[4]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 40;
        document.getElementById("player-last-move").innerHTML = `<p>Critical strike! You hit the enemy for 40 damage.</p>`;
    } else if (resist === resistAttack[4]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 10;
        document.getElementById("player-last-move").innerHTML = `<p>Glancing blow! You hit the enemy for 10 damage.</p>`;
    } else {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 20;
        document.getElementById("player-last-move").innerHTML = `<p>You hit the enemy for 20 damage.</p>`;
    }
    checkEnemyHP();
}
 
function fireAttack(event) {
    let oldEnemyHP = parseInt(document.getElementById("enemy-hp-number").innerText);
    if (weakness === weakAttack[3]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 40;
        document.getElementById("player-last-move").innerHTML = `<p>Incinerate! You hit the enemy for 40 damage.</p>`;
    } else if (resist === resistAttack[1]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 10;
        document.getElementById("player-last-move").innerHTML = `<p>Sputter! You hit the enemy for 10 damage.</p>`;
    } else if (nullify === nullifyAttack[0]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP;
        document.getElementById("player-last-move").innerHTML = `<p>Your enemy laughs at you. You do 0 damage.</p>`;
    } else {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 20;
        document.getElementById("player-last-move").innerHTML = `<p>You hit the enemy for 20 damage.</p>`;
    }
    checkEnemyHP();
}
 
function waterAttack(event) {
    let oldEnemyHP = parseInt(document.getElementById("enemy-hp-number").innerText);
    if (weakness === weakAttack[0]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 40;
        document.getElementById("player-last-move").innerHTML = `<p>Doused! You hit the enemy for 40 damage.</p>`;
    } else if (resist === resistAttack[2]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 10;
        document.getElementById("player-last-move").innerHTML = `<p>Dampened! You hit the enemy for 10 damage.</p>`;
    } else if (nullify === nullifyAttack[1]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP;
        document.getElementById("player-last-move").innerHTML = `<p>The liquid drips off of your foe. You do 0 damage.</p>`;
    } else {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 20;
        document.getElementById("player-last-move").innerHTML = `<p>You hit the enemy for 20 damage.</p>`;
    }
    checkEnemyHP();
}
 
function airAttack(event) {
    let oldEnemyHP = parseInt(document.getElementById("enemy-hp-number").innerText);
    if (weakness === weakAttack[1]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 40;
        document.getElementById("player-last-move").innerHTML = `<p>Torn Asunder! You hit the enemy for 40 damage.</p>`;
    } else if (resist === resistAttack[3]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 10;
        document.getElementById("player-last-move").innerHTML = `<p>Levitate! You hit the enemy for 10 damage.</p>`;
    } else if (nullify === nullifyAttack[2]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP;
        document.getElementById("player-last-move").innerHTML = `<p>The enemy is completely unflinching. You do 0 damage.</p>`;
    } else {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 20;
        document.getElementById("player-last-move").innerHTML = `<p>You hit the enemy for 20 damage.</p>`;
    }
    checkEnemyHP();
}
 
function groundAttack(event) {
    let oldEnemyHP = parseInt(document.getElementById("enemy-hp-number").innerText);
    if (weakness === weakAttack[2]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 40;
        document.getElementById("player-last-move").innerHTML = `<p>Supreme Gravity! You hit the enemy for 40 damage.</p>`;
    } else if (resist === resistAttack[0]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 10;
        document.getElementById("player-last-move").innerHTML = `<p>The enemy stumbles. You hit the enemy for 10 damage.</p>`;
    } else if (nullify === nullifyAttack[3]) {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP;
        document.getElementById("player-last-move").innerHTML = `<p>The enemies movement remains in sync. You do 0 damage.</p>`;
    } else {
        document.getElementById("enemy-hp-number").innerText = oldEnemyHP - 20;
        document.getElementById("player-last-move").innerHTML = `<p>You hit the enemy for 20 damage.</p>`;
    }
    checkEnemyHP();
}
 
function healAttack(event) {  
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
        document.getElementById("player-hp-number").innerText = oldPlayerHP + 50;
        document.getElementById("player-last-move").innerHTML = `<p>You bathe in the light and heal for 50HP.</p>`;
        if (parseInt(document.getElementById("player-hp-number").innerText) >= 150) {
            document.getElementById("player-hp-number").innerText = 150
            document.getElementById("player-last-move").innerHTML = `<p>You call upon the light but it cannot allow you to surpass your 150HP maximum!.</p>`
        }
        enemyTurn();
}
 
// Player and Enemy HP checks.
 
function checkEnemyHP() {
    if (parseInt(document.getElementById("enemy-hp-number").innerText) <= 0) {
        playerVictory();
    } else {
        enemyTurn();
    }
}
 
function checkPlayerHP() {
    if (parseInt(document.getElementById("player-hp-number").innerHTML) <= 0) {
        playerDefeat();
    }
}
 
// Enemy move
 
function enemyTurn() {
    if (enemyName == "Fire Slime") {
        eFireAttack();
    } else if (enemyName = "Water Slime") {
        eWaterAttack();
    } else if (enemyName == "Air Slime") {
        eAirAttack();
    } else if (enemyName == "Ground Slime") {
        eGroundAttack;
    } else if (enemyName == "Anti-magic Treant") {
        eSlashAttack();
    } else if (enemyName == "Armageddon") {
        eArmaAttack();
    }
}
 
function eFireAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerHTML);
 
    if (playerWeakTo === "Fire") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 40;
        document.getElementById("enemy-last-move").innerText = `The enemy prey upon your weakness! They deal 40 damage.`;
    } else if (playerResistTo === "Fire") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 10;
        document.getElementById("enemy-last-move").innerText = `You are braced for the enemy attack! They deal 10 damage.`;
    } else {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 20;
        document.getElementById("enemy-last-move").innerText = `The enemy strikes you for 20 damage.`;
    }
    checkPlayerHP();
}
 
function eWaterAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
       
    if (playerWeakTo === "Water") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 40;
        document.getElementById("enemy-last-move").innerText = `The enemy preys upon your weakness! They deal 40 damage.`;
    } else if (playerResistTo === "Water") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 10;
        document.getElementById("enemy-last-move").innerText = `You are braced for the enemy attack! They deal 10 damage.`;
    } else {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 20;
    }
    checkPlayerHP();
}
 
function eAirAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
   
    if (playerWeakTo === "Air") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 40;
        document.getElementById("enemy-last-move").innerText = `The enemy preys upon your weakness! They deal 40 damage.`;
    } else if (playerResistTo === "Air") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 10;
        document.getElementById("enemy-last-move").innerText = `You are braced for the enemy attack! They deal 10 damage.`;
    } else {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 20;
        document.getElementById("enemy-last-move").innerText = `The enemy strikes you for 20 damage.`;
    }
    checkPlayerHP();
}
 
function eGroundAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
   
    if (playerWeakTo === "Ground") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 40;
        document.getElementById("enemy-last-move").innerText = `The enemy preys upon your weakness! They deal 40 damage.`;
    } else if (playerResistTo === "Ground") {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 10;
        document.getElementById("enemy-last-move").innerText = `You are braced for the enemy attack! They deal 10 damage.`;
    } else {
        document.getElementById("player-hp-number").innerText = oldPlayerHP - 20;
        document.getElementById("enemy-last-move").innerText = `The enemy strikes you for 20 damage.`;
    }
    checkPlayerHP();
}
 
function eSlashAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
    document.getElementById("player-hp-number").innerText = oldPlayerHP - 30;
    document.getElementById("enemy-last-move").innerText = `The enemy slams you for 30 damage.`;
    checkPlayerHP();
}
 
function eArmaAttack() {
    let oldPlayerHP = parseInt(document.getElementById("player-hp-number").innerText);
    document.getElementById("player-hp-number").innerText = oldPlayerHP - 40;
    document.getElementById("enemy-last-move").innerText = `The enemy preys upon your weakness! They deal 40 damage.`;
    checkPlayerHP();
}
 
/* The Reset Game button will set the game screen and score back to the beginning. */
 
let resetButton = document.getElementById("reset-game-button");
    resetButton.addEventListener("click", resetGame);
 
function resetGame(event) {
    document.getElementById("win-score").innerText = `0`;
    document.getElementById("loss-score").innerText = `0`;
}