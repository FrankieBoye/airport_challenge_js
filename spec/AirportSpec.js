describe('airport', function() {

  var airport;
  var plane;
  var planes = [];
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  })

  it('allows a plane to land', function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  })

  it('allows a plane to take off', function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes).not.toContain(plane);
  })

  it('prevents landing when the airport is full', function() {
    for(var i = 0; i < 4; i++){
      airport.land(plane);
    }
    airport.land(plane);
    expect(airport.land).toThrowError('Airport full');
  })

  it('prevents takeoff when weather is stormy' , function() {
    airport.land(plane);
    if(weather.conditions < 3){
    expect(airport.takeoff).toThrowError('Too stormy to take off')};
  })

})
