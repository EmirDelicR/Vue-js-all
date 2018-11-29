import { deepCopy } from '@/utilities/copy'

describe('Copy utilities test', () => {
  let objectCart
  let cart
  beforeEach(() => {
    cart = [
      { id: 1, quantity: 23, price: 10 },
      { id: 3, quantity: 45, price: 11, data: { test: 'test' } },
    ]
    objectCart = {
      cart,
    }
  })
  it('deepCopy function must copy full array', () => {
    let copyCart = deepCopy(cart)
    copyCart[0].id = 6
    expect(copyCart[0].id).not.toBe(cart[0].id)
    expect(copyCart[1].id).toBe(cart[1].id)
    expect(cart[1].id).toBe(3)
    cart[1].id = 4
    expect(copyCart[1].id).toBe(3)
    expect(copyCart[1].data.test).toMatch('test')
  })
  it('deepCopy function must copy full object', () => {
    let copyObjectCart = deepCopy(objectCart)
    expect(copyObjectCart).toMatchObject(objectCart)
    copyObjectCart.cart[0].id = 6
    expect(copyObjectCart.cart[0].id).not.toBe(objectCart.cart[0].id)
    expect(copyObjectCart.cart[1].id).toBe(objectCart.cart[1].id)
    expect(objectCart.cart[1].id).toBe(3)
    objectCart.cart[1].id = 4
    expect(copyObjectCart.cart[1].id).toBe(3)
  })
})
