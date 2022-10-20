// Wait for the DOM to finish loading before perfoming any tasks.
document.addEventListener ("DOMContentLoaded", function() {
})

// Submitting a hero name will start the game.

let heroName = [];

function handleSubmit(event) {
    event.preventDefault();
    let userName = userForm.elements["user"].value;

    if (userName.length < 5) {
        alert("Please make sure your hero name is at least 5 characters long")
    } else {
        heroName.push(userForm.elements["user"].value);
        console.log("HERO NAME:", userName);
        battleStart();
    }
}
  
let userForm = document.getElementById("user-name");
userForm.addEventListener("submit", handleSubmit);

// Naming the 2 boxes that will be changed throughout gameplay.

let battleScreen = document.getElementById("game-area");
let infoScreen = document.getElementById("instructions");

/* This will run at the start of every new fight.
It resets the game area and sets the enemy the user faces,
as well as randomising the player stats. */

function battleStart() {
    console.log("BATTLE STARTED!")
    clearScreen();
    selectEnemy();
    playerStats();
    playerHP = 100;
    enemyHP = 100;
}

// Clears the game screen

function clearScreen() {
    console.log("CLEARING BATTLE SCREEN");
    battleScreen.innerHTML = ``;
    console.log("CLEAING INFO SCREEN");
    infoScreen.innerHTML = ``;
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

// Defining enemies

let enemyList = [fireSlime, waterSlime, airSlime, groundSlime, treant, armageddon];
let weakAttack = [weakWater, weakAir, weakGround, weakFire, weakSword];
let nullifyAttack = [nullifyFire, nullifyWater, nullifyAir, nullifyGround];
let resistAttack = [resistGround, resistFire, resistWater, resistAir, resistSword];
let enemyDamage = [fireDamage, waterDamage, airDamage, groundDamage, slashDamage];
let normalAttack = [airNormal, groundNormal, fireNormal, waterNormal, slashNormal];

function fireSlime() {
    enemyName = "Fire Slime";
    enemyHP = 100;
    weakAttack[1];
    nullifyAttack[1];
    resistAttack[1];
    enemyDamage[1];
    normalAttack[1, 5];
} 

function fireSlime() {
    enemyName = "Water Slime";
    enemyHP = 100;
    weakAttack[2];
    nullifyAttack[2];
    resistAttack[2];
    enemyDamage[2];
    normalAttack[2, 5];
} 

function airSlime() {
    enemyName = "Air Slime";
    enemyHP = 100;
    weakAttack[3];
    nullifyAttack[3];
    resistAttack[3];
    enemyDamage[3];
    normalAttack[3, 5];
} 

function groundSlime() {
    enemyName = "Ground Slime";
    enemyHP = 100;
    weakAttack[4];
    nullifyAttack[4];
    resistAttack[4];
    enemyDamage[4];
    normalAttack[4, 5];
} 

function treant() {
    enemyName = "Anti-magic Treant";
    enemyHP = 100;
    resistAttack[1, 2, 3, 4];
    enemyDamage[5];
    normalAttack[5];
} 

function armageddon() {
    enemyName = "Armageddon";
    enemyHP = 1000;
    normalAttack[1, 2, 3, 4, 5];
    
} 