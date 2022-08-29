import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { homeReducer } from './Home/HomeSlice';

const persistConfig = {
  key: '@outerbase',
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
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export default { store, persistor };
