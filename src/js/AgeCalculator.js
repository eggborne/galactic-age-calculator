export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
      'earth': 1,
      'mercury': 0.24,
      'venus': 0.62,
      'mars': 1.88,
      'jupiter': 11.86,
    }
  }

  getAgeForPlanet(options) {
    return (options.earthAge * this.planetAgeRatios[options.ageToGet]);
  }

  getYearsSinceEarthBirthday(options) {
    let output = {};
    for (const planet in this.planetAgeRatios) {
      output[planet] = options.currentEarthAge - options.pastAgeTarget;
    }
    return output;
  }
}