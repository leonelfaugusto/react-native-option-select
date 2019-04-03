import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
    multiple: PropTypes.bool,
    onOptionPress: PropTypes.func,
    disabled: PropTypes.bool,
    unselectedOption: PropTypes.element,
    selectedOption: PropTypes.element,
    optionStyle: PropTypes.instanceOf(Object),
    containerStyle: PropTypes.instanceOf(Object),
  };
  
  static defaultProps = {
    containerStyle: {},
    multiple: false,
    onOptionPress: () => null,
    unselectedOption: undefined,
    selectedOption: undefined,
    optionStyle: {},
    disabled: false,
  };

  constructor(props) {
    super(props);
    const { options, multiple, optionStyle, disabled, selectedOption, unselectedOption } = props;
    this.childs = options.map(child => {
      const newProps = [];
      newProps.multiple = multiple;
      newProps.onChange = this.onChange;
      newProps.key = child.value;
      newProps.title = child.title;
      newProps.value = child.value;
      newProps.selected = child.selected;
      newProps.ref = React.createRef();
      newProps.selectedOption = selectedOption;
      newProps.unselectedOption = unselectedOption;
      newProps.optionStyle = optionStyle;
      newProps.disabled = disabled;
      return React.createElement(Option, newProps);
    });
  }

  onChange = option => {
    const { options, multiple, onOptionPress } = this.props;
    const activatedOptions = options;
    if (multiple) {
      option.optionToggle(!option.state.active);
      this.childs.map((child, index) => {
        if (option.props.value === child.ref.current.props.value) {
          activatedOptions[index] = {
            selected: !option.state.active,
            title: child.props.title,
            value: child.props.value,
          };
        }
        return null;
      });
    } else {
      this.childs.map((child, index) => {
        if (option.props.value === child.ref.current.props.value) {
          child.ref.current.optionToggle(!option.state.active);
          activatedOptions[index] = {
            selected: !option.state.active,
            title: child.props.title,
            value: child.props.value,
          };
        } else {
          child.ref.current.optionToggle(option.state.active);
          activatedOptions[index] = {
            selected: option.state.active,
            title: child.props.title,
            value: child.props.value,
          };
        }
        return null;
      });
    }

    onOptionPress(activatedOptions);
  };

  render() {
    const { containerStyle } = this.props;
    return <View style={containerStyle}>{this.childs.map(child => child)}</View>;
  }
}

export default Select;
