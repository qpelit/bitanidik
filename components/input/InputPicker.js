import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';

export class InputPicker extends React.Component {
  render() {
    const placeholder = {
      value: null,
      color: '#9EA0A4',
    };
    const pickerStyle = StyleSheet.flatten([
      pickerSelectStyles,
      [this.props.style],
    ]);
    return (
      <View style={{padding:5}}>
        <Text style={itemTextStyle.itemText}>{this.props.label}</Text>
        <RNPickerSelect
        placeholder={{...placeholder,label:this.props.placeholderLabel}}
        style={pickerSelectStyles}
        {...this.props} 
      />
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#d8d6d6',
    borderRadius: 4,
    color: '#8a8686',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: '#d8d6d6',
    borderRadius: 8,
    color: 'black',
  },
});
const itemTextStyle = StyleSheet.create({
  itemText: {
    color: '#3d3e43',
    paddingBottom:5,
    fontWeight: 'bold',
    fontSize:15,
  }
});