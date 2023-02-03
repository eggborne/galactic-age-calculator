import AgeCalculator from "../src/js/AgeCalculator";
let ageCalculator = new AgeCalculator();

describe(`AgeCalculator.prototype.getAgeForPlanet`, () => {

  let mercuryAge = ageCalculator.getAgeForPlanet({
    earthAge: 32,
    ageToGet: 'mercury'
  });

  test(`should return 7.68 when given argument { earthAge: 32, ageToGet: 'mercury' } `, () => {
    
    expect(mercuryAge).toEqual(7.68);
  });
  
});