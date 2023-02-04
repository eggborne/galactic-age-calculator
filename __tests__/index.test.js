import AgeCalculator from "../src/js/AgeCalculator";
let ageCalculator = new AgeCalculator();

describe(`AgeCalculator.prototype.convertEarthYears`, () => {

  test(`should return 7.68 when given argument (32, 'mercury') `, () => {
    expect(ageCalculator.convertEarthYears(32, 'mercury')).toEqual(133.33);
  });

  test(`should return 19.84 when given argument (32, 'venus') `, () => {
    expect(ageCalculator.convertEarthYears(32, 'venus')).toEqual(51.61);
  });

  test(`should return 60.16 when given argument (32, 'mars') `, () => {
    expect(ageCalculator.convertEarthYears(32, 'mars')).toEqual(17.02);
  });

  test(`should return 379.52 when given argument (32, 'jupiter') `, () => {
    expect(ageCalculator.convertEarthYears(32, 'jupiter')).toEqual(2.7);
  });

});

describe(`AgeCalculator.prototype.getYearsAwayFromEarthAge`, () => {

  let testPastOutput;

  beforeEach(() => {
    testPastOutput = ageCalculator.getYearsAwayFromEarthAge(32, 22);
  });

  test(`should return an object whose keys are planet names and values are numbers`, () => {
    let isObject = typeof testPastOutput === 'object';
    let keysArePlanets = [...Object.keys(testPastOutput)].every(key => {
      return [...Object.keys(ageCalculator.planetAgeRatios)].includes(key);
    });
    let valuesAreNumbers = [...Object.values(testPastOutput)].every(val => !isNaN(val));
    expect(isObject).toEqual(true);
    expect(keysArePlanets).toEqual(true);
    expect(valuesAreNumbers).toEqual(true);
  });

  test(`should return the correct number of Earth years that have passed since the given targetEarthAge`, () => {
    expect(testPastOutput['earth']).toEqual(10);
  });

  test(`should return the correct number of Mercury years that have passed since the given targetEarthAge`, () => {
    expect(testPastOutput['mercury']).toEqual(41.67);
  });
  
  test(`should return the correct number of Venus years that have passed since the given targetEarthAge`, () => {
    expect(testPastOutput['venus']).toEqual(16.13);
  });
  
  test(`should return the correct number of Mars years that have passed since the given targetEarthAge`, () => {
    expect(testPastOutput['mars']).toEqual(5.32);
  });
  
  test(`should return the correct number of Jupiter years that have passed since the given targetEarthAge`, () => {
    expect(testPastOutput['jupiter']).toEqual(0.84);
  });
  
});