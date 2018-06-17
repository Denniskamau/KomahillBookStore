<template>
  <div>
    <div id="footer" data-animate="fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>Pages</h4>
            <ul>
              <li>
                <router-link to="/faq">FAQ</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact us</router-link>
              </li>
            </ul>
          </div>
          <!-- /.col-sm-6 -->
          <div class="col-sm-6">
            <h4>Where to find us</h4>
              <p>Empower House
                <br>Thika Road
                <br>Nairobi
                <strong>Kenya</strong>
              </p>
          </div>

        </div>
        <!-- /.row -->
              <div class="col-sm-6 pull-right">
                <p class="social">
                    <a href="https://www.facebook.com/komahillbookshop/" class="facebook external" data-animate-hover="shake">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/komahillbkshop" class="twitter external" data-animate-hover="shake">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/komahillbookshop/" class="instagram external" data-animate-hover="shake">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="https://plus.google.com/" class="gplus external" data-animate-hover="shake">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </p>
                </div>
      </div>
      <!-- /.container -->
    </div>
    <!-- /#footer -->
    <div id="copyright">
      <div class="container">
        <div class="col-md-12">
          <p class="center">© 2018 Neostream Technology Group.</p>
        </div>
      </div>
    </div>
    <!-- *** COPYRIGHT END *** -->
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

</style>
