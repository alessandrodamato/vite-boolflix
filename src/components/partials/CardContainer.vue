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

  <div class="mb-5">

    <ul>

      <Card
        v-for="card in type"
        :key="card.id"
        :title="type === store.moviesList ? card.title : card.name" 
        :originalTitle="type === store.moviesList ? card.original_title : card.original_name" 
        :lang="card.original_language.toUpperCase()" 
        :vote="card.vote_average" 
      />

    </ul>
    
  </div>
  
</template>



<style lang="scss" scoped>

</style>