let playerX, playerY;
let centerX, centerY;
let playerR;
let playerSpeed;

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
    background(102, 204, 255)

    player();
}

function mousePressed(){
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function player(){
    fill(222, 13, 44)
    rect(playerX, playerY, playerR, playerR, 15)

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
}
