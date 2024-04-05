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

  <div v-if="store.isCardOpen" class="card-open p-4">

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

          <h5 class="mb-3"><strong>Titolo:</strong> {{ store.cardOpen.title }}</h5>

          <h6 v-if="store.cardOpen.title !== store.cardOpen.originalTitle" class="mb-3"><strong>Titolo Originale:</strong> {{ store.cardOpen.originalTitle }}</h6>

          <div class="lang mb-3">
            <img :src="store.cardOpen.lang === 'EN' ? 'img/en.png' : `https://flagsapi.com/${store.cardOpen.lang}/shiny/64.png`" :alt="store.cardOpen.lang" class="img-fluid">
          </div>

          <h6 class="mb-1">
            <strong>Voto: </strong>
            <i v-for="(star, index) in 5" :key="`star-${index}`" class="fa-solid fa-star" :class="{'text-warning' : store.cardOpen.vote > index}"></i>
          </h6>

          <div v-if="store.currentGenres.length > 0" class="mb-4">
            <strong>Genere: </strong>
            <span>{{ store.currentGenres.join(', ') }}</span>
          </div>

          <p class="mb-3" :class="{'mt-4' : store.currentGenres.length === 0}">{{ store.cardOpen.bio }}</p>

          <div v-if="store.creditsList.length > 0">
            <h5 class="text-center mb-3">Attori Principali</h5>
            <ul class="d-flex justify-content-center">
              <li
                v-for="(actor, index) in store.creditsList"
                :key="actor.id"
                v-show="index < 5"
                class="actor me-3"
              >
                <div class="actor-image overflow-hidden rounded-4 m-auto">
                  <img v-if="actor.profile_path !== null" :src="`https://image.tmdb.org/t/p/w185${actor.profile_path}`" :alt="actor.name" class="img-fluid">
                  <div v-else><i class="fa-solid fa-circle-user"></i></div>
                </div>
                <div class="text-center">{{ actor.name }}</div>
              </li>
            </ul>
          </div>
          
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
  overflow: auto;
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
  .actor{
    width: 20%;
    .actor-image{
      width: 120px;
      & > div{
        width: 120px;
        height: 180px;
        font-size: 4rem;
        text-align: center;
        line-height: 180px;
        background-color: lightgray;
        color: gray;
      }
    }
  }
}


</style>