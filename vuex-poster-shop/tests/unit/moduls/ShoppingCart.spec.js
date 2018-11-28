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

  it('incrementCartItemQuantity in ShoppingCart mutations', () => {
    let incrementCartItemQuantity =
      ShoppingCartModule.mutations.incrementCartItemQuantity
    // mock state
    const state = {}
    const cart = {
      id: 23,
      quantity: 27,
    }

    incrementCartItemQuantity(state, cart)
    expect(cart.quantity).toBe(28)
    incrementCartItemQuantity(state, cart)
    incrementCartItemQuantity(state, cart)
    expect(cart.quantity).toBe(30)
  })

  it('decrementCartItemQuantity in ShoppingCart mutations', () => {
    let decrementCartItemQuantity =
      ShoppingCartModule.mutations.decrementCartItemQuantity
    // mock state
    const state = {}
    const cart = {
      id: 23,
      quantity: 27,
    }

    decrementCartItemQuantity(state, cart)
    expect(cart.quantity).toBe(26)
    decrementCartItemQuantity(state, cart)
    decrementCartItemQuantity(state, cart)
    expect(cart.quantity).toBe(24)
  })

  it('removeItemFromCart in ShoppingCart mutations', () => {
    let removeItemFromCart = ShoppingCartModule.mutations.removeItemFromCart
    // mock state
    const state = {
      cart: [
        {
          id: 23,
          quantity: 27,
        },
        {
          id: 23,
          quantity: 27,
        },
      ],
    }

    expect(state.cart.length).toBe(2)
    removeItemFromCart(state, 0)
    expect(state.cart.length).toBe(1)
    removeItemFromCart(state, 0)
    expect(state.cart.length).toBe(0)
  })
})

describe('ShoppingCart getters test', () => {
  let state
  beforeEach(() => {
    state = {
      cart: [
        { id: 1, quantity: 23, price: 10 },
        { id: 3, quantity: 45, price: 11 },
      ],
    }
  })

  it('cartItems in ShoppingCart getters', () => {
    let cartItems = ShoppingCartModule.getters.cartItems

    const list = cartItems(state)
    expect(list[0].id).toBe(1)
    expect(list[0].quantity).toBe(23)

    expect(list[1].id).toBe(3)
    expect(list[1].quantity).toBe(45)
  })

  it('cartTotal in ShoppingCart getters', () => {
    let cartTotal = ShoppingCartModule.getters.cartTotal
    let cartItems = ShoppingCartModule.getters.cartItems
    const list = cartItems(state)

    let total = cartTotal(state)
    let calcTotal = 10 * 23 + 11 * 45
    expect(total).toBe(calcTotal)
  })
})
