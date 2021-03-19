import { CONTACT_DETAILS_FETCH, CONTACT_DETAILS_FETCH_SUCCESS, CONTACT_DETAILS_FETCH_FAILURE } from './actions';

const initialState = {
  data: null,
  error: false,
};

export default function contactDetailsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // TODO: Something is missing here
    case CONTACT_DETAILS_FETCH:
      return {
        ...state,
        error: false,
      };

    case CONTACT_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.contactDetails,
      };

    case CONTACT_DETAILS_FETCH_FAILURE:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};
