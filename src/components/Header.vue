<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <header class="d-flex justify-content-between align-items-center py-3 px-5">

    <h1 class="logo text-uppercase">Boolflix</h1>

    <div class="searchbar d-flex">

      <div class="languages position-relative">
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

      <input
        type="text"
        class="form-control mx-3"
        placeholder="Cerca film o serie TV"
        v-model.trim="store.nameToSearch"
        @keyup.enter="$emit('search')"
      >

      <button
        class="btn btn-danger px-4"
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
}

.languages{
  &:hover .select-lang{
    display: block;
  }
  .select-lang{
    display: none;
  }
}

button{
  background-color: red;
  &:hover{
    scale: 1.1;
    background-color: rgb(255, 41, 41);
    box-shadow: 0 0 5px 2px white;
  }
}

</style>