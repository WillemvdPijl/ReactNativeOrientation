import api from './utilities/api';
import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Animated, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';


import Deck from './app/components/deck/Deck';
/*

const DATA = 
[
    {id:1, name:'Robbie', age:42, uri: 'https://graph.facebook.com/100010180758876/picture?height=500', profession:'Villain'},
    {id:2, name:'Pirate Robbie', age:42, uri: 'http://i0.kym-cdn.com/entries/icons/facebook/000/000/358/YouAreAPirate.jpg', profession:'Pirate'},
    {id:3, name:'Treinuel', age:420, uri: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-0/p200x200/11695860_1004125059621380_6236011119404209496_n.jpg?oh=cd2881b623c6d88a3f1d7ed820084231&oe=5A58A32A', profession:'Train'},
    {id:4, name:'Melliw', age:20, uri: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109565_1235881033117170_4347838544336132638_n.jpg?oh=ee0eb7a80e4533b20cabd3beadacdd61&oe=5A5D8B5C', profession:'Ved'},
    {id:5, name:'Sportaflop', age:52, uri: 'http://www.cartoonito.co.uk/sites/ciuk/files/pictures-wallpapers/downloads/lazytown-wallpaper-1024x768-1.jpg', profession:'Superhero'},
    {id:6, name:'Grandma Robbie', age: 80, uri: 'http://img.sharetv.com/shows/episodes/standard/1052195.jpg', profession:'Knitting'}
    
]; */

export default class Tinder extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }


  returnData(){
    if (this.state.data.length > 0){
      return this.state.data
    }else{
      return [ {id:99, name:'Error', age: 404, uri: 'https://yt3.ggpht.com/-LlVT2pBDE_o/AAAAAAAAAAI/AAAAAAAAAAA/7tIXvJIQn50/s88-c-k-no-mo-rj-c0xffffff/photo.jpg', profession:'No cards found!'}]
    }
  }

  renderCard(item){
    return(
      <Card  key={item.id} style={{height: 400, margin: 10, marginTop: 160, borderWidth: 1,
      borderColor: 'lightgrey', overflow: 'hidden', borderRadius: 9, backgroundColor: 'white'}}
         >
         <Image source={{ uri: item.uri}} style={{height: 300, overflow: 'hidden'}}  />
      
      <Text style={{fontSize:25, marginBottom: 5, marginLeft: 5, color: 'black' }}>
          {item.name}, {item.age}
          </Text>

        <Text style={{fontSize:18, marginBottom: 10, marginLeft: 5 }}>
          {item.profession}
          </Text>

        </Card>
    );
}

renderNoMoreCards(){
  return(
    <Card style={{height: 400, margin: 10, marginTop: 160, borderWidth: 1,
      borderColor: 'lightgrey', overflow: 'hidden', borderRadius: 9}}>
      <Image source={{ uri: 'http://images6.fanpop.com/image/photos/39900000/Robbie-Rotten-lazytown-39902601-500-281.png'}} style={{height: 300, overflow: 'hidden'}}  />
      
    <Text style={{fontSize:25, marginBottom: 5, marginLeft: 5, color: 'black' }}
    >All Done</Text>
    
    <Text style={{fontSize:18, marginBottom: 10, marginLeft: 5 }}>
      There are no more Robbies left!
      </Text>
      </Card>
      
  );
}


  render(){
    api.getData().then((result) => {this.setState({
      data: result,
    })
  })
    return(
      <View style={{uri: styles.container}}>
        <Deck
          data={this.returnData()}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
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
AppRegistry.registerComponent('Tinder', () => Tinder);
