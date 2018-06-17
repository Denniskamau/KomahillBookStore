<template>
<div>
  <div id="content">
    <div class="container">
      <div class="col-md-9" id="basket">
        <div class="box">
          <form method="post" action="checkout1.html">
            <h1>Shopping cart</h1>
            <p class="text-muted">You currently have 3 item(s) in your cart.</p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="2">Product</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Discount</th>
                    <th colspan="2">Total</th>
                  </tr>
                </thead>
                <template v-for="cartItem in cartItems">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img :src="'/static/img/' + cartItem.picture">
                      </a>
                    </td>
                    <td>
                      <a href="#">{{cartItem.productName}}</a>
                    </td>
                    <td>
                      <input type="number" value="2" class="form-control">
                    </td>
                    <td>{{cartItem.price}}</td>
                    <td>$0.00</td>
                    <td>$246.00</td>
                    <td>
                      <a href="#">
                        <i class="fa fa-trash-o"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                </template>
                <tfoot>
                  <tr>
                    <th colspan="5">Total</th>
                    <th colspan="2">$446.00</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.table-responsive -->
            <div class="box-footer">
              <div class="pull-left">
                <router-link to="/" class="btn btn-default">
                  <i class="fa fa-chevron-left"></i> Continue shopping</router-link>
              </div>
              <div class="pull-right">
                <button class="btn btn-default">
                  <i class="fa fa-refresh"></i> Update basket</button>
                <router-link tag="button" to='/checkout' class="btn btn-primary">Proceed to checkout
                  <i class="fa fa-chevron-right"></i>
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- /.col-md-9 -->
      <div class="col-md-3">
        <div class="box" id="order-summary">
          <div class="box-header">
            <h3>Order summary</h3>
          </div>
          <p class="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>

          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>Order subtotal</td>
                  <th>$446.00</th>
                </tr>
                <tr>
                  <td>Shipping and handling</td>
                  <th>$10.00</th>
                </tr>
                <tr>
                  <td>Tax</td>
                  <th>$0.00</th>
                </tr>
                <tr class="total">
                  <td>Total</td>
                  <th>$456.00</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- /.col-md-3 -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /#content -->
</div>
</template>

<script>
export default {
  name: "Basket",
  computed: {
    cartItems() {
      console.log("fetching cart items");
      return this.$store.state.cart;
    }
  }
};
</script>

<style>
</style>
