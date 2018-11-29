import HTTP from '@/api/api'
export default {
  searchProducts({ commit, state }, value) {
    commit('emptyProducts')
    commit('setLoader', true)
    HTTP.get('gallery/search/?q=' + value)
      .then(response => {
        let data = response.data.data
        const products = data.map(item => {
          const product = {
            id: item.id,
            link: item.link,
            title: item.title,
            price: Math.floor(Math.random() * 10) + 1,
            inventory: Math.floor(Math.random() * 20) + 1,
          }
          return product
        })
        commit('setProducts', products)
        commit('setLoader', false)
      })
      .catch(error => console.log(error))
  },

  nextProductPage({ commit }) {
    commit('incrementProductPageNumber')
  },

  previousProductPage({ commit }) {
    commit('decrementProductPageNumber')
  },
}
