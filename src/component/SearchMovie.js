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

import { connect } from 'react-redux'
import { getTrendFilm } from '../actions/filmAction'
import Reactotron from 'reactotron-react-native'
import { Images, Metrics } from '../themes';
//onPress={() => NavigationService.navigate('Detail')}

class DetailScreen extends React.Component {
  // constructor(){
  //   this.state = {
  //     // trend: {}
  //   }
  // }
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

  componentWillMount() {
    this.props.getTrendFilm("BL");
  }

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

  renderTrendMovie(trend) {
    return (
      <View>
        <Text style={{ paddingHorizontal: Metrics.baseMargin, color: 'black', marginTop: 10 }} >
          {trend.title}
        </Text>
        <FlatList
          style={{ paddingHorizontal: Metrics.baseMargin }}
          data={trend.data}
          renderItem={({ item }) => this.renderMovie(item)}
          horizontal={true}
        />
      </View>
    )
  }

  render() {
    const { data, infoFilm } = this.props
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
              <FlatList
                data={infoFilm}
                renderItem={({ item }) => this.renderTrendMovie(item)}
              />
            )}
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    infoFilm: state.film.infoFilm,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTrendFilm: (data) => dispatch(getTrendFilm(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)

