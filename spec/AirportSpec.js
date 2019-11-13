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

  it('prevents landing when the airport is full', function() {
    for(var i = 0; i < 4; i++){
      airport.land(plane);
    }
    airport.land(plane);
    expect(airport.land).toThrowError('Airport full');
  })

})
