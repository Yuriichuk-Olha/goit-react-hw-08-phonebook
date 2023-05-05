import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    PERSIST,
    PAUSE,
    REHYDRATE,
    FLUSH,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { contactsReducer } from './contacts/slice';
import { authReducer } from 'redux/auth/auth-slice';

const persistConfig = {
    key:'auth',
    // key: 'CONTACTS','filter',
    storage,
    whitelist:['token']
}

// const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer:{
        auth: persistReducer(persistConfig, authReducer),
        contacts:contactsReducer,
    }, 
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)
