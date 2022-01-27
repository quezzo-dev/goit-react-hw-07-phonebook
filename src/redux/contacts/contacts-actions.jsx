// import { ADD_CONTACT, DELETE_CONTACT } from "../action-types";
import { createAction } from "@reduxjs/toolkit";
// import shortid from "shortid";

// export const addContact = createAction(ADD_CONTACT, (name, number)=>({
//     payload: {name,number, id: shortid.generate()},
// }))
// export const deleteContact = createAction(DELETE_CONTACT)
export const removeContact = createAction("contacts/removeContact");