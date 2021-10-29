import { createAction } from "@reduxjs/toolkit";

export const addToContacts = createAction("contacts/add");
export const removeFromContacts = createAction("contacts/remove");
export const updateFilter = createAction("filter/update")