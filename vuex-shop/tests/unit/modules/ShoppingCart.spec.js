import ShoppingCartModule from '@/store/modules/ShoppingCart'

describe('ShoppingCart mutations test', () => {
  it('pushProductToCart in ShoppingCart mutations', () => {
    let pushProductToCart = ShoppingCartModule.mutations.pushProductToCart
    // mock state
    const state = { cart: [] }
    const product = { id: 45 }

    pushProductToCart(state, product)
    expect(state.cart.length).toBe(1)
    expect(state.cart[0].id).toBe(45)
    expect(state.cart[0].quantity).toBe(1)
  })

  it('incrementItemQuantity in ShoppingCart mutations', () => {
    let incrementItemQuantity =
      ShoppingCartModule.mutations.incrementItemQuantity
    // mock state
    const state = {}
    const cart = {
      id: 23,
      quantity: 27,
    }

    incrementItemQuantity(state, cart)
    expect(cart.quantity).toBe(28)
    incrementItemQuantity(state, cart)
    incrementItemQuantity(state, cart)
    expect(cart.quantity).toBe(30)
  })
})

describe('ShoppingCart getters test', () => {
  let state
  let rootState
  beforeEach(() => {
    rootState = {
      ProductList: {
        products: [
          { id: 1, title: 'Apple', inventory: 10, price: 10 },
          { id: 2, title: 'Orange', inventory: 0, price: 20 },
          { id: 3, title: 'Carrot', inventory: 10, price: 16 },
        ],
      },
    }
    state = {
      cart: [{ id: 1, quantity: 23 }, { id: 3, quantity: 45 }],
    }
  })

  it('cartProducts in ShoppingCart getters', () => {
    let cartProducts = ShoppingCartModule.getters.cartProducts

    const list = cartProducts(state, null, rootState)
    expect(list[0].name).toMatch('Apple')
    expect(list[0].price).toBe(10)
    expect(list[0].quantity).toBe(23)

    expect(list[1].name).toMatch('Carrot')
    expect(list[1].price).toBe(16)
    expect(list[1].quantity).toBe(45)
  })

  it('getCartTotal in ShoppingCart getters', () => {
    let getCartTotal = ShoppingCartModule.getters.getCartTotal
    let cartProducts = ShoppingCartModule.getters.cartProducts
    const list = cartProducts(state, null, rootState)
    const getters = {
      cartProducts: list,
    }

    let total = getCartTotal(null, getters)
    let calcTotal = 10 * 23 + 16 * 45
    expect(total).toBe(calcTotal)
  })
})
