import {
  BOOK_MARK,
  SET_MOVIE_SELECTED
} from './actionTypes'
// import Reactotron from 'reactotron-react-native'

export const onSetMovieSelected = (movie) => {
  return {
    type: SET_MOVIE_SELECTED,
    movie
  }
}
export const onBookMark = (item) => {
  return {
    type: BOOK_MARK,
    item
  }
}

