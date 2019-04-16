import React from 'react';
import {StyleSheet,
  TextInput,
  Platform,
  View } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button,Text,Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import Categories from '../constants/Categories';
import Provinces from '../constants/Provinces';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";

const categories = Categories.categories;
const provinces = Provinces.provinces;

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      category: null,
      textArea:null
    };
    this.state = {
      province:null,
      category:null,
      date:new Date(),
    };
  }
  render() {
    const placeholder = {
      value: null,
      color: '#9EA0A4',
    };
    return (
      <KeyboardAwareScrollView  
      enableOnAndroid
      enableAutomaticScroll
      extraHeight={Platform.select({ android: 200 })}>
      <View>
        <View paddingHorizontal={10} >
        <Text style={styles.itemText}>Şehir</Text>
        <RNPickerSelect
          placeholder={{...placeholder,label:'İl seçiniz...'}}
          items={provinces}
          onValueChange={value => {
            this.setState({
              province: value,
            });
          }}
          style={pickerSelectStyles}
          value={this.state.province}
          ref={el => {
            this.inputRefs.province = el;
          }}
        />
      </View>
        <View paddingHorizontal={10} >
        <Text style={styles.itemText}>Kategori</Text>
        <RNPickerSelect
          placeholder={{...placeholder,label:'Kategori seçiniz...'}}
          items={categories}
          onValueChange={value => {
            this.setState({
              category: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.category.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.textArea.togglePicker();
          }}
          style={pickerSelectStyles}
          value={this.state.category}
          ref={el => {
            this.inputRefs.category = el;
          }}
        />
      </View>

        <View paddingHorizontal={10} >
        <Text style={styles.itemText}>Son Tarih</Text>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="Son tarih seçiniz..."
        format="DD-MM-YYYY"
        minDate={new Date()}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        confirmBtnText="Tamam"
        cancelBtnText="İptal"
        customStyles={{
          dateInput: {
            ...styles.textAreaContainer,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        />
        </View>
        </View>
        <View paddingHorizontal={10} >
    <Text style={styles.itemText}>Tanıdıktan İstenen</Text>
    <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      //underlineColorAndroid="transparent"
      placeholder="Birşeyler yaz..."
      placeholderTextColor="#9EA0A4"
      numberOfLines={10}
      multiline={true}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
  </View>

  <Text style={styles.itemText}>Ortalama Bütçe</Text>
  <View style={styles.textAreaContainer} >
    <TextInput
      style={{...styles.textArea,height:20}}
      //underlineColorAndroid="transparent"
      placeholder="Ortalama Bütçem..."
      placeholderTextColor="#9EA0A4"
      keyboardType='numeric'
      numberOfLines={1}
      multiline={false}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
  </View>
        <View paddingVertical={15} >
        <Button
        buttonStyle = {{backgroundColor : '#529BF9'}}
        icon={
          <MaterialIcon
            name="laugh-beam"
            size={28}
            color="white"
          />
        }
        title=" BİTANIDIK BUL!"
      />
        </View>
  </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemText: {
    color: '#3d3e43',
    marginTop:10,
    fontWeight: 'bold',
    fontSize:15,
    paddingVertical:5
  },
  textAreaContainer: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#a09b9b',
    borderRadius: 4,
    color: '#a09b9b',
    },
  textArea: {
    height: 150,
    fontSize: 17,
    color: '#a09b9b',
    backgroundColor: 'transparent',
    justifyContent: "flex-start"
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#a09b9b',
    borderRadius: 4,
    color: '#8a8686',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: '#5c6773',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});