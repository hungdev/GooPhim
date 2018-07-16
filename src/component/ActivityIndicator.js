import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native'

// import styles from './styles'
import { Colors } from '../themes'

export default class ACIndicator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <ActivityIndicator
        size={this.props.size}
        color={this.props.color}
        style={styles.spinnerStyle} />
    )
  }
}

ACIndicator.defaultProps = {
  size: 'large',
  color: Colors.spinner

}

ACIndicator.propTypes = {
}

const styles = StyleSheet.create({
  spinnerStyle: {
    zIndex: 999,
    position: 'absolute',
    top: '45%',
    left: '45%'
  }
})