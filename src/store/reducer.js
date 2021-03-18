import { combineReducers } from 'redux';
import { addressBookReducer } from '../AddressBook';

export default combineReducers({
  addressBook: addressBookReducer,
});
