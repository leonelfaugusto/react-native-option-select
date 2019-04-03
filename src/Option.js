import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Option extends Component {
  constructor(props) {
    super(props);
    const { selected } = props;
    this.state = {
      active: selected,
    };
  }

  optionPressed = () => {
    const { onChange } = this.props;
    onChange(this);
  };

  optionToggle = state => {
    this.setState({ active: state });
  };

  render() {
    const { active } = this.state;
    const { multiple, title, optionIcon, optionStyle, disabled } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.optionPressed}
        disabled={(active && !multiple) || disabled}
      >
        <View style={{ ...optionStyle.container, flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              ...optionStyle.text,
              lineHeight: 40,
              fontSize: 16,
              flex: 1,
            }}
          >
            {title}
          </Text>
          {active && optionIcon}
          {!optionIcon && active && (
            <View
              style={{
                width: 22,
                height: 22,
                backgroundColor: 'red',
                borderRadius: 11,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
          {!optionIcon && !active && (
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                borderWidth: 1,
                borderColor: '#9B9B9B',
              }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Option.propTypes = {
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  optionIcon: PropTypes.instanceOf(Object),
  optionStyle: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
};

Option.defaultProps = {
  multiple: false,
  optionIcon: undefined,
  selected: false,
  optionStyle: false,
  disabled: false,
};

export default Option;
