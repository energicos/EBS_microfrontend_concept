<template>
  <header><!-- BEGIN HEADER -->
    <section class="top-bar">

      <nav><!-- Begin Nav -->
        <ul>
          <li><a href="#"><i class="icon symbol-nav-section icon-menu"></i></a></li>
        </ul>
      </nav><!-- End Nav -->



      <top-bar-search><!-- Begin Top Bar Search -->
        <div class="top-bar-search">
          <filter-key>
            <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
          </filter-key>

          <search-box-input>
            <form class="search-box specific_module" method="get" action="#">
              <span class="searching-icon"><i class="icon icon-search"></i></span>
              <input placeholder="Search for datasets ..." class="main-search-text" id="myInput" >
            </form>

          </search-box-input>

          <sorting-key>
            <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
          </sorting-key>

          <reset-key>
            <a onclick="document.getElementById('myInput').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
          </reset-key>
        </div>
      </top-bar-search><!-- End Top Bar Search -->



      <key-elements><!--Begin Key Elements-->
        <ul>
          <li><a href="#"><i class="icon symbol-nav-section icon-settings2"></i></a></li>
          <li>
            <span class="counter alerts"><div class="figure">3</div></span>
            <a href="#"><i class="icon symbol-nav-section icon-alert"></i></a>
          </li>
          <li>
            <span class="counter messages"><div class="figure">5</div></span>
            <a href="#"><i class="icon symbol-nav-section icon-mail"></i></a>
          </li>
        </ul>
      </key-elements><!-- End Key Elements -->



      <datetime><!-- Begin Datetime Count -->
        <actual-date><!-- Start Actual Date -->
          <i class="icon symbol-datetime icon-calendar"></i><span class="important" id="day-today"></span>&nbsp;<span id="date-today"></span>
        </actual-date><!-- End Actual Date -->

        <time-splitter>&#47;</time-splitter>

        <actual-time><!-- Start Actual time -->
          <i class="icon symbol-datetime icon-clock"></i><span id="time-now"></span>
        </actual-time><!-- End Actual time -->

      </datetime><!-- End Datetime Count -->

    </section>
  </header><!-- END HEADER -->
</template>

<script>
  export default {
    name: 'Header',
  }
</script>
