import React from 'react'
import { StyleSheet, TextInput, View,Button,Platform } from 'react-native';
import {Button as ButtonElement,Text} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebase from "firebase";
import 'firebase/firestore';

export default class SignUp extends React.Component {
  state = { email: '',phone:'', password: '', name:'',isLogin:false,errorMessage: null}

  handleSignUp = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=>{firebase.database().ref('/userInfos/'+ firebase.auth().currentUser.uid).set({name:this.state.name});
        this.props.navigation.navigate('Loading')}
      )
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Loading'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  static navigationOptions= ({navigation}) => {
    return {
      headerTitle: 'dsa',
      headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    )
    }
  }
  /*
  renderUserNameSection= ()=>{
    if(this.state.isLogin){
      return(
        <TextInput
            placeholder="İsim"
            style={styles.textInput}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
      );
    }
  }
  */
  render() {
    return (
      <KeyboardAwareScrollView  
      enableOnAndroid
      enableAutomaticScroll
      extraHeight={Platform.select({ android: 200 })}>
      <View style={styles.container}>
        <Text h1>bitanıdık</Text>
        <Text style={{fontSize:16}}>bi tanıdığa sorsak mı?</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Mail"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Şifre"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {!this.state.isLogin &&
        <TextInput
            placeholder="İsim"
            style={styles.textInput}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        }
        <ButtonElement title={!this.state.isLogin?'KAYIT OL':'GİRİŞ'} containerStyle={{paddingTop:10}} buttonStyle = {{backgroundColor : '#F95252'}} 
        onPress={!this.state.isLogin?this.handleSignUp:this.handleLogin} />
        <Button
          title={!this.state.isLogin?"Hesabınız var mı? Giriş yapın!":"Hesabınız yok mu? Kayıt olun!"}
          onPress={() => this.setState({isLogin:!this.state.isLogin})}
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:100

  },
  textInput: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#8a8686',
    borderRadius: 4,
    color: '#8a8686',
  }
})
