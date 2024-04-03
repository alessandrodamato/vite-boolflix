<script>
import { store } from '../../data/store'
  export default {
    props:{
      title: String,
      originalTitle: String,
      lang: String,
      vote: Number,
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <li class="my-2">

    <div>Titolo: {{ title }}</div>

    <div>Titolo Originale: {{ originalTitle }}</div>

    <div class="lang">
      <img :src="lang === 'EN' ? '/public/img/en.png' : `https://flagsapi.com/${lang}/shiny/64.png`" :alt="lang" class="img-fluid">
    </div>
    
    <div>Voto: {{ vote }}</div>

  </li>
  
</template>



<style lang="scss" scoped>

.lang{
  width: 64px;
  margin: auto;
}

</style>