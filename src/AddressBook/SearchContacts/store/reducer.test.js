import {
  selectMatchingContact,
  updateSearchPhrase,
  updateSearchPhraseFailure,
  updateSearchPhraseSuccess,
} from './actions';
import searchContactsReducer from './reducer';

describe('Search reducer', () => {

  it('Search Phrase', () => {
    let state = searchContactsReducer(undefined, updateSearchPhrase('oh'));
    expect(state.phrase).toEqual('oh');
    state = searchContactsReducer(state, updateSearchPhraseSuccess([ 'any matching contact' ]));
    expect(state.phrase).toEqual('oh');
    state = searchContactsReducer(state, selectMatchingContact({ value: 'John' }));
    expect(state.phrase).toEqual('John');
  });

  it('Matching Contacts', () => {
    let state = searchContactsReducer(undefined, updateSearchPhrase('oh'));
    expect(state.matchingContacts).toEqual([]);
    state = searchContactsReducer(state, updateSearchPhraseSuccess([{ value: 'John' }]));
    expect(state.matchingContacts).toEqual([{ value: 'John' }]);
    state = searchContactsReducer(state, selectMatchingContact({ value: 'John' }));
    expect(state.matchingContacts).toEqual([]);
  });

  it('search failure', () => {
    let state = searchContactsReducer(undefined, updateSearchPhrase('any phrase'));
    expect(state.error).toEqual(false);
    state = searchContactsReducer(state, updateSearchPhraseFailure());
    expect(state.error).toEqual(true);
  });
});
