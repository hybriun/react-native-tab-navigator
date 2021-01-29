import React, { Component } from 'react';
import TabButton from './tabButton';
import PropTypes from 'prop-types';

export default class TabButtonContainer extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    viewWidth: PropTypes.oneOfType([PropTypes.number, undefined]),
    buttonConfiguration: PropTypes.object.isRequired,
  }

  render() {
    return (
      <TabButton
        onPress={this.props.onPress}
        viewWidth={this.props.viewWidth}
        buttonConfiguration={this.props.buttonConfiguration} />
    );
  }
}