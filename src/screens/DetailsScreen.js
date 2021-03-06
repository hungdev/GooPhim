import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// import { Provider } from 'react-redux'
// import configureStore from './configureStore'
// import App from './app'
// import NavigationService from './NavigationService'
// import stackPri from './stackPri'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class DetailScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Ionicons name="ios-menu" size={30} />
        <Button
          title='Button'
          onPress={() => alert('DetailScreen')}
        />
      </View>
    )
  }
}
