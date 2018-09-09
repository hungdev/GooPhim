import { fork } from 'redux-saga/effects'
import * as filmSaga from './filmSaga'

export default function * rootSaga () {
  yield [
    fork(filmSaga.watchGetFilms),
    fork(filmSaga.watchGetInfoFilms),
    fork(filmSaga.watchGetEpisodeFilms),
    fork(filmSaga.watchGetHDOFilms),
    fork(filmSaga.watchGetPMFilms),
    fork(filmSaga.watchGetBLFilms),
    fork(filmSaga.watchGetPBHFilms),
    fork(filmSaga.watchGetP14Films),
    fork(filmSaga.watchGetXPHIMFilms),
    fork(filmSaga.watchGetFshareFilms),
    fork(filmSaga.watchGetInfoFshareFilm),
    fork(filmSaga.watchGetTrendFilms),
  ]
}