let playerX, playerY;
let centerX, centerY;
let playerR;
let playerSpeed;
let gamemode = 0;
let playerSprite;
let idle = []
idle.lenght = 2

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();

    playerSprite = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/player.png");
    idle[1] = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/Astronaut_2_stehen_1.png");
    idle[2] = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/Astronaut_2_stehen_2.png");

    centerX = width / 2;
    centerY = height / 2;

    playerX = centerX;
    playerY = centerY;

    playerR = 50;

    playerSpeed = 5;
}

function draw(){
    if(gamemode == 0){
        background(233, 233, 233);
        text("Enter fullscreen mode!", centerX-50, centerY - 20);
        text("Press enter to play!", centerX-50, centerY-50);
        if(keyIsDown(13)){
            gamemode = 1;
        }
        
    }
    else if(gamemode == 1){
        background(102, 204, 255)

        world();
        player();
    }
}

function mousePressed(){
    let fs = fullscreen();
    fullscreen(!fs);
    redraw();
}

function player(){

    //if(playerX < centerX - 250 || playerX > centerX + 250 || playerY < centerY - 150 || playerY > centerY + 350){
        //
    //}

    for(let i = 1; i < idle.length; i++){
        loadImage(idle[i])
    }

    if(keyIsDown(87)){
        playerY -= playerSpeed;
    }
    if(keyIsDown(83)){
        playerY += playerSpeed;
    }
    if(keyIsDown(68)){
        playerX += playerSpeed;
    }
    if(keyIsDown(65)){
        playerX -= playerSpeed;
    }

    if(playerX <= 0){
        playerX = 50;
    }
    else if(playerX >= width){
        playerX = width - 50;
    }
    if(playerY >= height){
        playerY = height - 50;
    }
    else if(playerY <= 0){
        playerY = 50;
    }
}

function world(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}