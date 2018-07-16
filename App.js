/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  // orientation

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
    Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation);
    Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation);
  }

  _updateOrientation = (orientation) => this.setState({ orientation });
  _updateSpecificOrientation = (specificOrientation) => this.setState({ specificOrientation });
  // end config orientation


  render() {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          controlTimeout={10000}
          navigator={this.props.navigator}
          onEnterFullscreen={Orientation.lockToLandscape}
          onExitFullscreen={Orientation.lockToPortrait}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
