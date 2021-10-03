import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ShopNavigation from './src/routes/ShopNavigation';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductsReducer from './src/store/reducers/products';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

const rootReducer = combineReducers({
  products: ProductsReducer,
});

const store = createStore(rootReducer);

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

