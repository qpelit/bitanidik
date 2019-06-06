import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {SText} from '../../components/SText'
import MaterialIcon from "react-native-vector-icons/FontAwesome5";
import { LayoutRow } from '../../components/view/LayoutRow';
import { connect } from 'react-redux';
import Education from '../../constants/userInfo/Education';
import Work from '../../constants/userInfo/Work';
import Provinces from '../../constants/Provinces';
import moment from 'moment';

const education = Education.education;
const provinces = Provinces.provinces;
const work = Work.work;

class UserInfoScreen extends React.Component {
  constructor(props) {
    super(props);
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
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <SText>{this.props.userInfo.birthDay && moment().diff(moment(this.props.userInfo.birthDay, 'DD-MM-YYYY'), 'years') || '-'} </SText>
        <SText>{this.props.userInfo.province &&', '+provinces[this.props.userInfo.province-1].label || '-'}</SText>
        </View>
        </LayoutRow>
        <LayoutRow style={styles.row}>
        <Text style={styles.title}>
        <MaterialIcon
            name="graduation-cap"
            size={16}
          />{" "}Eğitim Bilgileri</Text>   
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <SText>{this.props.userInfo.education && education[this.props.userInfo.education].label || '-'}</SText>
        </View>
        </LayoutRow>

        <LayoutRow style={styles.row}>
        <Text style={styles.title}>
        <MaterialIcon
            name="building"
            size={16}
          />{" "}İş Durumu</Text>   
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <SText>{this.props.userInfo.work && work[this.props.userInfo.work].label || '-'}</SText>
        </View>
        </LayoutRow>

        <Text style={styles.title}>
        <MaterialIcon
            name="info-circle"
            size={16}
          />{" "}Ön Yazı</Text>   
        <SText paddingTrue={true}>{this.props.userInfo.quickInfo && this.props.userInfo.quickInfo || '-'}</SText>   
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


  const mapStateToProps = state => {
    return {
      userInfo: state.userInfo.userInfo
    }
  }
  
  
  export default connect(mapStateToProps)(UserInfoScreen)

  