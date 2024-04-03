<script>
import { store } from '../../data/store'
import Card from './Card.vue';
  export default {
    props:{
      type: Array
    },

    components:{
      Card
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <div>

    <ul class="d-flex justify-content-center flex-wrap">

      <Card
        v-for="card in type"
        :key="card.id"
        :path="card.poster_path"
        :title="type === store.moviesList ? card.title : card.name" 
        :originalTitle="type === store.moviesList ? card.original_title : card.original_name" 
        :lang="card.original_language.toUpperCase()" 
        :vote="card.vote_average"
        :bio="card.overview" 
      />

    </ul>
    
  </div>
  
</template>



<style lang="scss" scoped>

</style>