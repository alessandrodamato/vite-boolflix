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

  <header class="text-center">

    <div class="mt-3">

      <input
        type="text"
        class="mx-3"
        placeholder="Cerca film o serie TV"
        v-model="store.nameToSearch"
        @keyup.enter="$emit('search')"
      >

      <button
        class="btn btn-danger mx-3"
        @click="$emit('search')"
      >
      Cerca
      </button>

    </div>

  </header>
  
</template>



<style lang="scss" scoped>

</style>