import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {SText} from '../../components/SText'
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import { LayoutRow } from '../../components/view/LayoutRow';

export default class UserInfoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.userInfos=this.props.navigation?this.props.navigation.getParam('userInfos'):null;
}
render() {
    return (
        <ScrollView>
        <View style={styles.container}>

                <LayoutRow style={styles.row}>
                <Text style={styles.title}>
                  <MaterialIcon
                    name="address-card"
                    size={16}
                  />{" "}Kişisel Bilgiler</Text>  
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}><SText>26, İstanbul</SText></View>
                </LayoutRow>
                 
                <LayoutRow style={styles.row}>
                <Text style={styles.title}>
                <MaterialIcon
                    name="graduation-cap"
                    size={16}
                  />{" "}Eğitim Bilgileri</Text>   
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}><SText >{this.userInfos && this.userInfos.education}</SText></View>
                </LayoutRow>

                <LayoutRow style={styles.row}>
                <Text style={styles.title}>
                <MaterialIcon
                    name="building"
                    size={16}
                  />{" "}İş Durumu</Text>   
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}><SText>Çalışıyor</SText></View>
                </LayoutRow>
 
                <Text style={styles.title}>
                <MaterialIcon
                    name="info-circle"
                    size={16}
                  />{" "}Ön Yazı</Text>   
                <SText paddingTrue={true}>İstanbul'da ki her işinizle ilgilenilir.</SText>   
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    padding:16,
    },
    title:{
      color:"#808080",
      fontSize:18,
    },
    text:{
      fontWeight:'bold'
    },
    row:{
      paddingBottom:10,
      alignItems:'baseline'
    }
  })


