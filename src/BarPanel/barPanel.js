import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

export default class BarPanel extends Component {
  static propTypes = {
    renderButton: PropTypes.func.isRequired,
    buttonsConfiguration: PropTypes.array.isRequired,
  }

  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.forceUpdate();
    });
  }

  renderButtons = buttonsConfiguration => {
    const buttonsArray = buttonsConfiguration.map((item, index) => (
      <View key={`key_${index}`}>
        {this.props.renderButton(item)}
      </View>
    ));

    return <View style={{ ...style.container, backgroundColor: buttonsConfiguration[0].backgroundColor, borderTopColor: buttonsConfiguration[0].borderColor }}>{buttonsArray}</View>
  }

  render() {
    return this.renderButtons(this.props.buttonsConfiguration);
  }
}