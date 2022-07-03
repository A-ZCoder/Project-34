class Block {

constructor(x,y,w,h)
{
    let options = {
        isStatic: false,
        friction : 0.1,
        restitution : 0.02
    }

    this.body = Bodies.rectangle(x,y,w,h, options)
    this.w = w
    this.h = h
    World.add(world, this.body)
}

    display() {
        let pos = this.body.position
        let angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        stroke(20)
        rect(0, 0, this.w, this.h)
        pop()
    }


}