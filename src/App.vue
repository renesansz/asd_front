<template>
  <div id="app">
    <h1>The Agile Manifesto</h1>
    <Manifesto />
  </div>
</template>

<script>
import Manifesto from './components/Manifesto'

export default {
  components: {
    Manifesto
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1024px;
  margin: auto;
}
</style>
