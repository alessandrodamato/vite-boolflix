<script>
import { store } from '../../data/store'
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <div v-if="store.isCardOpen" class="card-open p-5">

    <div class="container h-100">

      <div class="row h-100">

        <div class="col-4 h-100">

          <div class="poster">
            <img v-if="store.cardOpen.path !== null" :src="`https://image.tmdb.org/t/p/w342${store.cardOpen.path}`" :alt="store.cardOpen.title">
            <div v-else class="film-icon"><i class="fa-solid fa-film"></i></div>
          </div>

        </div>

        <div class="col-8">

          <div class="position-absolute top-0 end-0 p-2 bg-danger cursor_pointer" @click="store.isCardOpen = false">X</div>

          <div><span>Titolo:</span> {{ store.cardOpen.title }}</div>

          <div v-if="store.cardOpen.title !== store.cardOpen.originalTitle"><span>Titolo Originale:</span> {{ store.cardOpen.originalTitle }}</div>

          <div class="lang my-1">
            <img :src="store.cardOpen.lang === 'EN' ? 'img/en.png' : `https://flagsapi.com/${store.cardOpen.lang}/shiny/64.png`" :alt="store.cardOpen.lang" class="img-fluid">
          </div>

          <div>
            <span>Voto: </span>
            <i v-for="(star, index) in 5" :key="`star-${index}`" class="fa-solid fa-star" :class="{'text-warning' : store.cardOpen.vote > index}"></i>
          </div>

          <p>{{ store.cardOpen.bio }}</p>

          <!-- stampare dinamicamente 5 nomi e generi -->
          <div>{{ store.creditsList[1].name }}</div> 
          <div>{{ store.creditsList[2].name }}</div> 
          <div>{{ store.creditsList[3].name }}</div> 
          <div>{{ store.creditsList[4].name }}</div> 
          <div>{{ store.creditsList[5].name }}</div> 
          
        </div>

      </div>

    </div>

  </div>
  
</template>



<style lang="scss" scoped>

.card-open{
  width: 70%;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: black;
  border: 1px solid white;
  .poster{
    background-color: lightgray;
    & > img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .film-icon{
      font-size: 5rem;
      text-align: center;
      line-height: 513px;
      text-shadow: 0 0 7px black;
      color: gray;
    }
  }
  
  .lang{
    width: 64px;
  }
}


</style>