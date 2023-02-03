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
  
  test(`should return 60.16 when given argument { earthAge: 32, ageToGet: 'mars' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'mars'
    })).toEqual(60.16);
  });
  
  test(`should return 379.52 when given argument { earthAge: 32, ageToGet: 'jupiter' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'jupiter'
    })).toEqual(379.52);
  });
  
});