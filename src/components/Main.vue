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

    <div v-if="store.isCardOpen" class="dark-layer" @click="store.isCardOpen = false"></div>

    <div v-if="store.moviesList.length > 0 && (store.currentType === 'movie' || store.currentType === 'all')">
      <h2 class="text-center">Film</h2>
      <CardContainer :type="store.moviesList" />
    </div>
    
    <div v-if="store.tvList.length > 0 && (store.currentType === 'tv' || store.currentType === 'all')">
      <h2 class="text-center">Serie TV</h2>
      <CardContainer :type="store.tvList" />
    </div>

    <CardOpen />

  </main>
  
</template>



<style lang="scss" scoped>

.dark-layer{
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