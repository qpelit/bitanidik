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
import { connect } from 'react-redux';
import { updateUserInfo } from '../../../actions/userInfo';

const education = Education.education;
const provinces = Provinces.provinces;
const work = Work.work;

class EditUserInfoScreen extends React.Component {
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      education: null,
      work: null,
      quickInfo:null
    };
    this.state = {
      userData:{
      province:this.props.userInfo.province,
      education:this.props.userInfo.education,
      work:this.props.userInfo.work,
      birthDay:this.props.userInfo.birthDay,
      quickInfo:this.props.userInfo.quickInfo
      }
    };
  }
    static navigationOptions= ({navigation}) => {
    return {
      headerTitle: 'Ayarlar'
    }
    }
  saveUserInfosToDB = ()=>{
    const { goBack } = this.props.navigation;
    const {userData} = this.state;
    firebase.database().ref('/userInfos/'+ firebase.auth().currentUser.uid).update({...userData}).
    then(()=>{this.props.updateUserData({...userData}); goBack()}).catch();
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
            state => (state.userData.province = value, state)
          );
        }}
        value={this.state.userData.province}
        ref={el => {
          this.inputRefs.province = el;
        }}
      />
      <InputPicker
        placeholderLabel='Eğitim durumunuzu seçiniz...'
        items={education}
        onValueChange={value => {
          this.setState(
            state => (state.userData.education = value, state)
          );
        }}
        label='Eğitim'
        // onUpArrow={() => {
        //   this.inputRefs.education.focus();
        // }}
        // onDownArrow={() => {
        //   this.inputRefs.textArea.togglePicker();
        // }}
        value={this.state.userData.education}
        ref={el => {
          this.inputRefs.education = el;
        }}
      />
      <InputDatePicker
      label='Doğum Yılınız'
      placeholder='Doğum tarihinizi seçiniz...'
      date={this.state.userData.birthDay}
      format="DD-MM-YYYY"
      minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 120))}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 10))}
      onDateChange={(date) => {this.setState(state => (state.userData.birthDay = date, state))}}
      />
      <InputPicker
        placeholderLabel='İş durumunuzu seçiniz...'
        items={work}
        label='İş Durumu'
        onValueChange={value => {
          this.setState(
            state => (state.userData.work = value, state)
          );
        }}
        value={this.state.userData.work}
        ref={el => {
          this.inputRefs.work = el;
        }}
      />
    <InputText
      placeholder="Profilinde yayınlanacak birşeyler yaz..."
      label='Ön Yazı'
      numberOfLines={10}
      value={this.state.userData.quickInfo}
      onChangeText={value => {
        this.setState(
          state => (state.userData.quickInfo = value, state)
        );
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
    padding:10
  }
});
const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.userInfo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateUserData: (userInfo) => {
      dispatch(updateUserInfo(userInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserInfoScreen)

