<template>
  <section class="container">
    <div>
      <h1>Embedded app</h1>
      <logo/>
      <p>
        Synchronized counter: {{counter}}
        <button v-on:click="increment">Increment</button>
      </p>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      window.postMessage({
        type: 'app.increment'
      });
    }
  },
  mounted() {
    window.addEventListener('message', (e) => {
      if (typeof e.data.type !== 'undefined' && e.data.type === 'app.increment') {
        this.counter++;
      }
    });
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1, p {
  margin: 30px;
}
</style>
