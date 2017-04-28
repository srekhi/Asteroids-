function MovingObject (options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.move = function(){};

MovingObject.prototype.draw = function(){
  const self = this;
  document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = self.color;
    console.log(ctx);
    ctx.arc(
      self.pos[0], self.pos[1], self.radius, 0, 2 * Math.PI, false
    );
    ctx.stroke();
});

};

MovingObject.prototype.isCollidedWith = function(movingObject){};

MovingObject.prototype.move = function () {
  this.pos += this.vel;
};

const object = new MovingObject (
    { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);



object.draw();
