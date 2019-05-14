import React from 'react';
import {StyleSheet,
  Platform,
  View } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Categories from '../../../constants/Categories';
import Provinces from '../../../constants/Provinces';
import {InputPicker} from '../../../components/input/InputPicker';
import {InputDatePicker} from '../../../components/input/InputDatePicker';
import {InputText} from '../../../components/input/InputText';
import Button from '../../../components/Button';


const categories = Categories.categories;
const provinces = Provinces.provinces;

export default class AddPostScreen extends React.Component {
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
      <View style={styles.container}>
      <KeyboardAwareScrollView  
      enableOnAndroid
      enableAutomaticScroll>
      <View>
      <InputPicker
        placeholderLabel='İl seçiniz...'
        items={provinces}
        label='Şehir'
        onValueChange={value => {
          this.setState({
            province: value,
          });
        }}
        value={this.state.province}
        ref={el => {
          this.inputRefs.province = el;
        }}
      />
      <InputPicker
        placeholderLabel='Kategori seçiniz...'
        items={categories}
        onValueChange={value => {
          this.setState({
            category: value,
          });
        }}
        label='Kategori'
        onUpArrow={() => {
          this.inputRefs.category.focus();
        }}
        onDownArrow={() => {
          this.inputRefs.textArea.togglePicker();
        }}
        value={this.state.category}
        ref={el => {
          this.inputRefs.category = el;
        }}
      />
      <InputDatePicker
      label='Son Tarih'
      date={this.state.date}
      mode="date"
      format="DD-MM-YYYY"
      minDate={new Date()}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      onDateChange={(date) => {this.setState({date: date})}}
      />
    <InputText
      placeholder="Birşeyler yaz..."
      label='Tanıdıktan İstenen'
      numberOfLines={10}
      multiline={true}
      style={{height: 150,justifyContent: "flex-start"}}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
    <InputText
      placeholder="Miktar giriniz..."
      label='Ortalama Bütçem'
      keyboardType='numeric'
      numberOfLines={1}
      multiline={false}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
         <Button
         iconName="laugh-beam"
         title='Tanıdık Bul!'
           />
  </View>
      </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
