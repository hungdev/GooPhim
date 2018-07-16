import React from 'react'
import { Button, View, Text, AppRegistry, Alert } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// import { Provider } from 'react-redux'
// import configureStore from './configureStore'
// import App from './app'
// import NavigationService from './NavigationService'
// import stackPri from './stackPri'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default class DetailScreen extends React.Component {

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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bookmarks</Text>
        <Button
          title='Bookmarks'
          onPress={() => this.onPressButton()}
        />
      </View>
    )
  }
}
