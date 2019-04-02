import React, { Component } from 'react';
import { View } from 'react-native';
import { Select } from 'react-native-option-select';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 50,
          padding: 16,
        }}
      >
        <Select
          onOptionPress={values => {
            console.log(values)
          }}
          optionStyle={{
            text: {
              color: '#333333',
            },
            container: {
              borderBottomWidth: 1,
              borderColor: 'rgb(191, 191, 191)',
              marginRight: -16,
              paddingRight: 20,
            },
          }}
          options={[
            { title: "Title 1", value: 'title1', selected: true },
            { title: "Title 2", value: 'title2' },
            { title: "Title 3", value: 'title3' },
          ]}
        />
      </View>
    );
  }
}
