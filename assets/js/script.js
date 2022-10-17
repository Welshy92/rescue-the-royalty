// Wait for the DOM to finish loading before perfoming any tasks.
document.addEventListener ("DOMContentLoaded", function() {
})

// Clicking the start-game button will start the game.
let startGame = document.getElementById("start-game");
startGame.addEventListener("click", function() {
    console.log("START THE GAME ALREADY!");
    battleStart();

})

let battleScreen = document.getElementById("game-area");

/* This will run at the start of every new fight.
It resets the game area and sets the enemy the user faces,
as well as randomising the player stats. */

function battleStart() {
    console.log("BATTLE STARTED!")
    selectEnemy();
    playerStats();
    playerHP = 100;
    enemyHP = 100;
}

// Selects a random enemy for the user to face.

function selectEnemy() {
    console.log("ENEMY SELECTED!")
}

// Assigns 1 random elemental weakness and resistance for the user.

function playerStats() {
    console.log("PLAYER STATS SELECTED!")
}

// Pressing the new-fight button starts the game over

function newFight() {
    console.log("NEW FIGHT BEGINS!")
    battleStart();
}

// Pressing instructions-button will open up a box to show instructions

function displayInstructions() {
    console.log("SHOWING INSTRUCTIONS")
}

// Pressing the x button will hide the instructions box.

function closeInstructions() {
    console.log("HIDING INSTRUCTIONS")
}

// Sets player HP and what happens when it hits 0.

function playerHP() {
    console.log("PLAYER HP")
}

// Sets enemy HP and what happens when it hits 0.

function enemyHP() {
    console.log("ENEMY HP")
}

/* Calculates the players damage based on enemy weakness/resistance/nullify.
Displays the attack on the screen to the player */

function attackCalc() {
    console.log("PLAYER ATTACK")
}

/* Calculates the enemies damage based onplayer weakness/resistance.
Displays the attack on the screen to the player */

function enemyAttack() {
    console.log("ENEMY ATTACK")
}

// All of the avaiable attacks to the player

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

// The box that shows the last move by the player.

function lastMove() {
    console.log("last move")
}

// The box that shows the last move by the enemy.

function enemyMove() {
    console.log("enemy move")
}

// Add 1 to the player score and display message

function playerVictory() {
    console.log("YOU WIN")
}

// Add 1 to the player score and display message

function playerDefeat() {
    console.log("YOU LOSE")
}