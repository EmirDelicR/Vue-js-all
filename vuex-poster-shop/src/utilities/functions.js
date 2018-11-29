export default {
  createToken() {
    return this.randomString()
  },

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  randomString() {
    const random = Math.random()
      .toFixed(19) // fix only go to 20 places
      .substr(2) // remove `0.`
      .repeat(2)
    return parseFloat(random).toString(36)
  },
}
