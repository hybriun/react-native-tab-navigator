import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BarPanel from './barPanel';

export default class BarPanelContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    buttonsConfiguration: PropTypes.array.isRequired,
  }

  onButtonPress = buttonConfig => this.props.navigate(buttonConfig.key);

  renderButton = buttonConfig => (
    <buttonConfig.buttonView
      buttonConfiguration={buttonConfig}
      onPress={() => this.onButtonPress(buttonConfig)} />
  );

  render() {
    return (
      <BarPanel
        renderButton={this.renderButton}
        buttonsConfiguration={this.props.buttonsConfiguration} />
    );
  }
}