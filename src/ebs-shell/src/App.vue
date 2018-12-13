<template>
  <div id="app">
    <Header></Header>
    <main>
      <side-panel></side-panel>
      <div class="content">
        <navigation></navigation>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import {connect} from './micro-frontends/EventBus';
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Navigation from "./components/Navigation";

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
    Header,
    SidePanel,
    Navigation,
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

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  navigation {
    flex: 0 50px;
  }

  ebs-app {
    flex: 1;
  }

</style>
