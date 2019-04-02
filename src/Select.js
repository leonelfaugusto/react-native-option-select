import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends Component {
  static propTypes = {
    containerStyle: PropTypes.instanceOf(Object),
    multiple: PropTypes.bool,
    options: PropTypes.instanceOf(Array),
    onOptionPress: PropTypes.func,
    optionIcon: PropTypes.instanceOf(Object),
    optionStyle: PropTypes.instanceOf(Object),
    disabled: PropTypes.bool,
  };
  
  static defaultProps = {
    containerStyle: undefined,
    multiple: false,
    options: undefined,
    onOptionPress: undefined,
    optionIcon: undefined,
    optionStyle: undefined,
    disabled: false,
  };

  childs = [];

  constructor(props) {
    super(props);
    const { options, multiple, optionIcon, optionStyle, disabled } = props;
    options.map(child => {
      const newProps = [];
      newProps.multiple = multiple;
      newProps.onChange = this.onChange;
      newProps.key = child.value;
      newProps.title = child.title;
      newProps.value = child.value;
      newProps.selected = child.selected;
      newProps.ref = React.createRef();
      newProps.optionIcon = optionIcon;
      newProps.optionStyle = optionStyle;
      newProps.disabled = disabled;
      this.childs.push(React.createElement(Option, newProps));
      return null;
    });
  }

  onChange = option => {
    const { options, multiple, onOptionPress } = this.props;
    const activedOptions = options;
    if (multiple) {
      option.optionToogle(!option.state.active);
      this.childs.map((child, index) => {
        if (option.props.value === child.ref.current.props.value) {
          activedOptions[index] = {
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
          child.ref.current.optionToogle(!option.state.active);
          activedOptions[index] = {
            selected: !option.state.active,
            title: child.props.title,
            value: child.props.value,
          };
        } else {
          child.ref.current.optionToogle(option.state.active);
          activedOptions[index] = {
            selected: option.state.active,
            title: child.props.title,
            value: child.props.value,
          };
        }
        return null;
      });
    }

    onOptionPress(activedOptions);
  };

  render() {
    const { containerStyle } = this.props;
    return <View style={containerStyle}>{this.childs.map(child => child)}</View>;
  }
}

export default Select;
