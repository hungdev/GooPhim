import {
  BOOK_MARK,
  SET_MOVIE_SELECTED
} from '../actions/actionTypes'
import Reactotron from 'reactotron-react-native'
// import NavigationService from '../utils/NavigationService'
import _ from 'lodash'
const uuidv1 = require('uuid/v1')

const initialAuthState = {
  bookMarkList: [],
  movieSelected: null
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case SET_MOVIE_SELECTED:
      let movieSelected = action.movie
      movieSelected.id = uuidv1()
      return { ...state, movieSelected: movieSelected }

    case BOOK_MARK:
      let movieBookmark = action.item
      let newArrMovie
      const findMovie = _.find(state.bookMarkList, { id: movieBookmark.id })
      if (findMovie === undefined) {
        newArrMovie = [movieBookmark].concat(state.bookMarkList)
      } else {
        newArrMovie = state.bookMarkList.filter(e => e.id !== movieBookmark.id)
      }
      return { ...state, bookMarkList: newArrMovie }

    default:
      return state
  }
}