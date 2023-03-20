let playerX, playerY;
let centerX, centerY;
let playerR;
let playerSpeed;
let gamemode = 0;
let playerSprite;
let idle = []
idle.lenght = 2
let p = 0
let health = 75
let strength = 75
let bg
let overplaybtn = false
let overoptionbtn = false
let oversavebtn = false
let camX, camY

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();

    playerSprite = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/player.png");
    idle[1] = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/Astronaut_2_stehen_1.png");
    idle[2] = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/Astronaut_2_stehen_2.png");
    bg = loadImage("https://raw.githubusercontent.com/AdisDev/Spiel/master/unnamedgame-main/unnamedgame-main/images/Start.png")

    centerX = width / 2;
    centerY = height / 2;

    playerX = centerX;
    playerY = centerY;

    camX = playerX;
    camY = playerY;

    playerR = 50;

    playerSpeed = 5;
}

function draw(){
    if(gamemode == 0){
        background(bg);
        
        //play button
        if(!overplaybtn){
            fill(2, 136, 209, 215)
        }
        else{
            fill(13, 71, 161, 215)
        }
        rect(centerX -200, centerY, 400, 50, 10)

        //save button
        if(!oversavebtn){
            fill(128, 203, 196, 215)
        }
        else{
            fill(38, 166, 154, 215)
        }
        rect(centerX -200, centerY + 100, 400, 50, 10)

        //option button
        if(!overoptionbtn){
            fill(239, 221, 64, 215)
        }
        else{
            fill(142, 122, 35, 215)
        }
        rect(centerX -200, centerY + 200, 400, 50, 10)

        //over play button detection
        if(mouseX >= centerX - 200 && mouseX <= centerX + 200 && mouseY >= centerY && mouseY <= centerY + 50){
            overplaybtn = true
        }
        else{
            overplaybtn = false
        }

        //over save button detection
        if(mouseX >= centerX - 200 && mouseX <= centerX + 200 && mouseY >= centerY +100 && mouseY <= centerY + 150){
            oversavebtn = true
        }
        else{
            oversavebtn = false
        }

        //over option button detection
        if(mouseX >= centerX - 200 && mouseX <= centerX + 200 && mouseY >= centerY +200 && mouseY <= centerY + 250){
            overoptionbtn = true
        }
        else{
            overoptionbtn = false
        }
    }
    else if(gamemode == 1){
        background(102, 204, 255)

        world();
        player();
        uibar();
    }
}

function player(){
    // move camera
    if(keyIsDown(87)){
        camY -= playerSpeed;
    }
    if(keyIsDown(83)){
        camY += playerSpeed;
    }
    if(keyIsDown(68)){
        camX += playerSpeed;
    }
    if(keyIsDown(65)){
        camX -= playerSpeed;
    }

    //player
    //idle animation
    p++
    if(p < 10){
        image(idle[1], playerX - 22, playerY)
    }
    else if(p > 10 && p < 20){
        image(idle[2], playerX - 22, playerY- 3)
    }
    if(p >= 20){
        p = 0
    }
}

function world(){
    //world
}

function uibar(){
    //health
    fill(102, 0, 51)
    rect(width - 225, height - 100, 200, 25, 10)
    fill(153, 0, 51)
    rect(width - 225, height - 100, health*2, 25, 10)

    //strength
    fill(0, 51, 0)
    rect(width - 225, height - 150, 200, 25, 10)
    fill(51, 204, 51)
    rect(width - 225, height - 150, strength*2, 25, 10)

    //inventory
    fill(66, 66, 66)
    rect(25, height - 137, 262, 62, 10)
    for(let i = 0; i < 5; i++){
        fill(158, 158, 158)
        rect(31 + 50*i, height - 130, 48, 48, 10)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
    //play
    if(gamemode == 0 && overplaybtn){
        gamemode = 1
        overplaybtn = false
    }
}