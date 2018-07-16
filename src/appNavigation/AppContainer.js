import React from 'react'

import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import NavigationService from '../appNavigation/NavigationService'
import TopLevelNavigator from './Router'
// import HomeScreen from './HomeScreen'
// import DetailsScreen from './DetailsScreen'

// const TopLevelNavigator = createDrawerNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen
//   },
//   {
//     initialRouteName: 'Home'
//   }
// )

export default class AppWithNavigationState extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLeftDrawerOpened: false,
      isRightDrawerOpened: false
    }
  }

  render () {
    return (
      <TopLevelNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}

