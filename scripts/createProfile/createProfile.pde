ArrayList<PImage> charList;
ArrayList<PImage> pixList;
PImage origin;
int[] colorList;
PGraphics p;
int pw;
int ph;
void setup(){
  size(800,800);
  background(255,255,255);
  charList = new ArrayList<PImage>();
  pixList = new ArrayList<PImage>();
  for(int i = 0; i < 8; i++){
    charList.add(loadImage(i+".png"));
    pixList.add(loadImage("p"+i+".png"));
  }
  println(charList);
  origin=loadImage("flower.png");
  origin.resize(800,800);
  origin.loadPixels();
  p = createGraphics(800,800);
  p.beginDraw();
  pw = 20;
  ph = 20;
  p.imageMode(CORNER);
  for (int y = 0; y < origin.height; y=y+pw) {
    for (int x = 0; x < origin.width; x=x+ph) {
      int loc = x + y * origin.width;
      float r = red(origin.pixels[loc]);
      float g = green(origin.pixels[loc]);
      float b = blue(origin.pixels[loc]);     
      int value = (int)map(r+b+g,0,672,0,7);
      //p.text(value,x,y);
      p.image(pixList.get(7-value),x,y,pw,ph);
      //p.fill(color(r,g,b));
      //p.noStroke();
      //p.rect(x,y,pw,ph);
      //if(x%2==0 && y%2==0){
      //  p.image(charList.get(7-value),x,y,pw*2,ph*2);
      //}
      
      
    }
  }
  pw=40;
  ph=40;
  for (int y = 0; y < origin.height; y=y+pw) {
    for (int x = 0; x < origin.width; x=x+ph) {
      int loc = x + y * origin.width;
      float r = red(origin.pixels[loc]);
      float g = green(origin.pixels[loc]);
      float b = blue(origin.pixels[loc]);     
      int value = (int)map(r+b+g,0,672,0,7);
 
        p.image(charList.get(7-value),x,y,pw,ph);
      
      
    }
  }
  p.endDraw();
  image(p,0,0);
  p.save("result1.png");
}

void draw(){
  
  
}
