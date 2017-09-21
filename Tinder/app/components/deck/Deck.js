import React, { Component } from 'react';
import {AppRegistry, Text, View, Image, Animated, StyleSheet, PanResponder, Dimensions} from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWYPE_THRESHOLD = 0.50 * SCREEN_WIDTH;
const SWYPE_OUT_DURATION = 250;

export default class Deck extends Component{

    static defaultProps = {
        onSwypeRight: () => {},
        onSwypeLeft: () => {}
    }


    constructor(props){
        super(props);

        const position = new Animated.ValueXY(); 
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({x: gesture.dx, y: gesture.dy})
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWYPE_THRESHOLD){
                    this.forceSwype('right');
                } else if (gesture.dx < -SWYPE_THRESHOLD) {
                    this.forceSwype('left')
                }else {
                this.resetPosition();
                }
            }
    });

    this.state = { panResponder, position, index: 0 };

}
    forceSwype(direction){
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position,{
            toValue: { x: (x * 1.5), y: 0},
            duration: SWYPE_OUT_DURATION
        }).start(() => this.onSwypeComplete(direction));
    }

    onSwypeComplete(direction){
        const { onSwypeLeft, onSwypeRight, data } = this.props;
        const item = data[this.state.index];

        direction === 'right' ? onSwypeRight(item) : onSwypeLeft(item);
        this.state.position.setValue({x: 0, y:0});
        this.setState({index: this.state.index + 1 });

    }

    resetPosition(){
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0}
        }).start();
    }

    getCardStyle(){
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-60deg', '0deg', '60deg']
        });

        return{
        ...position.getLayout(),
        transform: [{ rotate }]
        };
 }

    renderCards(){

        if(this.state.index >= this.props.data.length){
            return this.props.renderNoMoreCards();
        }



        return this.props.data.map((item, i) => {

            if (i < this.state.index) { return null; }

            if (i === this.state.index) {
                 return (
                     <Animated.View
                     key={item.id}
                     style={[this.getCardStyle(), styles.cardStyle]}
                    {...this.state.panResponder.panHandlers}
                     >
                         {this.props.renderCard(item)}
                    </Animated.View>
                 )
            }

            return (
            <View key={item.id} style={styles.cardStyle}>
                {this.props.renderCard(item)}
                </View>
                );
        }).reverse();
    }

    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

const styles ={
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH
    }
}

AppRegistry.registerComponent('Deck', () => Deck);