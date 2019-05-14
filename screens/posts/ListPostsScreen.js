import React, { Component } from 'react';
import { View, Text, FlatList,Button, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { SText } from '../../components/SText';
import { LayoutRow } from '../../components/view/LayoutRow';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";


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

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: list,
      error: null,
    };

    this.arrayholder = [];
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
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={(<LayoutRow><View><SText>{item.title}</SText></View><View style={{flexDirection:'row',justifyContent:'flex-end'}}><Text>{item.date}</Text></View></LayoutRow>)}
              subtitle={(<LayoutRow><Text>{item.city}</Text><Text style={{color:'green'}}>{`${item.price} TL`}</Text></LayoutRow>)}
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