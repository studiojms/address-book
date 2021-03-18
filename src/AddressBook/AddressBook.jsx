import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchPhrase, selectMatchingContact } from './actions';
import SearchContacts from './SearchContacts';
import ContactDetails from './ContactDetails';

const AddressBook = () => {
  const dispatch = useDispatch();
  const contactDetails = useSelector(state => state.addressBook.contactDetails);
  const search = useSelector(state => state.addressBook.search);

  const onChangeSearchPhrase = (phrase) => dispatch(updateSearchPhrase(phrase));

  const onSelectContact = (contact) => dispatch(selectMatchingContact(contact));

  return (
    <>
      <h1>Address Book</h1>
      <SearchContacts
        matchingContacts={search.matchingContacts}
        hasFailedToSearch={search.error}
        searchPhrase={search.phrase}
        onChangeSearchPhrase={onChangeSearchPhrase}
        onSelectContact={onSelectContact}
      />
      <ContactDetails data={contactDetails.data} hasFailedToFetch={contactDetails.error} />
    </>
  );
};

export default AddressBook;
