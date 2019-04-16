import React from 'react'
import { StyleSheet, View } from 'react-native';
import {Button, Avatar, Text, Rating} from 'react-native-elements';
import * as firebase from "firebase";
import {Tab, Tabs, ScrollableTab } from 'native-base';
import UserInformationScreen from '../screens/UserInformationScreen'
import MaterialIcon from "react-native-vector-icons/FontAwesome5";

export default class SettingsScreen extends React.Component {
  state = { currentUser: null, userInformations: null}
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      category: null,
      textArea:null
    };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase.database().ref('/userInfos/'+ firebase.auth().currentUser.uid).once('value')
    .then(snapshot=> this.setState({userInformations : snapshot.val() }))
    .catch(error => this.setState({ errorMessage: error.message }));
    
    this.setState({ currentUser })
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(()=> this.props.navigation.navigate('Loading'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    const { currentUser } = this.state
    const { userInformations } = this.state

    return (
      <View style={styles.container}>
      <View style={styles.wrapper}>
      <View style={{flexDirection:'column'}}>
       <Text h3 style={{paddingVertical:20}}>
        {userInformations && userInformations.name}
        </Text>
       <Text h5 style={{marginTop:-15}}>
        Yeni Tanıdık
        </Text>
        </View>
        <View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',paddingHorizontal:10}}>
         <Avatar
          rounded
          size="large"
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown2-512.png',
          }}
          showEditButton
        />
        </View>
        <View style={{flexDirection:'row',alignItems:'baseline'}}>
        <Rating
          style={{paddingVertical:10}}
          imageSize={20}
          readonly
          startingValue={5}
        />
        <Text style={{paddingHorizontal:2 ,paddingBottom:4}}>(0)</Text>
        </View>
        </View>
      </View>

      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f65857' }} renderTabBar={()=> <ScrollableTab  style={{ backgroundColor: "white" }}  />}  >
          <Tab  heading="Bilgiler" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }}>
          <UserInformationScreen/>
          </Tab>
          <Tab heading="Yorumlar" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{backgroundColor: "white"}}>
          </Tab>
        </Tabs>


        <Button title="Çıkış Yap" style={{paddingVertical:5}} onPress={this.handleSignOut.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    padding:20,
    flexDirection: 'row',
    justifyContent:'space-between'
  }
})

