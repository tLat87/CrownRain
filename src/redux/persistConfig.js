import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['balance', 'levels', 'settings', 'purchases', 'selectedItem'],
};
