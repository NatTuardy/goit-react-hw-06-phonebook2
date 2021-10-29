import { createReducer } from "@reduxjs/toolkit";
import {addToContacts, removeFromContacts, updateFilter} from './contacts-actions'

export const contactItemsReducer = createReducer([], {
    [addToContacts]: (store, {payload})=> {
        store.push(payload);
    },
    [removeFromContacts]: (store, {payload})=> {
        const idx = store.findIndex(({id}) => id === payload);
        store.splice(idx, 1);
    }
});

export const contactFilterReducer = createReducer('', {
    [updateFilter]: (store, {payload})=> {
        return payload
    }
})