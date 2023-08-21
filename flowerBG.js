//background flowers for pixels business tool's webpage.
//Coding: Liming (Nolan) Chen
//Artists: Sunny Satpathy
//UI: Penye (Jeffrey) Yang

let setupHeight; 
var canvas;
let flowerImage; 
let flowerSys; 


function preload(){
    flowerImage = loadImage("./images/flower.png"); // load the image of flower
    setupHeight = document.documentElement.scrollHeight; // set the height of canvas to the height of document.
}

function setup(){
    canvas = createCanvas(windowWidth, setupHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    flowerSys = new flowerSystem(20); //initialize the flowerSystem with 20 flowers.
}
function draw(){
    background(255);
    flowerSys.run();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


//the system that store, run, manage and remove flowers. 
class flowerSystem{
    constructor(n){
        this.flowers = [];
        for(let i = 0; i < n; i++){
            this.flowers.push(new flower(random(width),random(height)));
        }
    }

    //run the system, if a flower reaches its maximun age, delete it and add a new one.
    run(){ 
        for(let i = 0; i < this.flowers.length; i++){
            this.flowers[i].update();
            this.flowers[i].show();
            if(this.flowers[i].isDead){
                this.flowers.splice(i,1);
                this.flowers.push(new flower(random(width),random(height)));
            }
        }
    }
    
    //add a flower at (x, y). 
    add(x, y){
        this.flowers.push(new flower(x, y));
    }   
}

//flower object that moves and can add flowers to its parent system. 
class flower{
    constructor(x,y){
        this.position= createVector(x, y);
        this.size = random(30, 50);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.age = 0;
        this.lifeSpan = random(1000,2000);
        this.isDead = false;
    }
    show(){
        
        image(flowerImage, this.position.x, this.position.y, this.size, this.size);
        
        this.age++;

        //if hasn't added flower for this iteration, and mouse is pressed on the flower.
        let added = false;
        if(mouseX > this.position.x && mouseX < this.position.x + this.size && mouseY > this.position.y && mouseY < this.position.y + this.size && mouseIsPressed && !added){
            
            //if leq to 25 flowers in the system, add one to it.
            //if there are more than 25 flowers, add one and delete the first one. 
            if (flowerSys.flowers.length <= 25){
                flowerSys.add(mouseX, mouseY);
                added = true;
            }else{
                flowerSys.add(mouseX, mouseY);
                flowerSys.flowers.splice(0,1);
                added = true;
            }
        }
    }

    // add velocity to position to move. Bounce when reaches the boundary.
    update(){
        this.position.add(this.velocity);
        if(this.position.x > windowWidth || this.position.x < 0){
            this.velocity.x *= -1;
        }
        if(this.position.y > windowHeight || this.position.y < 0){
            this.velocity.y *= -1;
        }
        if(this.age > this.lifeSpan){
            this.isDead = true;
        }
    }

}