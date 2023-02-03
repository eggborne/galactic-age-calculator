export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
      'mercury': 0.24,
    }
  }

  getAgeForPlanet(options) {
    return (options.earthAge * this.planetAgeRatios[options.ageToGet]);
  }
}