PImage zero;
PImage one;
PImage two;
PImage three;
PImage four;
PImage five;
PImage six;
PImage seven;
PImage eight;
PImage nine;
PImage ten;
PImage origin;
int[] A;
void setup(){
  
  zero=loadImage("0.png");
  one=loadImage("1.png");
  two=loadImage("2.png");
  three=loadImage("3.png");
  four=loadImage("4.png");
  five=loadImage("5.png");
  six=loadImage("6.png");
  seven=loadImage("7.png");
  origin=loadImage("LimingChen.jpg");
  origin.loadPixels();
  
  for (int y = 0; y < origin.height; y=y+10) {
    for (int x = 0; x < origin.width; x=x+10) {
      int loc = x + y*origin.width;
      float r = red(origin.pixels[loc]);
      float g = green(origin.pixels[loc]);
      float b = blue(origin.pixels[loc]);
      origin.pixels[loc] =  color(r,g,b);          
    }
  }
  
  
  
  
  A=new int[origin.pixels.length];
  for (int i=0;i<origin.pixels.length;i++){
    if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<96){
      A[i]=7;
    }else if(red(origin.pixels[i])==255&&green(origin.pixels[i])==255&&blue(origin.pixels[i])==255){
      A[i]=-1;
    }else if(red(origin.pixels[i])==0&&green(origin.pixels[i])==0&&blue(origin.pixels[i])==0){
      A[i]=-1;
    }
    else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<192){
      A[i]=6;
    }else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<288){
      A[i]=5;
    }else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<384){
      A[i]=4;
    }else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<480){
      A[i]=3;
    }else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<576){
      A[i]=2;
    }else if((red(origin.pixels[i])+green(origin.pixels[i])+blue(origin.pixels[i]))<672){
      A[i]=1;
    }else{
      A[i]=0;
    }   
  }
  size(2000,2000);
  background(255,255,255);
  //test
  /*for (int a = 0; a < height; a++) {
    System.out.println(A[a]);
  }*/
  //prog(3,3);
  fru(50,50,50,50);
  //fru(6,6,3,3);
  save("pictree.jpg");
}

void draw(){
  
  
}
void fru(int a,int b,int c,int d){//a,x interval 3, b y interval, c x size 15, d y size.
  imageMode(CENTER);
  for(int x=0;x<origin.width;x=x+a){
      for(int y=1;y<origin.height;y=y+b){
        switch(A[x+y*origin.width]){
          case 0:
            image(zero,x,y,c,d);
            break;
          
          case 1:
            image(one,x,y,c,d);
            break;
          
          case 2:
            image(two,x,y,c,d);
            break;
          
          case 3:
            image(three,x,y,c,d);
            break;
          
          case 4:
            image(four,x,y,c,d);
            break;
          
          case 5:
            image(five,x,y,c,d);
            break;
          
          case 6:
            image(six,x,y,c,d);
            break;
          
          case 7:
            image(seven,x,y,c,d);
            break;
          
        }
        
        //if(A[x+y*origin.width]==0){
        //  image(zero,x,y,c,d);
        //}else if(A[x+y*origin.width]==-1){
        //  continue;
        //}else if(A[x+y*origin.width]==1){
        //  image(one,x,y,c,d);
        //}else if(A[x+y*origin.width]==2){
        //  image(two,x,y,c,d);
        //}
      }
    }


}



void prog(int a, int b){
  //int R=7;
  for(int x=0;x<origin.width;x=x+a){
      for(int y=1;y<origin.height;y=y+b){
        int R=int(random(0,8));
        /*R--;
        if(R==0){
          R=7;
        }*/
        int L=int(random(10,18));
        if(A[x+y*origin.width]==-1){
          continue;
        }
          else if (A[x+y*origin.width]>6){
           strokeWeight(2.5);
           stroke(0,0,0);
           
           if(R==0){
             line(2*x,2*y,2*x,2*y+L);
             System.out.println("jiji");
           }else if(R==1){
             line(2*x,2*y,2*x+L,2*y);
           }else if(R==2){
             line(2*x,2*y,2*x+L,2*y+L);
           }else if(R==3){
             line(2*x,2*y,2*x-L,2*y);
           }else if(R==4){
             line(2*x,2*y,2*x,2*y-L);
           }else if(R==5){
             line(2*x,2*y,2*x-L,2*y-L);
           }else if(R==6){
             line(2*x,2*y,2*x+L,2*y-L);
           }else if(R==7){
             line(2*x,2*y,2*x-L,2*y+L);
           }
           
        }else if(A[x+y*origin.width]>3){
          strokeWeight(1.7);
          stroke(10,10,10);
          if(R==0){
             line(2*x,2*y,2*x,2*y+L);
             System.out.println("jiji");
           }else if(R==1){
             line(2*x,2*y,2*x+L,2*y);
           }else if(R==2){
             line(2*x,2*y,2*x+L,2*y+L);
           }else if(R==3){
             line(2*x,2*y,2*x-L,2*y-L);
           }else if(R==4){
             line(2*x,2*y,2*x,2*y-L);
           }else if(R==5){
             line(2*x,2*y,2*x-L,2*y-L);
           }
        }else {
         strokeWeight(1.2);
         stroke(15,15,15);
         if(R==5){
             line(2*x,2*y,2*x-L,2*y-L);
           }else if(R==6){
             line(2*x,2*y,2*x+L,2*y-L);
           }else if(R==7){
             line(2*x,2*y,2*x-L,2*y+L);
           }
        
        }
      }
  }

}
