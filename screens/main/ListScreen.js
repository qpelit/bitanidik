import React from 'react';
import {StyleSheet,
  Platform,
  View,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Text,Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import {Tab, Tabs, ScrollableTab } from 'native-base';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import { LayoutRow } from '../../components/view/LayoutRow';
import moment from "moment";
import Button from '../../components/Button'
import MyPostsScreen from '../lists/MyPostsScreen'
import MyBidsScreen from '../lists/MyBidsScreen';
 export default class ListScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: list,
      error: null,
    };

    this.arrayholder = [];
  }

  renderList = (type) => {
    return(
      list.map((item, i) => (
        <ListItem
          key={i}
          leftIcon={<MaterialIcon
            name={type}
            color='#ff5959'
            size={22}
            />}
          titleStyle={{fontSize:15.5}}
          title={(<LayoutRow><View><Text>{item.subject}</Text></View><Text>{item.remainedTime}</Text></LayoutRow>)}
          bottomDivider={list.length-1==i?false:true}
          chevron={true}
        />
      ))
    )
  };
  render() {
    return (
      <View style={styles.container}>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f65857' }}  edgeHitWidth={5} 
            renderTabBar={()=> <ScrollableTab  style={{ backgroundColor: "white" }}  />} >
          <Tab  heading="İlanlarım" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }}>
          <ScrollView>
          <MyPostsScreen/>
          </ScrollView>
          <Button
          title='Yeni İlan Ver'
          iconName='plus'
          onPress={()=>this.props.navigation.navigate("AddPost")}
          />
          </Tab>
          <Tab heading="Yapılacaklar" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{backgroundColor: "white"}}>
          <ScrollView>
          {this.renderList('clock')}
          </ScrollView>
          </Tab>
          <Tab heading="Tekliflerim" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{backgroundColor: "white"}}>
          <ScrollView>
          <MyBidsScreen/>
          </ScrollView>
          </Tab>
        </Tabs>
      </View>
    );
  }
}
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
  },
  {
    id:'2',
    subject: 'Yaşlı karşılama',
    username:'oguz',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'diger',
    city:'İstanbul'
  },
  {
    id:'3',
    subject: 'Ev bakılacak',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'4',
    subject: 'Araba expertiz raporu',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'5',
    subject: 'Yaşlı karşılama',
    username:'oguz',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'diger',
    city:'İstanbul'
  },
  {
    id:'6',
    subject: 'Ev bakılacak',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  }
];
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
