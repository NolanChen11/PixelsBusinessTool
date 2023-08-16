var canvas;
const pixelWidth = 20;
let forms = [];
let colors = ['#ffffff']; 
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    rectMode(CENTER);
	let c = 15;
	let w = width / c;
	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			forms.push(new Form(x, y, w * 0.75));
		}
	}
	noStroke();
}

function draw() {
	background(255);
	for (let i of forms) {
		i.show();
		i.move();
	}
}

function easeInOutQuad(x) {
	return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

class Form {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.d1 = 0;
		this.d2 = this.w;
		this.ratio = 0;
		this.t = -int(random(4) + 1) * 60;
		this.t1 = 120;
		this.t2 = this.t1 + 60;
		this.t3 = this.t2 + 120;
		this.ang = int(random(8)) * TAU / 8
		this.col1 = random(colors);
		this.col2 = random(colors);
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		fill(0);
        rect(0 - (this.w / 2) * (1 - this.ratio), 0 - (this.w / 2) * (1 - this.ratio), this.d1/2, this.d1/2);
		// circle(0 - (this.w / 2) * (1 - this.ratio), 0 - (this.w / 2) * (1 - this.ratio), this.d1);
		fill(0);
        rect((this.w / 2) * (this.ratio),(this.w / 2) * this.ratio, this.d1/2, this.d1/2);
		// circle(0 + (this.w / 2) * (this.ratio), 0 + (this.w / 2) * (this.ratio), this.d2);
		pop();
	}

	move() {
		this.d1 = this.ratio * this.w;
		this.d2 = (1 - this.ratio) * this.w;
		if (0 < this.t && this.t < this.t1) {
			let n = norm(this.t, 0, this.t1 - 1);
			this.ratio = easeInOutQuad(n);
		}
		if (this.t == this.t1) {
			this.ang = int(random(8)) * TAU / 8;
			this.col2 = random(colors);
		}
		if (this.t2 < this.t && this.t < this.t3) {
			let n = norm(this.t, this.t2, this.t3 - 1);
			this.ratio = 1 - easeInOutQuad(n);
		}
		if (this.t > this.t3) {
			this.t = -int(random(4) + 1) * 60;
			this.ang = int(random(8)) * TAU / 8;
			this.col1 = random(colors);
		}
		this.t++;
	}
}