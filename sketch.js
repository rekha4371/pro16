var box1,box2,box3,box4;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();
}

function draw() 
{
  background(220);
  fill("red")
  box1.show();
  box1.set_speed(2);

  fill("blue")
  box2.show();
  box2.set_speed(-0.5);

  fill("yellow")
  box3.show();
  box3.set_speed(1);

  fill("purple")
  box4.show();
  box4.set_speed(2.5);
}

