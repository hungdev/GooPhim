import React from 'react'
import { Button, View, Text, AppRegistry, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles/FshareScreenStyles'
import { createStackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { getFshareFilms, getInfoFshareFilm } from '../actions/filmAction'

import ActivityIndicator from '../component/ActivityIndicator'
import { Metrics } from '../themes'
import CustomNavBar from '../appNavigation/CustomNavBar'
import CardView from '../component/CardView'
import Reactotron from 'reactotron-react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import numeral from 'numeral'
import moment from 'moment'


class FshareMovieScreen extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      header: <CustomNavBar
        navigation={navigation}
        onSubmitEditing={(text) => navigation.state.params.handleInput(text)} />
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleInput: (text) => this.onSearch(text)
    })
  }

  onSearch(query) {
    this.props.getFshareFilms(query)
  }

  onGetInfoMovie(movie) {
    this.props.getInfoFshareFilm(movie.linkcode)
  }

  renderMovie(movie) {
    return (
      <TouchableOpacity onPress={() => this.onGetInfoMovie(movie)}>
        <CardView style={styles.cardView}>
          <View style={styles.contentMovie}>
            <Text style={styles.txtLabelFileName}>File Name:</Text>
            <Text style={styles.txtMovieName} numberOfLines={3}>{movie.name}</Text>
            <View style={styles.detailMovie}>
              <View>
                <Text style={styles.txtLabelDetail}>Size</Text>
                <Text>{numeral(movie.size).format('0.00b')}</Text>
              </View>
              <View>
                <Text style={styles.txtLabelDetail}>Modified</Text>
                <Text>{moment.unix(movie.modified).format('DD-MM-YYYY')}</Text>
              </View>
              <View>
                <Text style={styles.txtLabelDetail}>Download</Text>
                <Text>{movie.downloadcount}</Text>
              </View>
            </View>
          </View>
          <View style={styles.warpIconPlay}>
            <Icon name="play-circle-outline" color="#4F8EF7" size={50} style={styles.iconPlay} />
          </View>

        </CardView>
      </TouchableOpacity>
    )
  }

  render() {
    const { fshareRes, isFetching } = this.props
    // Reactotron.log('ffff')
    // Reactotron.log(this.props.fshareRes)
    return (
      <View style={styles.container}>
        {isFetching ? <ActivityIndicator /> : null}
        <View style={{ marginTop: Metrics.navBarHeight, paddingTop: Metrics.smallMargin }}>
          {fshareRes && fshareRes.data && fshareRes.data.length > 0 ?
            <FlatList
              style={{ paddingHorizontal: Metrics.baseMargin }}
              data={fshareRes.data}
              renderItem={({ item }) => this.renderMovie(item)}
            /> :
            <View style={{height: Metrics.screenHeight, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Ấn vào search ở góc phải để tìm kiếm film từ fshare</Text>
            </View>
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.film.isFetching,
    infoFilm: state.film.infoFilm,
    fshareRes: state.film.fshareRes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInfoFshareFilm: (movie) => dispatch(getInfoFshareFilm(movie)),
    getFshareFilms: (data) => dispatch(getFshareFilms(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FshareMovieScreen)