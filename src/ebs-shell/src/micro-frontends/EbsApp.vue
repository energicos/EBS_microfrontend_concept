<template>
  <iframe v-bind:src="src"></iframe>
</template>

<script>
export default {
  name: 'ebs-app',
  props: {
    src: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    width: 100%;
    height: 98%;
    border: 0;
  }
</style>
