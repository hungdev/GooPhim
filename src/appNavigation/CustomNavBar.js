import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, LayoutAnimation, TouchableOpacity, Keyboard } from 'react-native'

// import SearchActions from '../Redux/SearchRedux'

import NavItems from './NavItems'
import styles from './styles/CustomNavBarStyles'
import SearchBar from '../component/SearchBar'
import { connect } from 'react-redux'
import { Metrics, Colors } from '../themes'
import Icon from 'react-native-vector-icons/Ionicons'

class CustomNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSearchBar: false
    }
  }

  openDrawer = () => {
    Keyboard.dismiss()
    this.props.navigation.openDrawer()
  }

  showSearchBar = () => {
    this.setState({showSearchBar: true})
  }

  cancelSearch = () => {
    this.setState({showSearchBar: false})
    this.props.cancelSearch ? this.props.cancelSearch() : null
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm)
  }

  onClearText () {
    this.props.clearText()
  }

  onChangeTextFunc(text) {
    const {onChangeText} = this.props
    onChangeText ? onChangeText(text) : null
  }

  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (this.state.showSearchBar) {
      return (
        <SearchBar
          // onSearch={(text) => this.onSearch(text)}
          onSubmitEditing={(query) =>this.props.onSubmitEditing(query)}
          onCancel={this.cancelSearch}
          onClearText={() => this.onClearText()}
          onChangeText={(text)=> this.onChangeTextFunc(text) }
        />
      )
    } else {
      if (this.props.title) {
        return (
          <View style={styles.titleWrapper}>
            <Text style={{color: '#fff', fontSize: 18}}>{this.props.title}</Text>
          </View>
        )
      }
    }
  }

  renderRightButtons () {
    if (this.state.showSearchBar) {
      return <View style={{width: Metrics.icons.medium}} />
    } else {
      return (
        <View style={styles.rightButtons}>
          {NavItems.searchButton(this.showSearchBar)}
        </View>
      )
    }
  }

  renderLeftButtons () {
    if (this.state.showSearchBar) {
      return null
    } else {
      return (
        <TouchableOpacity onPress={this.openDrawer}>
          <Icon name='ios-menu-outline'
            size={Metrics.icons.medium}
            color={Colors.snow}
            style={styles.navButtonLeft}
          />
        </TouchableOpacity>
      )
    }
  }

  render () {
    // let state = this.props.navigationState
    // let selected = state.children[state.index]
    // while (selected.hasOwnProperty('children')) {
    //   state = selected
    //   selected = selected.children[selected.index]
    // }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      // state.navigationBarStyle,
      // selected.navigationBarStyle
    ]

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

// CustomNavBar.propTypes = {
//   navigationState: PropTypes.object,
//   navigationBarStyle: View.propTypes.style
// }

const mapStateToProps = (state) => {
  return {
    // searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // performSearch: (searchTerm) => dispatch(SearchActions.search(searchTerm)),
    // showSearchBar: () => dispatch(SearchActions.showSearchBar()),
    // cancelSearch: () => dispatch(SearchActions.cancelSearch()),
    // clearText: () => dispatch(SearchActions.clearText())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
