$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,400,100,20,);
createPlatform(900,300,300,20);
createPlatform(700,650,50,10);
createPlatform(900,600,150,15)
createPlatform(900,500,100,20);
createPlatform(550,500,150,20);
createPlatform(500,400,50,10);
createPlatform(600,300,25,10);
createPlatform(800,200,10,50);
createPlatform(1350,200,100,20);
createPlatform(1350,600,100,20)




    // TODO 3 - Create Collectables
createCollectable("moon",800,150,0,0.7);
createCollectable("mars",800,350,0,0.7);
createCollectable("planets",650,250,5,0.7);
createCollectable("planet",1355,550,5,0.7);
//createCollectable()


    
    // TODO 4 - Create Cannons
createCannon("left",650,280);
createCannon("right",500,900)
createCannon("top",875,1000)
createCannon("top", 1410,1200)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
