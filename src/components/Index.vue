<template>
  <div>
      <div id="content">
        <div class="container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                <img :src="'static/img/child.jpg'" alt="Los Angeles" class="img-responsive img-rounded">
                </div>

                <div class="item">
                <img :src="'static/img/child.jpg'" alt="Chicago" class="img-responsive img-rounded">
                </div>

                <div class="item">
                <img :src="'static/img/child.jpg'" alt="New York" class="img-responsive img-rounded">
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        <!-- *** ADVANTAGES HOMEPAGE ***
 _________________________________________________________ -->
        <div id="advantages">
          <div class="container">
            <div class="same-height-row">
              <div class="col-sm-4">
                <div class="box same-height clickable">
                  <div class="icon">
                    <i class="fa fa-heart"></i>
                  </div>
                  <h3>
                    <a href="#">We love our customers</a>
                  </h3>
                  <p>We are known to provide best possible service ever</p>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="box same-height clickable">
                  <div class="icon">
                    <i class="fa fa-tags"></i>
                  </div>

                  <h3>
                    <a href="#">Best prices</a>
                  </h3>
                  <p>You can check that the height of the boxes adjust when longer text like this one is used in one of them.</p>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="box same-height clickable">
                  <div class="icon">
                    <i class="fa fa-thumbs-up"></i>
                  </div>

                  <h3>
                    <a href="#">100% satisfaction guaranteed</a>
                  </h3>
                  <p>Free returns on everything for 3 months.</p>
                </div>
              </div>
            </div>
            <!-- /.row -->

          </div>
          <!-- /.container -->

        </div>
        <!-- /#advantages -->
        <!-- *** ADVANTAGES END *** -->
            <div id="hot">
                <div class="box">
                    <div class="container">
                        <div class="col-md-12">
                            <h2>Top Seller</h2>
                        </div>
                    </div>
                </div>
                <category-index></category-index>
            </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
import CategoryIndex from '@/components/category/CategoryIndex'
export default {
  name: 'Index',
  components: {
    'category-index': CategoryIndex
  }
}
</script>

<style>
#advantages{
  margin: 20px;
}
</style>
