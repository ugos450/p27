class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=300;
		this.y=350;
		this.w=100;
		this.h=40;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}