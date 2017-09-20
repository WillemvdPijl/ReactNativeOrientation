import React, { Component } from 'react';
import {AppRegistry, Text, View, Image, Animated, StyleSheet} from 'react-native';

export default class Deck extends Component{
constructor(){
    super();
}
    renderCards(){
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        });
    }

    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

AppRegistry.registerComponent('Deck', () => Deck);