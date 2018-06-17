<template>
  <div>
    <div v-for="detail in details">
    <h1>{{detail.productName}}</h1>
    <img :src="'/static/img/' + detail.picture">
       <a href="#">{{detail.productName}}</a>
          <a href="#">{{detail.productDesc}}</a>
    </div>

  </div>
</template>

<script>
import ProductButton from "./ProductButton";
import { mapGetters } from 'vuex'
import { GET_DETAILS } from '../../store/mutation-types';
export default {
  name: "ProductDetails",
  props: ["product"],
  components: {
    "product-button": ProductButton
  },
  computed: {
    details(){
      console.log("fetched getter data")
      return this.$store.state.details
    }

  }
};
</script>

<style>
</style>
