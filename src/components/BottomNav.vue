<template>
  <ul class="bottom-nav">
    <li class="nav-item" :class="{'active': navIndex == 0}" @click="changeNav('home')">
      <span class="iconfont icon-zhuye"></span>
      <p class="nav-name">首页</p>
    </li>
    <li class="nav-item" :class="{'active': navIndex == 1}" @click="changeNav('found')">
      <span class="iconfont icon-faxian"></span>
      <p class="nav-name">发现</p>
    </li>
    <li class="nav-item" :class="{'active': navIndex == 2}" @click="changeNav('mine')">
      <span class="iconfont icon-zhuye1"></span>
      <p class="nav-name">我的</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BottomNav',
  props: {
    navIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
   
    }
  },
  methods:{
    changeNav(path){
      this.$router.push(path);
    }
 
  }
}
</script>
<style scoped>
  .bottom-nav{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 59px;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
  }
  .bottom-nav .nav-item{
    padding-top: 7px;
    flex: 1;
    text-align: center;
  }
  .bottom-nav .nav-item.active{
    color: #55cbc4;
  }
  .bottom-nav .nav-item .iconfont{
    font-size: 22px;
  }
  .bottom-nav .nav-item .nav-name{
    margin-top: 2px;
  }
</style>