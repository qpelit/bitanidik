import React, { Component } from "react";
import {StyleSheet,View} from 'react-native';
import { Container, Header, Content, Text,Card, CardItem, Body } from "native-base";
import { LayoutRow } from "../../components/view/LayoutRow";
import { SText } from "../../components/SText";
import  Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import Provinces from '../../constants/Provinces';
import Categories from '../../constants/Categories';
const provinces = Provinces.provinces;
const categories = Categories.categories;
export default class OpenPost extends Component {


  constructor(props) {
    super(props);
    this.post=this.props.navigation.getParam('item');
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView >
          <Card >
            <CardItem header bordered>
              <Text style={{color:'#D64040'}}>{this.post.title}</Text>
            </CardItem>
            <CardItem style={styles.row}>
            <Text>{this.post.username}</Text>
            <View style={styles.rightRow}><SText >{this.post.date}</SText></View>
            </CardItem>
            <CardItem bordered style={{paddingBottom:30}}>
              <Body >
                <Text>{this.post.content}</Text>
              </Body>
            </CardItem>
            <CardItem  bordered style={styles.row}>
            <Text>Son Tarih</Text>
            <View style={styles.rightRow}><SText >{this.post.lastDate}</SText></View>
             </CardItem>
             <CardItem bordered style={styles.row}>
            <Text>İl</Text>
            <View style={styles.rightRow}><SText >{provinces[this.post.province-1].label}</SText></View>
            </CardItem>
            <CardItem bordered  style={styles.row}>
            <Text>Kategori</Text>
            <View style={styles.rightRow}><SText >{categories[this.post.category].label}</SText></View>
            </CardItem>
            <CardItem bordered style={styles.row}>
            <Text>Fiyat</Text>
            <View style={styles.rightRow}><SText >{this.post.budget} TL</SText></View>
            </CardItem>
          </Card>
        </ScrollView>
        <Button
              iconName="smile"
              title='Teklif Ver'
              backgroundColor='#2bca54'
              style={{paddingTop:5,
              }}
              onPress={() => this.props.navigation.navigate('BidAction',{post:this.post})} 
                />
      </View>

    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline'
  },
  rightRow:{
    flexDirection:'row',
    justifyContent:'flex-end'
  }
});
