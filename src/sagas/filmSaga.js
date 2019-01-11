import * as actionTypes from '../actions/actionTypes'
import { put, takeLatest, call, throttle } from 'redux-saga/effects'
import * as api from './api'
import NavigationService from '../appNavigation/NavigationService'
import Reactotron from 'reactotron-react-native'

function* callGetFilms(action) {
  try {
    const result = yield api.getFilms(action.data)
    yield put({ type: actionTypes.GET_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_FILMS_FAILED, error })
  }
}

//get episode film
function* callGetEpisodeFilms(action) {
  try {
    const result = yield api.getEpisodeFilms(action.data)
    yield put({ type: actionTypes.GET_EPISODE_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_EPISODE_FAILED, error })
  }
}

//get information film
function* callGetInfoFilms(action) {
  try {
    const result = yield api.getInfoFilms(action.data)
    yield put({ type: actionTypes.GET_INFO_FILMS_SUCCESS, data: result.data })
    NavigationService.navigate('MovieScreen', { infoMovie: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_INFO_FILMS_FAILED, error })
  }
}

//HDOnline
function* callGetHDOFilms(action) {
  try {
    const result = yield api.getFilmBySever('HDO', action.data)
    yield put({ type: actionTypes.GET_HDO_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_HDO_FILMS_FAILED, error })
  }
}

//Phim moi
function* callGetPMFilms(action) {
  try {
    const result = yield api.getFilmBySever('PM', action.data)
    yield put({ type: actionTypes.GET_PM_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_PM_FILMS_FAILED, error })
  }
}

//BiluTV
function* callGetBLFilms(action) {
  try {
    const result = yield api.getFilmBySever('BL', action.data)
    yield put({ type: actionTypes.GET_BL_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_BL_FILMS_FAILED, error })
  }
}


//Phim bat hu
function* callGetPBHFilms(action) {
  try {
    const result = yield api.getFilmBySever('PBH', action.data)
    yield put({ type: actionTypes.GET_PBH_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_PBH_FILMS_FAILED, error })
  }
}


//Phim14
function* callGetP14Films(action) {
  try {
    const result = yield api.getFilmBySever('P14', action.data)
    yield put({ type: actionTypes.GET_P14_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_P14_FILMS_FAILED, error })
  }
}

//xphim.vn
function* callGetXPHIMFilms(action) {
  try {
    const result = yield api.getFilmBySever('XPHIM', action.data)
    yield put({ type: actionTypes.GET_XPHIM_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_XPHIM_FILMS_FAILED, error })
  }
}


//fshare.vn
function* callGetFshareFilms(action) {
  try {
    const result = yield api.getFilmBySever('FSHARE', action.data)
    yield put({ type: actionTypes.GET_FSHARE_FILMS_SUCCESS, data: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_FSHARE_FILMS_FAILED, error })
  }
}

// get fshare film info
function* callGetInfoFshareFilm(action) {
  try {
    const result = yield api.getInfoFshareFilm(action.data)
    yield put({ type: actionTypes.GET_INFO_FSHARE_FILM_SUCCESS, data: result.data })
    NavigationService.navigate('FshareMovieScreen', { infoFshareMovie: result.data })
  } catch (error) {
    yield put({ type: actionTypes.GET_INFO_FSHARE_FILM_FAILED, error })
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.GET_FILMS, callGetFilms),
    yield takeLatest(actionTypes.GET_EPISODE, callGetEpisodeFilms),
    yield takeLatest(actionTypes.GET_INFO_FILMS, callGetInfoFilms),
    yield takeLatest(actionTypes.GET_HDO_FILMS, callGetHDOFilms),
    yield takeLatest(actionTypes.GET_PM_FILMS, callGetPMFilms),
    yield takeLatest(actionTypes.GET_BL_FILMS, callGetBLFilms),
    yield takeLatest(actionTypes.GET_PBH_FILMS, callGetPBHFilms),
    yield takeLatest(actionTypes.GET_P14_FILMS, callGetP14Films),
    yield takeLatest(actionTypes.GET_XPHIM_FILMS, callGetXPHIMFilms),
    yield takeLatest(actionTypes.GET_FSHARE_FILMS, callGetFshareFilms),
    yield takeLatest(actionTypes.GET_INFO_FSHARE_FILM, callGetInfoFshareFilm)
}