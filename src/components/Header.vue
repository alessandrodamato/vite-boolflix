<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      filterByType(event){
        this.store.currentFilter = event.target.value;
        console.log(this.store.currentFilter);
        console.log(this.store.moviesList);
        console.log(this.store.tvList);
      }
    }
  }
</script>



<template>

  <header class="d-flex justify-content-between align-items-center flex-wrap py-3 px-5">

    <div class="position-relative logo-box" @click="store.nameToSearch = ''; $emit('search')">
      <h1 class="logo text-uppercase">Boolflix</h1>
      <div class="curve position-absolute w-100 h-100 top-0 start-0"></div>
    </div>

    <div class="searchbar d-flex align-items-center">

      <div class="languages position-relative flex-shrink-0">
        <img
            v-for="(lang, index) in store.languages"
            :key="`lang-${index}`"
            :src="`https://flagsapi.com/${lang.src}/shiny/64.png`"
            :alt="lang.src"
            class="img-fluid"
            v-show="store.currentLang === lang.code"
          >
        <div class="select-lang position-absolute z-1">
          <img
            v-for="(lang, index) in store.languages"
            :key="`lang-${index}`"
            :src="`https://flagsapi.com/${lang.src}/shiny/64.png`"
            :alt="lang.src"
            @click="store.currentLang = lang.code; $emit('search')"
            v-show="store.currentLang !== lang.code"
            class="img-fluid"
          >
        </div>
      </div>

      <select class="form-select ms-3"></select>

      <select @change="filterByType($event)" class="form-select ms-3">
        <option value="all" selected>Tutti</option>
        <option value="movie">Film</option>
        <option value="tv">Serie TV</option>
      </select>

      <input
        type="text"
        class="form-control ms-3"
        placeholder="Cerca film o serie TV"
        v-model.trim="store.nameToSearch"
        @keyup.enter="$emit('search')"
      >

      <button
        class="btn btn-danger px-4 ms-3"
        @click="$emit('search')"
      >
      Cerca
      </button>

    </div>

  </header>
  
</template>



<style lang="scss" scoped>

.logo{
  color: red;
  font-size: 3rem;
  font-weight: 900 !important;
}
.curve{
  clip-path: ellipse(237px 48px at 51.5% 136.35%);
  background-color: black;
}

.languages{
  &:hover .select-lang{
    display: block;
  }
  .select-lang{
    display: none;
  }
}

select{
  width: 150px;
}

input{
  width: 300px;
  height: 40px;
}

button{
  background-color: red;
  height: 40px;
  &:hover{
    scale: 1.1;
    background-color: rgb(255, 41, 41);
    box-shadow: 0 0 5px 2px white;
  }
}

@media screen and (max-width: 1200px) {
  header{
    justify-content: center !important;
  }

  .logo-box{
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 992px) {
  input, select{
    width: auto;
  }
}

</style>