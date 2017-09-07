<template>
  <div>
    <header-nav :title="'首页'"></header-nav>
    <search-bar :on-focus="focusSearchBar" :show-cancel="false"></search-bar>
    <tab-bar :tab-bar-arr='tabBarArr'></tab-bar>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :bottom="60" :top="165">
       <p class="btn btn-large btn-red" @click="showAlert">Alert测试</p>
       <p class="btn btn-large btn-red" @click="showConfirm">Confirm测试</p>
       <p class="btn btn-large btn-red" @click="showToast">吐司测试</p>
       <p class="btn btn-large btn-red" @click="showLoading">Loadingt测试</p>
       <h2 v-for="item in arr">Essential Links</h2>
       <router-link to="/header">Go to Header</router-link>
       <router-link to="/footer">Go to Foter</router-link>
    </v-scroll>
    <bottom-nav :nav-index="0"></bottom-nav>
  
    
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
import SearchBar  from '../components/SearchBar.vue'
import TabBar  from '../components/TabBar.vue'
import Scroll  from '../components/Scroll.vue'
import BottomNav from '../components/BottomNav.vue'
import T from '../tool/tool';

export default {
  name: 'Home',
  components:{
    'v-scroll': Scroll,
    'search-bar':SearchBar,
    'tab-bar':TabBar,
    'bottom-nav': BottomNav,
    'header-nav': HeaderNav,

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[1,1,1,1,1,1,1,1,1,1,1,1],
      tabBarArr:['法务','财务','工商','税收','海关']
    }
  },
  methods:{
    showAlert(){
      T.Alert({
        text:'',
        confirm(){
          console.log('alert确定')
        }
      })
    },
    showConfirm(){
      T.Confirm({
        text:'',
        confirm:function(){
           console.log('Confirm确定')
        },
        cancel:function(){
           console.log('Confirm取消')
        }
      });
    },
    showToast(){
      T.showToast({text:'账号密码错误'});
    },
    showLoading(){
      T.showLoading();
      setTimeout(()=>{
        T.hideLoading();
      },2000)
    },
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
    },
    focusSearchBar(e){
      e.preventDefault();
      this.$router.push('search')
    }
  
  },
  mounted(){

  }
}
</script>
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
.btn{
  margin-bottom: 10px;
}
</style>