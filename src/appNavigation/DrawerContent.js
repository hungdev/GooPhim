import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles/DrawerContentStyles'
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import NavigationService from '../appNavigation/NavigationService'
import { Images } from '../themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  //NavigationService.navigate('Main')

  onNavigate (screen) {
    NavigationService.navigate(screen)
    this.props.navigation.closeDrawer()
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.warpAvatar}>
            <Image source={Images.explodingKittens} style={styles.avatar} />
            <Text style={styles.txtHi}>Hi!</Text>
          </View>
          <View style={styles.warpContent}>
            <TouchableOpacity onPress={() => this.onNavigate('Main')} style={styles.warpButton}>
              <Ionicons name="ios-home" size={30} style={styles.iconItem} />
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigationService.navigate('FshareItem')} style={styles.warpButton}>
              <Ionicons name="logo-foursquare" size={30} style={styles.iconItem} />
              <Text>Fshare Movie</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => NavigationService.navigate('Main')} style={styles.warpButton}>
              <Ionicons name="ios-bug" size={30} style={styles.iconItem} />
              <Text>Radio XoneFM</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => NavigationService.navigate('bookmark')} style={styles.warpButton}>
              <Ionicons name="ios-bookmarks" size={30} style={styles.iconItem} />
              <Text>Bookmark</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigationService.navigate('AboutScreen')} style={styles.warpButton}>
              <Ionicons name="ios-bug" size={30} style={styles.iconItem} />
              <Text>About</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          {/* <Text>This is my fixed footer</Text> */}
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;