export const productGetters = {
  // All products
  allProducts: (state, getters) => {
    return state.products
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.find(products => products.id === id)
    }
  },
  detailsData: (state, getters) => {
    console.log('getter data' + JSON.stringify(state.details.splice(-1)[0]))
    return state.details.splice(-1)[0]
  }
}

export const cartGetters = {
  cartItems: (state, getters) => {
    return state.cart
  },
  cartNumber: (state, getters) => {
    return state.cart.length
  }
}
