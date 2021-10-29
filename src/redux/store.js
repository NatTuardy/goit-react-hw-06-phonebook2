import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./rootReducer";


export const store = configureStore({
    reducer: {
        contacts: persistedReducer
    },
});

export const persistor = persistStore(store);