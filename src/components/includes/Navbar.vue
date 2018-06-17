<template>
  <div>
    <div id="top">
      <div class="container">
        <div class="col-md-6 offer" data-animate="fadeInDown">
          <a href="#" class="btn btn-success btn-sm" data-animate-hover="shake">Offer of the day</a>
          <a href="#">Get flat 35% off on orders over $50!</a>
        </div>
        <div class="col-md-6" data-animate="fadeInDown">
          <ul class="menu">
            <li>
              <a href="#" data-toggle="modal" data-target="#login-modal">Login</a>
            </li>
            <li>
              <router-link tag="a" to="/register">Register</router-link>
            </li>
            <li>
              <router-link tag="a" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true">
        <div class="modal-dialog modal-sm">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="Login">Customer login</h4>
            </div>
            <div class="modal-body">
              <form action="customer-orders.html" method="post">
                <div class="form-group">
                  <input type="text" class="form-control" id="email-modal" placeholder="email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="password-modal" placeholder="password">
                </div>

                <p class="text-center">
                  <button class="btn btn-primary">
                    <i class="fa fa-sign-in"></i> Log in</button>
                </p>

              </form>

              <p class="text-center text-muted">Not registered yet?</p>
              <p class="text-center text-muted">
                <router-link to="/register">
                  <strong>Register now</strong>
                </router-link>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>

            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="navbar navbar-default yamm" role="navigation" id="navbar">
      <div class="container">
        <div class="navbar-header">

          <router-link to="/" tag="a" class="navbar-brand home"  data-animate-hover="bounce">
            <img :src="'/static/img/KomaHillLogoBanner.jpg'" alt="" class="hidden-xs" height="55">
            <img :src="'/static/img/kbs.png'" alt="" class="visible-xs">
            <span class="sr-only"></span>
          </router-link>
          <div class="navbar-buttons">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">
              <span class="sr-only">Toggle navigation</span>
              <i class="fa fa-align-justify"></i>
            </button>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#search">
              <span class="sr-only">Toggle search</span>
              <i class="fa fa-search"></i>
            </button>
            <router-link class="btn btn-default navbar-toggle" to="/basket">
              <i class="fa fa-shopping-cart"></i>
              <span class="hidden-xs">{{ cartNumber }} items in cart</span>
            </router-link>
          </div>
        </div>
        <!--/.navbar-header -->

        <div class="navbar-collapse collapse" id="navigation">

          <ul class="nav navbar-nav navbar-left">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="dropdown yamm-fw">
              <router-link to="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Books
                <b class="caret"></b>
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <div class="yamm-content">
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Kindegarten</h5>
                        <ul>
                          <li><router-link to="/category">text</router-link></li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Primary School</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Highschool</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>

                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Novels & Biographies</h5>
                        <ul>
                          <li>
                            <router-link to="/category">text</router-link>
                          </li>
                        </ul>
                        <h5>Research books</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- /.yamm-content -->
                </li>
              </ul>
            </li>
            <li class="dropdown yamm-fw">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Accessories
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="yamm-content">
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Stationaries</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Offices Supplies</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Electronics</h5>
                        <ul>
                          <li>
                            <router-link to="/category">Text</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- /.yamm-content -->
                </li>
              </ul>
            </li>
            <li class="dropdown yamm-fw">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Support
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="yamm-content">
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>User</h5>
                        <ul>
                          <li>
                            <a href="register.html">Register / login</a>
                          </li>
                          <li>
                            <a href="customer-orders.html">Orders history</a>
                          </li>
                          <li>
                            <a href="customer-order.html">Order history detail</a>
                          </li>
                          <li>
                            <a href="customer-wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="customer-account.html">Customer account / change password</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Order process</h5>
                        <ul>
                          <li>
                            <router-link to="/basket">Shopping cart</router-link>
                          </li>
                          <li>
                            <router-link to="/checkout">Address</router-link>
                          </li>
                          <li>
                            <router-link to="/checkout/delivery">Delivery</router-link>
                          </li>
                          <li>
                            <router-link to="/checkout/order">Order</router-link>
                          </li>
                          <li>
                            <router-link to="/checkout/review">Complete Order</router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <h5>Pages</h5>
                        <ul>
                          <li>
                            <router-link to="/faq">FAQ</router-link>
                          </li>
                          <li>
                            <router-link to="/contact">Contact</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- /.yamm-content -->
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
        <div class="navbar-buttons">
          <div class="navbar-collapse collapse right" id="basket-overview">
            <router-link to="/basket" class="btn btn-primary navbar-btn">
              <i class="fa fa-shopping-cart"></i>
              <span class="hidden-sm">{{ cartNumber }} items in cart</span>
            </router-link>
          </div>
          <!--/.nav-collapse -->
          <div class="navbar-collapse collapse right" id="search-not-mobile">
            <button type="button" class="btn navbar-btn btn-primary" data-toggle="collapse" data-target="#search">
              <span class="sr-only">Toggle search</span>
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div class="collapse clearfix" id="search">
          <form class="navbar-form" role="search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <span class="input-group-btn">
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </div>
        <!--/.nav-collapse -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /#navbar -->
    <!-- *** NAVBAR END *** -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    cartNumber () {
      return this.$store.getters.cartNumber
    }
  }
}
</script>

<style>
</style>
