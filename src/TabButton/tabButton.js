import React, { Component } from 'react';
import { TouchableOpacity, Animated, Easing, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const animationDuration = 400;

const borderInterpolationConfig = {
  inputRange: [0, 1],
  outputRange: [20, 0],
};

const rippleOpacityInterpolationConfig = {
  inputRange: [0, 0.1, 1],
  outputRange: [0, 0.3, 0.7],
};

const viewScaleInterpolationConfig = {
  inputRange: [0, 1],
  outputRange: [0.1, 2],
};

export default class TabButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    viewWidth: PropTypes.oneOfType([PropTypes.number, undefined]),
    buttonConfiguration: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { rippleValue: new Animated.Value(0) };
  }

  onPressedIn = onPress => {
    Animated.timing(this.state.rippleValue, {
      toValue: 1,
      duration: animationDuration,
      easing: Easing.bezier(0.0, 0.0, 0.1, 1),
    }).start(() => {
      this.state.rippleValue.setValue(0);
    });
    onPress();
  }

  renderRippleView = ({ rippleColor }) => {
    const { rippleValue } = this.state;
    return (
      <View style={style.rippleViewContainer}>
        <Animated.View
          style={{
            ...style.rippleViewAnimated,
            borderColor: rippleColor,
            borderWidth: rippleValue.interpolate(borderInterpolationConfig),
            opacity: rippleValue.interpolate(rippleOpacityInterpolationConfig),
            transform: [{
              scale: rippleValue.interpolate(viewScaleInterpolationConfig),
            }],
          }} />
      </View>
    );
  }

  renderIconImage = ({ tabIcon, ...buttonConfiguration }) => {
    if (tabIcon) {
      if (typeof tabIcon === 'function') {
        return React.createElement(tabIcon, { ...buttonConfiguration });
      }
    }
    return null;
  }

  renderAnimatedButton = (onButtonPress, buttonConfiguration) => (
    <TouchableOpacity onPress={() => this.onPressedIn(onButtonPress)} style={style.buttonContainer}>
      {this.renderRippleView(buttonConfiguration)}
      <View>
        {this.renderIconImage(buttonConfiguration)}
      </View>
    </TouchableOpacity>
  );

  render() {
    return this.renderAnimatedButton(this.props.onPress, this.props.buttonConfiguration)
  }
}