import { combineReducers } from 'redux';
import { searchContactsReducer } from './SearchContacts';
import { contactDetailsReducer } from './ContactDetails';

export const addressBookReducer = combineReducers({
  search: searchContactsReducer,
  contactDetails: contactDetailsReducer,
});
