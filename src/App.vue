<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
