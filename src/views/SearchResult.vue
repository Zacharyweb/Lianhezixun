<template>
  <div>
    <search-bar :auto-focus="true"></search-bar>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :bottom="0" :top="62">
       <h2 v-for="item in arr">Essential Links</h2>
    </v-scroll>
  </div>
</template>

<script>
import SearchBar  from '../components/SearchBar.vue'
import Scroll  from '../components/Scroll.vue'
export default {
  name: 'Home',
  components:{
    'search-bar':SearchBar,
    'v-scroll': Scroll
  },
  data () {
    return {
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
  
  },
  mounted(){
     
  }
}
</script>
<style scoped>

h2{
  height: 60px;
}
</style>