import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {SText} from '../components/SText'
import MaterialIcon from "react-native-vector-icons/FontAwesome5";

export default class UserInformationScreen extends React.Component {

  constructor(props) {
    super(props);
}
render() {
    return (
        <ScrollView>
        <View style={styles.container}>
                
                  <Text style={styles.title}>
                  <MaterialIcon
                    name="address-card"
                    size={20}
                  />{" "}Kişisel Bilgiler</Text>  
                <SText>26, İstanbul</SText>   

                <Text style={styles.title}>
                <MaterialIcon
                    name="graduation-cap"
                    size={20}
                  />{" "}Eğitim Bilgileri</Text>   
                <SText>Lisans Mezunu</SText>   

                <Text style={styles.title}>
                <MaterialIcon
                    name="building"
                    size={20}
                  />{" "}İş Durumu</Text>   
                <SText>Çalışıyor</SText>   
                <Text style={styles.title}>
                <MaterialIcon
                    name="info-circle"
                    size={20}
                  />{" "}Ön Yazı</Text>   
                <SText>İstanbul'da ki her işinizle ilgilenilir.</SText>   
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    justifyContent:"space-around",
    padding:20,
    alignItems:"flex-start"
    },
    title:{
      color:"#808080",
      fontSize:22,
      paddingVertical:4,
    },
    text:{
      fontWeight:'bold'
    }
  })


