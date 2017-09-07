<template>
    <ul class="tab-bar">
      <li v-for="(item,index) in tabBarArr" :class="{'selected':currentIndex === index}" @click="changeTab(index)">
        <span>{{item}}</span>
        <span class="index-bar"></span> 
      </li>
    </ul>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabBarArr: {
      type: Array,
      default: ['标签1','标签2','标签3']
    }
  },
  data () {
    return {
     currentIndex:0
    }
  },
  methods:{
    changeTab(index){
      this.currentIndex = index;

    }
   
  },
  mounted(){
  
  }
}
</script>

<style scoped>
   .tab-bar{
      display: flex;
      align-items:center;
      height:50px;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
   }
   .tab-bar li{
      position:relative;
      flex:1;
      text-align: center;
   }
   .tab-bar li .index-bar{
      position: absolute;
      left:0;
      bottom:-14px;
      height:5px;
      width: 100%;
      display: none;
      -webkit-animation: line-scale 0.2s;
      animation: line-scale 0.2s;
   }
   .tab-bar li+li{
      border-left: 1px solid #e6e6e6;
   }
   .tab-bar li.selected{
    color: #55CBC4;
   }
   .tab-bar li.selected .index-bar{
      display: block;
      background-color:#55CBC4;
   }
   @keyframes line-scale{
      from{
          transform: scalex(0);
          opacity: 0.3;
      }
      to{
          transform: scalex(1);
          opacity: 1;
      }   
   }
   @-webkit-keyframes line-scale {
      from{
          transform: scalex(0);
          opacity: 0.3;
      }
      to{
          transform: scalex(1);
          opacity: 1;
      }   
    
  }
</style>
