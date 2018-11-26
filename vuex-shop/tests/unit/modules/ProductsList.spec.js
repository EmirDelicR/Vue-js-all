import ProductListModule from '@/store/modules/ProductsList'

describe('ProductsList mutations test', () => {
  it('setProduct in ProductsList mutations', () => {
    let setProducts = ProductListModule.mutations.setProducts
    // mock state
    const state = { products: [] }
    const products = [{ id: 1, name: 'Test' }]

    setProducts(state, products)

    expect(state.products.length).toBe(1)
    expect(state.products[0].id).toBe(1)
    expect(state.products[0].name).toMatch('Test')
  })

  it('decrementProductInventory in ProductsList mutations', () => {
    let decrementProductInventory =
      ProductListModule.mutations.decrementProductInventory
    // mock state
    const state = {}
    const product = { inventory: 10 }

    decrementProductInventory(state, product)
    expect(product.inventory).toBe(9)
    decrementProductInventory(state, product)
    decrementProductInventory(state, product)
    expect(product.inventory).toBe(7)
  })
})

describe('ProductsList getters test', () => {
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

  it('productsCount in ProductsList getters', () => {
    let productsCount = ProductListModule.getters.productsCount

    const count = productsCount(state)
    expect(count).toBe(3)
  })

  it('productIsInStock in ProductsList getters', () => {
    let productIsInStock = ProductListModule.getters.productIsInStock()

    expect(productIsInStock(state.products[0])).toBe(true)
    expect(productIsInStock(state.products[1])).toBe(false)
  })
})
