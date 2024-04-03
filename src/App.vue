<script>
import { store } from './data/store'
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,
      Footer
    },

    data(){
      return{
        store
      }
    },

    methods: {
      getMovieApi(){
        axios.get(store.apiMovieUrl, {
          params:{
            api_key: store.api_key,
            query: store.nameToSearch,
            language: 'it-IT' // --------------------------------------------------
          }
        })
        .then(res => {
          store.moviesList = res.data.results;
          console.log(store.moviesList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      
      getTvApi(){
        axios.get(store.apiTvUrl, {
          params:{
            api_key: store.api_key,
            query: store.nameToSearch,
            language: 'it-IT' // --------------------------------------------------
          }
        })
        .then(res => {
          store.tvList = res.data.results;
          console.log(store.tvList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getMovieApi()
      this.getTvApi()
    }
  }
</script> 



<template>

  <Header @search="getMovieApi(); getTvApi()" />

  <Main />
  
  <Footer />

</template>



<style lang="scss">

@import url(./assets/scss/main.scss);

</style>