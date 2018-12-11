<template>
  <div id="app">
    <Header></Header>
    <main>
      <side-panel></side-panel>
      <ebs-app src="/contacts"></ebs-app>
    </main>
  </div>
</template>

<script>
import EbsApp from "./micro-frontends/EbsApp";
import {connect} from './micro-frontends/EventBus';
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

import './css/fonts.css';
import './css/form.css';
import './css/icons-codes.css';
import './css/layout.css';
import './css/styles.css';
import './css/tables.css';

let unsubscribe;

export default {
  name: 'app',
  components: {
    EbsApp,
    Header,
    SidePanel,
  },
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

main {
  flex: 1;

  display: flex;
}

</style>
