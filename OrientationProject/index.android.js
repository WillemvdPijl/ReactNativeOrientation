import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class orientationproject extends Component{
  render(){
    return(
      <View>
        <Text>Badabiem badaboom!</Text>
        </View>
    );
  }
}

AppRegistry.registerComponent('orientationproject', () => orientationproject);
