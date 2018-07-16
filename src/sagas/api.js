import { create } from 'apisauce'
// import Reactotron from 'reactotron-react-native'

const api = create({
  baseURL: 'http://api2.goophim.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  // timeout: 30000
  timeout: 30000
})

export function* getFilms(data) { return yield api.post('/sendRequest', data) }

//get information film
export function* getInfoFilms(query) {
  return yield api.get(`/get.php?url=${query}`)
}

//get information film
export function* getEpisodeFilms(query) {
  return yield api.get(`/get.php?url=${query}`)
}

//HDonline
export function* getHDOFilms(query) {
  return yield api.get(`/search.php?sv=HDO&key=${query}`)
}

//Phim moi
export function* getPMFilms(query) {
  return yield api.get(`/search.php?sv=PM&key=${query}`)
}

//BiluTV
export function* getBLFilms(query) {
  return yield api.get(`/search.php?sv=BL&key=${query}`)
}

//Phim bat hu
export function* getPBHFilms(query) {
  return yield api.get(`/search.php?sv=PBH&key=${query}`)
}

///Phim14
export function* getP14Films(query) {
  return yield api.get(`/search.php?sv=P14&key=${query}`)
}

//xphim.vn
export function* getXPHIMFilms(query) {
  return yield api.get(`/search.php?sv=XPHIM&key=${query}`)
}

//fshare.vn  - get list film fshare
export function* getFshareFilms(query) {
  return yield api.get(`/search.php?sv=FSHARE&key=${query}`)
}

//fshare.vn  - get info film fshare
export function* getInfoFshareFilm(query) {
  return yield api.get(`/get.php?url=https://www.fshare.vn/file/${query}`)
}