import React, { Component } from 'react';
import {StyleSheet,View,Text } from 'react-native';
import {ListItem} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import * as firebase from 'firebase'
import Button from '../../components/Button';

export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      province:null,
    };
    this.handleSignOut=this.handleSignOut.bind(this);

  }
  static navigationOptions= ({navigation}) => {
    return {
      headerTitle: 'Ayarlar',
    }
    }
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(()=> {
        this.props.navigation.navigate('Loading',{headerRight:null});
      })
      .catch(error => alert(error.message ))
  }
  render() {
    const personalList = [
      {
        title: ' İsim',
        icon: 'user-circle'
      },
      {
        title: ' E-posta',
        icon: 'envelope'
      },
      {
        title: ' Konum',
        icon: 'compass'
      },
      {
        title: 'Profil Biyografi',
        icon: 'address-card',
        screen: 'EditUserInfo'
      },
    ];
    const otherList = [
      {
        title: ' Bildirimler',
        icon: 'bell'
      },
      {
        title: 'Yardım',
        icon: 'life-ring'
      },
      {
        title: 'Hata Bildir',
        icon: 'bug'
      },
      {
        title: ' Şartlar ve Koşullar',
        icon: 'user-secret'
      },
      {
        title: ' Politika',
        icon: 'book'
      },
    ];
    return (
      <ScrollView style={styles.container}>
      <Text style={{padding:15,fontSize:15}}>Profil</Text>
      <View>
        {
          personalList.map((item, i) => (
            <ListItem
              key={i}
              topDivider={true}
              title={item.title}
              titleStyle={{fontSize:16}}
              leftIcon={<MaterialIcon
                name={item.icon}
                color='#ff5959'
                size={16}
                />}
              bottomDivider={true}
              onPress={()=>this.props.navigation.navigate(item.screen)}
              chevron={true}
            />
          ))
        }
      </View>
      <Text style={{padding:15,fontSize:15}}>Diğer</Text>
      <View>
        {
          otherList.map((item, i) => (
            <ListItem
              key={i}
              topDivider={true}
              title={item.title}
              titleStyle={{fontSize:16}}
              leftIcon={<MaterialIcon
                name={item.icon}
                color='#ff5959'
                size={16}
                />}
              bottomDivider={true}
              chevron={true}
            />
          ))
        }
      </View>
     

      <Button
              iconName="sign-out-alt"
              title='Çıkış Yap'
              backgroundColor='#d0cece'
              style={{paddingTop:5}}
              onPress={() => this.handleSignOut()} 
                />
          
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
