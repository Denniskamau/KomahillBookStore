import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, cartGetters } from './getters'
import { productMutations, cartMutations } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: '1',
        productName: 'Tumbo Lisiloshiba',
        quantity: 1,
        slug: 'tumbo-lisiloshiba',
        price: '359.00',
        picture: 'image1.jpg',
        rating: '4.2',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '2',
        productName: 'Behold The Dreamers',
        quantity: 1,
        slug: 'behold-the-dreamers',
        price: '599.00',
        picture: 'image2.jpg',
        rating: '3',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '3',
        productName: 'The Underground Railroad',
        quantity: 1,
        slug: 'the-underground-railroad',
        price: '329.00',
        picture: 'image3.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '4',
        productName: 'Kigogo',
        quantity: 1,
        slug: 'kigogo',
        price: '329.00',
        picture: 'image3.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '5',
        productName: 'Four Figure',
        quantity: 1,
        slug: 'four figure',
        price: '300.00',
        picture: 'image5.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '6',
        productName: 'Secondary Biology',
        quantity: 1,
        slug: 'secondary Biology',
        price: '567.00',
        picture: 'image6.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '7',
        productName: 'Secondary Chemistry',
        quantity: 1,
        slug: 'secondary Chemistry',
        price: '342.00',
        picture: 'image7.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '8',
        productName: 'Solving Problems',
        quantity: 1,
        slug: 'kigogo',
        price: '329.00',
        picture: 'image8.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }, {
        id: '9',
        productName: 'Secondary Mathematics',
        quantity: 1,
        slug: 'secondary Mathemetics',
        price: '400.00',
        picture: 'image9.jpg',
        rating: '4',
        rateCount: '200',
        categoryId: '1',
        publisherId: '1',
        subCategoryId: '1',
        authorId: '1',
        productDesc: 'lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }
    ],
    cart: [],
    details: []
  },
  // GETTERS
  getters: Object.assign({}, productGetters, cartGetters),
  mutations: Object.assign({}, productMutations, cartMutations)
})
