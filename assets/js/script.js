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
let infoScreen = document.getElementById("info-screen");

/* This will run at the start of every new fight.
It resets the game area and sets the enemy the user faces,
as well as randomising the player stats. */

function battleStart() {
    console.log("BATTLE STARTED!")
    selectEnemy();
    playerStats();
    playerHP = 100;
    clearScreen();
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
        <button id="new-fight-button" data-type="new-fight">New Fight</button>
    </span>
    <span id="enemy-info">
        <p id="enemy-name">${enemyName}</p>
        <span id="enemy-hp"></span>
    </span>
</div>
<div id="info-float">
<p>${enemyName}</p>
<p>LORE PIECE</p>
<p>Enemy weakness: ${weakness}</p>
<p>Enemy resistance: ${resist}</p>
<p>Enemy nullification: ${nullify}</p>
<p>Your resist: </p>
<p>Your weakness: </p>
<button id="close-info">CLOSE</button>
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
    <button id="sword-attack" data-type="slash">Sword Swing</button>
    <button id="heal-attack" data-type="heal">Healing Light</button>
    <button id="fire-attack" data-type="fire">Fire</button>
    <button id="water-attack" data-type="water">Water</button>
    <button id="air-attack" data-type="air">Air</button>
    <button id="ground-attack" data-type="ground">Ground</button>
</div>
<div id="bottom-row-game">
    <span id="player-info">
        <p id="player-name">${heroName}</p>
        <span id="player-hp"></span>
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

// Pressing the close button will hide the instructions box.

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

function fireSlime() {
    enemyName = "Fire Slime";
    enemyHP = 100;
    weakness = weakAttack[0];
    nullify = nullifyAttack[0];
    resist = resistAttack[0];
    damage = enemyDamage[0];
    normal = normalAttack[0, 4];
    console.log(enemyHP, weakness, nullify, resist, damage, normal);
} 

function waterSlime() {
    enemyName = "Water Slime";
    enemyHP = 100;
    weakness = weakAttack[1];
    nullify = nullifyAttack[1];
    resist = resistAttack[1];
    damage = enemyDamage[1];
    normal = normalAttack[1, 4];
    console.log(enemyHP, weakness, nullify, resist, damage, normal);
} 

function airSlime() {
    enemyName = "Air Slime";
    enemyHP = 100;
    weakness = weakAttack[2];
    nullify = nullifyAttack[2];
    resist = resistAttack[2];
    damage = enemyDamage[2];
    normal = normalAttack[2, 4];
    console.log(enemyHP, weakness, nullify, resist, damage, normal);
} 

function groundSlime() {
    enemyName = "Ground Slime";
    enemyHP = 100;
    weakness = weakAttack[3];
    nullify = nullifyAttack[3];
    resist = resistAttack[3];
    damage = enemyDamage[3];
    normal = normalAttack[3, 4];
    console.log(enemyHP, weakness, nullify, resist, damage, normal);
} 

function treant() {
    enemyName = "Anti-magic Treant";
    enemyHP = 100;
    resist = resistAttack[0, 1, 2, 3];
    damage = enemyDamage[4];
    weakness = weakAttack[4];
    console.log(enemyHP, weakness, resist, damage);
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
    let infoFloat = document.getElementById("info-float")
    console.log("FLOATING INFO BOX");
    infoFloat.style.display = "flex";
}

function closeInfoFloat() {
    let infoFloat = document.getElementById("info-float")
    console.log("CLOSING INFO BOX");
    infoFloat.style.display = "none";
}