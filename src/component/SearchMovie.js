import React from 'react'
import { Button, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './styles/SearchMovieStyles'
// import { Provider } from 'react-redux'
// import NavigationService from './NavigationService'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomNavbar from '../appNavigation/CustomNavBar'
import NavigationService from '../appNavigation/NavigationService'
import CardView from '../component/CardView'

import Reactotron from 'reactotron-react-native'
import { Images, Metrics } from '../themes';
//onPress={() => NavigationService.navigate('Detail')}

export default class DetailScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state
  //   return {
  //     // header: <CustomNavbar txtTitle={I18n.t('promotion')} rightTitle onPressLeft={() => navigation.navigate('DrawerOpen')} />
  //     header: <CustomNavbar />
  //   }
  // }

  // onNavigateMovie (movie) {
  //   // NavigationService.navigate('MovieScreen', {movie})

  // }

  renderMovie(movie) {
    return (
      <TouchableOpacity onPress={() => this.props.callBackMovie(movie)}>
        <CardView style={styles.cardView}>
          <Image source={movie && movie.image ? { uri: movie.image } : Images.icMovieLogo} style={styles.imgMovie} />
          <Text numberOfLines={2}>{movie.title}</Text>
        </CardView>
      </TouchableOpacity>
    )
  }

  render() {
    const { data } = this.props
    return (
      <View style={styles.container}>
        <View>
          {data ?
            <FlatList
              style={{ paddingHorizontal: Metrics.baseMargin }}
              data={data}
              renderItem={({ item }) => this.renderMovie(item)}
              numColumns={2}
            /> : (
              <View style={{ height: Metrics.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Ấn vào search ở góc trái để tìm kiếm film</Text>
              </View>
            )}
        </View>
      </View>
    )
  }
}

