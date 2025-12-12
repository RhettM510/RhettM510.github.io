var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
function createSawBlade (x, y) { 
    var hitZoneSize = 25;
    var damageFromObstacle = 10
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 400;
    sawBladeHitZone.y = 430;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -26
    obstacleImage.y = -26
  }
createSawBlade(400, 400);
createSawBlade(400, 490);
createSawBlade(390, 460);



// function createSawBlade (x, y) {
// ballHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
// ballHitZone.x = 400;
// ballHitZone.y = 400;
// game.addGameItem(ballHitZone);
// var obstacleImage = draw.bitmap("img/ball.png");
// var c = hitZoneSize / 2;
// obstacleImage.x = - c;
// obstacleImage.y = - c;  
// }


function createEnemy (x, y) {
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 400;
enemy.y = groundY - 50;
game.addGameItem(enemy);
enemy.velocityX = -1.2;
enemy.onPlayerCollision = function () {game.changeIntegrity(-20)};
enemy.onProjectileCollision = function () {
game.increaseScore(100);
enemy.shrink()
}
}
createEnemy(400, groundY - 10);
createEnemy(800, groundY - 100);
createEnemy(1200, groundY - 50);




function createReward () {
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "blue");
blueSquare.x = -25;
blueSquare.y = -25;
enemy.addChild(blueSquare);
enemy.x = 400;
enemy.y = groundY - 50;
game.addGameItem(enemy);
enemy.velocityX = -1;
}
enemy.onPlayerCollision = function () 
{game.changeIntegrity(20)};
enemy.onProjectileCollision = function () {
game.increaseScore(100);
enemy.shrink()
}
function createMarker () {

}
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
