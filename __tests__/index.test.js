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

describe(`AgeCalculator.prototype.getYearsSinceEarthBirthday`, () => {

  test(`should return an object whose keys are planet names and values are numbers`, () => {

    let testOutput = ageCalculator.getYearsSinceEarthBirthday({
      currentEarthAge: 32,
      pastAgeTarget: 22
    });

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

    let testOutput = ageCalculator.getYearsSinceEarthBirthday({
      currentEarthAge: 32,
      pastAgeTarget: 22
    });

    let earthYearsPassed = testOutput['earth'];
    expect(earthYearsPassed).toEqual(10);
    
  });

});