import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';

const fbImage = 'https://graph.facebook.com/100010180758876/picture?height=500'

export default class Component1 extends Component{
constructor(){
    super();
}

  render(){
    return(
      <View style={styles.card}> 
          <Image
            style={{flex: 1}}
            source={{uri: fbImage}}
            />
            <View style={{margin:14}}>
                <Text style={{fontSize:23}}>Robbie, 42</Text>
                <Text  style={{fontSize:20, color:'darkgrey'}}>Villain</Text>
            </View>
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

AppRegistry.registerComponent('Component1', () => Component1);
