import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

import { AntDesign } from '@expo/vector-icons';

import { useSelector } from 'react-redux';

const { width } = Dimensions.get('screen');

const DetailsScreen = (props) => {
    const image = props.route.params.image;
    const name = props.route.params.name;
    const price = props.route.params.price;
    const score = props.route.params.score;

    const availableProducts = useSelector(state => state.products.products);
    const similarPrice = availableProducts.filter(
        game => game.price <= price + 50)
    console.log(similarPrice)
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={{ uri: image }}
                style={{ width: width, height: width }}
            >
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                >
                    <AntDesign
                        name="leftcircle" size={44}
                        color={'rgba(0,0,0, 0.65)'}
                        style={{ marginTop: 30, marginLeft: 20 }}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.context}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.stock}>Em estoque</Text>
                        <Text style={styles.price}>R$ {price}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.stock, { color: Colors.red }]}>Pontos</Text>
                        <Text style={[styles.price, { color: Colors.textDark }]}>{score}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonTitle}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <Text style={[styles.name, { marginTop: 20 }]}>Games com preços similares</Text>
                <FlatList
                    data={similarPrice}
                    horizontal
                    keyExtractor={(item) => String(item.id)}
                    renderItem={(itemData) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: itemData.item.image }}
                                style={styles.image}
                            />
                            <Text style={styles.nameSimilar} numberOfLines={3}>{itemData.item.name}</Text>
                        </View>
                    )}
                />
            </View>


        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    arrow: {
        position: 'absolute',
        top: 50,
        left: 40
    },

    context: {
        padding: 20
    },

    name: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        paddingVertical: 10
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    stock: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        paddingVertical: 10,
        color: Colors.primary
    },

    price: {
        fontFamily: Fonts.bold,
        fontSize: 24,
        color: 'black'
    },

    button: {
        width: width * 0.9,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonTitle: {
        fontFamily: Fonts.bold,
        color: 'white',
        fontSize: 18
    },

    imageContainer: {
        width: 280,
        height: 280,
        marginRight: 20,
        marginTop: 20,
    },

    image: {
        flex: 1,
        marginRight: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        paddingBottom: 20,
        paddingTop: 45
    },

    nameSimilar: {
        color: Colors.textDark,
        fontFamily: Fonts.bold,
        fontSize: 24,
    },
})
