import React from 'react'
import { Button, View, Text, AppRegistry, TouchableOpacity, Linking, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './styles/AboutScreenStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics, Images } from '../themes';
import CardView from '../component/CardView'

export default class DetailScreen extends React.Component {

  onSendMail() {
    try {
      Linking.openURL("mailto:?to=hungns126@gmail.com&subject=Gop y GooPhim App&body=Hello Cee");
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <CardView style={styles.cardView}>
        <Text>
          App được phát tiển từ <Text style={{ color: Colors.fire }}>http://goophim.com</Text>
        </Text>
        <Text>
          Rất mong các bạn góp ý qua mail để cải thiện app:
        </Text>
        <TouchableOpacity onPress={() => this.onSendMail()} style={{ flexDirection: 'row', marginBottom: Metrics.baseMargin }}>
          <Text style={{ color: Colors.fire, marginRight: Metrics.baseMargin }}>hungns126@gmail.com</Text>
          <Text>(Ấn vào mail để gửi mail)</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.onSendMail()} style={{ flexDirection: 'row', marginBottom: Metrics.baseMargin }}>
          <Text style={{ color: Colors.fire, marginRight: Metrics.baseMargin }}>Góp ý nhanh qua facebook, click vô</Text>
        </TouchableOpacity> */}
        <Text>
          Version 1.0.2
        </Text>
        <Text>
          Develop by <Text style={{ color: Colors.green }}>Cee</Text>
        </Text>
        <Image source={Images.explodingKittens} style={styles.imgkit} />
      </CardView>
    )
  }
}
