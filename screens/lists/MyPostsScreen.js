import React from 'react';
import {StyleSheet,View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import { LayoutRow } from '../../components/view/LayoutRow';
import * as firebase from "firebase";

export default class MyPostsScreen extends React.Component {
  state = { postList: [], what: ''}
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase.database()
    .ref('posts/')
    .orderByChild('userId')
    .equalTo(currentUser.uid)
    .on('value',(snapshot)=>{
      var arr=[];
      snapshot.forEach((childSnapshot)=>{
          arr.push(childSnapshot.val())
        })
        this.setState({
          postList :arr && arr || []
        })
      }), function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      };
    
    this.setState({ currentUser })
  }
  renderList = (list) => {
    return(
      list.map((item, i) => (
        <ListItem
          key={i}
          leftIcon={<MaterialIcon
            name='file'
            color='#ff5959'
            size={22}
            />}
          titleStyle={{fontSize:15.5}}
          title={(<LayoutRow><View><Text>{item.title}</Text></View><Text>{item.lastDate}</Text></LayoutRow>)}
          bottomDivider={list.length-1==i?false:true}
          chevron={true}
        />
      ))
    )
  };
  render() {
    const { x } = this.state
    const { y } = this.state

    return (
      <View style={styles.container}>
         <ScrollView>
          {this.renderList(this.state.postList)}
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    color:"#808080",
    fontSize:22,
    paddingVertical:4,
  },
});

const list = [
  {
    id:'1',
    subject: 'Araba expertiz raporu',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  }];