import * as server from './contacts-api'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
      const contacts = await server.fetchContacts();
      return contacts;
    }
  );
  
  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }) => {
      const contacts = await server.addContact({ name, number });
      return contacts;
    }
  );
  
  export const removeContact = createAsyncThunk(
    "contacts/removeContact",
    async (id) => {
      await server.deleteContact(id);
      return id;
    }
  );