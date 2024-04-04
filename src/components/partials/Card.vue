<script>
import { store } from '../../data/store'
import axios from 'axios'
  export default {
    props:{
      id: Number,
      path: String,
      title: String,
      originalTitle: String,
      lang: String,
      vote: Number,
      bio: String,
      type: String
    },

    data(){
      return{
        store
      }
    },

    methods:{
      voteCalc(v){
        if (v === 0) {
          return '-'
        }
        return Math.ceil(v / 2)
      },

      getCreditsApi(){
        axios.get(store.apiUrl + `${this.type}/${this.id}/credits`, {
          params:{
            api_key: this.store.api_key,
          }
        })
        .then(res => {
          this.store.creditsList = res.data.cast;
          this.store.isCardOpen = true;
          this.store.cardOpen = {
            path: this.path,
            title: this.title,
            originalTitle: this.originalTitle,
            lang: this.lang,
            vote: this.voteCalc(this.vote),
            bio: this.bio
          };
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>



<template>

  <li class="my-5 mx-3">

    <div class="poster w-100 h-100 position-relative" @click="getCreditsApi()">
      
      <img v-if="path !== null" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="title">

      <div v-else class="film-icon"><i class="fa-solid fa-film"></i></div>

      <div class="poster-content w-100 h-100 position-absolute top-0 left-0 p-3 overflow-auto">

        <div><span>Titolo:</span> {{ title }}</div>

        <div v-if="title !== originalTitle"><span>Titolo Originale:</span> {{ originalTitle }}</div>

        <div class="lang my-1">
          <img :src="lang === 'EN' ? 'img/en.png' : `https://flagsapi.com/${lang}/shiny/64.png`" :alt="lang" class="img-fluid">
        </div>

        <div>
          <span>Voto: </span>
          <i v-for="(star, index) in 5" :key="`star-${index}`" class="fa-solid fa-star" :class="{'text-warning' : voteCalc(vote) > index}"></i>
        </div>

        <p>{{ bio }}</p>

      </div>
      
    </div>

    

  </li>
  
</template>



<style lang="scss" scoped>

li{
  width: 342px;
  height: 513px;
  .poster{
    background-color: lightgray;
    & > img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover .film-icon{
      display: none;
    }
    .film-icon{
      font-size: 5rem;
      text-align: center;
      line-height: 513px;
      text-shadow: 0 0 7px black;
      color: gray;
    }
    &:hover .poster-content{
      background-color: rgba(0,0,0,.7);
      display: block !important;
    }
    .poster-content{
      display: none;
      span{
        font-weight: 600;
      }
    }
  }
  .lang{
    width: 64px;
    height: 64px;
    line-height: 64px;
  }
}




</style>