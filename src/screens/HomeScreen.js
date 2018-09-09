import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { getTrendFilm, getInfoFilm, getPMFilms, getBLFilms, getHDOFilms, getPBHFilms, getP14Films, getXPHIMFilms } from '../actions/filmAction'
import { onSetMovieSelected} from '../actions/bookMarkAction'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import SearchMovie from '../component/SearchMovie'
import ActivityIndicator from '../component/ActivityIndicator'
import { Metrics } from '../themes'
import CustomNavBar from '../appNavigation/CustomNavBar'
import Reactotron from 'reactotron-react-native'
import NavigationService from '../appNavigation/NavigationService'

class HomeScreen extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      header: <CustomNavBar
        navigation={navigation}
        onSubmitEditing={(text) => navigation.state.params.handleInput(text)} />
    }
  }

  componentWillMount() {
    // this.props.navigation.navigate('stackGetLink')
    // Reactotron.log('kkk')
    // fetch('https://facebook.github.io/react-native/movies.json')
    // fetch('http://api2.goophim.com/search.php?sv=FSHARE&key=batman')
    // .then((response) => Reactotron.log(response))
    // .then((responseJson) => {
    //   Reactotron.log('response ======>')
    //   Reactotron.log(responseJson)
    //   return responseJson;
    // })
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate()
    Reactotron.log('WillReceipt Props Home')
    Reactotron.log(newProps)
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleInput: (text) => this.onSearch(text)
    })
  }

  onSearch(query) {
    // this.props.getFilms(query)
    this.props.getPMFilms(query)
    this.props.getBLFilms(query)
    this.props.getHDOFilms(query)
    this.props.getPBHFilms(query)
    this.props.getP14Films(query)
    this.props.getXPHIMFilms(query)
  }

  onGetInfoFilm(movie) {
    this.props.getInfoFilm(movie && movie.href)
    this.props.onSetMovieSelected(movie)
  }

  render() {
    const { pmRes, isFetching, blRes, hdoRes, pbhRes, p14Res, xphimRes} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {isFetching ? <ActivityIndicator /> : null}
        <ScrollableTabView
          style={{ marginTop: Metrics.navBarHeight }}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <SearchMovie tabLabel='Phim Mới' data={pmRes && pmRes.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
          <SearchMovie tabLabel='HDOnline' data={hdoRes && hdoRes.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
          <SearchMovie tabLabel='BiluTV' data={blRes && blRes.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
          <SearchMovie tabLabel='Phim Bất Hủ' data={pbhRes && pbhRes.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
          <SearchMovie tabLabel='Phim14' data={p14Res && p14Res.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
          <SearchMovie tabLabel='Xphim' data={xphimRes && xphimRes.data || null}
            callBackMovie={(movie) => this.onGetInfoFilm(movie)} />
        </ScrollableTabView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.film.isFetching,
    infoFilm: state.film.infoFilm,
    pmRes: state.film.pmRes,
    blRes: state.film.blRes,
    pbhRes: state.film.pbhRes,
    p14Res: state.film.p14Res,
    xphimRes: state.film.xphimRes,
    hdoRes: state.film.hdoRes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTrendFilm: (data) => dispatch(getTrendFilm(data)),
    getInfoFilm: (movie) => dispatch(getInfoFilm(movie)),
    getPMFilms: (data) => dispatch(getPMFilms(data)),
    getBLFilms: (data) => dispatch(getBLFilms(data)),
    getHDOFilms: (data) => dispatch(getHDOFilms(data)),
    getPBHFilms: (data) => dispatch(getPBHFilms(data)),
    getP14Films: (data) => dispatch(getP14Films(data)),
    getXPHIMFilms: (data) => dispatch(getXPHIMFilms(data)),
    onSetMovieSelected: (data) => dispatch(onSetMovieSelected(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
