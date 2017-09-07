<template>
    <div class="search-bar">
      <input class="keywords-input" type="text" placeholder="搜索专家和话题" v-model="searchKey" @focus="focusSearchBar($event)" ref="searchInput">
      <span class="iconfont icon-iconfont"></span>
      <span v-if="showCancel" class="cancel-btn" @click="closeSearchPage">取消</span>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    showCancel:{
      type: Boolean,
      default: true
    },
    onFocus: {
      type: Function,
      default: undefined,
      require: false
    },
    autoFocus:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchKey:'',
    }
  },
  methods:{
    focusSearchBar($event){
      if(this.onFocus){
        this.onFocus($event);
      }
    },
    closeSearchPage(){
       this.$router.go(-1);
    }
  },
  mounted(){
    if(this.autoFocus){
      this.$refs.searchInput.focus();
    }
  }
}
</script>

<style scoped>
   .search-bar{
    height: 62px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0 15px;
    background-color:#55cbc4;
    position: relative;
  }

  .search-bar input{
    box-sizing:border-box;
    flex: 1;
    height:36px;
    padding-left:40px;
    padding-right: 20px;
    border:none;
    border-radius: 5px;
    background-color:#fff;
    color:#333;
    font-size:16px;
    line-height:36px;
  }
  .search-bar .iconfont{
    font-size:20px;
    color:#a9a9a9;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:25px;
  }
  .search-bar .cancel-btn{
    padding-left: 15px;
    font-size: 20px;
    color: #fff;
    white-space:nowrap;
  }
</style>
