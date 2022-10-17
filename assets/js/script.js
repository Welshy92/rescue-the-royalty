// Wait for the DOM to finish loading before perfoming any tasks
document.addEventListener ("DOMContentLoaded", function() {
})

let startGame = document.getElementById("start-game");
startGame.addEventListener("click", function() {
    console.log("START THE GAME ALREADY!");
    battleStart;

})

let battleScreen = document.getElementById("game-area");

function battleStart() {
    console.log("BATTLE STARTED!")
    selectEnemy();
    playerStats();
}

function selectEnemy() {
    console.log("ENEMY SELECTED!")
}

function playerStats() {
    console.log("PLAYER STATS SELECTED!")
}

function newFight() {
    console.log("NEW FIGHT BEGINS!")
}

function displayInstructions() {
    console.log("SHOWING INSTRUCTIONS")
}

function closeInstructions() {
    console.log("HIDING INSTRUCTIONS")
}

function playerHP() {
    console.log("PLAYER HP")
}

function enemyHP() {
    console.log("ENEMY HP")
}

function attackCalc() {
    console.log("PLAYER ATTACK")
}

function enemyAttack() {
    console.log("ENEMY ATTACK")
}

function swordSwing() {
    console.log("Sword")
}

function fireAttack() {
    console.log("fire")
}

function waterAttack() {
    console.log("water")
}

function airAttack() {
    console.log("air")
}

function groundAttack() {
    console.log("ground")
}

function HealAttack() {
    console.log("heal")
}

function defenceCalc() {
    console.log("defence calc")
}

function lastMove() {
    console.log("last move")
}

function enemyMove() {
    console.log("enemy move")
}

function playerVictory() {
    console.log("YOU WIN")
}

function playerDefeat() {
    console.log("YOU LOSE")
}