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
        axios.get(store.apiUrl + 'search/movie', {
          params:{
            api_key: store.api_key,
            query: store.nameToSearch,
            language: store.currentLang
          }
        })
        .then(res => {
          store.moviesList = res.data.results;
        })
        .catch(error => {
          console.log(error);
        })
      },
      
      getTvApi(){
        axios.get(store.apiUrl + 'search/tv', {
          params:{
            api_key: store.api_key,
            query: store.nameToSearch,
            language: store.currentLang
          }
        })
        .then(res => {
          store.tvList = res.data.results;
        })
        .catch(error => {
          console.log(error);
        })
      },

      getGenresApi(){
        axios.get(store.apiUrl + 'genre/movie/list', {
          params:{
            api_key: store.api_key
          }
        })
        .then(res => {
          store.genresList = res.data.genres;
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getMovieApi()
      this.getTvApi()
      this.getGenresApi()
    }
  }
</script> 



<template>

  <Header @search="getMovieApi(); getTvApi()" />

  <Main  />
  
  <Footer />

</template>



<style lang="scss">

@import url(./assets/scss/main.scss);

</style>