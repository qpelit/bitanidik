import React, { Component } from 'react';
import { View, Text, FlatList,Button, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { SText } from '../../components/SText';
import { LayoutRow } from '../../components/view/LayoutRow';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import * as firebase from "firebase";
import Provinces from '../../constants/Provinces';
const provinces = Provinces.provinces;

var defaultNavigationOptions=   {
  headerStyle: {
    backgroundColor: '#F97F51',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


class ListPosts extends Component {
  state = { postList: []}

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: list,
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase.database()
    .ref('posts/')
    .orderByChild('category')
    .equalTo(this.props.navigation.getParam("itemKey"))
    .on('value',(snapshot)=>{
      var arr=[];
      snapshot.forEach((childSnapshot)=>{
          arr.push({"id":childSnapshot.key,...childSnapshot.val()})
        })
        this.setState({
          postList :arr && arr || []
        })
      }), function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      };
    
    this.setState({ currentUser })
  }
  static navigationOptions= ({navigation}) => {
    return {
        headerTitle: navigation.getParam('itemName'),
        headerRight: (
          <MaterialIcon  size={22} style={{marginRight:10}} color='#fff' onPress={() => this.props.navigation.navigate('EditSettings')} name="filter"></MaterialIcon>
        )
          }
    }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = list.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Arama için..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  getCamelCase = (str) =>{
    return str[0]+str.substr(1,str.length).replace(/I/g, 'ı' ).toLowerCase();
  }
  render() {

    if (this.state.loading) {
      return (
        <View style={{ flex: 1}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex:1}}>
        <FlatList
          data={this.state.postList}
          renderItem={({ item }) => (
            <ListItem
              title={(<LayoutRow><View><SText>{item.title}</SText></View><View style={{flexDirection:'row',justifyContent:'flex-end'}}><Text>{item.lastDate}</Text></View></LayoutRow>)}
              subtitle={(<LayoutRow><Text>{this.getCamelCase(provinces[item.province-1].label)}</Text><Text style={{color:'green'}}>{`${item.budget} TL`}</Text></LayoutRow>)}
              onPress={()=>this.props.navigation.navigate('OpenPost',{item:item})}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
    </View>   
    );
  }
}
const list = [
  {
    id:'1',
    title: 'Araba expertiz raporu',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    categorie:'araba',
    city:'Adana',
    price:100
  },
  {
    id:'2',
    title: 'Yaşlı karşılama',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam',
    username:'oguz',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    categorie:'diger',
    city:'İstanbul',
    price:200
  },
  {
    id:'3',
    title: 'Ev bakılacak',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam',
    username:'hakanp',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    categorie:'araba',
    city:'Adana',
    price:200
  },
  {
    id:'4',
    title: 'Columbia Mont Alınacak',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam',
    username:'oguz',
    date:'21.02.2019',
    lastDate:'23.02.2019',
    categorie:'diger',
    city:'İstanbul',
    price:300
  },
];
export default ListPosts;