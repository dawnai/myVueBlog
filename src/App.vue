<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myheader from '../src/components/myHeader'
import myFooter from '../src/components/myFooter'
export default {
  name: 'App',
  components:{
    myheader,
    myFooter
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
