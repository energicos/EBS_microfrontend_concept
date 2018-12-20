<template>
  <iframe v-bind:src="src" ref="iframe"></iframe>
</template>

<script>
import {connect} from "./EventBus";
import iFrameResize from 'iframe-resizer/js/iframeResizer'


let unsubscribe;

export default {
  name: 'ebs-app',
  props: {
    src: String
  },
  mounted() {
    unsubscribe = connect(this.$refs.iframe.contentWindow);

    iFrameResize({
      log: true,
    }, this.$refs.iframe)

  },
  beforeDestroy() {
    unsubscribe();
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
