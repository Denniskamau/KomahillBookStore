import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DETAILS
} from './mutation-types'

export const productMutations = {
  [GET_DETAILS]: (state, payload) => {
    // const selectedItem = []
    // selectedItem.push(payload)
    // console.log('selected item 😃 ' + JSON.stringify(selectedItem))
    // const newPayload = selectedItem.splice(-1)[0]
    // console.log('newPayload:' +JSON.stringify(newPayload))
    state.details.push(payload)
    console.log('mutation object received 😃😊' + JSON.stringify(state.details))
  }
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => {
    state.cart.push(payload)
    console.log('reached cart mutation')
  },
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(product => product.id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  }
}
