
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from 'react-native-elements';
import * as firebase from 'firebase'
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import UserScreen from '../main/UserScreen';

export default class Loading extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          loading:false,
          currentUser:false
        };
        this.handleSignOut=this.handleSignOut.bind(this);
        this.addIcons=this.addIcons.bind(this);
      }
      static headerIcons={};

      componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          const { currentUser } = firebase.auth()
          this.setState({ currentUser })
          if(this.state.currentUser){
            this.addIcons();
          }
        })
      }
  addIcons=()=>{
    this.props.navigation.setParams({ title:"Profil", 
    headerRight: (
      <MaterialIcon  size={26} style={{marginRight:10}} color='#fff' onPress={() => this.props.navigation.navigate('Settings')} name="cog"></MaterialIcon>
    )});
  }
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(()=> {
        this.props.navigation.setParams({headerTitle:'Profil',headerLeft:null,headerRight:null});
      })
      .catch(error => alert(error.message ))
  }
      static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
      
        return {
          headerTitle: `${state.params && state.params.title ? state.params.title : 'Profil'}`,
          headerLeft: state.params && state.params.headerLeft ? state.params.headerLeft : null,
          headerRight: state.params && state.params.headerRight ? state.params.headerRight : null,
        };
      };
      
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
          <UserScreen props={this.props}/>
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
