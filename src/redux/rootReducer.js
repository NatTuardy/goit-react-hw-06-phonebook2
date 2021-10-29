import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {contactItemsReducer, contactFilterReducer} from "./contacts/contacts-reducers"

const persistConfig = {
    key: "store",
    storage
};

const rootReducer = combineReducers({
        items: contactItemsReducer,
        filter: contactFilterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;