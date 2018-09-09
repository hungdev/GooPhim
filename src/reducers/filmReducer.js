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
import Reactotron from 'reactotron-react-native'
// import NavigationService from '../utils/NavigationService'

const initialAuthState = {
  isFetching: false,
  isSuccess: false,
  infoFilm: [],
  episodeFilm: [],
  hdoRes: [],
  pmRes: [],
  blRes: [],
  pbhRes: [],
  p14Res: [],
  xphimRes: [],
  fshareRes: [],
  infoFshareRes: [],
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return { ...state, pmRes: [], isFetching: true }
    case GET_FILMS_SUCCESS:
      return { ...state, hdoRes: action.data, isFetching: false, isSuccess: true }
    case GET_FILMS_FAILED:
      return { ...state, isFetching: false }

    //Get trend film
    case GET_TREND_FILM:
      return { ...state, trendFilm: [], isFetching: true }
    case GET_TREND_FILM_SUCCESS:
      return { ...state, trendFilm: action.data, isFetching: false, isSuccess: true }
    case GET_TREND_FILM_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //Get information film
    case GET_INFO_FILMS:
      return { ...state, infoFilm: [], isFetching: true }
    case GET_INFO_FILMS_SUCCESS:
      return { ...state, infoFilm: action.data, isFetching: false, isSuccess: true }
    case GET_INFO_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //Get episode film
    case GET_EPISODE:
      return { ...state, episodeFilm: [], isFetching: true }
    case GET_EPISODE_SUCCESS:
      return { ...state, episodeFilm: action.data, isFetching: false, isSuccess: true }
    case GET_EPISODE_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //HDOnline
    case GET_HDO_FILMS:
      return { ...state, hdoRes: [], isFetching: true }
    case GET_HDO_FILMS_SUCCESS:
      return { ...state, hdoRes: action.data, isFetching: false, isSuccess: true }
    case GET_HDO_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //Phim moi
    case GET_PM_FILMS:
      return { ...state, pmRes: [], isFetching: true }
    case GET_PM_FILMS_SUCCESS:

      return { ...state, pmRes: action.data, isFetching: false, isSuccess: true }
    case GET_PM_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //BiluTV
    case GET_BL_FILMS:
      return { ...state, blRes: [], isFetching: true }
    case GET_BL_FILMS_SUCCESS:
      Reactotron.log('rrrrr')
      Reactotron.log(action.data)
      return { ...state, blRes: action.data, isFetching: false, isSuccess: true }
    case GET_BL_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //Phim bat hu
    case GET_PBH_FILMS:
      return { ...state, pbhRes: [], isFetching: true }
    case GET_PBH_FILMS_SUCCESS:
      return { ...state, pbhRes: action.data, isFetching: false, isSuccess: true }
    case GET_PBH_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //Phim14
    case GET_P14_FILMS:
      return { ...state, p14Res: [], isFetching: true }
    case GET_P14_FILMS_SUCCESS:
      return { ...state, p14Res: action.data, isFetching: false, isSuccess: true }
    case GET_P14_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //xphim.vn
    case GET_XPHIM_FILMS:
      return { ...state, xphimRes: [], isFetching: true }
    case GET_XPHIM_FILMS_SUCCESS:
      return { ...state, xphimRes: action.data, isFetching: false, isSuccess: true }
    case GET_XPHIM_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //fshare.vn
    case GET_FSHARE_FILMS:
      return { ...state, fshareRes: [], isFetching: true }
    case GET_FSHARE_FILMS_SUCCESS:
      return { ...state, fshareRes: action.data, isFetching: false, isSuccess: true }
    case GET_FSHARE_FILMS_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    //fshare.vn info
    case GET_INFO_FSHARE_FILM:
      return { ...state, infoFshareRes: [], isFetching: true }
    case GET_INFO_FSHARE_FILM_SUCCESS:
      return { ...state, infoFshareRes: action.data, isFetching: false, isSuccess: true }
    case GET_INFO_FSHARE_FILM_FAILED:
      return { ...state, isFetching: false, isSuccess: false }

    default:
      return state
  }
}