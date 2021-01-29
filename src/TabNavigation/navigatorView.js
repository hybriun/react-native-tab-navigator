import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import BarPanel from '../BarPanel';

export default class NavigatorView extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    buttonsConfiguration: PropTypes.array.isRequired,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.props.screen}</View>
        <BarPanel
          navigate={this.props.navigate}
          buttonsConfiguration={this.props.buttonsConfiguration} />
      </View>
    );
  }
}