import { fetchContactDetails, fetchContactDetailsFailure, fetchContactDetailsSuccess } from './actions';
import contactDetailsReducer from './reducer';

describe('Contact Details reducer', () => {
  it('fetched Contact Details', () => {
    let state = contactDetailsReducer(undefined, fetchContactDetails());
    expect(state.data).toEqual(null);
    state = contactDetailsReducer(state, fetchContactDetailsSuccess('any contact details'));
    expect(state.data).toEqual('any contact details');
  });

  it('fetch failure', () => {
    let state = contactDetailsReducer(undefined, fetchContactDetails());
    expect(state.error).toEqual(false);
    state = contactDetailsReducer(state, fetchContactDetailsFailure());
    expect(state.error).toEqual(true);
  });
});
