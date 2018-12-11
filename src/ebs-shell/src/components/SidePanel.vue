<template>
  <aside class="side-panel"><!-- BEGIN SIDEBAR -->

    <div class="energicos-logo"><!-- Start logo -->
      <img src="../assets/img/logo.png" width="149px" alt="logo"/>
    </div><!-- End logo -->

    <!-- Start Avatar -->
    <div class="avatar-section">
      <div class="upper-avatar-section">
        <div class="image-platform">
          <img src="../assets/img/avatar.jpg" class="profile-img" alt="profile pic"/>
        </div>
      </div>
      <div class="lower-avatar-section">
        <div class="username">
          John Doe <i class="icon symbol-sidebar icon-arrow-down"></i>
        </div>
      </div>
    </div>
    <!-- End Avatar -->

    <!-- start search section -->
    <div class="search-section">
      <form  class="search-box specific_module" method="get" action="#">
        <span class="searching-icon"><i class="icon icon-search"></i></span>
        <input placeholder="Search ..." class="default-search-text" onInput="pagesetFunction(event, 'sidebar-search-results')">
      </form>
    </div>
    <!-- End search section -->

    <!-- START NAV LEVEL 1 -->
    <div class="nav-level-1">
      <div class="nav-side-menu">
        <div class="menu-list">

          <ul id="menu-content">

            <li class="active specific_module" onclick="location.href='contact-manager.html'">
              <a href="#"><i class="icon icon-side-nav icon-crm"></i>CRM <span class="arrow"></span></a>
            </li>


            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-finance"></i>Finance <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-pricing"></i>Pricing <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-telemetry"></i>Telemetry <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='tam.html'">
              <a href="#"><i class="icon icon-side-nav icon-tam"></i>TAM <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-products"></i>Products <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='contracts.html'">
              <a href="#"><i class="icon icon-side-nav icon-contracts"></i>Contracts <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#">
              <a href="#"><i class="icon icon-side-nav icon-file-manager"></i>File Manager <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-algo-manager"></i>Algo Manager <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-analysis"></i>Analysis <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-kpi"></i>KPI <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='#'">
              <a href="#"><i class="icon icon-side-nav icon-user-area"></i>User Area <span class="arrow"></span></a>
            </li>

            <li class="specific_module" onclick="location.href='settings.html'">
              <a href="#"><i class="icon icon-side-nav icon-settings"></i>Settings <span class="arrow"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- END NAV LEVEL 1 -->


    <!--Start Client Area -->
    <div class="client-area">
      <button class="btn-client-area add" onclick="location.href='#'"><i class="icon icon-side-nav-lowest icon-client-area"></i> Client Area</button>
    </div>
    <!--End Client Area -->

  </aside>
</template>

<script>
  export default {
    name: 'side-panel',
  }
</script>

<style>
  .side-panel {
    width: 270px;
  }
</style>
