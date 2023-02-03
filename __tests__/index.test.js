import AgeCalculator from "../src/js/AgeCalculator";
let ageCalculator = new AgeCalculator();

describe(`AgeCalculator.prototype.getAgeForPlanet`, () => {

  test(`should return 7.68 when given argument { earthAge: 32, ageToGet: 'mercury' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'mercury'
    })).toEqual(7.68);
  });

  test(`should return 19.84 when given argument { earthAge: 32, ageToGet: 'venus' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'venus'
    })).toEqual(19.84);
  });
  
});