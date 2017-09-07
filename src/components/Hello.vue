<template>
  <div class="hello">
    <header-nav :title="'联合咨询'"></header-nav>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :bottom="60" :top="50">
       <h1>{{ msg }}</h1>
       <h2 v-for="item in arr">Essential Links</h2>
       <router-link to="/header">Go to Header</router-link>
       <router-link to="/footer">Go to Foter</router-link>
    </v-scroll>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import Scroll  from './Scroll.vue'
import BottomNav from './BottomNav.vue'
export default {
  name: 'hello',
  components:{
    'v-scroll': Scroll,
    'bottom-nav': BottomNav,
    'header-nav': HeaderNav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[1,1,1,1,1,1,1,1,1,1,1,1]
    }
  },
  methods:{
    onRefresh(done){
      console.log('ggggggg');
      setTimeout(()=>{
        done();
      },1000)
    },
    onInfinite(done){
      setTimeout(()=>{
        if(this.arr.length < 40){
          this.arr = this.arr.concat([1,1,1,1,1,1]);
          done();
        }
        else{
          done('nomore');
        }
      },1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h2{
  height: 60px;
}
</style>
