import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { homeReducer } from './Home';

const persistConfig = {
  key: '@moviewDB',
  version: 1,
  storage: AsyncStorage,
  whitelist: [], // Whitelist (Save Specific Reducers)
  blacklist: [], // Blacklist (Don't Save Specific Reducers)
};

const rootReducer = combineReducers({
  home: homeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
