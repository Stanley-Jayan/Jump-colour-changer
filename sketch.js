var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1= createSprite(0,580,360,30)
    block1.shapeColor="red"

    block2= createSprite(295,580,200,30)
    block2.shapeColor="yellow"

    block3= createSprite(515,580,200,30)
    block3.shapeColor="blue"

    block4= createSprite(740,580,200,30)
    block4.shapeColor="green"

    ball= createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=8



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)

    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
    ball.shapeColor="red"
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor="yellow"
        }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
            ball.shapeColor="blue"
            }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
                ball.shapeColor="green"
                }


  drawSprites();
    //add condition to check if box touching surface and make it box
}
