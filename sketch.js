const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground, block;
var stand, stand1;
var block1,block2, block3, block4, block5, block6;
var block7,block8,block9,block10,block11,block12

var brick1, brick2,brick3,brick4,brick5,brick6,brick7;
var brick8,brick9,brick10,brick11,brick12,brick13;

var stand2;

var srp;

function setup() {
createCanvas(1200,640)
engine = Engine.create()
world = engine.world




ground = new Ground(width/2, height-10, width, 35)

block = new Block(width/2+90, height/2+30, 50,30)
block2 = new Block(width/2+90, height/2+30, 50,30)
block3 = new Block(width/2+100, height/2+30, 50,30)
block4 = new Block(width/2+100, height/2+30, 50,30)
block5 = new Block(width/2+130, height/2+30, 50,30)
block6 = new Block(width/2+130, height/2+30, 50,30)
block7 = new Block(width/2+160, height/2+20, 50,30)
block8 = new Block(width/2+160, height/2+20, 50,30)
block9 = new Block(width/2+210, height/2+20, 50,30)
block10 = new Block(width/2+210, height/2+20, 50,30)
block11 = new Block(width/2+230, height/2+20, 50,30)
block12 = new Block(width/2+230, height/2+20, 50,30)


brick = new Block(width/2-170, height/2-30, 50,30)
brick2 = new Block(width/2-210, height/2-40, 50,30)
brick3 = new Block(width/2-200, height/2-40, 50,30)
brick4 = new Block(width/2-250, height/2-40, 50,30)
brick5 = new Block(width/2-150, height/2-40, 50,30)
brick6 = new Block(width/2-130, height/2-40, 50,30)
brick7 = new Block(width/2-160, height/2-40, 50,30)
brick8 = new Block(width/2-160, height/2-40, 50,30)
brick9 = new Block(width/2-210, height/2-40, 50,30)
brick10 = new Block(width/2-210, height/2-40, 50,30)
brick11 = new Block(width/2-230, height/2-40, 50,30)
brick12 = new Block(width/2-230, height/2-40, 50,30)


stand = new Ground(width/2+150, height/2+80, 300, 20)
stand2 = new Ground(width/2-170, height/2-20, 300, 20)


}

//draw

function draw() {
background("grey")
Engine.update(engine)

fill("brown")
ground.display()
fill("green")
stand.display()
fill("skyblue")
block.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
fill("green")
stand2.display()

fill("orange")
brick.display()
brick2.display()
brick3.display()
brick4.display()
brick5.display()
brick6.display()
brick7.display()
brick8.display()
brick9.display()
brick10.display()
brick11.display()
brick12.display()



drawSprites()
}