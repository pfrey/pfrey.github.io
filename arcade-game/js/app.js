'use strict';
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;

  if (this.x > 505) {
    this.x = -100;
  }

  if ((this.x < player.x + 80) && 
    (this.x > player.x - 80) &&
    (this.y < player.y + 60) &&
    (this.y > player.y - 60)) {
    console.log("Collision");

    resetCharacter();
  }
};

function resetCharacter() {
  player.x = 205;
  player.y = 400;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;

  this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
  if (this.y > 400) {
    this.y = 400;
  }
  if (this.y <= -25) {
    this.y = -25;
    winScreen(); // if character is at the top of the screen, call winScreen
  }
  if (this.x > 405) {
    this.x = 405;
  }
  if (this.x < 5) {
    this.x = 5;
  }
};

Player.prototype.handleInput = function(keyPress) {
  if (keyPress == 'up') {
    player.y += player.speed - 115;
  }
  if (keyPress == 'down') {
    player.y -= player.speed - 115;
  }
  if (keyPress == 'left') {
    player.x += player.speed - 80;
  }
  if (keyPress == 'right') {
    player.x -= player.speed - 80;
  }
  console.log(this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
  new Enemy(-200, 60, 200),
  new Enemy(-300, 60, 200),
  new Enemy(-100, 145, 300),
  new Enemy(-100, 225, 80),
  new Enemy(-400, 225, 80)
];

// Place the player object in a variable called player
var player = new Player(205, 400, 30);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

// display modal popup upon win
function winScreen() { 
  modal.style.display = "block";  
}

// Get the modal and elements within
const modal = document.getElementById('winModal');
const modalText = document.getElementById('modalText');
const playAgainButton = document.getElementById('playAgainButton');
const span = document.getElementsByClassName("close")[0];

// A user clicking either the X within the modal,
// on the Play Again link, 
// or anywhere outside the modal will close it
span.onclick = function() {
  modal.style.display = "none";
}
playAgainButton.onclick = function() {
  modal.style.display = "none";
  resetCharacter();
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
