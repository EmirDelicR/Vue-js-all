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

  mapProducts(data) {
    const products = data.map(item => {
      const product = {
        id: item.id,
        link: item.link,
        title: item.title,
        price: this.randomNumber(5, 10),
        inventory: this.randomNumber(2, 20),
      }
      return product
    })
    return products
  },
}
