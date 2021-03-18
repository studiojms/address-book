import {
  SEARCH_CONTACTS_SELECT,
  SEARCH_CONTACTS_UPDATE,
  SEARCH_CONTACTS_UPDATE_SUCCESS,
  SEARCH_CONTACTS_UPDATE_FAILURE,
} from './actions';

const initialState = {
  phrase: '',
  matchingContacts: [],
  error: false,
};

export default function searchContactsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_CONTACTS_UPDATE:
      return {
        ...state,
        phrase: payload.phrase,
        error: false,
      };

    case SEARCH_CONTACTS_UPDATE_SUCCESS:
      return {
        ...state,
        matchingContacts: payload.matchingContacts,
      };

    case SEARCH_CONTACTS_UPDATE_FAILURE:
      return {
        ...state,
        error: true,
      };

    case SEARCH_CONTACTS_SELECT:
      return {
        ...state,
        phrase: payload.matchingContact.value,
        //matchingContacts: [],
      };

    default:
      return state;
  }
};
