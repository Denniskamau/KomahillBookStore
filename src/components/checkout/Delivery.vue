<template>
  <div id="content">
    <div class="container">
      <div class="col-md-9" id="checkout">
        <div class="box">
          <form method="post" action="/checkout/order">
            <h1>Checkout - Delivery method</h1>
            <ul class="nav nav-pills nav-justified">
              <li>
                <router-link to="/checkout">
                  <i class="fa fa-map-marker"></i>
                  <br>Address</router-link>
              </li>
              <li class="active">
                <a href="#">
                  <i class="fa fa-truck"></i>
                  <br>Delivery Method</a>
              </li>
              <li class="disabled">
                <a href="#">
                  <i class="fa fa-money"></i>
                  <br>Payment Method</a>
              </li>
              <li class="disabled">
                <a href="#">
                  <i class="fa fa-eye"></i>
                  <br>Order Review</a>
              </li>
            </ul>
            <div class="content">
              <div class="row">
                <div class="col-sm-6">
                  <div class="box shipping-method">
                    <h4>USPS Next Day</h4>
                    <p>Get it right on next day - fastest option possible.</p>
                    <div class="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery1">
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="box shipping-method">
                    <h4>USPS Next Day</h4>
                    <p>Get it right on next day - fastest option possible.</p>
                    <div class="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery2">
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="box shipping-method">
                    <h4>USPS Next Day</h4>
                    <p>Get it right on next day - fastest option possible.</p>
                    <div class="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery3">
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.row -->
            </div>
            <!-- /.content -->
            <div class="box-footer">
              <div class="pull-left">
                <router-link to="/checkout" class="btn btn-default">
                  <i class="fa fa-chevron-left"></i>Back to Addresses</router-link>
              </div>
              <div class="pull-right">
                <router-link to='/checkout/order' class="btn btn-primary">Continue to Payment Method
                  <i class="fa fa-chevron-right"></i>
                </router-link>
              </div>
            </div>
          </form>
        </div>
        <!-- /.box -->
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
</template>

<script>
export default {
  name: 'Delivery'
}
</script>

<style>

</style>
