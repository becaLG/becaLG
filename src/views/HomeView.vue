<template>
  <div class="home">
    {{banner}}
  </div>
</template>

<script>
import {ref,onMounted} from 'vue';
import {getHomeAllData,getBanner} from '../components/network/home';
export default {
  name: 'HomeView',
 setup(){
    const banner = ref([]);
    onMounted(()=>{
      getHomeAllData().then(res=>{
        
        banner.value = res.slides;

       
      }).catch(err=>{
        console.log(111);
      })
    })

    return{
      banner
    }
 },
  components: {
  }
}
</script>

<style>
.demo1{
  color: var(--color-high-text);
}




</style>
