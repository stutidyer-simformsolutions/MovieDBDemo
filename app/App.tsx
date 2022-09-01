/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './navigation';
import { Store } from './redux';
import { ApplicationStyles, Color } from './theme';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store.store}>
      <NativeBaseProvider>
        <SafeAreaView style={ApplicationStyles.screen}>
          <PersistGate loading={null} persistor={Store.persistor}>
            <StatusBar
              backgroundColor={Color.darkBlue}
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppNavigation />
          </PersistGate>
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
