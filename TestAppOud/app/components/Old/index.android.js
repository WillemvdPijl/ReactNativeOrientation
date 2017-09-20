import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Animated} from 'react-native';

import Component1 from './app/components/Cards/CardsImport';


export default class testapp extends Component{
  



  render(){
    return(
      <view>
        <CardsImport
        />
        </view>
    );
  }
}

AppRegistry.registerComponent('testapp', () => testapp);
