<template>
  <div class="col-sm-3 col-xs-6">
    <div class="product">
      <div class="flip-container">
        <div class="flipper">
          <div class="front">
            <a href="detail.html">
              <img :src=" '/static/img/' + product.picture" alt="" class="img-responsive">
            </a>
          </div>
          <div class="back">
            <a href="detail.html">
              <img :src=" '/static/img/' + product.picture" alt="" class="img-responsive">
            </a>
          </div>
        </div>
      </div>
      <a href="detail.html" class="invisible">
        <img :src=" '/static/img/' + product.picture" alt="" class="img-responsive">
      </a>
      <div class="text">
        <h3>
          <a href="detail.html">{{product.productName}}</a>
        </h3>
        <p class="small text-center text-info">
          <strong>$</strong> {{product.price}}</p>
        <p class="buttons">
            <product-button :product="product" ></product-button>
        </p>
      </div>
      <!-- /.text -->
      <div class="ribbon sale" v-if="product.id % 2 === 0 ">
        <div class="theribbon">SALE</div>
        <div class="ribbon-background"></div>
      </div>
      <!-- /.ribbon -->
      <div class="ribbon new" v-else-if="product.id % 3 === 0">
        <div class="theribbon">NEW</div>
        <div class="ribbon-background"></div>
      </div>
      <!-- /.ribbon -->
      <div class="ribbon gift" v-else-if="product.id % 1 === 0">
        <div class="theribbon">GIFT</div>
        <div class="ribbon-background"></div>
      </div>
      <!-- /.ribbon -->
    </div>
    <!-- /.product -->
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'ProductItem',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}
</script>

<style>

</style>
