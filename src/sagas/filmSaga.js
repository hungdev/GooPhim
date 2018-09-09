import {
  GET_TREND_FILM, GET_TREND_FILM_SUCCESS, GET_TREND_FILM_FAILED,
  GET_FILMS, GET_FILMS_SUCCESS, GET_FILMS_FAILED,
  GET_INFO_FILMS, GET_INFO_FILMS_SUCCESS, GET_INFO_FILMS_FAILED,
  GET_EPISODE, GET_EPISODE_SUCCESS, GET_EPISODE_FAILED,
  GET_HDO_FILMS, GET_HDO_FILMS_SUCCESS, GET_HDO_FILMS_FAILED,
  GET_PM_FILMS, GET_PM_FILMS_SUCCESS, GET_PM_FILMS_FAILED,
  GET_BL_FILMS, GET_BL_FILMS_SUCCESS, GET_BL_FILMS_FAILED,
  GET_PBH_FILMS, GET_PBH_FILMS_SUCCESS, GET_PBH_FILMS_FAILED,
  GET_P14_FILMS, GET_P14_FILMS_SUCCESS, GET_P14_FILMS_FAILED,
  GET_XPHIM_FILMS, GET_XPHIM_FILMS_SUCCESS, GET_XPHIM_FILMS_FAILED,
  GET_FSHARE_FILMS, GET_FSHARE_FILMS_SUCCESS, GET_FSHARE_FILMS_FAILED,
  GET_INFO_FSHARE_FILM, GET_INFO_FSHARE_FILM_SUCCESS, GET_INFO_FSHARE_FILM_FAILED,
} from '../actions/actionTypes'

import { put, takeLatest, call, throttle } from 'redux-saga/effects'

import {
  getFshareFilms, getFilms, getEpisodeFilms, getTrendFilms, getInfoFilms, getHDOFilms,
  getPMFilms, getBLFilms, getPBHFilms, getP14Films, getXPHIMFilms, getInfoFshareFilm
} from './api'
import NavigationService from '../appNavigation/NavigationService'
import Reactotron from 'reactotron-react-native'

function* callGetFilms(action) {
  try {
    const result = yield getFilms(action.data)
    yield put({ type: GET_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_FILMS_FAILED, error })
  }
}
export function* watchGetFilms() {
  yield takeLatest(GET_FILMS, callGetFilms)
}

//get episode film
function* callGetEpisodeFilms(action) {
  try {
    const result = yield getEpisodeFilms(action.data)
    yield put({ type: GET_EPISODE_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_EPISODE_FAILED, error })
  }
}
export function* watchGetEpisodeFilms() {
  yield takeLatest(GET_EPISODE, callGetEpisodeFilms)
}

//get trend film
function* callGetTrendFilms(action) {
  var trend = []
  try {
    const result = yield getTrendFilms(action.data)

    trend.push({ title: "Phim hot", data: result.data && result.data.phimhot })
    trend.push({ title: "Phim Bộ mới", data: result.data && result.data.phimbomoi })
    trend.push({ title: "Phim lẻ mới", data: result.data && result.data.phimlemoi })
    trend.push({ title: "Phim hoạt hình", data: result.data && result.data.phimhoathinh })
    trend.push({ title: "Phim chiếu rạp", data: result.data && result.data.phimchieurap })

    yield put({ type: GET_TREND_FILM_SUCCESS, data: trend })
  } catch (error) {
    yield put({ type: GET_TREND_FILM_FAILED, error })
  }
}
export function* watchGetTrendFilms() {
  yield takeLatest(GET_TREND_FILM, callGetTrendFilms)
}

//get information film
function* callGetInfoFilms(action) {
  try {
    const result = yield getInfoFilms(action.data)
    yield put({ type: GET_INFO_FILMS_SUCCESS, data: result.data })
    NavigationService.navigate('MovieScreen', { infoMovie: result.data })
  } catch (error) {
    yield put({ type: GET_INFO_FILMS_FAILED, error })
  }
}
export function* watchGetInfoFilms() {
  yield takeLatest(GET_INFO_FILMS, callGetInfoFilms)
}

//HDOnline
function* callGetHDOFilms(action) {
  try {
    const result = yield getHDOFilms(action.data)
    yield put({ type: GET_HDO_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_HDO_FILMS_FAILED, error })
  }
}
export function* watchGetHDOFilms() {
  yield takeLatest(GET_HDO_FILMS, callGetHDOFilms)
}

//Phim moi
function* callGetPMFilms(action) {
  try {
    const result = yield getPMFilms(action.data)
    // Reactotron.log('sagaaaa')
    // Reactotron.log(result)
    yield put({ type: GET_PM_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_PM_FILMS_FAILED, error })
  }
}
export function* watchGetPMFilms() {
  yield takeLatest(GET_PM_FILMS, callGetPMFilms)
}

//BiluTV
function* callGetBLFilms(action) {
  try {
    const result = yield getBLFilms(action.data)
    yield put({ type: GET_BL_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_BL_FILMS_FAILED, error })
  }
}
export function* watchGetBLFilms() {
  yield takeLatest(GET_BL_FILMS, callGetBLFilms)
}

//Phim bat hu
function* callGetPBHFilms(action) {
  try {
    const result = yield getPBHFilms(action.data)
    yield put({ type: GET_PBH_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_PBH_FILMS_FAILED, error })
  }
}
export function* watchGetPBHFilms() {
  yield takeLatest(GET_PBH_FILMS, callGetPBHFilms)
}

//Phim14
function* callGetP14Films(action) {
  try {
    const result = yield getP14Films(action.data)
    yield put({ type: GET_P14_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_P14_FILMS_FAILED, error })
  }
}
export function* watchGetP14Films() {
  yield takeLatest(GET_P14_FILMS, callGetP14Films)
}

//xphim.vn
function* callGetXPHIMFilms(action) {
  try {
    const result = yield getXPHIMFilms(action.data)
    yield put({ type: GET_XPHIM_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_XPHIM_FILMS_FAILED, error })
  }
}
export function* watchGetXPHIMFilms() {
  yield takeLatest(GET_XPHIM_FILMS, callGetXPHIMFilms)
}


//fshare.vn
function* callGetFshareFilms(action) {
  try {
    const result = yield getFshareFilms(action.data)
    yield put({ type: GET_FSHARE_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: GET_FSHARE_FILMS_FAILED, error })
  }
}
export function* watchGetFshareFilms() {
  yield takeLatest(GET_FSHARE_FILMS, callGetFshareFilms)
}

// get fshare film info
function* callGetInfoFshareFilm(action) {
  try {
    const result = yield getInfoFshareFilm(action.data)
    yield put({ type: GET_INFO_FSHARE_FILM_SUCCESS, data: result.data })
    NavigationService.navigate('FshareMovieScreen', { infoFshareMovie: result.data })
  } catch (error) {
    yield put({ type: GET_INFO_FSHARE_FILM_FAILED, error })
  }
}
export function* watchGetInfoFshareFilm() {
  yield takeLatest(GET_INFO_FSHARE_FILM, callGetInfoFshareFilm)
}
