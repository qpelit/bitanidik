import React from 'react';
import * as firebase from "firebase";
import {View} from 'react-native';
import {Button} from 'react-native-elements';

export default class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: 'qpelit@gmail.com', password: 'Qwe.red07', error: ''};
    this.onLoginSuccess=this.onLoginSuccess.bind(this)
    this.onButtonPress=this.onLoginSuccess.bind(this)
}
  static navigationOptions = {
    title: 'app.json',
  };
  onButtonPress() {
   this.setState({ error: '', loading: true })
   const { email, password } = this.state;
   firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak password!')
            } else {
              this.onLoginFailure.bind(this)(errorMessage)
            }
          });
      });
  }
  onLoginSuccess() {
    this.setState({
      email: '', password: '', error: '', loading: false
    })
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false })
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    
    //async function signup (email, pass) {
    
  return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Button onPress={this.onButtonPress} title='üye ol!'></Button>
        </View>
      
    );
  }
}




