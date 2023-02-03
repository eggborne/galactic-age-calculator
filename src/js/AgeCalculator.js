export default class AgeCalculator {
  constructor() {
    this.planetAgeRatios = {
      'mercury': 0.24,
      'venus': 0.62,
    }
  }

  getAgeForPlanet(options) {
    return (options.earthAge * this.planetAgeRatios[options.ageToGet]);
  }
}