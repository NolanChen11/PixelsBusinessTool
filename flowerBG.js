var canvas;
let flowerImage;
let flowerSys;
function preload(){
    flowerImage = loadImage("./images/flower.png");
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    // flowerImage = loadImage('images/flower.png');
    flowerSys = new flowerSystem(20);
}
function draw(){
    background(255);
    flowerSys.run();
}
class flowerSystem{
    constructor(n){
        this.flowers = [];
        for(let i = 0; i < n; i++){
            this.flowers.push(new flower());
        }
    }
    run(){ 
        for(let i = 0; i < this.flowers.length; i++){
            this.flowers[i].update();
            this.flowers[i].show();
        }
    }   
}

class flower{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.position= createVector(this.x, this.y);
        this.size = random(30, 50);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
    }
    show(){
        image(flowerImage, this.position.x, this.position.y, this.size, this.size);
    }
    update(){
        this.position.add(this.velocity);
        if(this.position.x > width || this.position.x < 0){
            this.velocity.x *= -1;
        }
        if(this.position.y > height || this.position.y < 0){
            this.velocity.y *= -1;
        }
    }

}