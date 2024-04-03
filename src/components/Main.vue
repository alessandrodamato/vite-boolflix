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

  <main class="text-center">

    <h3 v-if="store.moviesList.length > 0">Film</h3>
    <CardContainer :type="store.moviesList" />
    
    <h3 v-if="store.moviesList.length > 0">Serie TV</h3>
    <CardContainer :type="store.tvList" />

  </main>
  
</template>



<style lang="scss" scoped>

</style>