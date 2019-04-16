import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
export class SText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, styles.text]} />;
  }
}
const styles = StyleSheet.create({
  text:{
      fontSize:16,
      padding:6
  }
})