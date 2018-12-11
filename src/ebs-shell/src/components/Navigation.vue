<template>
  <navigation-level-2><!-- Begin Nav Level 2 -->
    <nav-level-2>
      <!-- Start key nav tabs -->
      <div class="container-body">
        <div class="key-nav-tabs">
          <button class="tab-home" onclick="location.href='#'"><i class="icon icon-nexus"></i></button>
          <button class="sub_module active" onclick="location.href='contact-manager.html'">Contact Manager</button>
          <button class="sub_module" onclick="location.href='organization-manager.html'">Organization Manager</button>
          <button class="sub_module" onclick="location.href='pod-manager.html'">POD Manager</button>
          <button class="sub_module" onclick="location.href='building-manager.html'">Building Manager</button>
        </div>
      </div>
      <!-- End key nav tabs -->
    </nav-level-2>
  </navigation-level-2>
</template>

<script>
  export default {
    name: 'navigation',
  }
</script>
