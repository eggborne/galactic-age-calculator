export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
      'mercury': 0.24,
      'venus': 0.62,
      'mars': 1.88,
    }
  }

  getAgeForPlanet(options) {
    return (options.earthAge * this.planetAgeRatios[options.ageToGet]);
  }
}