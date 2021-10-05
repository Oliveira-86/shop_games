import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import GameCard from '../components/GameCard';
import Footer from '../components/Footer';

import { useSelector } from 'react-redux';
import Fonts from '../styles/Fonts';
import Colors from '../styles/Colors';

const { width } = Dimensions.get('screen');

const logo = 'https://store.akamai.steamstatic.com/public/images/applications/store/coin_single.png?v=ce7d5bfe558f07897fe3b21eabb6fc08'

const ShopScreen = () => {
    const availableProducts = useSelector(state => state.products.products);
    const [list, setList] = useState(availableProducts);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {

        if (searchText === '') {
            setList(availableProducts)
        } else {
            setList(
                availableProducts.filter(
                    item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            )
        }
    }, [searchText]);

    const handleNameClick = () => {
        let newList = [...availableProducts]

        newList.sort(
            (a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0
        )

        setList(newList);
    }
    const handlePriceClick = () => {
        let newList = [...availableProducts]

        newList.sort(
            (a, b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0
        )

        setList(newList);
    }
    const handleScoreClick = () => {
        let newList = [...availableProducts]

        newList.sort(
            (a, b) => (a.score > b.score) ? 1 : (b.score > a.score) ? -1 : 0
        )

        setList(newList);
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquise um jogo"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    placeholderTextColor="#888"
                />
                <TouchableOpacity onPress={() => handleNameClick()}>
                    <FontAwesome name="sort-alpha-asc" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePriceClick()}>
                    <FontAwesome5 name="search-dollar" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleScoreClick()}>
                    <MaterialIcons name="import-export" size={26} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>

                <FlatList
                    data={list}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={(
                        <View style={{ marginTop: 20 }}>
                            <View style={styles.logoContainer}>
                                <Image
                                    source={{ uri: logo }}
                                    style={{ width: 100, height: 100 }}
                                />
                                <Text style={[styles.title, { marginLeft: 10, color: Colors.primary }]}>Shop Games</Text>
                            </View>
                            <Text style={styles.title}>Jogos</Text>
                        </View>
                    )}
                    renderItem={(itemData) => <GameCard
                        name={itemData.item.name}
                        price={itemData.item.price}
                        imageUrl={itemData.item.image}
                        score={itemData.item.score}
                    />}
                    ListFooterComponent={<Footer />}
                />

            </View>
        </>
    );
};


export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },

    inputContainer: {
        padding: 15,
        paddingTop: 50,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        height: 35,
        width: width * 0.62,
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 8,
        color: 'black'
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 38,
        paddingVertical: 30
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
