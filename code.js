var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["664ed7ed-7a6a-45fa-8e6d-412c69a0dec0","c5fb5b92-0c7a-46d9-a1bb-8740725b084f","b195e428-d23e-4610-8c9d-42aae97775d3"],"propsByKey":{"664ed7ed-7a6a-45fa-8e6d-412c69a0dec0":{"name":"sofia_1","sourceUrl":null,"frameSize":{"x":225,"y":335},"frameCount":1,"looping":true,"frameDelay":12,"version":"EUSWaCgl7hSr0WckUar97v8q.78dyo4g","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":335},"rootRelativePath":"assets/664ed7ed-7a6a-45fa-8e6d-412c69a0dec0.png"},"c5fb5b92-0c7a-46d9-a1bb-8740725b084f":{"name":"background_1","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"b195e428-d23e-4610-8c9d-42aae97775d3":{"name":"trophy_1","sourceUrl":null,"frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"jDwnldRGtlIFk3hAfUJY5gQPYoHhqaFM","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/b195e428-d23e-4610-8c9d-42aae97775d3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200);
background.setAnimation("background_1");
var sofia = createSprite(30,143,15,6);
sofia.setAnimation("sofia_1");
sofia.scale=0.15;
var trophy = createSprite(370, 310);
trophy.setAnimation("trophy_1");

sofia.velocityX=0;
sofia.velocityY=0;

var cardboard = createSprite(80,11,15,200);
var cardboard2 = createSprite(80,395,15,350);
var cardboard3 = createSprite(145,210,80,15);
var cardboard4 = createSprite(142,40,15,70);
var cardboard5 = createSprite(177,235,15,60);
var cardboard6 = createSprite(110,308,60,15);
var cardboard7 = createSprite(240,310,70,15);
var cardboard8 = createSprite(271,390,15,55);
var cardboard9 = createSprite(176,352,15,40);
var cardboard10= createSprite(281,110,15,58);
var cardboard11= createSprite(255,100,40,15);
var cardboard12= createSprite(260,215,15,58);
var cardboard13= createSprite(385,190,58,15);
var cardboard14= createSprite(140,130,58,15);
var cardboard15= createSprite(238,250,58,15);
var cardboard16= createSprite(385,56,58,15);
var cardboard17= createSprite(30,254,60,15);
var cardboard18= createSprite(170,43,60,15);
var cardboard19= createSprite(354,194,15,60);
var cardboard20= createSprite(295,0,15,40);





function draw() {
  
if(keyDown("space"))
{
  sofia.velocityY=-2
}

if(keyDown("UP_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = -3;
  }
if(keyDown("DOWN_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = 3;
  }
  if (keyDown("RIGHT_ARROW")) {
    sofia.velocityX = 3;
    sofia.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")) {
    sofia.velocityX =-3;
    sofia.velocityY = 0;
  }




  
  
createEdgeSprites()
//sofia.collide(edges);
sofia.bounceOff(cardboard);
sofia.bounceOff(cardboard2);
sofia.bounceOff(cardboard3);
sofia.bounceOff(cardboard4);
sofia.bounceOff(cardboard5);
sofia.bounceOff(cardboard6);
sofia.bounceOff(cardboard7);
sofia.bounceOff(cardboard8);
sofia.bounceOff(cardboard9);
sofia.bounceOff(cardboard10);
sofia.bounceOff(cardboard11);
sofia.bounceOff(cardboard12);
sofia.bounceOff(cardboard13);
sofia.bounceOff(cardboard14);
sofia.bounceOff(cardboard15);
sofia.bounceOff(cardboard16);
sofia.collide(cardboard17);
sofia.bounceOff(cardboard18);
sofia.bounceOff(cardboard19);
sofia.bounceOff(cardboard20);
  
drawSprites(); 

stroke("red");
fill("yellow");
text("sofia", 20,185);
text("trophy", 355,355);

if (sofia.isTouching(trophy)) {
 strokeWeight(5)
stroke("red");
fill("yellow");
textSize(35);
text("YOU WIN ", 140, 200);
 sofia.setVelocity(0,0)
}



}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
