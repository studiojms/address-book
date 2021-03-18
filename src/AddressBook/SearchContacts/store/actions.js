export const SEARCH_CONTACTS_UPDATE = 'SEARCH_CONTACTS/UPDATE';
export const SEARCH_CONTACTS_UPDATE_SUCCESS = 'SEARCH_CONTACTS/UPDATE_SUCCESS';
export const SEARCH_CONTACTS_UPDATE_FAILURE = 'SEARCH_CONTACTS/UPDATE_FAILURE';
export const SEARCH_CONTACTS_SELECT = 'SEARCH_CONTACTS/SELECT';

export const updateSearchPhrase = (phrase) => ({
  type: SEARCH_CONTACTS_UPDATE,
  payload: {
    phrase,
  }
});

export const updateSearchPhraseSuccess = (matchingContacts) => ({
  type: SEARCH_CONTACTS_UPDATE_SUCCESS,
  payload: {
    matchingContacts,
  },
});

export const updateSearchPhraseFailure = () => ({
  type: SEARCH_CONTACTS_UPDATE_FAILURE,
});

// TODO: Something is wrong here
export const selectMatchingContact = (matchingContact) => ({
  type: SEARCH_CONTACTS_SELECT,
  payload: {
    matchingContact: {},
  },
});
