import React from 'react'
import { Button, View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import styles from './styles/MovieScreenStyles'
import { connect } from 'react-redux'
import { getEpisode } from '../actions/filmAction'
import { onBookMark } from '../actions/bookMarkAction'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomNavbar from '../appNavigation/CustomNavBar'
import NavigationService from '../appNavigation/NavigationService'
import CardView from '../component/CardView'

import Reactotron from 'reactotron-react-native'
import { Images, Metrics, Colors } from '../themes'
import VideoPlayer from 'react-native-video-controls'
import _ from 'lodash'
import Orientation from 'react-native-orientation'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"
import Modal from '../component/Modal'

//https://stackoverflow.com/questions/44776798/dynamically-hide-show-header-in-react-native

class MovieScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: navigation.state.params ? navigation.state.params.header : undefined
    header: null
  })
  constructor(props) {
    super(props);
    this.state = {
      movieSelected: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.forceUpdate()
    if (!nextProps.isFetching && this.state.isGetEpisode) {

      this.setState({ isGetEpisode: false, infoMovie: nextProps.episodeFilm })

    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state
    const infoMovie = params ? params.infoMovie : null
    this.setState({ infoMovie })
  }

  // orientation

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
    Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation);
    Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation);
  }

  _updateOrientation = (orientation) => this.setState({ orientation });
  _updateSpecificOrientation = (specificOrientation) => this.setState({ specificOrientation });
  // end config orientation

  getEpisode(movie) {
    this.props.getEpisode(movie)
    this.setState({ isGetEpisode: true })
  }

  renderEpisodes(episode, index) {
    const { episodeSelected } = this.state
    return (
      <View>
        <TouchableOpacity style={[styles.btnEpisode, { backgroundColor: episodeSelected && parseInt(episodeSelected) - 1 === index ? 'green' : Colors.silver }]}
          onPress={() => this.getEpisode(episode.href)}
          // onPress={() => alert(index)}
          >
          <Text>{episode.episode}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderServer(movie, index) {
    return (
      <View>
        <TouchableOpacity style={styles.btnEpisode} onPress={() => this.setState({ movieSelected: movie.data && movie.data[0] && movie.data[0].file })}>
          <Text>Server {index + 1}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onBackMovie() {
    this.props.navigation.goBack()
    Orientation.lockToPortrait()
  }


  showMessageBar() {
    showMessage({
      message: "Video unavailable!",
      description: "Please switch to another server or choose this movie from another chanel",
      type: "warning",
    })
  }

  onPressBookmark() {
    const { movieNavigate } = this.props
    this.props.onBookMark(movieNavigate)
  }

  onSearchEpsiode() {
    this.modalSearch.onOpen()
  }

  onCallBackEpisodeNum(episode, serverSelected) {
    const { episodeFilm, movieNavigate, bookMarkList } = this.props
    const { movieSelected, infoMovie } = this.state
    this.setState({ episodeSelected: episode, serverSelected })
    var srcMovie
    if (['phimmoi', 'bilutv', 'phimbathu'].includes(infoMovie && infoMovie.source)) {
      srcMovie = infoMovie && infoMovie.data && infoMovie.data[0] && infoMovie.data[0].data && infoMovie.data[0].data[0] && infoMovie.data[0].data[0].file
    } else {
      srcMovie = infoMovie && infoMovie.data && infoMovie.data[0] && infoMovie.data[0].file
    }

    let episodes = infoMovie && infoMovie.episodes
    if (episodes && episodes.length > 0) {
      var arrSever = _(episodes)
        .groupBy(x => x.server)
        .map((value, key) => ({ server: key, episode: value }))
        .value();
    }
    const findMovie = _.find(arrSever, { server: serverSelected.toString() })
    if (findMovie === undefined) {
      alert('something went wrong!')
    } else {
      this.getEpisode(findMovie && findMovie.episode && findMovie.episode[parseInt(episode) - 1] && findMovie.episode[parseInt(episode) - 1].href)
    }

    this.flatListRef.scrollToIndex({ animated: true, index: episode });

  }

  getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  )

  render() {
    const { episodeFilm, movieNavigate, bookMarkList } = this.props
    const { movieSelected, infoMovie, episodeSelected } = this.state

    var srcMovie
    if (['phimmoi', 'bilutv', 'phimbathu'].includes(infoMovie && infoMovie.source)) {
      srcMovie = infoMovie && infoMovie.data && infoMovie.data[0] && infoMovie.data[0].data && infoMovie.data[0].data[0] && infoMovie.data[0].data[0].file
    } else {
      srcMovie = infoMovie && infoMovie.data && infoMovie.data[0] && infoMovie.data[0].file
    }

    let episodes = infoMovie && infoMovie.episodes
    if (episodes && episodes.length > 0) {
      var arrSever = _(episodes)
        .groupBy(x => x.server)
        .map((value, key) => ({ server: key, episode: value }))
        .value();

      var dataSearch = _.map(arrSever, e => ({
        server: e.server,
        episode: e.episode.length
      }))
    }

    let serverMovie = infoMovie && infoMovie.data

    const findBookmark = _.find(bookMarkList, { title: movieNavigate.title })

    Reactotron.log('srcMovie')
    Reactotron.log(srcMovie)


    return (
      <View style={styles.container}>
        <View style={{ height: Metrics.screenWidth, width: '100%' }}>
          {srcMovie === null ? this.showMessageBar() : null}
          <VideoPlayer
            source={{ uri: movieSelected || srcMovie }}
            // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            controlTimeout={10000}
            // navigator={this.props.navigator}
            onEnterFullscreen={Orientation.lockToLandscape}
            onExitFullscreen={Orientation.lockToPortrait}
            onError={(err) => this.showMessageBar()}
            onBack={() => this.onBackMovie()}
          />
          <Text style={styles.txtMovieName} numberOfLines={2}>Film: {movieNavigate && movieNavigate.title}</Text>
        </View>

        <ScrollView style={styles.warpContentBelow}>
          {serverMovie && serverMovie.length > 0 ?
            <View>
              <View style={styles.rowTitleBookmark}>
                <View style={styles.chooseEpiLabel}>
                  <Ionicons name='ios-ionitron' size={30} style={styles.iconEpisode} />
                  <Text>Choose the Sever</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkRow} onPress={() => this.onPressBookmark()}>
                  <Ionicons name='md-bookmark' size={28} style={{ color: findBookmark ? 'orange' : 'grey', marginRight: Metrics.baseMargin }} />
                  <Text style={{ color: findBookmark ? 'orange' : 'grey' }}>Bookmark</Text>
                </TouchableOpacity>
              </View>
              {infoMovie && infoMovie.data ?
                <FlatList
                  style={{}}
                  data={infoMovie && infoMovie.data}
                  renderItem={({ item, index }) => this.renderServer(item, index)}
                  horizontal
                /> : null}
            </View>
            : null}
          {
            arrSever ?
              <View style={styles.rowTitleBookmark}>
                <View style={styles.chooseEpiLabel}>
                  <Ionicons name='ios-ionitron' size={30} style={styles.iconEpisode} />
                  <Text>Choose the Episode</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkRow} onPress={() => this.onSearchEpsiode()}>
                  <Ionicons name='ios-search' size={28} style={{ color: 'grey', marginRight: Metrics.baseMargin }} />
                  <Text style={{ color: 'grey' }}>Search Epsiode</Text>
                </TouchableOpacity>
              </View>
              : null
          }
          {arrSever ? _.map(arrSever, e => {
            return (
              <View style={styles.rowServer}>
                <Text style={[styles.btnEpisode, { backgroundColor: Colors.green }]}>Sever {e.server}</Text>
                {e && e.episode ? <FlatList
                  style={{}}
                  data={e.episode}
                  renderItem={({ item, index }) => this.renderEpisodes(item, index)}
                  horizontal
                  ref={(ref) => { this.flatListRef = ref; }}
                  getItemLayout={this.getItemLayout}
                  initialScrollIndex={0}
                /> : null}
              </View>
            )
          }) : null}
        </ScrollView>
        <Modal
          ref={(ref) => { this.modalSearch = ref }}
          dataSearch={dataSearch}
          onCallBackEpisodeNum={(episode, sever) => this.onCallBackEpisodeNum(episode, sever)}
        // dataEpisode={}
        />
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.film.isFetching,
    // infoFilm: state.film.infoFilm,
    episodeFilm: state.film.episodeFilm,
    movieNavigate: state.bookmark.movieSelected,
    bookMarkList: state.bookmark.bookMarkList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEpisode: (movie) => dispatch(getEpisode(movie)),
    onBookMark: (movie) => dispatch(onBookMark(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen)