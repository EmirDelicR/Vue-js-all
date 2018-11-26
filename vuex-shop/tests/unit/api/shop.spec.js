import shop from '@/api/shop'

describe('shop api mock', () => {
  it('check data from getProduct function', () => {
    let products = []
    shop.getProducts(data => {
      console.log(data)
      products = data
    })
    console.log(products)
    // expect(wrapper.text()).toMatch(msg)
  })
})
