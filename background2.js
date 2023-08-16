let forms = [];
let squiggliness = 1/500;
let noiseValue;
let xoff = 0;
let yoff = 0;
let colors = ['#fffffc', '#ff7f11', '#ff1b1c', '#f991cc', '#ec4e20', '#028090']; 
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    // rectMode(CENTER);
	let c = 10;
	let w = windowWidth / c;
	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let x = i * w;
			let y = j * w;
            console.log(w);
			forms.push(new pixel(x, y, w, 0, noise(i/10,j/10)));
		}
	}
    noiseValue = noise(xoff, yoff) * TWO_PI;
	noStroke();
}

function draw() {
	// background(0, 20);
	for (let i of forms) {
        //noiseValue = noise(xoff, yoff)* TWO_PI * 4;
		i.run();
		i.update(noiseValue);
        xoff=xoff+0.2;
        yoff=yoff+0.2;
	}
}

class pixel {
    constructor(x, y, w, c, noiseValue){
        this.position = createVector(x,y);
        this.color = random(colors);
        this.w = w;
        this.penPosition = createVector(random(x,x+w),random(y,y+w));
        this.penVelocity = p5.Vector.fromAngle(noiseValue);
        this.age = 0;
        this.penWidth = random(noiseValue*4);
        this.randomCo = random(0,0.1);
    }   
    run(){
        noFill();
        stroke(0);
        //strokeWeight(10);
        // rectMode(CENTER);
        rect(this.position.x, this.position.y, this.w, this.w);
        fill(this.color);
        noStroke();
        ellipse(this.penPosition.x, this.penPosition.y, this.penWidth);
        this.age++;

    }
    update(noiseValue){
        //this.penVelocity = p5.Vector.fromAngle(noiseValue);
        //this.penVelocity = createVector(this.penVelocity.x + random(-this.randomCo, this.randomCo), this.penVelocity.y + random(-this.randomCo, this.randomCo));
        this.penPosition.add(this.penVelocity);
        if(this.penPosition.x <= this.position.x || this.penPosition.x >= (this.position.x + this.w)){
            this.generateNewPen(noiseValue);
            //this.penVelocity = createVector(-this.penVelocity.x, this.penVelocity.y);
        }
        if(this.penPosition.y <= this.position.y || this.penPosition.y >= (this.position.y + this.w)){
            this.generateNewPen(noiseValue);
            //this.penVelocity = createVector(this.penVelocity.y, -this.penVelocity.y);
        }
        // if(this.age% 200 == 0){
        //     this.generateNewPen(noiseValue);
        // }

    }
    generateNewPen(noiseValue){
        this.penPosition = createVector(random(this.position.x,this.position.x+this.w),random(this.position.y,this.position.y+this.w));
        this.penVelocity = p5.Vector.fromAngle(noiseValue);
    }

}