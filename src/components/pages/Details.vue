<template>
  <div id="content">
    <div class="container">
      <div class="col-md-9">
        <product-details></product-details>
      </div>
    </div>
    <!-- /.container -->
  </div>
  <!-- /#content -->
</template>

<script>
import ProductDetails from '../products/ProductDetails'
export default {
  name: 'Details',
  components: {
    'product-details': ProductDetails
  }
}
</script>

<style>

</style>
