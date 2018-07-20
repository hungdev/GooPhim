import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles/SearchBarStyles'
import { Colors, Metrics } from '../themes/'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import I18n from 'react-native-i18n'

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onClearText: PropTypes.func.isRequired,
    searchTerm: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  onChangeText(text) {
    const { onChangeText } = this.props
    this.setState({ query: text })
    onChangeText ? onChangeText(text) : null
  }

  onCancelPress() {
    const { onCancel } = this.props
    onCancel ? onCancel() : null
  }

  render() {
    const { onSearch, onCancel, searchTerm, onClearText } = this.props
    const { query } = this.state
    // const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <View style={styles.container}>
        <View style={styles.inputWrap}>
          <Icon name='search' size={Metrics.icons.tiny} style={styles.searchIcon} />
          <TextInput
            ref='searchText'
            autoFocus
            placeholder='Search'
            placeholderTextColor={Colors.snow}
            underlineColorAndroid='transparent'
            style={styles.searchInput}
            value={query}
            onChangeText={(text) => this.onChangeText(text)}
            autoCapitalize='none'
            onSubmitEditing={() => this.props.onSubmitEditing(query)}
            returnKeyType={'search'}
            autoCorrect={false}
            selectionColor={Colors.snow}
          />
          {
            searchTerm && searchTerm.trim() ? (
              <TouchableOpacity activeOpacity={0.7} onPress={onClearText}>
                <Ionicons name='ios-close-circle' size={Metrics.icons.tiny} style={styles.clearTextIcon} />
              </TouchableOpacity>) : null
          }
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this.onCancelPress()} style={styles.cancelButton}>
          <Text style={styles.buttonLabel}>cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
