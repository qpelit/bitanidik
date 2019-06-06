import React from 'react';
import {StyleSheet,
  Platform,
  View } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Categories from '../../constants/Categories';
import Provinces from '../../constants/Provinces';
import {InputPicker} from '../../components/input/InputPicker';
import {InputDatePicker} from '../../components/input/InputDatePicker';
import {InputText} from '../../components/input/InputText';
import Button from '../../components/Button';
import * as firebase from 'firebase'


const categories = Categories.categories;
const provinces = Provinces.provinces;

export default class BidActionScreen extends React.Component {
  constructor(props){
    super(props);
    this.inputRefs = {
      province: null,
      textArea:null
    };
    this.state = {
      newBidData:{
      bidContent:null,
      userId:firebase.auth().currentUser.uid,
      bidPrice:'',
      postId:this.props.navigation.getParam("post").id,
      postTitle:this.props.navigation.getParam("post").title
      }
      };
  }
  sendBidToDB = ()=>{
    const { goBack } = this.props.navigation;
    const {newBidData} = this.state;
    
    firebase.database().ref('/bids/').push({...newBidData}).
    then(goBack()).catch();
  };
  render() {
    const placeholder = {
      value: null,
      color: '#9EA0A4',
    };
    return (
      <View style={styles.container}>
      <KeyboardAwareScrollView  
      enableOnAndroid
      enableAutomaticScroll>
      <View>
    <InputText
      placeholder="Teklif içeriği..."
      label='Teklifine Açıklama Ekle'
      numberOfLines={10}
      value={this.state.newBidData.bidContent}
      onChangeText={value => {
        this.setState(
          state => (state.newBidData.bidContent = value, state)
        );
      }}
      multiline={true}
      style={{height: 150,justifyContent: "flex-start"}}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
    <InputText
      placeholder="Miktar giriniz..."
      label='Talep ettiğim ücret'
      keyboardType='numeric'
      numberOfLines={1}
      value={this.state.newBidData.bidPrice}
      onChangeText={value => {
        this.setState(
          state => (state.newBidData.bidPrice = value, state)
        );
      }}
      multiline={false}
       ref={el => {
        this.inputRefs.textArea = el;
      }}
    />
         <Button
         iconName="laugh-beam"
         title='Teklifi Gönder!'
         onPress={()=>this.sendBidToDB()}
           />
  </View>
      </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  }
});
