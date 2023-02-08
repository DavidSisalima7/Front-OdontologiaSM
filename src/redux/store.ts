import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
  // para cosas que no se guarden: (blacklist)
};
const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    )
  },
  middleware: (defaultModdleware) =>
    defaultModdleware({
      serializableCheck: false
    })
});

// Para saber el estado del objeto (tipo de retorno)
export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

// para exportar la store
export const persistor = persistStore(store);

export default store;
