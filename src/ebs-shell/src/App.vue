<template>
  <div id="app">
    <header>
      <h1>Micro-frontend concept</h1>
    </header>
    <content>
      <ebs-app src="/contacts"></ebs-app>
    </content>
  </div>
</template>

<script>
import EbsApp from "./micro-frontends/EbsApp";
export default {
  name: 'app',
  components: {EbsApp},
}
</script>

<style>
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

header {
  text-align: center;
  flex: 0 100px;
}

content {
  flex: 1;
}

</style>
