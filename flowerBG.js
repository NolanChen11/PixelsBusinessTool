var canvas;
let flowerImage;
let flowerSys;


function preload(){
    flowerImage = loadImage("./images/flower.png");
}
function setup(){
    canvas = createCanvas(windowWidth, 1700);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    flowerSys = new flowerSystem(20);
}
function draw(){
    background(255);
    flowerSys.run();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




class flowerSystem{
    constructor(n){
        this.flowers = [];
        for(let i = 0; i < n; i++){
            this.flowers.push(new flower(random(width),random(height)));
        }
    }
    run(){ 
        for(let i = 0; i < this.flowers.length; i++){
            this.flowers[i].update();
            this.flowers[i].show();
            if(this.flowers[i].isDead){
                this.flowers.splice(i,1);
                this.flowers.push(new flower(random(width),random(height)));
            }
        }
        if(this.flowers.length > 25){
            
            this.flowers.splice(0,1);
        }
    }
    add(x, y){
        this.flowers.push(new flower(x, y));
    }   
}

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

        let added = false;
        if(mouseX > this.position.x && mouseX < this.position.x + this.size && mouseY > this.position.y && mouseY < this.position.y + this.size){
            if(mouseIsPressed && !added){
                flowerSys.add(mouseX, mouseY);
                added = true;
            }
        }
        // if(mouseX > this.position.x && mouseX < this.position.x + this.size && mouseY > this.position.y && mouseY < this.position.y + this.size){
        //     for(let i = 0; i<10; i++){
        //         flowerSys.add(new flower(this.position.x, this.position.y));
        //     }
        // }
    }
    update(){
        this.position.add(this.velocity);
        if(this.position.x > width || this.position.x < 0){
            this.velocity.x *= -1;
        }
        if(this.position.y > height || this.position.y < 0){
            this.velocity.y *= -1;
        }
        if(this.age > this.lifeSpan){
            this.isDead = true;
        }
    }

}