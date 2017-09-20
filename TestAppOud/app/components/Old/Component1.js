import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Animated} from 'react-native';
import Component2 from './app/components/Component1/Component2';

export default class Component1 extends Component{
constructor(){
    super();
}

  renderCards(){
      return this.props.data.map(item=>{
          return this.props.renderCard(item);
      })
  }

    render(){
      return(
        <View >
       {this.renderCards()}
    </View>
      );
    }
}



AppRegistry.registerComponent('Component1', () => Component1);
