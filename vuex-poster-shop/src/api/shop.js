export default {
  buyProducts(cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
        ? cb()
        : errorCb()
    }, 100)
  },
}
