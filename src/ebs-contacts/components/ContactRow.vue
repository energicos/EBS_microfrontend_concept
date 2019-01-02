<template>
  <div class="dataset-item specific_module" onclick="pagesetFunction(event, 'basic-profile-page')">
    <div class="contact-details"><!-- Start contact details -->
      <ul class="contacts">
        <li><span class="most-important contact-person">{{contact.name}}</span></li>
        <li><span class="energicos-blue"><i class="icon icon-mail2"></i></span>
          <span class="contact-email">{{contact.email}}</span>
        </li>
        <li><span class="energicos-green"><i class="icon icon-phone"></i></span>
          <span class="phone-no">+49 30 52 00522125</span>
        </li>
      </ul>
    </div><!-- End contact details -->

    <div class="completeness-degree"><!-- Start completeness percentage -->
      <img src="../assets/img/completeness.svg" height="80px" alt="completeness percentage"/>
    </div><!-- End completeness percentage -->

    <div class="mid-dataset-content">
      <div class="counts-data">
        <div class="upper-dataset-content">
          <div class="upper-dataset-content-side-1">
            <!--Start Rating -->
            <div class="rating">
              <ul>
                <li><a href="#"><i class="icon energicos-red icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
              </ul>
            </div>
            <!--End Rating -->
          </div>

          <div class="upper-dataset-content-side-2">
            <ul class="contacts">
              <li><span class="energicos-red"><i class="icon icon-calendar"></i></span>
                <span class="action">Last Action:</span> <span class="date">25.03.2017</span>
              </li>
            </ul>
          </div>

          <div class="upper-dataset-content-side-3">
            <ul class="contacts">
              <li>
                <span class="counter-2 alerts-comments"><div class="figure-2">8</div></span>
                <span class="energicos-red"><i class="icon icon-comment"></i></span>
              </li>
              <li><span class="energicos-red"><i class="icon icon-activity"></i></span>
                <span class="energicos-red normal-font">3</span> <span class="slash">/</span> <span
                  class="energicos-blue normal-font">5</span> <span class="slash">/</span> <span
                  class="energicos-darkgrey normal-font">8</span>
              </li>
            </ul>
          </div>

        </div>

        <div class="horizontal-line"></div>

        <div class="lower-dataset-content">
          <div class="rating-lower-left ">
            <div class="rating">
              <ul>
                <li><a href="#"><i class="icon energicos-green icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
              </ul>
            </div>
          </div>

          <div class="tags-left">
            <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
            <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
            <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
          </div>

          <div class="group-tags-right">
            <a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a>
            <a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a>
            <a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a>
          </div>
        </div>

      </div>
    </div>

    <div class="view-more-dataset-info">
      <div class="next-arrow">
        <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i
          class="icon symbol-pagination-dark icon-arrow-right"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'contact-row',
    props: ['contact'],
  }
</script>
