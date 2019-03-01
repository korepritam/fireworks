

function Particle(x,y,col,firework)
{

  this.pos=createVector(x,y);
  this.firework=firework;
  this.lifespan=255;
  this.col=col;
  
  if(firework){
  this.vel=createVector(0,random(-16,-10));
  }
  else
  {
    this.vel=p5.Vector.random3D(100,50);
    this.vel.mult(random(5,20));
  
  }
  this.acc=createVector(0,0);



this.applyForce = function(force)
{
  this.acc.add(force);
}


this.update = function()
{
  if(!this.firework)
  {
    this.vel.mult(0.85);
    this.lifespan-=4;
  }
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
}


this.done = function()
{
  if(this.lifespan<0)
    {return true;}
  else
  {
    return false;
  }
}

this.show = function()
{
  colorMode(HSB);
  if(!this.firework)
  {stroke(col,255,255,this.lifespan);
  strokeWeight(2);
}
else
{
stroke(col,255,255);
strokeWeight(6);
}
  point(this.pos.x,this.pos.y)
   
}

}