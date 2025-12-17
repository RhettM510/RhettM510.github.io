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
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -26;
      obstacleImage.y = -26;
    }
    createSawBlade(400, 465);
    createSawBlade(800, 430);
    createSawBlade(990, 350);

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

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -3.5;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-20);
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(400);
        enemy.shrink();
      };
    }
    createEnemy(400, groundY - 10);
    createEnemy(900, groundY - 120);
    createEnemy(1200, groundY - 50);

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -1.5;
      reward.onPlayerCollision = function () {
        reward.fadeOut();
        if (game.Integrity === 100) {
          game.increaseScore(200);
        } else {
          game.changeIntegrity(20);
        }
      };
    }
    createReward(1200, groundY - 50);

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var blackSquare = draw.rect(50, 50, "black");
      blackSquare.x = -25;
      blackSquare.y = -25;
      marker.addChild(marker);
      marker.x = x;
      marker.y = y;
      game.addGameItem(blackSquare);
      marker.velocityX = -1.5;
      marker.onPlayerCollision = function () {
        startLevel();
      };
      marker.onProjectileCollision = function () {
        startLevel();
      };
    }
    createMarker(1000, groundY - 30);

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        var eachObject = levelObjects[i];
      }

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
