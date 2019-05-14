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


export default class LinksScreen extends React.Component {
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
          title={(<LayoutRow><View><Text>{item.title}</Text></View><Text>{item.remainedTime}</Text></LayoutRow>)}
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
          <Tab  heading="Yapılacaklar" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }}>
          <ScrollView>
          {this.renderList('clock')}
          </ScrollView>
          </Tab>
          <Tab heading="İlanlarım" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{backgroundColor: "white"}}>
          <ScrollView>
          {this.renderList('file')}
          </ScrollView>
          </Tab>
          <Tab heading="Tekliflerim" activeTabStyle={{ backgroundColor: "white" }} tabStyle={{backgroundColor: "white"}}>
          <ScrollView>
          {this.renderList('flag')}
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
    title:'Araba expertiz raporu',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'2',
    title: 'Yaşlı karşılama',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username:'oguz',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'diger',
    city:'İstanbul'
  },
  {
    id:'3',
    title: 'Ev bakılacak',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'4',
    title: 'Araba expertiz raporu',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'5',
    title: 'Yaşlı karşılama',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    remainedTime:'16s',
    categorie:'diger',
    city:'İstanbul'
  },
  {
    id:'6',
    title: 'Ev bakılacak',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
