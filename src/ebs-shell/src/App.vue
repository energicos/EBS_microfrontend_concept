<template>
  <div id="app">
    <header>
      <h1>Micro-frontend concept</h1>
      <div>
        Synchronized counter: {{counter}}
        <button v-on:click="increment">Increment</button>
      </div>
    </header>
    <content>
      <ebs-app src="/contacts"></ebs-app>
    </content>
  </div>
</template>

<script>
import EbsApp from "./micro-frontends/EbsApp";
import {connect} from './micro-frontends/EventBus';

let unsubscribe;

export default {
  name: 'app',
  components: {EbsApp},
  data: () => {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      // this.counter++;

      window.postMessage({
        type: 'app.increment'
      });
    }
  },
  mounted() {
    unsubscribe = connect(window);

    window.addEventListener('message', (e) => {
      if (typeof e.data.type !== 'undefined' && e.data.type === 'app.increment') {
        this.counter++;
      }
    });
  },
  beforeDestroy() {
    unsubscribe();
  }
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
  flex: 0 150px;
}

content {
  flex: 1;
}

</style>
