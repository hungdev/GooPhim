import React from 'react'
import { Button, View, Text, AppRegistry, Alert, FlatList, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './styles/BookmarksStyles'
import { connect } from 'react-redux'
import { onBookMark, onSetMovieSelected } from '../actions/bookMarkAction'
import { getInfoFilm } from '../actions/filmAction'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Reactotron from 'reactotron-react-native'
import CardView from '../component/CardView'
import ActivityIndicator from '../component/ActivityIndicator'
import { Metrics } from '../themes'
import CustomNavBar from '../appNavigation/CustomNavBar'
import _ from 'lodash'

class Bookmarks extends React.Component {

  static navigationOptions({ navigation }) {
    return {
      header: <CustomNavBar
        navigation={navigation}
        onChangeText={(text) => navigation.state.params.handleInput(text)} />
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      queryData: ''
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleInput: (text) => this.onSearch(text)
    })
  }

  onSearch(query) {
    const { bookMarkList } = this.props
    let resQuery = _.filter(bookMarkList, e => {
      if (e.title.toLowerCase().includes(query.toLowerCase())) {
        return e
      }
    })
    this.setState({queryData: resQuery})
  }

  onPressButton() {
    Alert.alert(
      'Thông báo: ',
      'Bookmarks sẽ được phát triển trong version sau!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  onRemoveBookmark(movie) {
    Alert.alert(
      'Thông báo:',
      'Bạn có thực sự muốn xóa phim này khỏi danh sách bookmark không?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.props.onBookMark(movie) },
      ],
      { cancelable: false }
    )
  }

  onGetInfoFilm(movie) {
    this.props.getInfoFilm(movie && movie.href)
    this.props.onSetMovieSelected(movie)
  }

  renderMovie(movie) {
    return (
      <View onPress={() => this.onGetInfoMovie(movie)}>
        <CardView style={styles.cardView}>
          <TouchableOpacity style={styles.warpMovieInfo} onPress={() => this.onGetInfoFilm(movie)}>
            <View style={styles.warpIconPlay}>
              <Image source={movie && movie.image ? { uri: movie.image } : Images.icMovieLogo} style={styles.imgMovie} />
            </View>
            <View style={styles.contentMovie}>
              <Text style={styles.txtLabelFileName}>File Name:</Text>
              <Text style={styles.txtMovieName} numberOfLines={3}>{movie.title}</Text>
              <View>
                <Text style={styles.txtLabelDetail}>server:</Text>
                <Text>{movie.server}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.warpBookmarkIcon} onPress={() => this.onRemoveBookmark(movie)}>
            <Ionicons name='md-bookmark' size={28} style={styles.icBookmark} />
          </TouchableOpacity>
        </CardView>
      </View>
    )
  }

  render() {
    const { bookMarkList } = this.props
    const { queryData } = this.state
    // Reactotron.log('============>bookMarkList')
    // Reactotron.log(bookMarkList)
    return (
      <View style={styles.container}>
        <View style={{ marginTop: Metrics.navBarHeight, paddingTop: Metrics.smallMargin }}>
          {bookMarkList && bookMarkList.length > 0 ?
            <FlatList
              style={{ paddingHorizontal: Metrics.baseMargin }}
              data={queryData || bookMarkList}
              renderItem={({ item }) => this.renderMovie(item)}
            /> :
            <View style={{ height: Metrics.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Chưa có Film nào được bookmark</Text>
            </View>
          }
        </View>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    bookMarkList: state.bookmark.bookMarkList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInfoFilm: (movie) => dispatch(getInfoFilm(movie)),
    onSetMovieSelected: (data) => dispatch(onSetMovieSelected(data)),
    onBookMark: (movie) => dispatch(onBookMark(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)