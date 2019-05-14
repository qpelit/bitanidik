import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import {Text} from 'react-native-elements'

export class InputText extends React.Component {
  render() {
    const placeholder = {
      value: null,
      color: '#79797b',
    };
    return (
      <View style={{padding:10}}>
        <Text style={styles.itemText}>{this.props.label}</Text>
        <TextInput
        {...this.props}
        numberOfLines={this.props.numberOfLines?this.props.numberOfLines:1}
        style={[this.props.style, styles.textAreaContainer]} 
        placeholderTextColor="#9EA0A4"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemText: {
    color: '#3d3e43',
    paddingBottom:5,
    fontWeight: 'bold',
    fontSize:15,
  },
  textAreaContainer: {
    fontSize: 17,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#d8d6d6',
    borderRadius: 4,
    color: '#a09b9b',
    }
});