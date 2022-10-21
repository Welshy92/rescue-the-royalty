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
    selectEnemy();
    clearScreen();
    playerStats();
    playerHP = 100;
}

// Clears the game screen

function clearScreen() {
    console.log("CLEARING BATTLE SCREEN");
    battleScreen.innerHTML = ``;
    console.log("CLEAING INFO SCREEN");
    infoScreen.innerHTML = ``;
    startFight();
}

// display the fight screen

function startFight() {
    console.log("STARTING FIGHT");
    battleScreen.innerHTML = `<div id="top-row-game">
    <span>
        <button id="new-fight-button">New Fight</button>
    </span>
    <span id="enemy-info">
        <p id="enemy-name">${enemyName}</p>
        <span id="enemy-hp"></span>
    </span>
</div>
<div id="move-log">
    <span id="enemy-last-move">
        <p>Info on enemies turn.</p>
    </span>
    <span><img id="enemy-image" src="assets/images/f-slime.webp" alt="Fire Slime Enemy"></span>
    <span id="player-last-move">
        <p>Info of players last turn.</p>
    </span>
</div>
<div id="player-abilities">
    <button id="sword-attack">Sword Swing</button>
    <button id="heal-attack">Healing Light</button>
    <button id="fire-attack">Fire</button>
    <button id="water-attack">Water</button>
    <button id="air-attack">Air</button>
    <button id="ground-attack">Ground</button>
</div>
<div id="bottom-row-game">
    <span id="player-info">
        <p id="player-name">${heroName}</p>
        <span id="player-hp"></span>
    </span>
    <span>
        <button id="instructions-button">Instructions</button>
    </span>
</div>`;
}
// Selects a random enemy for the user to face.

let enemyName = []

function selectEnemy() {
    console.log("ENEMY SELECTED!")
    let enemyNum = Math.floor(Math.random() * 6 + 1);
    console.log(enemyNum)
    if (enemyNum === 1) {
        console.log("Fire selected")
        fireSlime();
    }
    else if (enemyNum === 2) {
        console.log("Water selected")
        waterSlime();
    }
    else if (enemyNum === 3) {
        console.log("Air selected")
        airSlime();
    }
    else if (enemyNum === 4) {
        console.log("Ground selected")
        groundSlime();
    }
    else if (enemyNum === 5) {
        console.log("Tree selected")
        treant();
    }
    else if (enemyNum === 6) {
        console.log("Death selected")
        armageddon();
    }
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

let weakAttack = ["weakWater", "weakAir", "weakGround", "weakFire", "weakSword"];
let nullifyAttack = ["nullifyFire", "nullifyWater", "nullifyAir", "nullifyGround"];
let resistAttack = ["resistGround", "resistFire", "resistWater", "resistAir", "resistSword"];
let enemyDamage = ["fireDamage", "waterDamage", "airDamage", "groundDamage", "slashDamage"];
let normalAttack = ["airNormal", "groundNormal", "fireNormal", "waterNormal", "slashNormal"];
let enemyHP = []
let randomWeak = Math.floor(Math.random() * 5 + 1);
let randomResist = Math.floor(Math.random() * 5 + 1);

function fireSlime() {
    enemyName = "Fire Slime";
    enemyHP = 100;
    weakAttack[0];
    nullifyAttack[0];
    resistAttack[0];
    enemyDamage[0];
    normalAttack[0, 4];
    console.log(enemyHP, weakAttack[0], nullifyAttack[0], resistAttack[0], enemyDamage[0], normalAttack[0, 4]);
} 

function waterSlime() {
    enemyName = "Water Slime";
    enemyHP = 100;
    weakAttack[1];
    nullifyAttack[1];
    resistAttack[1];
    enemyDamage[1];
    normalAttack[1, 4];
    console.log(enemyHP, weakAttack[1], nullifyAttack[1], resistAttack[1], enemyDamage[1], normalAttack[1, 4]);
} 

function airSlime() {
    enemyName = "Air Slime";
    enemyHP = 100;
    weakAttack[2];
    nullifyAttack[2];
    resistAttack[2];
    enemyDamage[2];
    normalAttack[2, 4];
    console.log(enemyHP, weakAttack[2], nullifyAttack[2], resistAttack[2], enemyDamage[2], normalAttack[2, 4]);
} 

function groundSlime() {
    enemyName = "Ground Slime";
    enemyHP = 100;
    weakAttack[3];
    nullifyAttack[3];
    resistAttack[3];
    enemyDamage[4];
    normalAttack[3, 4];
    console.log(enemyHP, weakAttack[3], nullifyAttack[3], resistAttack[3], enemyDamage[3], normalAttack[3, 4]);
} 

function treant() {
    enemyName = "Anti-magic Treant";
    enemyHP = 100;
    resistAttack[0, 1, 2, 3];
    enemyDamage[4];
    weakAttack[4];
    console.log(enemyHP, resistAttack[0, 1, 2, 3], enemyDamage[4], weakAttack[4]);
} 

function armageddon() {
    enemyName = "Armageddon";
    enemyHP = 1000;
    normalAttack[0, 1, 2, 3, 4];
    console.log("weak =", randomWeak, "resist=", randomResist);
    weakAttack[randomWeak];
    resistAttack[randomResist];
    
    console.log(enemyHP, normalAttack[0, 1, 2, 3, 4], weakAttack[randomWeak], resistAttack[randomResist]);
} 