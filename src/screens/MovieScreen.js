import React from 'react'
import { Button, View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import styles from './styles/MovieScreenStyles'
import { connect } from 'react-redux'
import { getEpisode } from '../actions/filmAction'
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

  renderEpisodes(episode) {
    return (
      <View>
        <TouchableOpacity style={styles.btnEpisode} onPress={() => this.getEpisode(episode.href)}>
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
      description: "Please switch to another server",
      type: "warning",
    })
  }

  render() {
    const { episodeFilm } = this.props

    // const infoMovie = this.props.navigation.getParam('infoMovie')
    // const { params } = this.props.navigation.state
    // const infoMovie = params ? params.infoMovie : null

    const { movieSelected, infoMovie } = this.state

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

    let serverMovie = infoMovie && infoMovie.data

    return (
      <View style={styles.container}>
        <View style={{ height: Metrics.screenWidth, width: '100%' }}>
          <VideoPlayer
            source={{ uri: movieSelected || srcMovie || 'https://vjs.zencdn.net/v/oceans.mp4' }}
            // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            controlTimeout={10000}
            // navigator={this.props.navigator}
            onEnterFullscreen={Orientation.lockToLandscape}
            onExitFullscreen={Orientation.lockToPortrait}
            onError={(err) => this.showMessageBar()}
            onBack={() => this.onBackMovie()}
          />
        </View>

        <ScrollView style={{ paddingBottom: Metrics.baseMargin }}>
          {serverMovie && serverMovie.length > 0 ?
            <View>
              <View style={styles.chooseEpiLabel}>
                <Ionicons name='ios-ionitron' size={30} style={styles.iconEpisode} />
                <Text>Choose the Sever</Text>
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
              <TouchableOpacity style={styles.chooseEpiLabel}>
                <Ionicons name='ios-ionitron' size={30} style={styles.iconEpisode} />
                <Text>Choose the Episode</Text>
              </TouchableOpacity>
              : null
          }
          {arrSever ? _.map(arrSever, e => {
            return (
              <View style={styles.rowServer}>
                <Text style={[styles.btnEpisode, { backgroundColor: Colors.green }]}>Sever {e.server}</Text>
                {e && e.episode ? <FlatList
                  style={{}}
                  data={e.episode}
                  renderItem={({ item }) => this.renderEpisodes(item)}
                  horizontal
                /> : null}
              </View>
            )
          }) : null}
        </ScrollView>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.film.isFetching,
    // infoFilm: state.film.infoFilm,
    episodeFilm: state.film.episodeFilm,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEpisode: (movie) => dispatch(getEpisode(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen)