<template>
  <div>
    <div id="content">
      <div class="container">
        <div class="col-md-3">
          <!-- *** MENUS AND FILTERS ***
 _________________________________________________________ -->
          <div class="panel panel-default sidebar-menu">

            <div class="panel-heading">
              <h3 class="panel-title">Categories</h3>
            </div>

            <div class="panel-body">
              <ul class="nav nav-pills nav-stacked category-menu">
                <li>
                  <router-link to="/category">Books
                    <span class="badge pull-right">42</span>
                  </router-link>
                  <ul>
                    <li>
                      <router-link to="/category/:id">Type</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/category">Stationary
                    <span class="badge pull-right">42</span>
                  </router-link>
                  <ul>
                    <li>
                      <router-link to="/category/:id">Type</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/category">Electornics
                    <span class="badge pull-right">42</span>
                  </router-link>
                  <ul>
                    <li>
                      <router-link to="/category/:id">Type</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- *** MENUS AND FILTERS END *** -->
        </div>

        <div class="col-md-9">
          <div class="box info-bar">
            <div class="row">
              <div class="col-sm-12 col-md-4 products-showing">
                Showing
                <strong>12</strong> of
                <strong>25</strong> products
              </div>

              <div class="col-sm-12 col-md-8  products-number-sort">
                <div class="row">
                  <form class="form-inline">
                    <div class="col-md-6 col-sm-6">
                      <div class="products-number">
                        <strong>Show</strong>
                        <a href="#" class="btn btn-default btn-sm btn-primary">12</a>
                        <a href="#" class="btn btn-default btn-sm">24</a>
                        <a href="#" class="btn btn-default btn-sm">All</a> products
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="products-sort-by">
                        <strong>Sort by</strong>
                        <select name="sort-by" class="form-control">
                          <option>Price</option>
                          <option>Name</option>
                          <option>Sales first</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row products">
            <product-list></product-list>
          </div>
          <!-- /.products -->

          <div class="pages">

            <ul class="pagination">
              <li>
                <a href="#">&laquo;</a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&raquo;</a>
              </li>
            </ul>
          </div>

        </div>
        <!-- /.col-md-9 -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /#content -->
  </div>
</template>

<script>
import ProductList from '../products/ProductList.vue'
export default {
  name: 'CatergoryIndex',
  components: {
    'product-list': ProductList
  }
}
</script>

<style>

</style>
