var background = function (window) {
  "use strict";

  window.opspark = window.opspark || {};
  var draw = window.opspark.draw;
  var createjs = window.createjs;

  /*
   * Create a background view for our game application
   */
  window.opspark.makeBackground = function (app, ground) {
    /* Error Checking - DO NOT DELETE */
    if (!app) {
      throw new Error("Invalid app argument");
    }
    if (!ground || typeof ground.y == "undefined") {
      throw new Error("Invalid ground argument");
    }

    // useful variables
    var canvasWidth = app.canvas.width;
    var canvasHeight = app.canvas.height;
    var groundY = ground.y;

    // container which will be returned
    var background;

    //////////////////////////////////////////////////////////////////
    // ANIMATION VARIABLES HERE //////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // TODO (several):
    var adidas;
    var buildings = [];
    // called at the start of game and whenever the page is resized
    // add objects for display in background. draws each image added to the background once
    function render() {
      background.removeAllChildren();

      // TODO 1:
      // this currently fills the background with an obnoxious yellow;
      // you should modify both the height and color to suit your game
      var backgroundFill = draw.bitmap("img/shop.png");
      backgroundFill.x = 0
      backgroundFill.y = 0.5
      backgroundFill.scaleX = 1
      backgroundFill.scaleY = 1
      background.addChild(backgroundFill)
      var shop2 = draw.bitmap("img/shop.png");
      shop2.x = 1000
      shop2.y = 0.5
      shop2.scaleX = 1
      shop2.scaleY = 1
      background.addChild(shop2)
     
      // var groundFill = draw.bitmap("img/mall.jpeg");
      var groundFill = draw.rect(canvasWidth, canvasHeight - groundY, "green");
      
      groundFill.y = groundY;
      background.addChild(groundFill);
      // TODO 2: - Add a moon and starfield
      var niketech = draw.bitmap("img/niketech.png");
      niketech.x = 1800;
      niketech.y = -5;
      niketech.scaleX = 0.95;
      niketech.scaleY = 0.95;
      background.addChild(niketech);
      // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
  for (var i = 0; i < 5; ++i) {
  var buildingHeight = 300;
  var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
  building.x = 200 * i;
  building.y = groundY - buildingHeight;
  background.addChild(building);
  buildings.push(building);
}
      // TODO 3: Part 1 - Add a tree  
      adidas = draw.bitmap('img/adidas.png');
        adidas.x = 0;
        adidas.y = 2;
        adidas.scaleX = 1.5;
        adidas.scaleY = 2;
        background.addChild(adidas);

    } // end of render function - DO NOT DELETE

    // Perform background animation
    // called on each timer "tick" - 60 times per second
    function update() {
      // useful variables
      var canvasWidth = app.canvas.width;
      var canvasHeight = app.canvas.height;
      var groundY = ground.y;

      // TODO 3: Part 2 - Move the tree!
adidas.x = adidas.x + 1;

if (adidas.x < -200) {
  adidas.x = canvasWidth;
}
      // TODO 4: Part 2 - Parallax
      for (var i = 0; i < buildings.length; i++) {
      var eachElement = buildings[i];
      }
    } // end of update function - DO NOT DELETE

    /* Make a createjs Container for the background and let it know about the render and upate functions*/
    background = new createjs.Container();
    background.resize = render;
    background.update = update;

    /* make the background able to respond to resizing and timer updates*/
    app.addResizeable(background);
    app.addUpdateable(background);

    /* render and return the background */
    render();
    return background;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = background;
}
