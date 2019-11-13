describe('airport', function() {

  var airport;
  var plane;
  var planes = [];

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it('allows a plane to land', function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  })

  it('allows a plane to take off', function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.plane).not.toContain(plane);
  })

})
