var Airport = function() {

this.planes = [];

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  console.log(this.planes);
}

Airport.prototype.takeoff = function(plane) {
  if(this.planes.length === 0 ) {
    throw new Error ('No planes available');
  }

  this.planes.pop(plane);
  return 'Plane has now left the airport'
  console.log(this.planes);
};


}
