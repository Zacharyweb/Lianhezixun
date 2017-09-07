<template>
  <div>
    <header-nav :title="'发现'"></header-nav>
  
    <bottom-nav :nav-index="1"></bottom-nav>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
import BottomNav from '../components/BottomNav.vue'
export default {
  name: 'Mine',
  components:{
    'bottom-nav': BottomNav,
    'header-nav': HeaderNav
  },
  data () {
    return {
   
    }
  },
  methods:{
  
  },
  mounted(){
     
  }
}
</script>
<style scoped>

</style>
