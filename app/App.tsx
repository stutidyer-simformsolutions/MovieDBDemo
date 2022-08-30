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
import { ApplicationStyles } from './theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store.store}>
      <SafeAreaView style={ApplicationStyles.screen}>
        <PersistGate loading={null} persistor={Store.persistor}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        </PersistGate>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
