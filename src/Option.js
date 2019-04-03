import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const SelectedOption = () => {
  return (
    <View
      style={{
        width: 22,
        height: 22,
        backgroundColor: 'blue',
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

const UnselectedOption = () => {
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#9B9B9B',
      }}
    />
  );
}
class Option extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    selected: PropTypes.bool,
    selectedOption: PropTypes.element,
    unselectedOption: PropTypes.element,
    optionStyle: PropTypes.instanceOf(Object),
    disabled: PropTypes.bool,
  };
  
  static defaultProps = {
    multiple: false,
    selectedOption: React.createElement(SelectedOption),
    unselectedOption: React.createElement(UnselectedOption),
    selected: false,
    optionStyle: false,
    disabled: false,
  };

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
    const { multiple, title, unselectedOption, selectedOption, optionStyle, disabled } = this.props;
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
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {active ? selectedOption : unselectedOption}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Option;
