function Ball(){
  this.pos = createVector(width/2, height/2);
  this.r = random(60,120)

  this.update = function(){
    //this.x = this.x + 1
    var mouse  = createVector(mouseX, mouseY);
    mouse.sub(this.pos);
    mouse.setMag(3);
    this.pos.add(mouse);
    if (this.pos.x >= right) {
      this.pos.x = right
      //console.log(this.pos.x)
    }else if(this.pos.y >= up){
      this.pos.y = up
      //console.log(this.pos.y)
    }

  }

  this.show = function() {

    fill(200);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    fill(255);
    textSize(32);
    text('hey joe', this.pos.x, this.pos.y);
  }


}
