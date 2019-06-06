import React from 'react';
import {StyleSheet,
  Platform,
  View } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Categories from '../../constants/Categories';
import Provinces from '../../constants/Provinces';
import {InputPicker} from '../../components/input/InputPicker';
import {InputDatePicker} from '../../components/input/InputDatePicker';
import {InputText} from '../../components/input/InputText';
import Button from '../../components/Button';
import * as firebase from 'firebase'


const categories = Categories.categories;
const provinces = Provinces.provinces;

export default class AddPostScreen extends React.Component {
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      textArea:null
    };
    this.state = {
      newPostData:{
      province:null,
      category: null,
      title:'',
      content:'',
      userId:firebase.auth().currentUser.uid,
      lastDate:new Date(),
      budget:''
      }
      };
  }
  saveNewPostToDB = ()=>{
    const { goBack } = this.props.navigation;
    const {newPostData} = this.state;
    
    firebase.database().ref('/posts/').push({...newPostData}).
    then(()=>{}).catch();
  };
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
          this.setState(
            state => (state.newPostData.province = value, state)
          );
        }}
        value={this.state.newPostData.province}
        ref={el => {
          this.inputRefs.province = el;
        }}
      />
      <InputPicker
        placeholderLabel='Kategori seçiniz...'
        items={categories}
        onValueChange={value => {
          this.setState(
            state => (state.newPostData.category = value, state)
          );
        }}
        value={this.state.newPostData.category}
        label='Kategori'
        ref={el => {
          this.inputRefs.category = el;
        }}
      />
      <InputDatePicker
      label='Son Tarih'
      date={this.state.newPostData.lastDate}
      mode="date"
      format="DD-MM-YYYY"
      minDate={new Date()}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      onDateChange={(date) => {this.setState(state => (state.newPostData.lastDate = date, state))}}
      />
      <InputText
      placeholder="Başlık yaz..."
      label='Başlık'
      value={this.state.newPostData.title}
      onChangeText={value => {
        this.setState(
          state => (state.newPostData.title = value, state)
        );
      }}
      numberOfLines={1}
      multiline={false}
    />
    <InputText
      placeholder="İçerik yaz..."
      label='Tanıdıktan İstenenler'
      numberOfLines={10}
      value={this.state.newPostData.content}
      onChangeText={value => {
        this.setState(
          state => (state.newPostData.content = value, state)
        );
      }}
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
      value={this.state.newPostData.budget}
      onChangeText={value => {
        this.setState(
          state => (state.newPostData.budget = value, state)
        );
      }}
      multiline={false}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
         <Button
         iconName="laugh-beam"
         title='Tanıdıklara Duyur!'
         onPress={()=>this.saveNewPostToDB()}
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
    padding:10
  }
});
