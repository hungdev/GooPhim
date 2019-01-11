import { create } from 'apisauce'
// import Reactotron from 'reactotron-react-native'

const api = create({
  baseURL: 'http://api2.goophim.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
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


export function* getFilmBySever(sever, query) {
  return yield api.get(`/search.php?sv=${sever}&key=${query}`)
}


//fshare.vn  - get info film fshare
export function* getInfoFshareFilm(query) {
  return yield api.get(`/get.php?url=https://www.fshare.vn/file/${query}`)
}