import React from 'react'
import { Button, View, Text, FlatList, Image, TouchableOpacity, StatusBar, Alert, Clipboard, BackHandler } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import styles from './styles/FshareMovieScreenStyles'
import { connect } from 'react-redux'
import { getEpisode } from '../actions/filmAction'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomNavbar from '../appNavigation/CustomNavBar'
import NavigationService from '../appNavigation/NavigationService'
import CardView from '../component/CardView'

import Reactotron from 'reactotron-react-native'
import { Images, Metrics, Colors } from '../themes'
import VideoPlayer from 'react-native-video-controls'
import _ from 'lodash'
import Orientation from 'react-native-orientation'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"
import Toast from 'react-native-root-toast'
import { VLCPlayer, VlCPlayerView, VlcSimplePlayer } from 'react-native-yz-vlcplayer';

//https://stackoverflow.com/questions/44776798/dynamically-hide-show-header-in-react-native

class MovieScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: navigation.state.params ? navigation.state.params.header : undefined
    header: null
  })
  constructor(props) {
    super(props);
    this.state = {
      movieSelected: ''
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.forceUpdate()
    if (!nextProps.isFetching && this.state.isGetEpisode) {

      this.setState({ isGetEpisode: false, infoMovie: nextProps.episodeFilm })

    }
  }

  componentWillMount() {
    // const { params } = this.props.navigation.state
    // const infoMovie = params ? params.infoMovie : null
    // this.setState({ infoMovie })
    const { infoFshareRes } = this.props
    {
      infoFshareRes && infoFshareRes.link === null ?
        Alert.alert(
          'Thông báo:',
          'Vui lòng kiểm tra lại link cần get!',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        ) : null
    }

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    Orientation.lockToPortrait()
    StatusBar.setHidden(false);
  }

  // orientation

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
    Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation);
    Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation);

    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  _updateOrientation = (orientation) => this.setState({ orientation });
  _updateSpecificOrientation = (specificOrientation) => this.setState({ specificOrientation });
  // end config orientation


  onBackMovie() {
    this.props.navigation.goBack()
    Orientation.lockToPortrait()
    StatusBar.setHidden(false)
  }


  showMessageBar() {
    showMessage({
      message: "Video unavailable!",
      description: "Please switch to another server",
      type: "warning",
    })
  }

  copyClipboard(link) {
    Clipboard.setString(link)
    Toast.show('Copied to the clipboard', {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.green
    })
  }

  onEnterFullscreen() {
    Orientation.lockToLandscape()
    StatusBar.setHidden(true);
  }

  onExitFullscreen() {
    Orientation.lockToPortrait()
    StatusBar.setHidden(false);
  }


  render() {
    const { infoFshareRes } = this.props
    // Reactotron.log('zzzzzzzz')
    // Reactotron.log(infoFshareRes)
    // const infoMovie = this.props.navigation.getParam('infoMovie')
    // const { params } = this.props.navigation.state
    // const infoMovie = params ? params.infoMovie : null

    return (
      <View style={styles.container}>
        <View style={{ height: Metrics.screenWidth, width: '100%' }}>
          {/* <VideoPlayer
            source={{ uri: infoFshareRes.link || 'https://vjs.zencdn.net/v/oceans.mp4' }}
            // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            controlTimeout={10000}
            // navigator={this.props.navigator}
            onEnterFullscreen={() => this.onEnterFullscreen()}
            onExitFullscreen={() => this.onExitFullscreen()}
            onError={(err) => this.showMessageBar()}
            onBack={() => this.onBackMovie()}
          /> */}
          <VlcSimplePlayer
            style={{ height: '100%' }}
            autoplay={false}               //视频播放结束时调用this.vlcPlayer.resume(false)方法
            url={infoFshareRes.link || 'https://vjs.zencdn.net/v/oceans.mp4'}           //视频url
            Orientation={Orientation}
            // BackHandle={()=> alert('oke')}
            ggUrl=""                      // 广告url
            showGG={false}                 // 是否显示广告
            showTitle={true}              // 是否显示标题
            title=""                      // 标题
            showBack={true}               // 是否显示返回按钮
            onLeftPress={() => { this.props.navigation.goBack() }}          // 返回按钮点击事件
            startFullScreen={() => {
              this.setState({
                isFull: true,
              });
            }}
            closeFullScreen={() => {
              this.setState({
                isFull: false,
              });
            }}
          />
        </View>
        {
          infoFshareRes && infoFshareRes.link === null ?
            <Text style={{ margin: Metrics.baseMargin, color: 'red' }}>Lỗi: Vui lòng kiểm tra lại link cần get! Video trên chỉ là Example</Text>
            : null
        }

        {infoFshareRes && infoFshareRes.name ?
          <View style={{ marginTop: Metrics.baseMargin, marginLeft: Metrics.baseMargin }}>
            <Text style={styles.txtLabelFileName}>File name:</Text>
            <Text>{infoFshareRes.name}</Text>
          </View> : null}

        {infoFshareRes && infoFshareRes.link ?
          <TouchableOpacity style={styles.rowCopy} onPress={() => this.copyClipboard(infoFshareRes.link)}>
            <Ionicons name="md-copy" color="#4F8EF7" size={40} style={styles.icCopy} />
            <Text>Copy link to clipboard</Text>
          </TouchableOpacity>
          : null}
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.film.isFetching,
    infoFshareRes: state.film.infoFshareRes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen)