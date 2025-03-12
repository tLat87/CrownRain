import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import balanceReducer from './slices/balanceSlice';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import levelsReducer from './slices/levelSlice';
import settingsReducer from './slices/settingsSlice';
import purchasesReducer from './slices/purchasesSlice';
import selectedItemReducer from './slices/selectedItemSlice';

const rootReducer = combineReducers({
  // balance: balanceReducer,
  levels: levelsReducer,
  settings: settingsReducer,
  purchases: purchasesReducer,
  selectedItem: selectedItemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
