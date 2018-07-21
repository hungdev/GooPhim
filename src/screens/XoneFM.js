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
import { Player } from 'react-native-audio-streaming';

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


  render() {
    const { bookMarkList } = this.props
    const { queryData } = this.state
    // Reactotron.log('============>bookMarkList')
    // Reactotron.log(bookMarkList)
    return (
      <View style={styles.container}>
        <View style={{ marginTop: Metrics.navBarHeight, paddingTop: Metrics.smallMargin }}>
          <Text>hhh</Text>
          <Player url={"http://118.69.80.90:8000/live/"} />
        </View>
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