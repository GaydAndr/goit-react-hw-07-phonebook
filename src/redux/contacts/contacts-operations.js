import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContact } from 'service/contactAPI';
import { ADD, DELETE, FETCH } from './contacts-types';

export const fetchContacts = createAsyncThunk(FETCH, async () => {
  const { data } = await getContacts();
  return data;
});

export const addContact = createAsyncThunk(ADD, async contact => {
  const data = await postContact(contact);
  console.log(data);
  return data;
});

export const deleteItem = createAsyncThunk(DELETE, async id => {
  const data = await deleteContact(id);
  console.log(data.id);
  return data.id;
});
