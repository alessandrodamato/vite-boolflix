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

      <input
        type="text"
        class="form-control me-3"
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

button{
  background-color: red;
  &:hover{
    scale: 1.1;
    background-color: rgb(255, 41, 41);
    box-shadow: 0 0 5px 2px white;
  }
}

</style>