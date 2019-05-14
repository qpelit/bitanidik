import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";

export default class SButton extends React.Component {
  render() {
    return (
        <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10,
        ...this.props.style
        }}>

        <Button
        {...this.props}
        buttonStyle={[{backgroundColor:this.props.backgroundColor || '#529BF9'},this.props.buttonStyle, styles.button]} 
        icon={
          <MaterialIcon
            name={this.props.iconName}
            size={22}
            style={{paddingRight:2}}
            color="white"
          />
        }
        title={this.props.title}
      />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    button:{
      width:200,
      borderRadius:30,
    }
});