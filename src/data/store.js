import { reactive } from "vue";

export const store = reactive ({
  api_key: '33f41a74a91b85827dfbc579de5d7473',
  apiUrl: 'https://api.themoviedb.org/3/',
  nameToSearch: '',
  currentLang: 'it-IT',
  currentFilter: 'all',
  isCardOpen: false,
  cardOpen: {},
  currentGenres: [],
  moviesList: [],
  tvList: [],
  creditsList: [],
  genresList: [],
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