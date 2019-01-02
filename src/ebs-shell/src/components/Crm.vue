<template>
  <section>
    <navigation-level-2><!-- Begin Nav Level 2 -->
      <nav-level-2>
        <!-- Start key nav tabs -->
        <div class="container-body">
          <div class="key-nav-tabs">
            <router-link tag="button" class="tab-home" to="/" >
              <i class="icon icon-nexus"></i>
            </router-link>
            <router-link tag="button" class="sub_module" to="contacts" active-class="active">
              Contact Manager
            </router-link>
            <router-link tag="button" class="sub_module" to="organization" active-class="active">
              Organization Manager
            </router-link>
            <router-link tag="button" class="sub_module" to="pod" active-class="active">
              POD Manager
            </router-link>
            <router-link tag="button" class="sub_module" to="building" active-class="active">
              Building Manager
            </router-link>
          </div>
        </div>
        <!-- End key nav tabs -->
      </nav-level-2>
    </navigation-level-2><!-- End Nav Level 2 -->

    <div class="content">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
</style>
