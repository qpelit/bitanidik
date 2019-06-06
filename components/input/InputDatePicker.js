import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

export class InputDatePicker extends React.Component {
  render() {
    const placeholder = {
      value: null,
      color: '#79797b',
    };
    return (
      <View style={{padding:5}}>
        <Text style={styles.itemText}>{this.props.label}</Text>
        <DatePicker
        {...this.props}
        fontSize={25}
        style={{width: '120%'}}
        style={[this.props.style,{width: 200}]}
        showIcon={false}
        locale="tr_tr"
        placeholderText={placeholder}
        confirmBtnText="Tamam"
        cancelBtnText="İptal"
        customStyles={{
          dateInput: {
            ...styles.textAreaContainer,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
          }
        }}
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
    height:'110%',
    borderWidth: 1.5,
    borderColor: '#d8d6d6',
    borderRadius: 4,
    color: '#3d3e43',
    }
});