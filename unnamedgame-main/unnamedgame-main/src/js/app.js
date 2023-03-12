let playerX, playerY;
let centerX, centerY;
let playerR;
let playerSpeed;
let gamemode = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();

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
        text("Press enter to play!")
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
}

function player(){
    fill(222, 13, 44)

    if(playerX < centerX - 250 || playerX > centerX + 250 || playerY < centerY - 250 || playerY > centerY + 250){
        fill(51, 204, 51);
    }

    rect(playerX, playerY, playerR, playerR, 15);

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
    fill(255, 255, 102);
    rect(centerX - 250, centerY - 150, 500, 500, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}