import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Animated, StyleSheet} from 'react-native';

import Deck from './app/components/Poging3/Deck';


const fbDATA = 
[
    {id:1, name:'Robbie', age:42, profilePic:'https://graph.facebook.com/100010180758876/picture?height=500', profession:'Villain'},
    {id:2, name:'Manuel', age:20, profilePic:'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/11223796_1099444626750217_5734865048080103005_n.jpg?oh=b22815e53f4a2cee526b328d8c3f3ba7&oe=5A3A8807', profession:'IT support'},
    {id:3, name:'Treinuel', age:420, profilePic:'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-0/p200x200/11695860_1004125059621380_6236011119404209496_n.jpg?oh=cd2881b623c6d88a3f1d7ed820084231&oe=5A58A32A', profession:'Train'},
    {id:4, name:'Melliw', age:20, profilePic:'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109565_1235881033117170_4347838544336132638_n.jpg?oh=ee0eb7a80e4533b20cabd3beadacdd61&oe=5A5D8B5C', profession:'Ved'},
    {id:5, name:'Willem', age:20, profilePic:'https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/21199563_1666203753413504_439766361926865594_o.jpg?oh=05b10e68052fdcf931e362c8a26a01e8&oe=5A5FAF4F', profession:'Dev'},
    
];

export default class TestApp extends Component{

  renderCard(item){
    return(
        <Text>item.name</Text>
    )
  }


  render(){
    return(
      <View style={styles.container}>
        <Deck
          data={fbDATA}
          renderCard={this.renderCard}
        />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  }
})

AppRegistry.registerComponent('TestApp', () => TestApp);
