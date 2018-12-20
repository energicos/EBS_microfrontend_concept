<template>
  <div id="app">
    <Header></Header>
    <main>
      <side-panel></side-panel>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
    <footer>
      <div class="container">
        <credit>
          &copy; 2018 <span class="most-important">Energicos.</span> All rights reserved
        </credit>
      </div>
    </footer>
  </div>
</template>

<script>
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
    height: calc(100vh + 50px);
  }

  main {
    flex: 1;

    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  navigation {
    flex: 0 50px;
  }

  ebs-app {
    flex: 1;
  }

</style>
