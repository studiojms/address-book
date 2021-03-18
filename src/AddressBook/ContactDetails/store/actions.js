export const CONTACT_DETAILS_FETCH = 'CONTACT_DETAILS/FETCH';
export const CONTACT_DETAILS_FETCH_SUCCESS = 'CONTACT_DETAILS/FETCH_SUCCESS';
export const CONTACT_DETAILS_FETCH_FAILURE = 'CONTACT_DETAILS/FETCH_FAILURE';

export const fetchContactDetails = () => ({
  type: CONTACT_DETAILS_FETCH,
});

export const fetchContactDetailsSuccess = (contactDetails) => ({
  type: CONTACT_DETAILS_FETCH_SUCCESS,
  payload: {
    contactDetails,
  },
});

export const fetchContactDetailsFailure = () => ({
  type: CONTACT_DETAILS_FETCH_FAILURE,
});
