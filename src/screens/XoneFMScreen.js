import React from 'react'
import { Button, View, Text, AppRegistry, Alert, FlatList, TouchableOpacity, Image, Animated, Easing, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './styles/XoneFMScreenStyles'
import { connect } from 'react-redux'
import { onBookMark, onSetMovieSelected } from '../actions/bookMarkAction'
import { getInfoFilm } from '../actions/filmAction'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Reactotron from 'reactotron-react-native'
import CardView from '../component/CardView'
import ActivityIndicator from '../component/ActivityIndicator'
import { Metrics, Images } from '../themes'
import CustomNavBar from '../appNavigation/CustomNavBar'
import _ from 'lodash'
import { Player } from 'react-native-audio-streaming';
import { VLCPlayer, VlCPlayerView } from 'react-native-yz-vlcplayer';
import Orientation from 'react-native-orientation'
class Bookmarks extends React.Component {

  static navigationOptions({ navigation }) {
    return {
      header: <CustomNavBar
        navigation={navigation}
        isHideRightButton />
    }
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onplay() {
    this.playerAudio._onPress()
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.warpImage}>
          <TouchableOpacity onPress={() => this.onplay()}>
            <Image source={Images.logoXoneFm} style={styles.logoXoneFm} />
          </TouchableOpacity>
        </View>
        <Player url={"http://118.69.80.90:8000/live/"} ref={ref => this.playerAudio = ref} /> */}
        {/* <VLCPlayer
           ref={ref => (this.vlcPlayer = ref)}
           style={[styles.video]}
           videoAspectRatio="16:9"  
           paused={false}
           source={{ uri: 'https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_328472297677498_628560526670036992_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=666&oh=525339da68850d0a63a77fab3d30a1dc&oe=5B718C21'}}
           onProgress={()=> {}}
           onEnd={()=> {}}
           onBuffering={()=> {}}
           onError={()=> {}}
           onStopped={()=> {}}
           onPlaying={()=> {}}
           onPaused={()=> {}}
           onLoadStart={()=>{
                   if(Platform.OS === 'ios'){
                       this.vlcPlayer.seek(0); //设置播放进度
                   }else{
                       this.vlcPlayer.seek(0); //设置播放的时间
                   }
                   this.setState({
                     paused: true,
                   },()=>{
                     this.setState({
                       paused: false,
                     });
                   })
           }}
       /> */}
        <VlCPlayerView
        style={{marginTop: 100}}
          autoplay={false}               //视频播放结束时调用this.vlcPlayer.resume(false)方法
          url={'https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_328472297677498_628560526670036992_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=666&oh=525339da68850d0a63a77fab3d30a1dc&oe=5B718C21'}           //视频url
          Orientation={Orientation}
          // BackHandle={()=> alert('oke')}
          ggUrl=""                      // 广告url
          showGG={false}                 // 是否显示广告
          showTitle={true}              // 是否显示标题
          title=""                      // 标题
          // showBack={true}               // 是否显示返回按钮
          onLeftPress={() => { }}          // 返回按钮点击事件
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
    )
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)