import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { encryptTransform } from 'redux-persist-transform-encrypt';

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from './actions/userActions'

const reducers = combineReducers({
  user: userReducer
})


const persistConfig = {
  key: 'root', 
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

