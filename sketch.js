var home;
var selection
var gameState = 'Start';

let logo;
let B2;

function preload() {
  logo = loadImage('Images/logo.png');
  B2 = loadImage('Images/logo.png');
}


function setup(){
    createCanvas(windowWidth,windowHeight)
    
    home = new Home(); 
    //selection = new Selection();
     
    
}

function draw(){
    background('powderBlue');
    // if(gameState==='Start'){
    //     home.display();
    //   }
    //   if(gameState==='Go'){
    //     selection.display();
    //   }

      home.display();
     // selection.display();
    // drawSprites();
    
}

    
