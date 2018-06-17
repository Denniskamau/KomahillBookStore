<template>
  <div id="content">
    <div class="container">
      <div class="col-md-6">
        <div class="box">
          <h1>New account</h1>
          <p class="lead">Not our registered customer yet?</p>
          <p>With registration with us new fantastic discounts and much more opens to you! The whole process
            will not take you not more than a minute!</p>
          <hr>
          <form action="customer-orders.html" method="post">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-user-md"></i> Register</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box">
          <h1>Login</h1>
          <p class="lead">Already our customer?</p>
          <hr>
          <form action="customer-orders.html" method="post">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-sign-in"></i> Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </div>
  <!-- /#content -->
</template>

<script>
export default {
  name: 'Register'
}
</script>
