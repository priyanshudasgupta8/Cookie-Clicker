var cookieImg;
var score;
var billy;

var gameState = "play";

function preload() {
    cookieImg = loadImage('cookie.png');
    endMusic = loadSound('endState.mp3');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    score = 0;
}

function draw() {

    if (gameState == "play"){
        background(50);

        textSize(25);
        text(`Score: ${score}`, 50, 25);
        textAlign(CENTER);
        text(`Click on cookie for gaining points`, windowWidth - 195, windowHeight - (windowHeight - 25));
    
        imageMode(CENTER);
        image(cookieImg, windowWidth/2, windowHeight/2, 250, 250);

    }

    if (score >= 100) {
        gameState = "end"

    }

    if (gameState == "end") {
        background("turquoise");

        textSize(25);
        textAlign(CENTER);
        text("You won Hooray!", windowWidth/2, windowHeight/2);
    }
}

function mouseClicked() {
    if (
        mouseX < windowWidth/2 + 125 &&
        mouseX > windowWidth/2 - 125 &&
        mouseY < windowHeight/2 + 125 &&
        mouseY > windowHeight/2 - 125
    ) {
        score++;
    }

    if (
        mouseX > windowWidth - 195*2 &&
        mouseX < windowWidth &&
        mouseY > 0 &&
        mouseY < windowHeight - (windowHeight - 25)
    ) {
        textAlign(CENTER);
        textSize(25);
        text(`Press space to gain 5 points`, windowWidth/2, windowHeight - windowHeight*3/4)
    }
}

function keyPressed() {
    if (keyCode == 32) {
        score += 5
    }
}