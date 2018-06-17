import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Contact from '@/components/pages/Contact'
import FAQ from '@/components/pages/FAQ'
import Register from '@/components/pages/Register'
import Details from '@/components/pages/Details'
import Category from '@/components/pages/Category'

// checkout page
import Checkout from '@/components/checkout/Checkout'
import Basket from '@/components/checkout/Basket'
import Address from '@/components/checkout/Address'
import Delivery from '@/components/checkout/Delivery'
import Order from '@/components/checkout/Order'
import Review from '@/components/checkout/Review'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/details/',
    name: 'Details',
    component: Details
  }, {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/checkout',
    component: Checkout,

    children: [{
      path: '',
      name: 'Address',
      component: Address
    }, {
      path: 'delivery',
      name: 'Delivery',
      component: Delivery
    }, {
      path: 'order',
      name: 'Order',
      component: Order
    }, {
      path: 'review',
      name: 'Review',
      component: Review
    }]
  }]
})
