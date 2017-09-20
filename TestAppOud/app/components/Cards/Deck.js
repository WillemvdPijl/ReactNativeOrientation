import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Animated} from 'react-native';

class Deck extends Component{
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