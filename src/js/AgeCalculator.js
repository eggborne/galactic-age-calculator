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

  getAgeForPlanet(options) {
    return parseFloat((options.earthAge / this.planetAgeRatios[options.ageToGet]).toFixed(2));
  }

  getYearsSinceEarthBirthday(options) {
    let output = {};
    let earthYearsSince = options.currentEarthAge - options.pastAgeTarget;
    for (const planet in this.planetAgeRatios) {
      output[planet] = this.getAgeForPlanet({
        earthAge: earthYearsSince,
        ageToGet: planet,
      });
    }
    return output;
  }
}