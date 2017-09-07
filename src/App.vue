<template>
  <div id="app">
    <router-view></router-view>
    <tips/>
    <layer/>
  </div>
</template>
<script>
import Tips from './components/Tips.vue'
import Layer from './components/Layer.vue'
export default {
  name: 'app',
  components:{
    'tips': Tips,
    'layer': Layer
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
@import './assets/font/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
