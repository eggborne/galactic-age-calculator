import AgeCalculator from "../src/js/AgeCalculator";
let ageCalculator = new AgeCalculator();

describe(`AgeCalculator.prototype.getAgeForPlanet`, () => {

  test(`should return 7.68 when given argument { earthAge: 32, ageToGet: 'mercury' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'mercury'
    })).toEqual(133.33);
  });

  test(`should return 19.84 when given argument { earthAge: 32, ageToGet: 'venus' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'venus'
    })).toEqual(51.61);
  });

  test(`should return 60.16 when given argument { earthAge: 32, ageToGet: 'mars' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'mars'
    })).toEqual(17.02);
  });

  test(`should return 379.52 when given argument { earthAge: 32, ageToGet: 'jupiter' } `, () => {
    expect(ageCalculator.getAgeForPlanet({
      earthAge: 32,
      ageToGet: 'jupiter'
    })).toEqual(2.7);
  });

});

describe(`AgeCalculator.prototype.getYearsSinceEarthBirthday`, () => {

  let testOutput;

  beforeEach(() => {
    testOutput = ageCalculator.getYearsSinceEarthBirthday({
      currentEarthAge: 32,
      pastAgeTarget: 22
    });
  });

  test(`should return an object whose keys are planet names and values are numbers`, () => {
    let isObject = typeof testOutput === 'object';
    let keysArePlanets = [...Object.keys(testOutput)].every(key => {
      return [...Object.keys(ageCalculator.planetAgeRatios)].includes(key);
    });
    let valuesAreNumbers = [...Object.values(testOutput)].every(val => !isNaN(val));
    expect(isObject).toEqual(true);
    expect(keysArePlanets).toEqual(true);
    expect(valuesAreNumbers).toEqual(true);
  });

  test(`should return the correct number of Earth years that have passed since the given pastAgeTarget`, () => {
    let earthYearsPassed = testOutput['earth'];
    expect(earthYearsPassed).toEqual(10);
  });

  test(`should return the correct number of Mercury years that have passed since the given pastAgeTarget`, () => {
    let earthYearsPassed = testOutput['mercury'];
    expect(earthYearsPassed).toEqual(41.67);
  });
  
  test(`should return the correct number of Venus years that have passed since the given pastAgeTarget`, () => {
    let earthYearsPassed = testOutput['venus'];
    expect(earthYearsPassed).toEqual(16.13);
  });
  
  test(`should return the correct number of Mars years that have passed since the given pastAgeTarget`, () => {
    let earthYearsPassed = testOutput['mars'];
    expect(earthYearsPassed).toEqual(5.32);
  });
  
  test(`should return the correct number of Jupiter years that have passed since the given pastAgeTarget`, () => {
    let earthYearsPassed = testOutput['jupiter'];
    expect(earthYearsPassed).toEqual(0.84);
  });
  
});