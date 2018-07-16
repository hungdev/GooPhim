import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles/NavItemsStyles'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics, ApplicationStyles } from '../themes'

const openDrawer = () => {
  // NavigationActions.refresh({
  //   key: 'drawer',
  //   open: true
  // })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={() => {}} style={ApplicationStyles.navButton}>
        <Icon name='md-arrow-back'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer} style={ApplicationStyles.navButton}>
        <Icon name='ios-menu-outline'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='ios-search'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  }

}
