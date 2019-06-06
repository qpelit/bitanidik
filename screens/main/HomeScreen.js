import React from 'react';
import { StyleSheet, TouchableOpacity,Text, View, Button,FlatList, Dimensions } from 'react-native';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import Categories from '../../constants/Categories';

const data = Categories.categories;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ label: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 3;
export default class HomeScreen extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('ListPosts',{itemName:item.label,itemKey:item.key})}>
      <MaterialIcon name={item.iconName} color={item.color} size={36} ></MaterialIcon>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headerText}>Tanıdık Kategoriler</Text>
      <FlatList
        data={formatData(data, numColumns)}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius:3,
    shadowColor: '#e7e8ec',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: (Dimensions.get('window').width / numColumns*3/4), // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#3d3e43',
    marginTop:10,
    fontWeight: 'bold',
    fontSize:15
  },
  headerText:{
    color: '#3d3e43',
    fontWeight: 'bold',
    textAlign: 'center',
    margin:5,
    fontSize:18
  }
});