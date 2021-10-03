import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import Fonts from '../styles/Fonts';

const Footer = () => {
    const availableProducts = useSelector(state => state.products.products);
    const productsHated = availableProducts.filter(prod => prod.score > 150)
   
    return (
        <>
            <Text style={styles.title}>Produtos Populares</Text>
            <FlatList
                data={productsHated}
                keyExtractor={(item) => String(item.id)}
                horizontal
                renderItem={(itemData) => (
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: itemData.item.image }}
                            style={styles.image}
                        />
                        <View style={styles.nameContainer}>
                            <Text style={styles.name} numberOfLines={3}>{itemData.item.name}</Text>
                        </View>
                        <Entypo name="star" size={34} color="#FFFB00" style={styles.star} />
                        <Entypo name="star" size={34} color="#FFFB00" style={[styles.star, { left: 40 }]} />
                        <Entypo name="star" size={34} color="#FFFB00" style={[styles.star, { left: 70 }]} />
                    </View>
                )}
            />
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    imageContainer: {
        width: 280,
        height: 280,
        marginRight: 20,
    },

    image: {
        flex: 1,
        marginRight: 20,
        borderRadius: 25,
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        paddingBottom: 20,
        paddingTop: 45
    },

    name: {
        color: '#FFF',
        fontFamily: Fonts.bold,
        fontSize: 24,
        position: 'absolute',
        bottom: 0,
        left: 15,
        width: '100%',
    },

    freteContainer: {
        backgroundColor: 'red'
    },

    star: {
        position: 'absolute',
        top: 5,
        left: 10
    }
})
