import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware, compose} from 'redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from '.';
import {RootReducer} from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const enhancer = compose(applyMiddleware(thunk, createLogger({})));
const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: ['verifyOtpReducer'],
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
