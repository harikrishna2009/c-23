class Box{
    constructor(x,y,width,height){
        var option2 ={
            restitution : 0.5
          }
          this.body = Bodies.rectangle(x,y,width,height,option2)
          this.width = width
          this.height = height
          World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(255)
        rect(0,0,this.width,this.height)
        pop()
    }
}