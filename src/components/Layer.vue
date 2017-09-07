<template>
   <div class="layer-wrap">
    <div class="loader-mask" v-if="loadingShow">
        <div class="loader-inner line-scale">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>Loading</p>
        </div>
    </div>
    <div class="toast-mask" v-if="toastShow">
       <p class="toast">{{toastText || '未设置吐司内容'}}</p>
    </div>
   </div>
</template>
<script>
import PubSub from 'pubsub-js';
export default {
  name: 'Layer',
  data () {
    return {
       loadingShow: false,
       toastShow: false,
       toastText: '',
       btnText: [],
       callBacks: []
    }
  },
  methods:{
      Loading(msg,data){
        this.loadingShow = true;
      },
      CloseLoading(msg,data){
        this.loadingShow = false;
      },
      Toast(msg,data){
         if(this.toastShow) return;
         this.toastText = data.text;
         this.toastShow = true;
         setTimeout(()=>{
            this.toastShow = false;
         },data.duration || 2000)
      }
  },
  mounted(){
      PubSub.subscribe('LOADING',this.Loading);
      PubSub.subscribe('CLOSE_LOADING',this.CloseLoading);
      PubSub.subscribe('TOAST',this.Toast);
  }
}
</script>

<style scoped>
  .loader-mask{
    position: fixed;
    width:100%;
    left:0;
    top:50px;
    bottom: 60px;
    z-index:999;
    background-color: rgba(255,255,255,0.4);
  }
  .loader-inner{
    position: absolute;
    top:40%;
    left:50%;
    transform: translateX(-50%);
  }
  @-webkit-keyframes line-scale {
     0% {
       -webkit-transform: scale(1,1);
               transform: scale(1,1); 
     }
     50% {
       -webkit-transform: scale(0.6,0.6);
               transform: scale(0.6,0.6);
     }
     100% {
       -webkit-transform: scale(1,1);
               transform: scale(1,1); 
     } 
  }
  @keyframes line-scale {
    0% {
      -webkit-transform: scale(1,1);
              transform: scale(1,1); 
    }
    50% {
      -webkit-transform: scale(0.6,0.6);
              transform: scale(0.6,0.6); 
    }
    100% {
      -webkit-transform: scale(1,1);
              transform: scale(1,1); 
    }
  }
  .line-scale > span:nth-child(1) {
    -webkit-animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }
  .line-scale > span:nth-child(2) {
    -webkit-animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }
  .line-scale > span:nth-child(3) {
    -webkit-animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }
  .line-scale > span:nth-child(4) {
    -webkit-animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }
  .line-scale > span:nth-child(5) {
    -webkit-animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }
  .line-scale > span {
    background-color: #55cbc4;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block; 
  }

  @-webkit-keyframes text-scale {
     0% {
       -webkit-transform: scale(1,1);
               transform: scale(1,1); 
     }
     50% {
       -webkit-transform: scale(0.8,0.8);
               transform: scale(0.8,0.8);
     }
     100% {
       -webkit-transform: scale(1,1);
               transform: scale(1,1); 
     } 
  }
  @keyframes text-scale {
    0% {
      -webkit-transform: scale(1,1);
              transform: scale(1,1); 
    }
    50% {
      -webkit-transform: scale(0.8,0.8);
              transform: scale(0.8,0.8); 
    }
    100% {
      -webkit-transform: scale(1,1);
              transform: scale(1,1); 
    }
  }  
  .line-scale > p{
    margin-top: 10px;
    text-align: center;
    -webkit-animation: text-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: text-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08); 
  }

  .toast-mask{
    position: fixed;
    width:100%;
    height: 100%;
    top:0;
    left:0;
    z-index:9999;
  }
  .toast-mask .toast{
    position: absolute;
    top:40%;
    left:50%;
    padding: 10px 15px;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.6);
    border-radius: 4px;
    color: #fff;
    line-height: 1.5;
    max-width: 200px;
    text-align: center;
    -webkit-animation: showIn 0.1s;
    animation: showIn 0.2s;

  }
  @keyframes showIn{
    from{
        transform: scale(0.8) translateX(-100%);
        opacity: 0.3;
    }
    to{
        transform: scale(1) translateX(-50%);
        opacity: 1;
    }
  }
</style>
