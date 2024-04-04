import { reactive } from "vue";

export const store = reactive ({
  api_key: '33f41a74a91b85827dfbc579de5d7473',
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
  apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  nameToSearch: '',
  currentLang: 'it-IT',
  moviesList: [],
  tvList: [],
  languages: [
    {
      code: 'it-IT',
      src: 'IT'
    },
    {
      code: 'en-US',
      src: 'GB'
    },
    {
      code: 'de-DE',
      src: 'DE'
    },
    {
      code: 'fr-FR',
      src: 'FR'
    }  
  ]
})