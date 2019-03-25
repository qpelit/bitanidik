import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class FlatListDemo extends Component {
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
    //this.makeRemoteRequest();
  }
/*
  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
*/
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
      const itemData = item.subject.toUpperCase();
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
              title={`${item.subject} ${item.username}`}
              subtitle={item.city}
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
    subject: 'Araba expertiz raporu',
    username:'hakanp',
    date:'21.02.2019',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'2',
    subject: 'Yaşlı karşılama',
    username:'oguz',
    date:'21.02.2019',
    categorie:'diger',
    city:'İstanbul'
  },
  {
    id:'3',
    subject: 'Ev bakılacak',
    username:'hakanp',
    date:'21.02.2019',
    categorie:'araba',
    city:'Adana'
  },
  {
    id:'4',
    subject: 'Yaşlı karşılama',
    username:'oguz',
    date:'21.02.2019',
    categorie:'diger',
    city:'İstanbul'
  },
];
export default FlatListDemo;