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

  <li>
    {{ title }}
    {{ originalTitle }}
    {{ lang }}
    {{ vote }}
  </li>
  
</template>



<style lang="scss" scoped>

</style>