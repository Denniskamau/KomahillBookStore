<template>
  <div>
    <p class="buttons">
      <a href="#/details" class="btn btn-default" @click="getDetails(product)">
        <i class="fa fa-eye"></i>View detail
      </a>
      <a href="#/basket" class="btn btn-primary" @click="addToCart()"
      v-if="isAdding">
        <i class="fa fa-shopping-cart"></i>Add to cart
      </a>
      <span v-show="!isAdding" class="btn btn-primary">Added</span>

    </p>
  </div>
</template>

<script>
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DETAILS
} from "../../store/mutation-types";
export default {
  props: ["product"],
  data() {
    return {
      cart: this.$store.state.cart
    };
  },
  computed: {
    isAdding() {
      return this.cart.indexOf(this.product) < 0;
    }
  },
  methods: {
    addToCart() {
      console.log("Add to cart mutation");
      this.$store.commit(ADD_TO_CART, this.product);
    },
    removeFromCart() {
      this.$store.commit(REMOVE_FROM_CART);
    },
    getDetails(product) {
      console.log("Sending details to mutation");
      this.$store.commit(GET_DETAILS, (product = this.product));
    }
  }
};
</script>

<style>
</style>
