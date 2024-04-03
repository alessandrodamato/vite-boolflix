<script>
import { store } from '../../data/store'
  export default {
    props:{
      path: String,
      title: String,
      originalTitle: String,
      lang: String,
      vote: Number,
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
      }
    }
  }
</script>



<template>

  <li class="my-5">

    <div class="poster">
      <img v-if="path !== null" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="title" class="img-fluid">
    </div>

    <div>Titolo: {{ title }}</div>

    <div>Titolo Originale: {{ originalTitle }}</div>

    <div class="lang">
      <img :src="lang === 'EN' ? '/public/img/en.png' : `https://flagsapi.com/${lang}/shiny/64.png`" :alt="lang" class="img-fluid">
    </div>

    <div>
      Voto: {{ voteCalc(vote) }}
      <i v-for="(star, index) in 5" :key="`star-${index}`" class="fa-solid fa-star" :class="{'text-warning' : voteCalc(vote) > index}"></i>
    </div>

  </li>
  
</template>



<style lang="scss" scoped>

.poster{
  width: 342px;
  margin: auto;
}

.lang{
  width: 64px;
  margin: auto;
}


</style>