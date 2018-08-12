import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import FlashMessage from "react-native-flash-message";
//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers'
//Redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas';

import AppContainer from './src/appNavigation/AppContainer'
import { REHYDRATE, PURGE, persistCombineReducers, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  //sẽ persist
  // whitelist: [                    
  //   'accountReducer'
  // ],
  //ko persist
  blacklist: [
    // 'film'
  ]
}

// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer, undefined, compose(
  applyMiddleware(sagaMiddleware),
  // autoRehydrate()
));
let persistor = persistStore(store)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
          <FlashMessage
            position="top"
            animated={true}
            duration={5000}
            icon='warning'
          />
        </PersistGate>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);