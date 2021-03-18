import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import PhraseInput from './PhraseInput';
import MatchingContacts from './MatchingContacts';
import './SearchContacts.css';

const propTypes = {
  matchingContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onSelectContact: PropTypes.func.isRequired,
  hasFailedToSearch: PropTypes.bool.isRequired,
};

const SearchFailure = () => (
  <div className="search-contacts__search-failure">
    Failed to fetch Matching Contacts!
  </div>
);

const SearchContacts = ({
  matchingContacts,
  onSelectContact,
  searchPhrase,
  onChangeSearchPhrase,
  hasFailedToSearch
}) => (
  <section className="search-contacts">
    <Downshift
      itemToString={item => (item ? item.value : '')}
      onChange={item => onSelectContact(item || '')}
    >
      {({
          isOpen,
          highlightedIndex,
          getInputProps,
          getMenuProps,
          getItemProps,
        }) => (
        <div>
          <PhraseInput
            /* TODO: Something is missing here */
            phrase={searchPhrase}
            onPhraseChange={onChangeSearchPhrase}
            downshiftGetInputProps={getInputProps}
          />
          {isOpen && (
            <MatchingContacts
              data={matchingContacts}
              highlightedIndex={highlightedIndex}
              downshiftGetMenuProps={getMenuProps}
              downshiftGetItemProps={getItemProps}
            />
          )}
        </div>
      )}
    </Downshift>
    {hasFailedToSearch && <SearchFailure />}
  </section>
);

SearchContacts.propTypes = propTypes;

export default SearchContacts;
