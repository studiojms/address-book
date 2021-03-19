import { searchContactsActions } from './SearchContacts';
import { contactDetailsActions } from './ContactDetails';

// TODO: Something is missing here
export const updateSearchPhrase = (phrase) => (dispatch, getState, { httpApi }) => {
  dispatch(searchContactsActions.updateSearchPhrase(phrase));

  httpApi
    .getFirst5MatchingContacts({ namePart: phrase })
    .then(({ data }) => {
      const matchingContacts = data.map((contact) => ({
        id: contact.id,
        value: contact.name,
      }));

      dispatch(searchContactsActions.updateSearchPhraseSuccess(matchingContacts));
    })
    .catch(() => {
      dispatch(searchContactsActions.updateSearchPhraseFailure());
    });
};

export const selectMatchingContact = (selectedMatchingContact) => (dispatch, getState, { httpApi, dataCache }) => {
  const getContactDetails = ({ id }) => {
    let value = dataCache.get(id);

    if (value) {
      return new Promise((resolve, reject) => resolve(value));
    } else {
      return httpApi.getContact({ contactId: id }).then(({ data }) => {
        const val = {
          id: data.id,
          name: data.name,
          phone: data.phone,
          addressLines: data.addressLines,
        };
        dataCache.set(id, val);

        return val;
      });
    }
  };

  dispatch(searchContactsActions.selectMatchingContact(selectedMatchingContact));

  // TODO: Something is missing here

  dispatch(contactDetailsActions.fetchContactDetails());

  getContactDetails({ id: selectedMatchingContact.id })
    .then((contactDetails) => {
      dispatch(contactDetailsActions.fetchContactDetailsSuccess(contactDetails));
    })
    .catch(() => {
      dispatch(contactDetailsActions.fetchContactDetailsFailure());
    });
};
