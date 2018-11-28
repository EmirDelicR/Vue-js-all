import ProductModule from '@/store/modules/Products'

describe('Product mutations test', () => {
  /* it('setProduct in Product mutations', () => {
    let setProducts = ProductModule.mutations.setProducts
    // mock state
    const state = { products: [] }
    const products = [{ id: 1, name: 'Test' }]

    setProducts(state, products)

    expect(state.products.length).toBe(1)
    expect(state.products[0].id).toBe(1)
    expect(state.products[0].name).toMatch('Test')
  })
*/
  it('decrementProductInventory in Product mutations', () => {
    let decrementProductInventory =
      ProductModule.mutations.decrementProductInventory
    // mock state
    const state = {}
    const product = { inventory: 10 }

    decrementProductInventory(state, product)
    expect(product.inventory).toBe(9)
    decrementProductInventory(state, product)
    decrementProductInventory(state, product)
    expect(product.inventory).toBe(7)
  })

  it('incrementProductInventory in Product mutations', () => {
    let incrementProductInventory =
      ProductModule.mutations.incrementProductInventory
    // mock state
    const state = {}
    const product = { inventory: 1 }

    incrementProductInventory(state, product)
    expect(product.inventory).toBe(2)
    incrementProductInventory(state, product)
    incrementProductInventory(state, product)
    expect(product.inventory).toBe(4)
  })
})

describe('Product getters test', () => {
  let state
  beforeEach(() => {
    state = {
      products: [
        { id: 1, title: 'Apple', inventory: 10 },
        { id: 2, title: 'Orange', inventory: 0 },
        { id: 3, title: 'Carrot', inventory: 10 },
      ],
    }
  })

  it('productItems in Product getters', () => {
    const productItems = ProductModule.getters.productItems
    const products = productItems(state)
    expect(products.length).toBe(3)
    expect(products[1].title).toMatch('Orange')
  })
  /* it('productIsInStock in ProductsList getters', () => {
    let productIsInStock = ProductListModule.getters.productIsInStock()

    expect(productIsInStock(state.products[0])).toBe(true)
    expect(productIsInStock(state.products[1])).toBe(false)
  })
  */
})
