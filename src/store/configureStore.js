import { createStore } from "redux";
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/userReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = persistCombineReducers(persistConfig, {
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
