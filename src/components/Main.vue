<script>
import { store } from '../data/store'
import CardContainer from './partials/CardContainer.vue';
import CardOpen from './partials/CardOpen.vue';
  export default {
    components:{
      CardContainer,
      CardOpen
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

    <div v-if="store.isCardOpen" class="blocker"></div>

    <h2 v-if="store.moviesList.length > 0" class="text-center">Film</h2>
    <CardContainer :type="store.moviesList" />
    
    <h2 v-if="store.tvList.length > 0" class="text-center">Serie TV</h2>
    <CardContainer :type="store.tvList" />

    <CardOpen />

  </main>
  
</template>



<style lang="scss" scoped>

.blocker{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: rgba(0,0,0,.8);
}

</style>