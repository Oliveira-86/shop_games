import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Fonts from '../styles/Fonts';

const { width, height } = Dimensions.get('screen');

const GameCard = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <View style={styles.column}>
                <Text style={styles.name} numberOfLines={2}>{props.name}</Text>
                <Text style={styles.price}>R$ {props.price}</Text>
            </View>
        </View>
    );
};

export default GameCard;

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        flexDirection: 'row',
        marginVertical: 10,
    },

    image: {
        height: 135,
        width: 135,
        borderRadius: 15
    },

    column: {
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        width: width * 0.7
    },

    name: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        width: '75%'
    },

    scorePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    price: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        color: '#ff1a1a'
    }
});