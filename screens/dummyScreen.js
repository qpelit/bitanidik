import React from 'react'
import { StyleSheet, View } from 'react-native';

export default class dummyScreen extends React.Component {
  state = { x: null, y: null}
  constructor(props){
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const { x } = this.state
    const { y } = this.state

    return (
      <View style={styles.container}>
        









      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

