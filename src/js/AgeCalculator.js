export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
      'earth': 1,
      'mercury': 0.24,
      'venus': 0.62,
      'mars': 1.88,
      'jupiter': 11.86,
    };
  }

  convertEarthYears(earthYears, planet) {
    return parseFloat((earthYears / this.planetAgeRatios[planet]).toFixed(2));
  }

  getYearsAwayFromEarthAge(currentEarthAge, targetEarthAge) {
    let output = {};
    let earthYearsSince = Math.abs(currentEarthAge - targetEarthAge);
    for (const planet in this.planetAgeRatios) {
      output[planet] = this.convertEarthYears(earthYearsSince, planet);
    }
    return output;
  }
}