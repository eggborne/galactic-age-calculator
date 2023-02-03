export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
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
      output[planet] = 0;
    }
    return output;
  }
}