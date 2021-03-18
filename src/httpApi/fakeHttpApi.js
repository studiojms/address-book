import {
  _200_OK,
  _404_NOT_FOUND,
  _429_TOO_MANY_REQUESTS,
  is4xxClientError,
  is5xxServerError,
} from './httpStatus';

const mockContacts = require('./contacts.json');

const SEARCH_REQUEST_MIN_INTERVAL_IN_MILLIS = 300;

const fakeResponse = ({ status, data, maxLatencyInMillis }) => {
  const latency = Math.round(Math.random() * maxLatencyInMillis);

  return new Promise((resolve, reject) =>
    setTimeout(() =>
        (is4xxClientError(status) || is5xxServerError(status))
          ? reject({ status, data })
          : resolve({ status, data }),
      latency,
    ));
};

class IntervalCheck {
  passedLessThan = (minInterval) => {
    const now = new Date();
    const differenceInMilliseconds = Math.abs(now - this.previousNow);
    this.previousNow = now;
    return differenceInMilliseconds < minInterval;
  };
}

class FakeHttpApi {
  constructor () {
    this._contacts = mockContacts;
    this._intervalCheck = new IntervalCheck();
    this.getFirst5MatchingContacts = this.getFirst5MatchingContacts.bind(this);
    this.getContact = this.getContact.bind(this);
  }

  getFirst5MatchingContacts ({ namePart }) {
    if (this._intervalCheck.passedLessThan(SEARCH_REQUEST_MIN_INTERVAL_IN_MILLIS)) {
      return fakeResponse({
        status: _429_TOO_MANY_REQUESTS,
        maxLatencyInMillis: 100,
      });
    }

    const normalizedNamePart = (namePart || '')
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, ' ');

    const matchingContacts =
      !!normalizedNamePart
        ? this._contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedNamePart),
        )
        : [];

    return fakeResponse({
      status: _200_OK,
      maxLatencyInMillis: 250,
      data: matchingContacts.slice(0, 5),
    });
  };

  getContact ({ contactId }) {
    const contact = this._contacts.find(contact => contact.id === contactId);

    if (!contact) return fakeResponse({
      status: _404_NOT_FOUND,
    });

    return fakeResponse({
      status: _200_OK,
      maxLatencyInMillis: 500,
      data: contact,
    });
  };

}

export default FakeHttpApi;
export { SEARCH_REQUEST_MIN_INTERVAL_IN_MILLIS };
