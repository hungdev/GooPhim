import React from 'react'
import { Button, View, Text, AppRegistry, Alert, FlatList, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './styles/XoneFMScreenStyles'
import { connect } from 'react-redux'
import { onBookMark, onSetMovieSelected } from '../actions/bookMarkAction'
import { getInfoFilm } from '../actions/filmAction'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Reactotron from 'reactotron-react-native'
import CardView from '../component/CardView'
import ActivityIndicator from '../component/ActivityIndicator'
import { Metrics, Images } from '../themes'
import CustomNavBar from '../appNavigation/CustomNavBar'
import _ from 'lodash'
import { Player } from 'react-native-audio-streaming';

class Bookmarks extends React.Component {

  static navigationOptions({ navigation }) {
    return {
      header: <CustomNavBar
        navigation={navigation}
        isHideRightButton />
    }
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onplay() {
    this.playerAudio._onPress()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.warpImage}>
          <TouchableOpacity onPress={() => this.onplay()}>
            <Image source={Images.logoXoneFm} style={styles.logoXoneFm} />
          </TouchableOpacity>
        </View>
        <Player url={"http://118.69.80.90:8000/live/"} ref={ref => this.playerAudio = ref} />
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)