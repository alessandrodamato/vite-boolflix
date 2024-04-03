<script>
import { store } from '../data/store'
import CardContainer from './partials/CardContainer.vue';
  export default {
    components:{
      CardContainer
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <main>

    <h2 v-if="store.moviesList.length > 0" class="text-center">Film</h2>
    <CardContainer :type="store.moviesList" />
    
    <h2 v-if="store.tvList.length > 0" class="text-center">Serie TV</h2>
    <CardContainer :type="store.tvList" />

  </main>
  
</template>



<style lang="scss" scoped>

</style>