import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import GameCard from '../components/GameCard';
import Footer from '../components/Footer';

import { useSelector } from 'react-redux';
import Fonts from '../styles/Fonts';
import Colors from '../styles/Colors';

const logo = 'https://store.akamai.steamstatic.com/public/images/applications/store/coin_single.png?v=ce7d5bfe558f07897fe3b21eabb6fc08'

const ShopScreen = () => {

    const availableProducts = useSelector(state => state.products.products);

    return (
        <View style={styles.container}>

            <FlatList
                data={availableProducts}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={{ marginTop: 50 }}>
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
    );
};

export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
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
