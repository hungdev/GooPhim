import {
  GET_FILMS,
  GET_EPISODE,
  GET_TREND_FILM,
  GET_INFO_FILMS,
  GET_HDO_FILMS,
  GET_PM_FILMS,
  GET_BL_FILMS,
  GET_PBH_FILMS,
  GET_P14_FILMS,
  GET_XPHIM_FILMS,
  GET_FSHARE_FILMS,
  GET_INFO_FSHARE_FILM
} from './actionTypes'
import Reactotron from 'reactotron-react-native'

export const getFilms = (data) => {
  return {
    type: GET_FILMS,
    data
  }
}

export const getTrendFilm = (data) => {
  return {
    type: GET_TREND_FILM,
    data
  }
}

export const getInfoFilm = (data) => {
  return {
    type: GET_INFO_FILMS,
    data
  }
}

export const getEpisode = (data) => {
  return {
    type: GET_EPISODE,
    data
  }
}

//HDOnline
export const getHDOFilms = (data) => {
  return {
    type: GET_HDO_FILMS,
    data
  }
}

//Phim moi
export const getPMFilms = (data) => {
  return {
    type: GET_PM_FILMS,
    data
  }
}

//BiluTV
export const getBLFilms = (data) => {
  return {
    type: GET_BL_FILMS,
    data
  }
}

//Phim bat hu
export const getPBHFilms = (data) => {
  return {
    type: GET_PBH_FILMS,
    data
  }
}

//Phim14
export const getP14Films = (data) => {
  return {
    type: GET_P14_FILMS,
    data
  }
}

//xphim.vn
export const getXPHIMFilms = (data) => {
  return {
    type: GET_XPHIM_FILMS,
    data
  }
}


//fshare.vn
export const getFshareFilms = (data) => {
  return {
    type: GET_FSHARE_FILMS,
    data
  }
}

// get info fshare film
export const getInfoFshareFilm = (data) => {
  return {
    type: GET_INFO_FSHARE_FILM,
    data
  }
}
