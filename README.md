# rn-option-select
[![npm version](https://badge.fury.io/js/rn-option-select.svg)](https://badge.fury.io/js/rn-option-select) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An simple and customizable react-native select.

## Features

- Single / multiple choices
- Customizable styles

## Demos

<p align="center">
<img src="https://raw.githubusercontent.com/leonelfaugusto/rn-option-select/master/examples/gifs/simulator.gif" height="400" />
<img src="https://raw.githubusercontent.com/leonelfaugusto/rn-option-select/master/examples/gifs/simulator2.gif" height="400" />
<img src="https://raw.githubusercontent.com/leonelfaugusto/rn-option-select/master/examples/gifs/simulator3.gif" height="400" />
</p>

## Setup

This library is available on npm, install it with: `npm install --save rn-option-select` or `yarn add rn-option-select`.

## Usage

1.  Import rn-option-select:

```javascript
import { Select } from "rn-option-select";
```

1.  Create a select:

```javascript
const options = 
[
    { title: "Title 1", value: 'title1' },
    { title: "Title 2", value: 'title2', selected: true },
    { title: "Title 3", value: 'title3' },
]

render () {
    return (
      <View>
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
            },
          }}
          options={options}
        />
      </View>
    )
  }
```

## Available props

| Name                           | Type             | Default                                       | Description                                     |
| ------------------------------ | ---------------- | --------------------------------------------- | ----------------------------------------------- |
| options                        | array            | **REQUIRED**                                  | Array of values objects [more](#options-array)  |
| multiple                       | bool             | false                                         | Select multiple values                          |
| onOptionPress                  | func             | ( ) => null                                   | Called when option is pressed (`values` as arg) [more](#onoptionpress) |
| disabled                       | bool             | false                                         | Disable select                                  |
| unselectedOption               | React.element    | A circular `View` with a border               | Override element for unselected options         |
| selectedOption                 | React.element    | A circular `View` with backgroundColor: 'blue'| Override element for selected options           |
| containerStyle                 | Object           | { }                                           | A `Object` with styles for select container     | 
| optionStyle                    | Object           | { }                                           | A `Object` with styles for options              |

## Options Array
###### Basic example
```javascript
[
    { title: "Title 1", value: 'title1' },
    { title: "Title 2", value: 'title2' },
    { title: "Title 3", value: 'title3' },
]
```
###### One option selected on render
```javascript
[
    { title: "Title 1", value: 'title1', selected: true },
    { title: "Title 2", value: 'title2' },
    { title: "Title 3", value: 'title3' },
]
```
###### Title with a React.element
```javascript
[
    {
        title: <View><Text>Whatever you want here</Text></View>,
        value: 'title1',
        selected: true,
    },
    {
        title: "You can pass strings or React.element",
        value: 'title2',
    },
    {
        title: <View><Text>Whatever you want here too</Text></View>,
        value: 'title3',
    },
]
```

## onOptionPress
```javascript
<Select
    ...
    onOptionPress={values => {
        this.setState({ options: values });
    }}
    ...
/>
```
>`values` is an Array like options array with selected options.




Pull requests, feedbacks and suggestions are welcome!
