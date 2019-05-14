import React from 'react';
import {StyleSheet,View} from 'react-native';
export class LayoutRow extends React.Component {
  render() {
    return <View {...this.props} style={[this.props.style, styles.view]}/>;
  }
}
const styles = StyleSheet.create({
  view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline'
  }
})