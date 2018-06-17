<template>
  <div>
    <template v-for="product in products">
      <product-item :product="product"></product-item>
    </template>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'ProductList',
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    products () {
      return this.$store.getters.allProducts
    }
  },
  components: {
    'product-item': ProductItem
  }
}
</script>

<style>

</style>
