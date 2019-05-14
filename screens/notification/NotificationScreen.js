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


class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: list,
      error: null,
    };

    this.arrayholder = [];
  }


 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
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
            leftAvatar={{ source: { uri: item.picture} }}
              title={(<LayoutRow><View><SText>{item.name}</SText></View><View style={{flexDirection:'row',justifyContent:'flex-end'}}><Text>{item.date}</Text></View></LayoutRow>)}
              subtitle={(<LayoutRow><Text>{item.city}</Text><Text style={{color:'green'}}>{`${item.price} TL`}</Text></LayoutRow>)}
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
    name:'Hakan Pelit',
    picture:'https://media.licdn.com/dms/image/C5603AQGUmczzH9YTBw/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=782z7CuDMPtUzzlkghAC-WZOrTmGaRDHJomzAiz6Lw8',
    date:'21.02.2019',
    city:'İstanbul',
    price:100
  },
  {
    id:'2',
    name:'Hakan Pelit',
    picture:'https://media.licdn.com/dms/image/C5603AQGUmczzH9YTBw/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=782z7CuDMPtUzzlkghAC-WZOrTmGaRDHJomzAiz6Lw8',
    date:'21.02.2019',
    city:'İstanbul',
    price:200
  },
  {
    id:'3',
    name:'Hakan Pelit',
    picture:'https://tousled.me/modules/core/img/brand/profilePic.png',
    date:'21.02.2019',
    city:'İstanbul',
    price:100
  },
  {
    id:'4',
    name:'Hakan Pelit',
    picture:'https://tousled.me/modules/core/img/brand/profilePic.png',
    date:'21.02.2019',
    city:'İstanbul',
    price:100
  },
  {
    id:'5',
    name:'Hakan Pelit',
    picture:'https://media.licdn.com/dms/image/C5603AQGUmczzH9YTBw/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=782z7CuDMPtUzzlkghAC-WZOrTmGaRDHJomzAiz6Lw8',
    date:'21.02.2019',
    city:'Adana',
    price:400
  },
  {
    id:'6',
    name:'Hakan Pelit',
    date:'21.02.2019',
    picture:'https://tousled.me/modules/core/img/brand/profilePic.png',
    city:'İstanbul',
    price:100
  }
];
export default NotificationScreen;