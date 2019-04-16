
    import React from 'react'
    import { View, Text, StyleSheet } from 'react-native'
    import {Button} from 'react-native-elements';
    import * as firebase from 'firebase'
    import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import SettingsScreen from '../SettingsScreen';
    export default class Loading extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          loading:false,
          currentUser:false
        };
      }
      static headerIcons={};
      componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          const { currentUser } = firebase.auth()
          this.setState({ currentUser })})
      }
      static navigationOptions= ({navigation}) => {
        return {
          headerTitle: 'Profil',
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
      render() {
        if(!this.state.currentUser){
          return (
            <View style={styles.container}>
              <MaterialIcon name='address-card' color='#e5e5e5' size={100} ></MaterialIcon>
              <Text style={{fontSize:16}}>Üye olmadan profil görüntülenemez.</Text>
              <Button title="Üye Ol"  
              buttonStyle = {{backgroundColor : '#F95252'}} 
              containerStyle={{paddingTop:10}} 
              onPress={()=>(this.props.navigation.navigate('SignUp'))}>
              </Button>
            </View>
          )
        }
        return (
          <SettingsScreen props={this.props}/>
        )
        }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
