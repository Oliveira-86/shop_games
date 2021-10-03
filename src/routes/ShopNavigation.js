import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopScreen from '../screens/ShopScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Colors';

const StackNavigator = createStackNavigator();

const ShopNavigation = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name="Characters"
                component={BottomTabNav}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Details"
                component={DetailsScreen}
            />
        </StackNavigator.Navigator>
    )
}

export default ShopNavigation;

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 55
          }
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }} >
  
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={28}
                  color={focused ? Colors.primary : '#D4D4D3'}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }} >
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={32}
                  color={focused ? Colors.primary : '#D4D4D3'}
                />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    );
  }
