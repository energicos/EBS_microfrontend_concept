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
    /**
     * Url to load the app from.
     */
    src: String
  },
  mounted() {
    // connect the iframe to the event bus to send and receive messages
    unsubscribe = connect(this.$refs.iframe.contentWindow);

    // resize the iframe according to its content
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
