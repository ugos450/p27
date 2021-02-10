class chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offestY=offsetY
        var cons = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
    this.chain=Constraint.create(cons)
    World.add(world,this.chain)
 }
 display(){
     var anana=this.chain.bodyA.position;
     var banana=this.chain.bodyB.position;

     strokeWeight(2)

     var bruhX=anana.x
     var bruhY=anana.y
     var oofX=banana.x+this.offsetX
     var oofY=banana.y+this.offsetY
     line(bruhX,bruhY,oofX,oofY)
 }
}
 