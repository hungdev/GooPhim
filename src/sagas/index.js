import { fork, all, call } from 'redux-saga/effects'
import filmSaga from './filmSaga'

export default function* rootSaga() {
  yield all([
    call(filmSaga),
  ]);
}