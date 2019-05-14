import React, { Component } from 'react';
import {StyleSheet,
  View } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Education from '../../../constants/userInfo/Education';
import Work from '../../../constants/userInfo/Work';
import Provinces from '../../../constants/Provinces';
import {InputPicker} from '../../../components/input/InputPicker';
import {InputDatePicker} from '../../../components/input/InputDatePicker';
import {InputText} from '../../../components/input/InputText';
import Button from '../../../components/Button';
import * as firebase from 'firebase'


const education = Education.education;
const provinces = Provinces.provinces;
const work = Work.work;

export default class EditUserInfoScreen extends React.Component {
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      education: null,
      work: null,
      quickInfo:null
    };
    this.state = {
      province:null,
      education:null,
      work:null,
      birthDay:null,
      quickInfo:null
    };
  }
    static navigationOptions= ({navigation}) => {
    return {
      headerTitle: 'Ayarlar'
    }
    }
  saveUserInfosToDB = ()=>{
    firebase.database().ref('/userInfos/'+ firebase.auth().currentUser.uid).update({
      province: this.state.province,
      birthDay: this.state.birthDay,
      work : this.state.work,
      education : this.state.education,
      quickInfo : this.state.quickInfo
    }).then(()=>this.props.navigation.push('Loading',{'userInfos':this.state})).catch();
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
        placeholderLabel='Eğitim durumunuzu seçiniz...'
        items={education}
        onValueChange={value => {
          this.setState({
            education: value,
          });
        }}
        label='Eğitim'
        // onUpArrow={() => {
        //   this.inputRefs.education.focus();
        // }}
        // onDownArrow={() => {
        //   this.inputRefs.textArea.togglePicker();
        // }}
        value={this.state.education}
        ref={el => {
          this.inputRefs.education = el;
        }}
      />
      <InputDatePicker
      label='Doğum Yılınız'
      placeholderLabel='Doğum tarihinizi seçiniz...'
      date={this.state.birthDay}
      mode="date"
      format="DD-MM-YYYY"
      minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 120))}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 10))}
      onDateChange={(birthDay) => {this.setState({birthDay: birthDay})}}
      />
      <InputPicker
        placeholderLabel='İş durumunuzu seçiniz...'
        items={work}
        label='İş Durumu'
        onValueChange={value => {
          this.setState({
            work: value,
          });
        }}
        value={this.state.work}
        ref={el => {
          this.inputRefs.work = el;
        }}
      />
    <InputText
      placeholder="Profilinde yayınlanacak birşeyler yaz..."
      label='Ön Yazı'
      numberOfLines={10}
      onChangeText={value => {
        this.setState({
          quickInfo: value,
        });
      }}
      multiline={true}
      style={{height: 150,justifyContent: "flex-start"}}
       ref={el => {
        this.inputRefs.quickInfo = el;
      }}
    />
  </View>
      </KeyboardAwareScrollView>
    <Button
     title='Kaydet'
     iconName='save'
     onPress={()=>this.saveUserInfosToDB()}
     />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
