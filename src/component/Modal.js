import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import styles from './styles/ModalStyles'
import Modal from 'react-native-modal'
import ModalDropdown from 'react-native-modal-dropdown'
import { Colors } from '../themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Reactotron from 'reactotron-react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      arrServerNum: [],
      episodeNum: ''
    };
  }

  onClose() {
    this.setState({ isVisible: false })
  }

  onOpen() {
    const { dataSearch } = this.props
    // Reactotron.log('11111')
    // Reactotron.log(dataServer)
    var arrServerNum = []
    if (dataSearch && dataSearch.length > 0) {
      // Reactotron.log('22')
      for (var i = 0; i < dataSearch.length; i++) {
        arrServerNum.push(i + 1)
      }
    }
    var maxEpisode = dataSearch[0] && dataSearch[0].episode
    this.setState({ isVisible: true, arrServerNum, idx: 0, value: '1', maxEpisode })
  }

  onSelectServer(idx, value) {
    const { dataSearch } = this.props

    var maxEpisode = dataSearch[idx] && dataSearch[idx].episode
    this.setState({ idx, value, maxEpisode })
    // if (onCallBackServer) {
    //   // onCallBackServer(parseInt(idx) + 1)
    //   onCallBackServer(idx)
    // }
  }

  onSearch() {
    const { episodeNum, maxEpisode, idx } = this.state
    const { onCallBackEpisodeNum } = this.props
    if (episodeNum > 0 && episodeNum <= maxEpisode) {
      onCallBackEpisodeNum && onCallBackEpisodeNum(episodeNum, parseInt(idx) + 1)
      this.setState({ isVisible: false, idx: '', value: '', episodeNum: '' })
    } else {
      alert('You did not choose a satisfying episode')
    }
  }

  render() {
    const { arrServerNum, maxEpisode, idx } = this.state
    // Reactotron.log('iiiii')
    // Reactotron.log(idx)
    const { dataSearch } = this.props
    return (
      <Modal
        isVisible={this.state.isVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        onBackdropPress={() => this.setState({ isVisible: false, idx: '', value: '', episodeNum: '' })}
      >

        <View style={styles.modalContent}>
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={styles.headerModal}>
              <Text>Search episode!</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ marginTop: 10 }}>Choose server</Text>
              <ModalDropdown
                dropdownStyle={[styles.dropdownStyle, { height: dataSearch && dataSearch.length * 40 }]}
                dropdownTextStyle={styles.dropdownTextStyle}
                dropdownTextHighlightStyle={{ color: Colors.tint }}
                options={arrServerNum}
                onSelect={(idx, value) => this.onSelectServer(idx, value)}>
                <View onLayout={(e) => this.setState({ widthType: e.nativeEvent.layout.width })} style={styles.rowType}>
                  <Text style={styles.txtType}>{this.state.value}</Text>
                  <Ionicons name='ios-arrow-down' size={25} style={{ marginRight: 8 }} />
                </View>
              </ModalDropdown>
            </View>
            {idx || idx === 0 ? <View style={{ marginTop: 20 }}>
              <Text>Enter the number episode movie</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ textAlignVertical: 'center', fontSize: 18, marginRight: 15 }}>{`0 < `}</Text>
                <TextInput
                  style={styles.inputEp}
                  onChangeText={(text) => this.setState({ episodeNum: text })}
                  value={this.state.episodeNum}
                  autoFocus
                  keyboardType='number-pad'
                />
                <Text style={{ textAlignVertical: 'center', fontSize: 18, marginLeft: 15 }}>{`< ${maxEpisode}`}</Text>
              </View>
            </View> : null}
            <TouchableOpacity onPress={() => this.onSearch()} style={styles.btnSearch}>
              <Text>Find</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    )
  }
}