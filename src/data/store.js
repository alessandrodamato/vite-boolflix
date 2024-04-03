import { reactive } from "vue";

export const store = reactive ({
  api_key: '33f41a74a91b85827dfbc579de5d7473',
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
  apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  nameToSearch: '',
  moviesList: [],
  tvList: []
})