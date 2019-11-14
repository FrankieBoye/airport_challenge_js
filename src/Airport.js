var Airport = function() {

  var plane;
  plane = new Plane();
  weather = new Weather();

this.planes = [];
this.capacity = 5;
this.weather = weather;

Airport.prototype.land = function(plane) {
  if(this.planes === undefined || this.planes.length === this.capacity) {
    throw new Error ('Airport full');
  }

  this.planes.push(plane);
  console.log(this.planes);
}

Airport.prototype.takeoff = function(plane) {

  if(this.weather.conditions < 3) {
    throw new Error('Too stormy to take off');
  }

  if(this.planes === undefined || this.planes.length === 0) {
    throw new Error ('No planes available');
}

  this.planes.pop(plane);
  return 'Plane has now left the airport'
  console.log(this.planes);
};


}
